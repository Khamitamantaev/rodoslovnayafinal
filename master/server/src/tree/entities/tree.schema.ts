import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@user/user.schema';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Branch } from 'src/branch/entities/branch.schema';

@Schema()
@ObjectType()
export class Tree {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true})
  @Field(() => String)
  name: string;

  @Prop({ required: true})
  @Field(() => String)
  rootUser: string;

  @Field(() => [String]) 
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Branch.name })
  branches: MongooseSchema.Types.ObjectId[];
}

export type TreeDocument = Tree & Document;

export const TreeSchema = SchemaFactory.createForClass(Tree);
