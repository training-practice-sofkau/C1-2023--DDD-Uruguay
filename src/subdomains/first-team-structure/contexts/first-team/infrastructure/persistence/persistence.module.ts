import { Module } from '@nestjs/common';
import { PostgreSQLModule } from "./databases";
import { MatchService } from "./services/match/match.service";
import { RivalService } from "./services/match/rival.service";
import { StadiumService } from "./services/match/stadium.service";
import { CoachService } from "./services/team/coach.service";
import { PlayerService } from "./services/team/player.service";
import { TeamService } from "./services/team/team.service";
import { TrainerService } from "./services/training/trainer.service";
import { TrainingEquipmentService } from "./services/training/training-equipment.service";
import { TrainingFieldService } from "./services/training/training-field.service";
import { TrainingService } from "./services/training/training.service";
import { WorkoutService } from "./services/training/workout.service";

@Module({
    imports: [PostgreSQLModule],
    controllers: [],
    providers: [RivalService, StadiumService, MatchService, TeamService,
    PlayerService, CoachService, TrainingService, TrainingFieldService, TrainingEquipmentService,
  TrainerService, WorkoutService],
  })

export class PersistenceModule {}