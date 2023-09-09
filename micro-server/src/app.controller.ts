import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @MessagePattern('user-topic')
  getHello(@Payload() message) {
    console.log(message);
    let id = +message.userid; // Convert the userid to a number
    return this.appService.findUserByUserId(id);
  }
}
