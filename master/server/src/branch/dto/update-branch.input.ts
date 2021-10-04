import { PartialType } from '@nestjs/mapped-types';
import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateBranchInput } from './create-branch.input';

@InputType()
export class UpdateBranchInput  {
    @Field(() => String)
    id: string;

    @Field(_type => String)
    treeID?: string;

    @Field(_type => String)
    rootUser?: string;

    @Field(_type => String)
    leftchildID?: string;

    @Field(_type => String)
    rightchildID?: string;
}