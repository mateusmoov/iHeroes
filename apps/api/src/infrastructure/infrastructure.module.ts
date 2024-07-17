import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionService } from './database/database-connection.service';
import { SocketIoClient } from './websocket/socket-io.handler';
import { OccurrenceRepositoryModule } from 'src/persistence/occurrence/occurrence.repository.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    OccurrenceRepositoryModule,
  ],
  providers: [DatabaseConnectionService, SocketIoClient],
  exports: [TypeOrmModule, SocketIoClient],
})
export class InfrastructureModule {}
