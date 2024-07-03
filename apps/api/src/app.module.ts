import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { HeroesController } from './heroes/heroes.controller';
import { HeroesModule } from './heroes/heroes.module';
import { OccurrencesModule } from './occurrences/occurrences.module';
import { OccurrencesService } from './occurrences/occurrences.service';
import { SocketIoClient } from './services/socketio.client';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'iHeroes',
      entities: [__dirname + '/database/entities/**'],
      synchronize: true,
    }),
    UsersModule,
    HeroesModule,
    OccurrencesModule,
  ],
  controllers: [AppController, HeroesController],
  providers: [AppService, SocketIoClient],
})
export class AppModule {}
