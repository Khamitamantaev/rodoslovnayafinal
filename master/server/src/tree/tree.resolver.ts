import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';
import { TreeService } from './tree.service';
import { get } from 'lodash';
import { Tree } from './entities/tree.schema';
import { CreateTreeInput } from './dto/create-tree.input';
import { UpdateTreeInput } from './dto/update-tree.input';

@Resolver(() => Tree)
export class TreeResolver {
  constructor(private readonly treeService: TreeService) {}

  @Mutation(() => Tree)
  createTree(@Args('createTreeInput') createTreeInput: CreateTreeInput, @Context() context) {
    const userId = get(context, 'req.user._id');
    console.log(userId + ' сохранил Дерево!')
    return this.treeService.create(createTreeInput, userId);
  }

  @Query(() => [Tree], { name: 'findalltrees' })
  findAll(@Context() context) {
    const userId = get(context, 'req.user._id')
    return this.treeService.findAllTrees(userId);
  }

  @Query(() => Tree, { name: 'findTreebyID' })
  findOne(@Args('id', { type: () => String }) id: string) {
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
