import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  constructor(@Inject('NATS_SERVICE') private natsClient: ClientProxy) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.natsClient.send({ cmd: 'createUser' }, createUserDto);
  }
}
