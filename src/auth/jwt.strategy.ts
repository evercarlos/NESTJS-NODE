import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common'
import { jwtConstant } from './jwt.constants';

//se copio de la pagina: https://docs.nestjs.com/security/authentication#implementing-passport-jwt
// ESTRATEGIA
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // extrahe del encabezado el bearer token
        ignoreExpiration: false,
        secretOrKey: jwtConstant.secret,
    });
    }

    async validate(payload: any) {
    return { userId: payload.id, username: payload.name };
  }
}
