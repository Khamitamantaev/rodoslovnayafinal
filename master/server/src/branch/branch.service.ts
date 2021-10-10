import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(createBranchInput: CreateBranchInput) {
    if (createBranchInput.parentBranchID == null 
      || createBranchInput.parentBranchID == "" 
      || createBranchInput.parentBranchID == undefined) {
      const newBranch = await this.branchModel.create(createBranchInput)
      let currentTree = await this.treeModel.findById(createBranchInput.treeID).exec();
      let treebranches = currentTree.branches;
      treebranches.push(newBranch)
      await this.treeModel.findByIdAndUpdate(currentTree.id, { branches: treebranches }, { useFindAndModify: false });
      return newBranch.save()
    }
    else {
      let parentBranch = await this.branchModel.findById(createBranchInput.parentBranchID).exec()
      let children = parentBranch.branches;
      const newBranch = await this.branchModel.create(createBranchInput)
      let currentTree = await this.treeModel.findById(createBranchInput.treeID).exec();
      // console.log(currentTree)
      let treebranches = currentTree.branches;
      treebranches.push(newBranch)
      children.push(newBranch)
      await this.branchModel.findByIdAndUpdate(createBranchInput.parentBranchID, { branches: children }, { useFindAndModify: false });
      await this.treeModel.findByIdAndUpdate(currentTree.id, { branches: treebranches  }, { useFindAndModify: false });
      return newBranch.save()
    }
  }

  async findAll(): Promise<Branch[]> {
    return await this.branchModel.find().lean()
  }

  async findOne(id: string): Promise<Branch> {
    return await this.branchModel.findById(id)
  }

  async update(id: string, updateBranchInput: UpdateBranchInput): Promise<Branch> {
    const updatedBranch = await this.branchModel.findByIdAndUpdate(id, updateBranchInput, { new: true }).exec()
    return updatedBranch
  }

  async remove(id: string) {
    await this.branchModel.update({}, { $pull: { branches: { _id: id } } }, { multi: true })
    await this.treeModel.update({}, { $pull: { branches: { _id: id } } }, { multi: true })
    return this.branchModel.findByIdAndDelete(id)
  }
}
