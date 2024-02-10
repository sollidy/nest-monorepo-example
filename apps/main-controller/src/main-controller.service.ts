import { Injectable } from '@nestjs/common';

@Injectable()
export class MainControllerService {
  getHello(): string {
    return 'Hello World!';
  }
}
