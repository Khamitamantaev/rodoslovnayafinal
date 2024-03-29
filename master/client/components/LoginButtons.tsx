import * as React from 'react';
import { Flex, Heading, Columns } from 'bumbag';
import GoogleLogin from 'components/auth/GoogleLogin';
import useTranslation from 'locales/useTranslation';
import GitHubLogin from './auth/GitHubLogin';

function LoginButtons() {
  const { t } = useTranslation();

  return (
    <Columns>
      <Columns.Column spread={3} spreadOffset="both">
        <Flex flexDirection="column">
          <Heading fontSize="400">{t('page.login.heading')}</Heading>
          <br />
          {/* <GitHubLogin /> */}
          {/* <br />
          <RedditLogin /> */}
          <br />
          <GoogleLogin />
        </Flex>
      </Columns.Column>
    </Columns>
  );
}

export default LoginButtons;
