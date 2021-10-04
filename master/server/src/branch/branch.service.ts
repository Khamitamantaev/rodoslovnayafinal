import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBranchInput } from './dto/create-branch.input';
import { UpdateBranchInput } from './dto/update-branch.input';
import { Branch, BranchDocument } from './entities/branch.schema';

@Injectable()
export class BranchService {
  constructor(@InjectModel('Branch') private branchModel: Model<BranchDocument>) { }

  async create(createBranchInput: CreateBranchInput) :Promise<Branch> {
    const newBranch = await this.branchModel.create(createBranchInput)
    return newBranch.save()
  }

  findAll() {
    return `This action returns all branch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} branch`;
  }

  async update(id: string, updateBranchInput: UpdateBranchInput): Promise<Branch> {
    const updatedBranch = await this.branchModel.findByIdAndUpdate(id, updateBranchInput, {new: true}).exec()
    return updatedBranch
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }
}
