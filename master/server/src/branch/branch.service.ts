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
    let parentBranch = await this.branchModel.findById(createBranchInput.parentID).exec()
    let children = parentBranch.branches;
    const newBranch = await this.branchModel.create(createBranchInput) //создаю ветку и там должна быть parentID
    let currentTree = await this.treeModel.findById(createBranchInput.treeID).exec();
    // console.log(currentTree)
    let treebranches = currentTree.branches;
    treebranches.push(newBranch)
    children.push(newBranch)
    await this.branchModel.findByIdAndUpdate(createBranchInput.parentID, { branches: children }, { useFindAndModify: false });
    await this.treeModel.findByIdAndUpdate(currentTree.id, { branches: treebranches }, { useFindAndModify: false });
    return newBranch.save()
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

  async removeBranch(id) {
    let arr = []
    const branch = await this.branchModel.findById(id)
    branch.branches.forEach(async element => {
      // console.log(element)
      const branchItem = await this.branchModel.findById(element._id)
      console.log(branchItem)
    })
  }

  async remove(id: string) {
    // await this.branchModel.update({}, { $pull: { branches: { _id: id } } }, { multi: true })
    // await this.treeModel.update({}, { $pull: { branches: { _id: id } } }, { multi: true })
    // const branches = await this.branchModel.find({})
    await this.removeBranch(id)
    // console.log(agg)
    // return this.branchModel.findByIdAndDelete(id)
  }
}



