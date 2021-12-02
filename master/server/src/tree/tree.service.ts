import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BranchDocument } from 'src/branch/entities/branch.schema';
import { CreateTreeInput } from './dto/create-tree.input';
import { UpdateTreeInput } from './dto/update-tree.input';
import { Tree, TreeDocument } from './entities/tree.schema';

@Injectable()
export class TreeService {
  constructor(@InjectModel('Tree') private treeModel: Model<TreeDocument>,
              @InjectModel('Branch') private branchModel: Model<BranchDocument>
  ) { }
  
  async create(createTreeInput: CreateTreeInput, userId: string) {
    const CreateTree = await this.treeModel.create({
      name: createTreeInput.name,
      rootUser: userId
    })
    const newBranch = await this.branchModel.create({
      name: "Your Branch",
      treeID: CreateTree._id,
      parentID: null,
      rootUser: userId,
    })
    let treebranches = CreateTree.branches;
    treebranches.push(newBranch)
    return CreateTree.save()
  }

  async findAllTrees(userId: string): Promise<Tree[]> {
    return await this.treeModel.find({ rootUser: userId }).lean()
  }

  async findOne(id: string): Promise<Tree> {
    return await this.treeModel.findById(id)
  }

  update(id: number, updateTreeInput: UpdateTreeInput) {
    return `This action updates a #${id} tree`;
  }

  remove(id: number) {
    return `This action removes a #${id} tree`;
  }
}
