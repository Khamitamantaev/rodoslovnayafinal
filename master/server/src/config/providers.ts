import { ChatResolver } from '@chat/chat.resolver';

import { SessionSchema } from '@auth/auth.schema';
import { AuthService } from '@auth/auth.service';
import { AuthResolver } from '@auth/auth.resolver';

import { UserSchema } from '@user/user.schema';
import { UserService } from '@user/user.service';
import { UserResolver } from '@user/user.resolver';
import { Tree, TreeSchema } from 'src/tree/entities/tree.schema';
import { TreeService } from 'src/tree/tree.service';
import { TreeResolver } from 'src/tree/tree.resolver';

export const services = [UserService, AuthService, TreeService];

export const resolvers = [UserResolver, AuthResolver, ChatResolver, TreeResolver];

export const schemas = [
  { name: 'User', schema: UserSchema },
  { name: 'Session', schema: SessionSchema },
  { name: 'Tree', schema: TreeSchema}
];
