import { InputType, Int, Field, ID } from '@nestjs/graphql';
@InputType()
export class CreateBranchInput {

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(_type => String, { nullable: true })
    treeID?: string;

    @Field(() => String, { nullable: true })
    parentID?: string;

    @Field(_type => String, { nullable: true })
    rootUser?: string;

    // @Field(_type => Number, { nullable: true })
    // positionX?: number;

    // @Field(_type => Number, { nullable: true })
    // positionY?: number;

    
}