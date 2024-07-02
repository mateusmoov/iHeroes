import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  name: string;

  @IsNotEmpty()
  password: string;
}
