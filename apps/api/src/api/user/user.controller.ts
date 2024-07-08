import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { createUser } from 'src/domain/user/create-user';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: createUser) { }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}