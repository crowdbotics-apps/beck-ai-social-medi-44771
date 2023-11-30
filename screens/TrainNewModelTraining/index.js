import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [model, setModel] = useState('');
  const dummyData = new Array(13).fill('https://tinyurl.com/42evm3m3');
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Model name</Text>
        <TextInput style={styles.input} onChangeText={setModel} value={model} placeholder="Enter model name" />
      </View>
      <Text style={styles.label}>Upload images</Text>
      <ScrollView horizontal style={styles.imageContainer}>
        {dummyData.map((url, index) => <Image key={index} style={styles.image} source={{
        uri: url
      }} />)}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Train model" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default App;