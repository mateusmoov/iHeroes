import { Provider } from "@nestjs/common";
import { UserRepository } from "./user.repository";

export const UserProvider: Provider = {
  provide: 'UserRepo',
  useClass: UserRepository
}