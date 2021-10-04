import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TreeDocument } from 'src/tree/entities/tree.schema';
import { CreateBranchInput } from './dto/create-branch.input';
import { UpdateBranchInput } from './dto/update-branch.input';
import { Branch, BranchDocument } from './entities/branch.schema';

@Injectable()
export class BranchService {
  constructor(@InjectModel('Branch') private branchModel: Model<BranchDocument>,
              @InjectModel('Tree') private treeModel: Model<TreeDocument>
  ) { }

  async create(createBranchInput: CreateBranchInput) :Promise<Branch> {
    const newBranch = await this.branchModel.create(createBranchInput)
    let currentTree = await this.treeModel.findById(createBranchInput.treeID).exec();
    console.log(currentTree)
    let branches = currentTree.branches;
    branches.push(newBranch)
    await this.treeModel.findByIdAndUpdate(currentTree.id, { branches: branches }, { useFindAndModify: false });
    return newBranch.save()
  }

  async findAll(): Promise<Branch[]> {
    return await this.branchModel.find().lean()
  }

  async findOne(id: string): Promise<Branch> {
    return await this.branchModel.findById(id)
  }

  async update(id: string, updateBranchInput: UpdateBranchInput): Promise<Branch> {
    const updatedBranch = await this.branchModel.findByIdAndUpdate(id, updateBranchInput, {new: true}).exec()
    return updatedBranch
  }

  remove(id: string) {
    return this.branchModel.findByIdAndDelete(id)
  }
}
