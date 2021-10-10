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
import BarChart from 'components/svg/BarChart';
import Smile from 'components/svg/Smile';
import TestCircle from 'components/svg/circlecomponents/testcircle';


function UncontrolledDiagram(props) {

    var result = props.trees.find(obj => {
        return obj.name === props.currentTree
    })
    const branches = result?.branches
    useEffect(() => {
        console.log(result)
    }, [props.currentTree])

    const width = 200;
    const height = 200;
    const circleRadius = 30;

    return (
        
        <div style={{ height: '60rem' }}>
            {/* <img src="./tree.jpg" width="900" height="600"/> */}
            <div>{props.currentTree}</div>
            {branches && branches.length ?
                branches.map((tree) => (
                    <TestCircle 
                    key={tree._id} 
                    width={width} 
                    height={height} 
                    circleRadius={circleRadius} 
                />
                )) : null}
        </div>
    );
}

export default UncontrolledDiagram;