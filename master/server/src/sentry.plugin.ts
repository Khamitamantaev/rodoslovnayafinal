import * as Sentry from '@sentry/node';
import { get } from 'lodash';
import { GraphQLRequestContext } from 'apollo-server-types';
import { Plugin } from '@nestjs/graphql';
import {
  ApolloServerPlugin,
  GraphQLRequestListener,
} from 'apollo-server-plugin-base';

 const apolloServerSentryPlugin = {
  // For plugin definition see the docs: https://www.apollographql.com/docs/apollo-server/integrations/plugins/
 async requestDidStart() {
    return {
     didEncounterErrors(rc) {
        Sentry.withScope(scope => {
          scope.addEventProcessor(event =>
            Sentry.Handlers.parseRequest(event, (rc.context as any).req),
          );

          const user =  get(rc, 'context.req.user');

          if (user) {
            scope.setUser({
              user,
            });
          }

          scope.setExtra(
            get(rc, 'operation.operation', 'parse_err'),
            get(rc, 'operationName', get(rc, 'request.operationName')),
          );

          rc.errors.forEach(error => {
            if (error.name === 'PersistedQueryNotFoundError') {
              return ;
            }

            if (error.path || error.name !== 'GraphQLError') {
              scope.setExtra('path', error.path);
              Sentry.captureException(error);
            } else {
              Sentry.captureMessage(`GraphQLWrongQuery: ${error.message}`);
            }
          });
        });
      },
    };
  }
};

export default apolloServerSentryPlugin;
