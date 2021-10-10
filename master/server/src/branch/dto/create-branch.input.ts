import { InputType, Int, Field, ID } from '@nestjs/graphql';
@InputType()
export class CreateBranchInput {

    @Field(_type => String, { nullable: true })
    treeID?: string;

    @Field(() => String, { nullable: true })
    parentBranchID?: string;

    @Field(_type => Number, { nullable: true })
    positionX?: number;

    @Field(_type => Number, { nullable: true })
    positionY?: number;

    @Field(_type => String, { nullable: true })
    rootUser?: string;
}