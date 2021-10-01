import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTreeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}