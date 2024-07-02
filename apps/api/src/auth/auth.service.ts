import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

interface IPayloadUser {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(pass, saltOrRounds);
    const isMatch = await bcrypt.compare(pass, hash);

    if (!isMatch) return null;

    const { password, ...result } = user;
    return result;
  }

  async validate(payload: IPayloadUser) {
    const user = await this.validateUser(payload.email, payload.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return { name: user.name };
  }

  async login(payload: IPayloadUser) {
    const userInfo = await this.validate(payload);
    return {
      access_token: this.jwtService.sign(userInfo),
    };
  }
}
