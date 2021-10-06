import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTreeInput } from './dto/create-tree.input';
import { UpdateTreeInput } from './dto/update-tree.input';
import { Tree, TreeDocument } from './entities/tree.schema';

@Injectable()
export class TreeService {
  constructor(@InjectModel('Tree') private treeModel: Model<TreeDocument>) { }
  
  async create(createTreeInput: CreateTreeInput) {
    const CreateTree = await this.treeModel.create(createTreeInput)
    return CreateTree.save()
  }

  async findAllTrees(): Promise<Tree[]> {
    return await this.treeModel.find().lean()
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
