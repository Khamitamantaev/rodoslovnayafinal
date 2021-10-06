import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchResolver } from './branch.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { schemas } from '@providers';

@Module({
  providers: [BranchResolver, BranchService],
  imports: [MongooseModule.forFeature([...schemas])]
})
export class BranchModule {}
