import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@user/user.schema';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
@ObjectType()
export class Branch {
  @Field(() => ID)
  _id: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  treeID: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  rootUser: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  leftchildID: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  rightchildID: string;
}

export type BranchDocument = Branch & Document;

export const BranchSchema = SchemaFactory.createForClass(Branch);
