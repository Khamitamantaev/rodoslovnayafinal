import * as React from 'react';
import { get } from 'lodash';
import {
  Card,
  Stack,
  Heading,
  Avatar,
  Box,
  Button,
  InputField,
  TextareaField,
  FieldStack,
  useToasts,
  Flex,
  Columns,
  Container,
  Set,
} from 'bumbag';
import useTranslation from 'locales/useTranslation';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import { useMeQuery, useUpdateUserMutation } from 'generated';
import App from 'components/App';
import withApollo from 'lib/withApollo';

function SettingsPage() {
  const { t } = useTranslation();
  const toasts = useToasts();
  const { data: meData, loading } = useMeQuery();
  const me = get(meData, 'me', null);

  const [updateUser, { loading: updating, error }] = useUpdateUserMutation({
    onCompleted: () => {
      toasts.success({
        title: t('page.profile.form.onSuccess.title'),
        message: t('page.profile.form.onSuccess.message'),
      });
    },
  });

  

  const defaultValues = me
    ? {
      email: me.email,
      name: me.name,
      bio: me.bio || '',
    }
    : {};

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Must be a valid email address')
      .required('Email is required')
      .nullable(),
    name: Yup.string().required('Email is required'),
    bio: Yup.string(),
  });

  const { handleSubmit, control } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (values) => {
    return updateUser({
      variables: {
        input: {
          email: values.email,
          name: values.name,
          bio: values.bio,
        },
      },
    });
  };// Здесь у меня хранится запрос на обновление юзера, а точнее его профиля.

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <App
      title={t('page.profile.title')}
      description={t('page.profile.description')}
      breadcrumbs={[{ label: t('page.profile.title') }]}
      requiresUser
    >
      <Container breakpoint="tablet">
        <h1>Profile</h1>
      </Container>

    </App>
  );
}

export default withApollo(SettingsPage);
