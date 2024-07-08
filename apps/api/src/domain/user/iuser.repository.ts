import { User } from './user'
export interface IUserRepository {
  createUser(data: Partial<User>): Promise<User>;
}