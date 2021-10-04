import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBranchInput {

    @Field(_type => String, { nullable: true })
    treeID?: string;

    @Field(() => String)
    parentBranchID?: string;

    @Field(_type => String, { nullable: true })
    rootBranchID?: string;
}