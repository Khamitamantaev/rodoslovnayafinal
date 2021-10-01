import { Test, TestingModule } from '@nestjs/testing';
import { TreeResolver } from './tree.resolver';
import { TreeService } from './tree.service';

describe('TreeResolver', () => {
  let resolver: TreeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TreeResolver, TreeService],
    }).compile();

    resolver = module.get<TreeResolver>(TreeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
