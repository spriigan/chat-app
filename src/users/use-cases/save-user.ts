import { Left, Right } from '../../utils/either';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserService } from '../services/user.service';

export class SaveUser {
  constructor(private readonly userService: UserService) {}

  async save(user: CreateUserDto) {
    try {
      const newUser = await this.userService.saveUser(user);
      return new Right(newUser);
    } catch (error) {
      return new Left(error);
    }
  }
}
