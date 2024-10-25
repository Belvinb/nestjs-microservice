import { Module } from "@nestjs/common";
import { PaymentsController } from "./payments.controller";

@Module({
 imports:[],
 controllers:[PaymentsController],
 providers:[]
})

export class PaymentsModule {}