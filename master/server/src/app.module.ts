import { get } from 'lodash';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthMiddleware } from './auth/auth.middleware';
import {
  CORS_ORIGIN,
  MONO_DB_CONNECTION_STRING,
  ENGINE_API_KEY,
  ENV,
} from '@constants';
import { HealthzController } from './healthz/healthz.controller';
import SentryPlugin from './sentry.plugin';
import { services, schemas, resolvers } from './config/providers';
import { ChatModule } from '@chat/chat.module';
import { UserModule } from '@user/user.module';
import { AuthModule } from '@auth/auth.module';
import { TreeModule } from './tree/tree.module';
import { BranchModule } from './branch/branch.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONO_DB_CONNECTION_STRING, {
      useCreateIndex: true,
      useNewUrlParser: true,
    }),
    MongooseModule.forFeature([...schemas]),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      cors: {
        origin: CORS_ORIGIN,
        credentials: true,
      },
      autoSchemaFile: 'schema.gql',
      context: ({ req, res, connection }) => {
        const clientId = get(connection, 'context.clientId');
        return { req, res, ...(clientId && { clientId }) };
      },
    }),
    AuthModule,
    ChatModule,
    UserModule,
    TreeModule,
    BranchModule,
  ],
  controllers: [HealthzController],
  providers: [...services, ...resolvers,],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}

/*
 src/app.module.ts:36:17 - error TS2322: Type '{ requestDidStart(): { didEncounterErrors(rc: any): void; }; }' is not assignable to type 'PluginDefinition'.
#14 43.48   Type '{ requestDidStart(): { didEncounterErrors(rc: any): void; }; }' is not assignable to 
type 'ApolloServerPlugin<BaseContext>'.
#14 43.48     The types returned by 'requestDidStart(...)' are incompatible between these types.       
#14 43.48       Type '{ didEncounterErrors(rc: any): void; }' is missing the following properties from 
type 'Promise<void | GraphQLRequestListener<BaseContext>>': then, catch, [Symbol.toStringTag], finally 
#14 43.48
#14 43.48 36       plugins: [SentryPlugin],
*/
