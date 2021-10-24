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
  name: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  treeID: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  parentID: string;

  @Field(() => String, { nullable: true})
  @Prop({ required: false})
  rootUser: string;

  @Field(() => [Branch]) 
  @Prop({ type: [{ _id: {index: true, type: MongooseSchema.Types.ObjectId, ref: 'Branch'}, name: String, treeID: String, parentID: String, rootUser: String}] })
  branches: Branch[];
}

export type BranchDocument = Branch & Document;

export const BranchSchema = SchemaFactory.createForClass(Branch);
