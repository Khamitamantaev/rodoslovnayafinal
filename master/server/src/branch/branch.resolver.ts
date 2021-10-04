import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BranchService } from './branch.service';
import { Branch } from './entities/branch.schema';
import { CreateBranchInput } from './dto/create-branch.input';
import { UpdateBranchInput } from './dto/update-branch.input';

@Resolver(() => Branch)
export class BranchResolver {
  constructor(private readonly branchService: BranchService) {}

  @Mutation(() => Branch)
  createBranch(@Args('createBranchInput') createBranchInput: CreateBranchInput) {
    return this.branchService.create(createBranchInput);
  }

  @Query(() => [Branch], { name: 'findAllBranches' })
  findAll() {
    return this.branchService.findAll();
  }

  @Query(() => Branch, { name: 'findBranchByID' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.branchService.findOne(id);
  }

  @Mutation(() => Branch, { name: 'updateBranchByID' })
  updateBranch(@Args('updateBranchInput') updateBranchInput: UpdateBranchInput) {
    return this.branchService.update(updateBranchInput.id, updateBranchInput);
  }

  @Mutation(() => Branch, { name: 'removeBranchByID' })
  removeBranch(@Args('id', { type: () => String }) id: string) {
    return this.branchService.remove(id);
  }
}
