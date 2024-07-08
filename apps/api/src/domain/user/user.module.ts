import { Module } from '@nestjs/common';
import { createUser } from './create-user';
import { UserRepositoryModule } from 'src/persistence/user/user.repository.module';

@Module({
  imports: [
    UserRepositoryModule,
  ],
  providers: [createUser],
  exports: [createUser],
})
export class UserModule { }