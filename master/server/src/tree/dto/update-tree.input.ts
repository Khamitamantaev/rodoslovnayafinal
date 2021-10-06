import { PartialType } from '@nestjs/mapped-types';
import { CreateTreeInput } from './create-tree.input';
import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateTreeInput extends PartialType(CreateTreeInput) {
  @Field(() => Int)
  id: number;
}