import { EventPublisherBase } from "src/libs";
import { StaffDeportivoDomainEntity } from "../../../entities/staff-deportivo/staff-deportivo.entity";

export abstract class EmpleadoRemovidoEventPublisher extends EventPublisherBase<StaffDeportivoDomainEntity>  {}
