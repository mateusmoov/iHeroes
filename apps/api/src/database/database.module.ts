import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionService } from './database-connection.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
  ],
  providers: [DatabaseConnectionService],
  exports: [TypeOrmModule],
})
export class DatabaseModule { }
