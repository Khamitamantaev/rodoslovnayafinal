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
import UncontrolledDiagram from 'components/diagram/diagram';
import Tree from 'react-d3-tree'
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import { AddMemberModal } from 'components/modal/AddMemberModal';


function RodoslovnayaPage() {
    const [tree, setTree] = useState<RawNodeDatum | RawNodeDatum[]>({
        name: 'Root',
        children: []
    })

    const [currentBranch, setCurrentBranch] = useState({
        _id: "",
        name: "",
        treeID: "",
        rootUser: "",
        parentID: "",
    })


    //for Modal 
    const [isOpen, setIsOpen] = useState(false)

    const close = () => setIsOpen(false)

    const handleSubmit = (name: string) => {

    }

    const [currentTree, setCurrentTree] = useState("");
    // const [trees, setTrees] = useState([{}])

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


    const {
        data: dataTrees,
        loading: loadingTrees,
        // @ts-ignore
        error: errorTrees
    } = useFindalltreesQuery({ pollInterval: 100 })

    const trees = dataTrees?.findalltrees;
    // console.log(trees)
    useEffect(() => {
        if (currentTree) {
            var result = trees.find(obj => {
                return obj._id === currentTree
            })
            // console.log(result.branches)
            const nest = (items, _id = null, link = 'parentID') =>
                items
                    .filter(item => item[link] === _id)
                    .map(item => ({ ...item, children: nest(items, item._id) }));
            console.log(
                nest(result.branches)
            )
            if (result.branches.length !== 0) {
                setTree(nest(result.branches))
            }
            else setTree(
                {
                    name: 'Root',
                    children: []
                }
            )
        }

    }, [dataTrees, currentTree])




    const onSubmitTree = (values) => {
        return createTree({
            variables: {
                input: {
                    name: values.name
                }
            }
        })
    }

    const handleClick = (nodeData, evt) => {
        // console.log(nodeData, evt);
        // console.log(nodeData.data)
        setCurrentBranch({
            _id: nodeData.data._id,
            name: nodeData.data.name,
            treeID: currentTree,
            rootUser: nodeData.data.rootUser,
            parentID: nodeData.data._id,
        })
        // console.log(currentBranch)
        setIsOpen(!isOpen)
    }

    const straightPathFunc = (linkDatum, orientation) => {
        const { source, target } = linkDatum;
        return orientation === 'horizontal'
            ? `M${source.y},${source.x}L${target.y},${target.x}`
            : `M${source.x},${source.y}L${target.x},${target.y}`;
    };

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
                                <Button isLoading={treeloading} disabled={treeloading} type="submit" palette="success">Success</Button>
                            </Form>
                        </Formik>
                        <Box marginTop="20px">
                            <Trees trees={trees} setCurrentTree={setCurrentTree} />
                        </Box>
                    </Box>
                </Flex>
                <Flex alignX="right" >
                    <Box width="800px" height="1000px"  >
                        <Tree data={tree} nodeSize={{ x: 200, y: 100 }} onNodeClick={handleClick} pathFunc={straightPathFunc} orientation={"vertical"} />
                        <AddMemberModal isOpen={isOpen} onClose={close} currentBranch={currentBranch} currentTree={currentTree} />

                    </Box>
                </Flex>
            </Flex>
        </App>
    )
}

export default withApolloWithSubscriptions(RodoslovnayaPage);