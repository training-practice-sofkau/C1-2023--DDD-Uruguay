import { EventPublisherBase } from "../../../../../../../../libs/sofka/bases";
export abstract class EmployeeCreatedEventSubscriber {
    async handle(event: any) {
      console.log('customer-support.employee-created', event);
      console.log('Event launched - Do Something');
    }
}