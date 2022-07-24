import { Injectable } from '@nestjs/common';
import { CommonArgs } from 'src/common/dto/skip-take.args';
import { NewUserInput } from './dto/new-user.input';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  async create(data: NewUserInput): Promise<User> {
    return {} as any;
  }

  async findOneById(id: string): Promise<User> {
    return {} as any;
  }

  async findAll(CommonArgs: CommonArgs): Promise<User[]> {
    return [] as User[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
