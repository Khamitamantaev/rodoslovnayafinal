import { Injectable } from '@nestjs/common';
import { CreateTreeInput } from './dto/create-tree.input';
import { UpdateTreeInput } from './dto/update-tree.input';

@Injectable()
export class TreeService {
  create(createTreeInput: CreateTreeInput) {
    return 'This action adds a new tree';
  }

  findAll() {
    return `This action returns all tree`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tree`;
  }

  update(id: number, updateTreeInput: UpdateTreeInput) {
    return `This action updates a #${id} tree`;
  }

  remove(id: number) {
    return `This action removes a #${id} tree`;
  }
}
