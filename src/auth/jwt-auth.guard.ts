import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') { // AuthGuard: Esto implmenta la estrategia jwt(JwtStrategy)
    
}
