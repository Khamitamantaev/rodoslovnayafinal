import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Canvas } from '@react-pdf/renderer';

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
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Hello Khammerson!</Text>
      </View>
    </Page>
  </Document>
}

export default MyDocument