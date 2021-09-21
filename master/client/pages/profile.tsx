import * as React from 'react';
import 'beautiful-react-diagrams/styles.css';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
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
import { yupResolver } from '@hookform/resolvers/yup';
import { useMeQuery, useUpdateUserMutation } from 'generated';
import App from 'components/App';
import withApollo from 'lib/withApollo';
import { Text } from 'bumbag/ts/Text/Text.styles';
import { ActionButtons } from 'bumbag';

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

  const initialSchema = createSchema({
    nodes: [
      { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
      { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
      { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
      { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
    ],
    links: [
      { input: 'node-2',  output: 'node-4', label: 'сестра', readonly: true },
      { input: 'node-1',  output: 'node-2', label: 'БРАТ', readonly: true },
      { input: 'node-1',  output: 'node-3', label: 'ОТЕЦ', readonly: true },
      { input: 'node-1',  output: 'node-4', label: 'Мама', readonly: true, className: 'my-custom-link-class' },
    ]
  });



  const [schema, { onChange }] = useSchema(initialSchema);

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

  const { handleSubmit, errors, control } = useForm({
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
      <div style={{ height: '26.5rem' }}>
      <Diagram schema={schema} onChange={onChange} />
    </div>
      <Set>
  <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="small" />
  <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" />
  <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="medium" />
  <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="large" />
  <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" size="150px" />
</Set>
        {/* <ActionButtons
          onClickSubmit={() => console.log('submitted')}
          onClickCancel={() => console.log('cancelled')}
        /> */}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <FieldStack>
            <Controller
              control={control}
              as={InputField}
              isRequired
              name="name"
              autoComplete="name"
              label={t('page.profile.form.name.label')}
              placeholder={t('page.profile.form.name.placeholder')}
              defaultValue={defaultValues.name || ''}
              state={get(errors, 'name.message') ? 'danger' : undefined}
            />

            <Controller
              control={control}
              as={InputField}
              isRequired
              name="email"
              type="email"
              autoComplete="email"
              label={t('page.profile.form.email.label')}
              placeholder={t('page.profile.form.email.placeholder')}
              defaultValue={defaultValues.email || ''}
              state={get(errors, 'email.message') ? 'danger' : undefined}
            />

            <Controller
              control={control}
              as={TextareaField}
              name="bio"
              label={t('page.profile.form.bio.label')}
              placeholder={t('page.profile.form.bio.placeholder')}
              defaultValue={defaultValues.bio || ''}
              state={get(errors, 'bio.message') ? 'danger' : undefined}
            />
          </FieldStack>

          <Flex justifyContent="flex-end">
            <Button
              marginTop="major-2"
              isLoading={updating}
              disabled={updating}
              type="submit"
            >
              {t('page.profile.form.callToAction')}
            </Button>
          </Flex>
        </form> */}
      </Container>

    </App>
  );
}

export default withApollo(SettingsPage);
