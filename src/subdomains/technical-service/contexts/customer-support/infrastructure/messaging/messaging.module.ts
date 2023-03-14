import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { EmployeeController } from "../controllers/employee.controller";

@Module({
    imports:[
        ClientsModule.register([
        {
          name: 'TECHNICAL_SERVICE',
          transport: Transport.KAFKA,
          options: {
            client: {              
              brokers: ['localhost:9092'],
            },
            consumer: {
              groupId: 'technical-service-consumer'
            }
          }
        },
        ])
    ],
    controllers:[
        //EmployeeController,
    ],
    providers:[

    ],
    exports:[

    ],
})
export class MessagingModule {}
