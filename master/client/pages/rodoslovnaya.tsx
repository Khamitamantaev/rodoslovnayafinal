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
import { useEffect, useState } from 'react';


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

    const UserListComponent = (props) => {
        let [initancestors, setInitAncestors] = useState([])

        const {
            data: dataAncestors,
            loading: loadingAncestors,
            // @ts-ignore
            error: errorAncestors,
          } = useFindAllAncestorsQuery();

        const ancestors = dataAncestors?.findAllAncestors;

        if(loadingAncestors){
            console.log('loading')
        }

        if(dataAncestors) {
          console.log(dataAncestors);
        //   setAncestors(dataAncestors.findAllAncestors)
        }
        if(errorAncestors) {
          console.log(errorAncestors);
          return "error"; // blocks rendering
        }
    
    return (
        <Table>
            <Table.Head>
                <Table.Row>
                    <Table.HeadCell>Name</Table.HeadCell>
                    <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
                    <Table.HeadCell textAlign="right">Price</Table.HeadCell>
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {ancestors?.map(ancestor => (
                    <Table.Row key={ancestor._id}>
                        <Table.Cell>{ancestor.name}</Table.Cell>
                        <Table.Cell textAlign="right">3</Table.Cell>
                        <Table.Cell textAlign="right">$9.00</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            <Table.Foot fontWeight="semibold">
                <Table.Row>
                    <Table.Cell>Total</Table.Cell>
                    <Table.Cell />
                    <Table.Cell textAlign="right">$36.00</Table.Cell>
                </Table.Row>
            </Table.Foot>
        </Table>
    );
}


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
                    <UserListComponent />
                </Box>
            </Flex>
        </Flex>
    </App>
)
}

export default withApolloWithSubscriptions(RodoslovnayaPage);