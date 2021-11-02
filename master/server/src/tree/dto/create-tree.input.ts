import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTreeInput {

  @Field(_type => String, { nullable: true })
  name?: string;
}