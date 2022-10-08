import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers():string[]{
    // Aqui podemos inyectar los modelos de mysql, postgrees, mongo
    return [
      "juan",
      "pedro",
      "Maros",
    ]
  }
}
