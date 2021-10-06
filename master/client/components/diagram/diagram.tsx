import * as React from 'react';
import { withApolloWithSubscriptions } from 'lib/withApollo';
import App from 'components/App';
import { useTranslation } from 'react-i18next';
import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import 'beautiful-react-diagrams/styles.css';
import { ActionButtons, Avatar, Box, Button, Flex, Input, Label, List, Paragraph, Table, Text, useToasts } from 'bumbag';
import { Formik, Form, Field } from 'formik';
import { InputField } from 'bumbag';
import { useCreateTreeMutation, useCreateUserMutation, useFindAllAncestorsQuery, useFindalltreesQuery, useFindTreebyIdQuery } from 'generated';
import { useEffect, useState } from 'react';


function UncontrolledDiagram(props) {

    var result = props.trees.find(obj => {
        return obj.name === props.currentTree
    })
    const branches = result?.branches
    useEffect(() => {   
        console.log(result)
    }, [props.currentTree])

    return (
        <div style={{ height: '60rem' }}>
            <div>{props.currentTree}</div>
            <List>
            { branches && branches.length ?
                branches.map((tree) => (
                    <List.Item key={tree._id}>{tree._id}</List.Item>
               )) : null}
            </List>
        </div>
    );
}

export default UncontrolledDiagram;