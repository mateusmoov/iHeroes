// app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DomainModule } from './domain/domain.module';
import { PersistenceModule } from './persistence/persistence.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    DatabaseModule,
    DomainModule,
    PersistenceModule,
    ApiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
