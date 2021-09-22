import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { ActionButtons, Box, Button, Flex, Input, Label, useToasts } from 'bumbag';
import { Formik, Form, Field } from 'formik';
import { InputField } from 'bumbag';
import { useCreateUserMutation } from 'generated';


function RodoslovnayaPage() {
    const { t } = useTranslation();
    const toasts = useToasts();
    const initialSchema = createSchema({
        nodes: [
            // { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
            // { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
            // { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
            // { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
        ],
        links: [
            // { input: 'node-2', output: 'node-4', label: 'сестра', readonly: true },
            // { input: 'node-1', output: 'node-2', label: 'БРАТ', readonly: true },
            // { input: 'node-1', output: 'node-3', label: 'ОТЕЦ', readonly: true },
            // { input: 'node-1', output: 'node-4', label: 'Мама', readonly: true, className: 'my-custom-link-class' },
        ]
    });

    const [createUser, { loading: updating, error }] = useCreateUserMutation({
        onCompleted: () => {
          toasts.success({
            title: t('page.rodoslovnaya.form.onSuccess.title'),
            message: t('page.rodoslovnaya.form.onSuccess.message'),
          });
        },
      });

      const onSubmit = (values) => {
        return createUser({
          variables: {
            input: {
              email: values.email,
              name: values.name,
              parent_id: values.parent_id,
            },
          },
        });
      };// Здесь у меня хранится запрос на обновление юзера, а точнее его профиля.



    const [schema, { onChange }] = useSchema(initialSchema);

    return (
        <App title={t('Ваша родословная')} description={t('Здесь можно создать и распечатать свою родословную')} requiresUser>
            <Flex alignX="center">
                <Flex alignX="left">
                    <Box width="300px" height="520px" border="1px solid" padding="10px" >
                        <Label marginBottom="12px">Добавить</Label>
                        <Formik
                            initialValues={{ }}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <Field
                                    component={InputField.Formik}
                                    name="username"
                                    label="Username"
                                />
                                 <Field
                                    component={InputField.Formik}
                                    name="email"
                                    label="Email"
                                />
                                 <Field
                                    component={InputField.Formik}
                                    name="parent_id"
                                    label="ParentID"
                                />
                                {/* <InputField label="Username" marginBottom="12px" variant="underline" />
                                <InputField label="email" marginBottom="12px" variant="underline" />
                                <InputField label="parent_id" marginBottom="12px" variant="underline" /> */}
                                <Button type="submit" palette="success">Success</Button>
                            </Form>
                        </Formik>
                        {/* <Label marginBottom="12px">Добавить</Label>
                        <Input label="Username" marginBottom="12px" variant="underline" />
                        <Input label="email" marginBottom="12px" variant="underline" />
                        <Input label="parent_id" marginBottom="12px" variant="underline" />
                        <Button palette="success">Success</Button> */}
                    </Box>
                </Flex>
                <Flex alignX="right" >
                    <Box width="800px" height="520px" border="1px solid" >
                        <div style={{ height: '26.5rem' }}>
                            <Diagram schema={schema} onChange={onChange} />
                        </div>
                    </Box>

                </Flex>
            </Flex>



        </App>
    )
}

export default withApolloWithSubscriptions(RodoslovnayaPage);