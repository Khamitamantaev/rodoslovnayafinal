import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { ActionButtons, Avatar, Box, Button, Flex, Input, Label, Paragraph, Table, Text, useToasts } from 'bumbag';
import { Formik, Form, Field } from 'formik';
import { InputField } from 'bumbag';
import { useCreateTreeMutation, useCreateUserMutation, useFindAllAncestorsQuery, useFindalltreesQuery } from 'generated';
import { useEffect, useState } from 'react';
import Trees from 'components/tree/trees';


function RodoslovnayaPage() {

    const [currentTree, setCurrentTree] = useState("");

    const { t } = useTranslation();
    const toasts = useToasts();

    const [createTree, { loading: treeloading, error }] = useCreateTreeMutation({
        onCompleted: () => {
            toasts.success({
                title: '',
                message: 'Дерево успешно добавлено',
            });
        },
    });


    const initialSchema = createSchema({
        nodes: [
            {
                id: 'node-1',
                content: 'Node 1',
                coordinates: [150, 60],
                outputs: [{ id: 'port-1', alignment: 'right' }],
                disableDrag: false
            },
        ]
    });

    const CustomRender = ({ id, content, data, inputs, outputs }) => (
        <Flex alignY="center">
            <Box width="80px" height="50px" backgroundColor="white"  >
                {/* <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
                 {inputs.map((port) => React.cloneElement(port, { style: { width: '20px', height: '20px', background: '#1B263B' } }))}
               {outputs.map((port) => React.cloneElement(port, { style: { width: '20px', height: '20px', background: '#1B263B' } }))}
           </div> */}
                <Avatar variant="circle" src="/bean.jpg" alt="Photo of Mr. Bean" />
                <Text use="cite" color='dark' >{content}</Text>
            </Box>
        </Flex>
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

    const {
        data: dataTrees,
        loading: loadingTrees,
        // @ts-ignore
        error: errorTrees
    } = useFindalltreesQuery({ pollInterval: 500 })

    const trees = dataTrees?.findalltrees;

    useEffect(() => {
        console.log(currentTree)
    }, [dataTrees, currentTree])


    const onSubmitTree = (values) => {
        return createTree({
            variables: {
                input: {
                    name: values.name,
                    rootUser: values.rootUser
                }
            }
        })
    }

    return (
        <App title={t('Ваша родословная')} description={t('Здесь можно создать и распечатать свою родословную')} requiresUser>
            <Flex alignX="center">
                <Flex alignX="left">
                    <Box width="300px" height="520px" padding="10px" >
                        <Label marginBottom="20px">Add Tree</Label>
                        <Formik
                            initialValues={{}}
                            onSubmit={onSubmitTree}
                        >
                            <Form>
                                <Field
                                    component={InputField.Formik}
                                    name="name"
                                    label="TreeName"
                                    marginBottom="10px"
                                />
                                <Field
                                    component={InputField.Formik}
                                    name="rootUser"
                                    label="ID"
                                    marginBottom="10px"
                                />
                                <Button isLoading={treeloading} disabled={treeloading} type="submit" palette="success">Success</Button>
                            </Form>
                        </Formik>
                        <Box marginTop="20px">
                            <Trees trees={trees} setCurrentTree={setCurrentTree}/>
                        </Box>
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