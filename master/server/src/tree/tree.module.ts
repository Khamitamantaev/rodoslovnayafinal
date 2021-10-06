import { Module } from '@nestjs/common';
import { TreeService } from './tree.service';
import { TreeResolver } from './tree.resolver';
import { UserService } from '@user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { schemas } from '@providers';

@Module({
  imports: [MongooseModule.forFeature([...schemas])],
  providers: [TreeResolver, TreeService],
})
export class TreeModule {}
