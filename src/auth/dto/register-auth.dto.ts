import { PartialType } from '@nestjs/swagger';
import { IsEmail, MaxLength, MinLength, IsNotEmpty } from 'class-validator'
import { LoginAuthDto } from './login-auth.dto';

export class RegisterAuthDto extends PartialType(LoginAuthDto) {// extends: Significa qu usaremos las porpiedades de LoginAuthDto

    @IsNotEmpty()
    name:string;
}