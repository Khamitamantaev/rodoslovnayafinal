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


function UncontrolledDiagram(props) {

    var result = props.trees.find(obj => {
        return obj.name === props.currentTree
    })
    const branches = result?.branches
    useEffect(() => {   
        console.log(result)
    }, [props.currentTree])

    const data = [
        {year: 1980, efficiency: 24.3, sales: 8949000},
        {year: 1985, efficiency: 27.6, sales: 10979000},
        {year: 1990, efficiency: 28, sales: 9303000},
        {year: 1991, efficiency: 28.4, sales: 8185000},
        {year: 1992, efficiency: 27.9, sales: 8213000},
        {year: 1993, efficiency: 28.4, sales: 8518000},
        {year: 1994, efficiency: 28.3, sales: 8991000},
        {year: 1995, efficiency: 28.6, sales: 8620000},
        {year: 1996, efficiency: 28.5, sales: 8479000},
        {year: 1997, efficiency: 28.7, sales: 8217000},
        {year: 1998, efficiency: 28.8, sales: 8085000},
        {year: 1999, efficiency: 28.3, sales: 8638000},
        {year: 2000, efficiency: 28.5, sales: 8778000},
        {year: 2001, efficiency: 28.8, sales: 8352000},
        {year: 2002, efficiency: 29, sales: 8042000},
        {year: 2003, efficiency: 29.5, sales: 7556000},
        {year: 2004, efficiency: 29.5, sales: 7483000},
        {year: 2005, efficiency: 30.3, sales: 7660000},
        {year: 2006, efficiency: 30.1, sales: 7762000},
        {year: 2007, efficiency: 31.2, sales: 7562000},
        {year: 2008, efficiency: 31.5, sales: 6769000},
        {year: 2009, efficiency: 32.9, sales: 5402000},
        {year: 2010, efficiency: 33.9, sales: 5636000},
        {year: 2011, efficiency: 33.1, sales: 6093000},
        {year: 2012, efficiency: 35.3, sales: 7245000},
        {year: 2013, efficiency: 36.4, sales: 7586000},
        {year: 2014, efficiency: 36.5, sales: 7708000},
        {year: 2015, efficiency: 37.2, sales: 7517000},
        {year: 2016, efficiency: 37.7, sales: 6873000},
        {year: 2017, efficiency: 39.4, sales: 6081000},
      ]

    return (
        <div style={{ height: '60rem' }}>
            <div>{props.currentTree}</div>
            <BarChart data={data} />
            {/* <List>
            { branches && branches.length ?
                branches.map((tree) => (
                    <List.Item key={tree._id}>{tree._id}</List.Item>
               )) : null}
            </List> */}
        </div>
    );
}

export default UncontrolledDiagram;