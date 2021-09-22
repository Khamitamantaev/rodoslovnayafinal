import { Model, CreateQuery, UpdateQuery, FilterQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { CreateUserInput } from './user.input';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async updateById({
    userId,
    input,
  }: {
    userId: User['_id'];
    input: UpdateQuery<User>;
  }): Promise<User> {
    return this.userModel
      .findByIdAndUpdate(userId, input, { new: true })
      .exec();
  }

  async create(createUserInput: CreateUserInput, userId: string): Promise<User> {
    let currentuser = await this.userModel.findById(userId).exec();
    // console.log(currentuser)
    const user = await this.userModel.create(createUserInput);
    let ancest = currentuser.ancestors;
    ancest.push(user)
    await this.userModel.findByIdAndUpdate(userId, { ancestors: ancest }, { useFindAndModify: false });
    return user
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().lean();
  }

  async findAllUserAncestors(userId: string): Promise<User[]> {
    let currentuser = await this.userModel.findById(userId).exec();
    console.log(currentuser.ancestors)
    return currentuser.ancestors;
  }

  async findMany(query: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(query).lean();
  }

  async findOne(query: FilterQuery<User>): Promise<User | undefined> {
    return this.userModel.findOne(query).lean();
  }
}
function deepClean(arg0: any): UpdateQuery<User> {
  throw new Error('Function not implemented.');
}

