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



const MyDocument = ({ data }) => {
  console.log(data[0])

  return <Document>
    <Page size="A4" style={styles.page}>
      <Text>With Canvas!</Text>
      {/* <Canvas paint={doc}>

      </Canvas> */}
    </Page>
  </Document>
}

export default MyDocument




// const nest = (items, _id = null, link = 'parentID') =>
//                 items
//                     .filter(item => item[link] === _id)
//                     .map(item => ({ ...item, children: nest(items, item._id) }));

// Create Document Component

// const rendera = (tree) => {
//      return <Svg width="200" height="200">
//        <Text>{tree[0]}</Text>
//        <Circle
//         cx="20"
//         cy="20"
//         r="5"
//         fill='red'
//         stroke="black"
//         strokeWidth="1"
//         />
//      </Svg>
//   }


// const render = (target) => {
//   const [name, children] = target

//    return (<Svg width="200" height="200">
//       <Text>{name}</Text>
//       <Circle
//         cx="20"
//         cy="20"
//         r="10"
//         fill="red"
//       />
//     </Svg>);
//   }

  // if(!children) {
  //   return (<Svg width="200" height="200">
  //     <Text>{name}</Text>
  //     <Circle
  //       cx="20"
  //       cy="20"
  //       r="10"
  //       fill="red"
  //     />
  //   </Svg>);
  // }
  // else {
  //   for(const child of children) {
  //    return render(child)
  //   }
  // }
// }

//   return (<Svg width="200" height="200">
//       <Circle
//         cx="20"
//         cy="20"
//         r="10"
//         fill="red"
//       />
//     </Svg>);
// }