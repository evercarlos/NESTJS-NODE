import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtAuthService: JwtService
  ){}
  // jalar datos de la bd
  async register(userObject: RegisterAuthDto) {
    const { password } = userObject; //TODO 123456
    const plainToHash = await hash(password, 10)
    userObject = {...userObject, password: plainToHash}
    return this.userModel.create(userObject)
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.userModel.findOne({email}); // email:email
    if(!findUser) throw new HttpException('USER_NOT_FUND', 404);
    
    const checkPassword = await compare(password, findUser.password)
    
    if(!checkPassword) throw new HttpException('PASSWORD INCORRECTO', 403);

    const payload = {id:findUser._id, name: findUser.name}
    const token = await this.jwtAuthService.sign(payload);

    const data = {
      user: findUser,
      token,
    }

    return data;

  }
}
