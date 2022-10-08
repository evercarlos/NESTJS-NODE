import { MongooseModule} from '@nestjs/mongoose'
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from './schema/user.schema';
import { JwtModule } from '@nestjs/jwt'
import { jwtConstant } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, // class User de schema
        schema: UserSchema,
      },
    ]),
    JwtModule.register({
      secret: jwtConstant.secret,// process.env.JWT_SECRET
      signOptions: { expiresIn: '2h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]// decimos a los proveedores qu hagan uso de jwt
})
export class AuthModule {}
