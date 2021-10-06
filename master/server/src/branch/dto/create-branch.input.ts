import { InputType, Int, Field, ID } from '@nestjs/graphql';
@InputType()
export class CreateBranchInput {

    @Field(_type => String, { nullable: true })
    treeID?: string;

    @Field(_type => String, { nullable: true })
    parentBranchID?: string;

    @Field(_type => String, { nullable: true })
    rootBranchID?: string;
}