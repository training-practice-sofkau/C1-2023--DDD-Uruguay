import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { CoachPostgreEntity, MatchPostgreEntity, PlayerPostgreEntity, RivalPostgreEntity, StadiumPostgreEntity, TeamPostgreEntity, TrainerPostgreEntity, TrainingEquipmentPostgreEntity, TrainingFieldPostgreEntity, TrainingPostgreEntity, WorkoutPostgreEntity } from './entities';
import { CoachPostgreService, MatchPostgreService, PlayerPostgreService, RivalPostgreService, StadiumPostgreService, TeamPostgreService, TrainerPostgreService, TrainingEquipmentPostgreService, TrainingFieldPostgreService, TrainingPostgreService, WorkoutPostgreService } from './services';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useClass: TypeOrmPostgresConfigService
  }),
  TypeOrmModule.forFeature(
    [RivalPostgreEntity, StadiumPostgreEntity, MatchPostgreEntity, TeamPostgreEntity, PlayerPostgreEntity, CoachPostgreEntity,
    TrainingPostgreEntity, TrainingFieldPostgreEntity, TrainingEquipmentPostgreEntity, TrainerPostgreEntity,
    WorkoutPostgreEntity]
  )
],
  controllers: [],
  providers: [TypeOrmPostgresConfigService, RivalPostgreService, StadiumPostgreService, MatchPostgreService, TeamPostgreService,
  PlayerPostgreService, CoachPostgreService, TrainingPostgreService, TrainingFieldPostgreService, TrainingEquipmentPostgreService,
TrainerPostgreService, WorkoutPostgreService],
})
export class PostgreSQLModule {}
