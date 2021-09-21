import { Resolver, Query, Context, Args, Mutation } from '@nestjs/graphql';
import deepClean from 'deep-clean';
import { get } from 'lodash';
import { UserService } from '@user/user.service';
import { User } from '@user/user.schema';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@auth/auth.guard';
import { CreateUserInput, GetUserInput, UpdateUserInput } from './user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => User)
  async updateUser(@Args('input') input: UpdateUserInput, @Context() context) {
    console.log(context)
    const userId = get(context, 'req.user._id');
    return this.userService.updateById({ userId, input: deepClean(input) });
  }

  // @UseGuards(AuthGuard)
  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput, @Context() context) {
    // const userId = get(context, 'req.user._id');
    // const userId = "614a154bbdd14a250ca59578"
    // console.log(userId + ' - это id юзера который добавляет под себя пользователя')
    return this.userService.create(input)
  }

  @Query(() => [User])
  async users() {
    return this.userService.findAll();
  }

  @Query(() => User, { nullable: true })
  async me(@Context() context) {
    return this.userService.findOne({ _id: context.req.user });
  }

  @Query(() => User, { nullable: true })
  async user(@Args('input') input: GetUserInput) {
    return this.userService.findOne({ permalink: input.userPermalink });
  }
}
