import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { ActionButtons, Avatar, Box, Button, Flex, Input, Label, Paragraph, Table, Text, useToasts } from 'bumbag';
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

        const {
            data: dataAncestors,
            loading: loadingAncestors,
            // @ts-ignore
            error: errorAncestors,
        } = useFindAllAncestorsQuery();

        const ancestors = dataAncestors?.findAllAncestors;

        if (loadingAncestors) {
            console.log('loading')
        }

        if (dataAncestors) {
            console.log(dataAncestors);
            //   setAncestors(dataAncestors.findAllAncestors)
        }
        if (errorAncestors) {
            console.log(errorAncestors);
            return "error"; // blocks rendering
        }

        return (
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell textAlign="right">Quantity</Table.HeadCell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {ancestors?.map(ancestor => (
                        <Table.Row key={ancestor._id}>
                            <Table.Cell>{ancestor.name}</Table.Cell>
                            <Table.Cell textAlign="right">{ancestor._id}</Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>
                <Table.Foot fontWeight="semibold">
                    <Table.Row>
                        <Table.Cell>Total</Table.Cell>
                        <Table.Cell />

                    </Table.Row>
                </Table.Foot>
            </Table>
        );
    }

    const initialSchema = createSchema({
        nodes: [
            {
                id: 'node-1',
                content: 'Node 1',
                coordinates: [150, 60],
                outputs: [{ id: 'port-1', alignment: 'right' }],
            },
        ]
    });

    const CustomRender = ({ id, content, data, inputs, outputs }) => (
        <Flex alignX="center">
            <Box width="50px" height="50px" backgroundColor="white"  >
            <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean"  />
            <Text use="cite" color='dark' >{content}</Text>
             <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                 {inputs.map((port) => React.cloneElement(port, { style: { width: '20px', height: '20px', background: '#1B263B' } }))}
               {outputs.map((port) => React.cloneElement(port, { style: { width: '20px', height: '20px', background: '#1B263B' } }))}
           </div>
            </Box>
        </Flex>
        // <div style={{ background: 'white' }}>
        //     <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" />
        //     <div style={{ textAlign: 'right' }}>
        //         <Button icon="times" size="small" onClick={() => data.onClick(id)} />
        //     </div>
        //     <div role="button" style={{ padding: '5px' }}>
        //         {content}
        //     </div>
        //     <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
        //         {inputs.map((port) => React.cloneElement(port, { style: { width: '25px', height: '25px', background: '#1B263B' } }))}
        //         {outputs.map((port) => React.cloneElement(port, { style: { width: '25px', height: '25px', background: '#1B263B' } }))}
        //     </div>
        // </div>
    );

    const UncontrolledDiagram = () => {

        const {
            data: dataAncestors,
            loading: loadingAncestors,
            // @ts-ignore
            error: errorAncestors
        } = useFindAllAncestorsQuery({ pollInterval: 500 });

        const ancestors = dataAncestors?.findAllAncestors;
        const [schema, { onChange, addNode, removeNode }] = useSchema(initialSchema);
        const deleteNodeFromSchema = (id) => {
            const nodeToRemove = schema.nodes.find(node => node.id === id);
            removeNode(nodeToRemove);
        };

        useEffect(() => {
            for (let i = 0; i < ancestors?.length; i++) {
                addNode({
                    id: ancestors[i]._id,
                    content: ancestors[i].name,
                    coordinates: [
                        schema.nodes[schema.nodes.length - 1].coordinates[0] + 100,
                        schema.nodes[schema.nodes.length - 1].coordinates[1],
                    ],
                    render: CustomRender,
                    data: { onClick: deleteNodeFromSchema },
                    inputs: [{ id: `port-${Math.random()}` }],
                    outputs: [{ id: `port-${Math.random()}` }],
                })
            }
        }, [loadingAncestors])






        return (
            <div style={{ height: '60rem' }}>
                {/* <Button color="primary" icon="plus" onClick={addNewNode}>Add new node</Button> */}
                <Diagram schema={schema} onChange={onChange} />
            </div>
        );
    };


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
                    <Box width="800px" height="1000px"  >
                        {/* <UserListComponent /> */}
                        <UncontrolledDiagram />
                    </Box>
                </Flex>
            </Flex>
        </App>
    )
}

export default withApolloWithSubscriptions(RodoslovnayaPage);