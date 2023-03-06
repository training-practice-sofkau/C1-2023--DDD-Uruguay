import { EventPublisherBase } from "src/libs";
import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export abstract class SalarioModificadoEventPublisher extends EventPublisherBase<EmpleadoDomainEntity>{}
