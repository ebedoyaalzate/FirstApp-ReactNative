import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cajaUno}/>
        <View style={styles.cajaDos}/>
        <View style={styles.cajaTres}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',//center,flex-start,flex-end/alinea horizontal
    //justifyContent: 'center',//alinea vertical
  },
  cajaUno:{
    flex:1,
    backgroundColor: '#00ff00',
  },
  cajaDos:{
    flex:3,
    backgroundColor: '#90EE90',
  },
  cajaTres:{
    flex:1,
    backgroundColor: '#006400',
  },
});

export default App
