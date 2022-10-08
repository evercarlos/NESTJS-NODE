import { MongooseModule} from '@nestjs/mongoose'
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
   /*MongooseModule.forFeature([
      {
        name: User.name, // class Items
        schema: UserSchema,
      },
    ])*/
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
