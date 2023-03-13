import { Module } from '@nestjs/common';
import { PersistenceModule } from './subdomains/area-deportiva/contexts/rrhh/infrastructure/persistence/persistence.module';

@Module({
  imports: [PersistenceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
