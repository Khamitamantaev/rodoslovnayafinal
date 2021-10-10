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


function UncontrolledDiagram(props) {

    var result = props.trees.find(obj => {
        return obj.name === props.currentTree
    })
    const branches = result?.branches
    useEffect(() => {
        console.log(result)
    }, [props.currentTree])

    const width = 166;
    const height = 166;

    return (
        <div style={{ height: '60rem' }}>
            <div>{props.currentTree}</div>

            {/* <Smile
                width={width}
                height={height}
                centerX={width / 2}
                centerY={height / 2}
                strokeWidth={20}
                eyeOffSetX={90}
                eyeOffSetY={100}
                eyeRadius={40}

                mouthRadius={140}
                mouthWidth={20}
            /> */}
            {/* <BarChart data={data} /> */}

            {branches && branches.length ?
                branches.map((tree) => (
                    <Smile
                        key={tree._id}
                        width={width}
                        height={height}
                        centerX={width / 2}
                        centerY={height / 2}
                        strokeWidth={10}
                        eyeOffSetX={30}
                        eyeOffSetY={30}
                        eyeRadius={10}

                        mouthRadius={40}
                        mouthWidth={10}
                    />
                )) : null}
        </div>
    );
}

export default UncontrolledDiagram;