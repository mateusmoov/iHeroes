import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

interface IPayloadUser {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async validate(payload: IPayloadUser) {
    const user = await this.validateUser(payload.email, payload.password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return { email: user.email };
  }

  async login(payload: IPayloadUser) {
    const userInfo = await this.validate(payload);
    return {
      access_token: this.jwtService.sign(userInfo),
    };
  }
}
