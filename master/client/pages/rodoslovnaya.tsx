import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { ActionButtons, Box, Button, Flex, Input, Label, Table, useToasts } from 'bumbag';
import { Formik, Form, Field } from 'formik';
import { InputField } from 'bumbag';
import { useCreateUserMutation, useFindAllAncestorsQuery } from 'generated';


function RodoslovnayaPage() {
    const { t } = useTranslation();
    const toasts = useToasts();
    const [createUser, { loading: creating, error }] = useCreateUserMutation({
        onCompleted: () => {
            toasts.success({
                title: '',
                message: 'Пользователь успешно добавлен',
            });
        },
    });


    const onSubmit = (values) => {
        return createUser({
            variables: {
                input: {
                    email: values.email,
                    name: values.username,
                },
            },
        });
    };

    return (
        <App title={t('Ваша родословная')} description={t('Здесь можно создать и распечатать свою родословную')} requiresUser>
            <Flex alignX="center">
                <Flex alignX="left">
                    <Box width="300px" height="520px" padding="10px" >
                        <Label marginBottom="12px">Добавить пользователя</Label>
                        <Formik
                            initialValues={{}}
                            onSubmit={onSubmit}
                        >
                            <Form>
                                <Field
                                    component={InputField.Formik}
                                    name="username"
                                    label="Username"
                                    marginBottom="10px"
                                />
                                <Field
                                    component={InputField.Formik}
                                    name="email"
                                    label="Email"
                                    marginBottom="10px"
                                />
                                <Button isLoading={creating} disabled={creating} type="submit" palette="success">Success</Button>
                            </Form>
                        </Formik>
                    </Box>
                </Flex>
                <Flex alignX="right" >
                    <Box width="800px" height="520px"  >
                        
                    </Box>
                </Flex>
            </Flex>
        </App>
    )
}

export default withApolloWithSubscriptions(RodoslovnayaPage);