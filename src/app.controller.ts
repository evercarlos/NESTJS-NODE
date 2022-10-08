import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()// decorador
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // decorador
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): string[] {
    return this.appService.getUsers();
  }

}
