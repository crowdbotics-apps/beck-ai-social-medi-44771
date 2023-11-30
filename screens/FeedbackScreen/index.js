import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

const SupportScreen = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {// Handle submit logic here
  };

  return <SafeAreaView style={styles.container}>
      <ImageBackground source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Subject</Text>
          <TextInput style={styles.input} onChangeText={setSubject} value={subject} placeholder="Enter subject" />
          <Text style={styles.label}>Message</Text>
          <TextInput style={styles.input} onChangeText={setMessage} value={message} placeholder="Enter message" multiline />
          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Back" onPress={() => {}} />
        </View>
      </ImageBackground>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  inputContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    paddingLeft: 10
  }
});
export default SupportScreen;