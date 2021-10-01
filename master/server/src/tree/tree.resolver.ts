import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TreeService } from './tree.service';
import { Tree } from './entities/tree.schema';
import { CreateTreeInput } from './dto/create-tree.input';
import { UpdateTreeInput } from './dto/update-tree.input';

@Resolver(() => Tree)
export class TreeResolver {
  constructor(private readonly treeService: TreeService) {}

  @Mutation(() => Tree)
  createTree(@Args('createTreeInput') createTreeInput: CreateTreeInput) {
    return this.treeService.create(createTreeInput);
  }

  @Query(() => [Tree], { name: 'tree' })
  findAll() {
    return this.treeService.findAll();
  }

  @Query(() => Tree, { name: 'tree' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.treeService.findOne(id);
  }

  @Mutation(() => Tree)
  updateTree(@Args('updateTreeInput') updateTreeInput: UpdateTreeInput) {
    return this.treeService.update(updateTreeInput.id, updateTreeInput);
  }

  @Mutation(() => Tree)
  removeTree(@Args('id', { type: () => Int }) id: number) {
    return this.treeService.remove(id);
  }
}
