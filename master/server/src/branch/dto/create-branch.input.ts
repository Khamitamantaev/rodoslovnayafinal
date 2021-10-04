import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBranchInput {

    @Field(_type => String, { nullable: true })
    treeID?: string;

    @Field(_type => String, { nullable: true })
    rootUser?: string;

    @Field(_type => String, { nullable: true })
    leftchildID?: string;

    @Field(_type => String, { nullable: true })
    rightchildID?: string;
}