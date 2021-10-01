import { Module } from '@nestjs/common';
import { TreeService } from './tree.service';
import { TreeResolver } from './tree.resolver';

@Module({
  providers: [TreeResolver, TreeService]
})
export class TreeModule {}
