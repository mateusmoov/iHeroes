import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { User } from './user';
import { IUserRepository } from './iuser.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class createUser {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async createUser(data: Partial<User>): Promise<HttpStatus> {
    // hash here
    await this.userRepository.createUser(data);

    return HttpStatus.OK;
  }
}
