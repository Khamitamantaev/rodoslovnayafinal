import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Canvas, Svg, Circle, Line } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#5199FF'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// const nest = (items, _id = null, link = 'parentID') =>
//                 items
//                     .filter(item => item[link] === _id)
//                     .map(item => ({ ...item, children: nest(items, item._id) }));

// Create Document Component
const MyDocument = ({ data }) => {
  console.log(data)

  return <Document>
    <Page size="A2" style={styles.page}>
    <Svg viewBox="0 0 100 100">
        <Circle
          cx="20"
          cy="20"
          r="5"
          fill="tomato"
          stroke="gray"
        />
        <Line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          strokeWidth={1}
          stroke="rgb(255,0,0)"
        />
      </Svg>
    </Page>
  </Document>
}

export default MyDocument