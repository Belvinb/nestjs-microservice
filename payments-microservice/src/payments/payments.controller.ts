import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreatePaymentDto } from './dtos/CreatePayment.dto';

@Controller()
export class PaymentsController {
  @EventPattern('createPayment')
  createPayment(@Payload() data: CreatePaymentDto) {
    console.log(data, ' from payments microservice');
  }
}
