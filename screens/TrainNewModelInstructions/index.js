import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Instructions to train AI model</Text>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.text}>Sample images</Text>
      <Text style={styles.text}>Textual instructions</Text>
      <Text style={styles.text}>Requirements</Text>
      <View style={styles.buttonContainer}>
        <Button title="Continue" color="#841584" accessibilityLabel="Learn more about this purple button" />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default App;