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

    //[Toast success не работает, после того, как пользователь создан, не выходит окно]
    const [createUser, { loading: creating, error }] = useCreateUserMutation({
        onCompleted: () => {
            toasts.success({
                title: '',
                message: 'Пользователь успешно добавлен',
            });
        },
    });

    const { data, loading } = useFindAllAncestorsQuery({
        variables: {
        },
    });

    // const users = data.findAllAncestors.map((ancestor) => 
    // <>
    // <Table.Row>
    //   <Table.Cell>{ancestor.name}</Table.Cell>
    //   <Table.Cell textAlign="right">{ancestor._id}</Table.Cell>
    // </Table.Row>
    // </>
    // )
    // console.log(data)

    const onSubmit = (values) => {
        return createUser({
            variables: {
                input: {
                    email: values.email,
                    name: values.username,
                },
            },
        });
    };// Здесь у меня хранится запрос на обновление юзера, а точнее его профиля.



    const [schema, { onChange }] = useSchema(initialSchema);

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
                        <Table hasDividers>
                            <Table.Head>
                                <Table.Row>
                                    <Table.HeadCell>Name</Table.HeadCell>
                                    <Table.HeadCell textAlign="right">id</Table.HeadCell>
                                </Table.Row>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Adidas</Table.Cell>
                                    <Table.Cell textAlign="right">4</Table.Cell>
                                    
                                </Table.Row>
                            </Table.Body>
                            <Table.Foot fontWeight="semibold">
                                <Table.Row>
                                    <Table.Cell>Total</Table.Cell>
                                    <Table.Cell />
                                </Table.Row>
                            </Table.Foot>
                        </Table>
                    </Box>
                </Flex>
                <Flex alignX="right" >
                    <Box width="800px" height="520px"  >
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