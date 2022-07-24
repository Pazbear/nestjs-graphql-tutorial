import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { CommonArgs } from 'src/common/dto/skip-take.args';
import { NewUserInput } from './dto/new-user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';

const pubSub = new PubSub();

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query((users) => User)
  async user(@Args('id') id: string): Promise<User> {
    const user: User = await this.usersService.findOneById(id);
    if (!user) {
      throw new NotFoundException(id);
    }
    return user;
  }

  @Query((returns) => [User])
  users(@Args() commonArgs: CommonArgs): Promise<User[]> {
    return this.usersService.findAll(commonArgs);
  }

  @Mutation((returns) => User)
  async createUser(
    @Args('newUserData') newUserData: NewUserInput,
  ): Promise<User> {
    const user = await this.usersService.create(newUserData);
    pubSub.publish('created_User', { createdUser: user });
    return user;
  }

  @Mutation((returns) => Boolean)
  async deleteUser(@Args('id') id: string) {
    return this.usersService.remove(id);
  }

  @Subscription((returns) => User)
  userAdded() {
    return pubSub.asyncIterator('userAdded');
  }
}
