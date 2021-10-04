import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
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

  @Field(() => [Branch]) 
  @Prop({ type: [{ _id: {index: true, type: MongooseSchema.Types.ObjectId, ref: 'Branch'}, treeID: String, rootUser: String  }] })
  branches: Branch[];
}

export type TreeDocument = Tree & Document;

export const TreeSchema = SchemaFactory.createForClass(Tree);
