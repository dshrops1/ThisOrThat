import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text>ThisOrThat</Text>
          <Text>let others make the hard choices</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Sign Up"/>
          <Button title="Login"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',

  },
  logo: {
    backgroundColor: "#F30D0D",
    flex: 1
  },
  buttonContainer: {
    flex: 1
  }
});
