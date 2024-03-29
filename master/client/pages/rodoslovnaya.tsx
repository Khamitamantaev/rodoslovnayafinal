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
import Tree from 'react-d3-tree'
import { RawNodeDatum } from 'react-d3-tree/lib/types/common';
import { AddMemberModal } from 'components/modal/AddMemberModal';
import syled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from 'components/pdf/Document';

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
            var result = trees.find(obj => obj._id === currentTree)
            const nest = (items, _id = null, link = 'parentID') =>
                items
                    .filter(item => item[link] === _id)
                    .map(item => ({ ...item, children: nest(items, item._id) }))
            if (result) {
                setTree(nest(result.branches))
            }
        }
    }, [currentTree, trees])

    const handleClick = (nodeDatum) => {
        setCurrentBranch({
            _id: nodeDatum._id,
            name: nodeDatum.name,
            treeID: currentTree,
            rootUser: nodeDatum.rootUser,
            parentID: nodeDatum._id,
        })
        console.log(currentBranch)
        setIsOpen(!isOpen)
    }

    const renderForeignObjectNode = ({
        nodeDatum,
        toggleNode,
        foreignObjectProps,
        handleClick
    }) =>

    (
        <g>
            <circle r={15} fill="#1e90ff" ></circle>
            {/* `foreignObject` requires width & height to be explicitly set. */}
            <foreignObject {...foreignObjectProps}>
                <div style={{ border: "1px solid black", backgroundColor: "#eee8aa", fontSize: "12px" }} >
                    <button style={{ width: "100%" }} onClick={() => handleClick(nodeDatum)}>Добавить элемент</button>
                    <h3 style={{ textAlign: "center", font: "bold italic large serif", color: "#191970", fontSize: '20px' }}>{nodeDatum.name}</h3>
                    {nodeDatum.children && (
                        <button style={{ width: "100%" }} onClick={toggleNode}>
                            {nodeDatum.__rd3t.collapsed ? "Развернуть" : "Свернуть"}
                        </button>
                    )}
                </div>
            </foreignObject>
        </g>
    );


    const onSubmitTree = (values) => {
      
        return createTree({
            variables: {
                input: {
                    name: values.name
                }
            }
        })
    }



    const straightPathFunc = (linkDatum, orientation) => {
        const { source, target } = linkDatum;
        return orientation === 'horizontal'
            ? `M${source.y},${source.x}L${target.y},${target.x}`
            : `M${source.x},${source.y}L${target.x},${target.y}`;
    };
    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };
    const data = { something: "Hi!" };
    return (
        <App title={t('Ваша родословная')} description={t('Здесь можно создать и распечатать свою родословную')} requiresUser>
            <Flex alignX="center">
                <Flex alignX="left">
                    <Box width="300px" height="520px" padding="10px" >
                        {/* <Button palette="primary" style={{ marginLeft:"100px"}} >Save PDF</Button> */}
                        {/* <PDFDownloadLink document={<MyDocument data={tree} />} fileName="rodoslovnaya.pdf">
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading document...' :  <Button palette="primary" style={{ marginLeft:"100px"}} >Save PDF</Button>
                            }
                        </PDFDownloadLink> */}
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
                    <Box width="800px" height="600px" >
                        <Tree data={tree}
                            onNodeClick={handleClick}
                            nodeSize={{ x: 200, y: 100 }}
                            renderCustomNodeElement={(rd3tProps) =>
                                renderForeignObjectNode({ ...rd3tProps, foreignObjectProps, handleClick })
                            }
                            pathFunc={straightPathFunc}
                            orientation={"vertical"} />
                        <AddMemberModal isOpen={isOpen} onClose={close} currentBranch={currentBranch} currentTree={currentTree} />

                    </Box>
                </Flex>
            </Flex>
        </App>
    )
}

export default withApolloWithSubscriptions(RodoslovnayaPage);