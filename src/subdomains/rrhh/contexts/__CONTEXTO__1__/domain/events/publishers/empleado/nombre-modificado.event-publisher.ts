import { EventPublisherBase } from "src/libs";
import { EmpleadoDomainEntity } from "../../../entities/empleado/EmpleadoDomainEntity";

export abstract class NombreModificadoEventPublisher extends EventPublisherBase<EmpleadoDomainEntity>{}
