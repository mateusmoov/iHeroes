import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async createUser(data: Partial<User>): Promise<User> {
    const { email, name, password } = data;

    // const saltOrRounds = 10;
    // const hash = await bcrypt.hash(password, saltOrRounds);
    const newUser = this.usersRepository.create({
      email,
      name,
      password,
    });

    return this.usersRepository.save(newUser);
  }

  async findOneByEmail(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }
}