import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Image, ScrollView } from 'react-native';

const ReportScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.title}>Why are you reporting this?</Text>
        <Text style={styles.option}>Spam</Text>
        <Text style={styles.option}>Pornography</Text>
        <Text style={styles.option}>Hatred and bullying</Text>
        <Text style={styles.option}>Self-harm</Text>
        <Text style={styles.option}>Violent, gory, and harmful content</Text>
        <Text style={styles.option}>Child porn</Text>
        <Text style={styles.option}>Illegal activities (e.g. drug use)</Text>
        <Text style={styles.option}>Deceptive content</Text>
        <Text style={styles.option}>Copyright and trademark infringement</Text>
        <Text style={styles.option}>Other (input)</Text>
        <TextInput style={styles.input} placeholder="Add notes" />
        <View style={styles.buttonContainer}>
          <Button title="Report" color="#841584" />
          <Button title="Cancel" color="#841584" />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  option: {
    fontSize: 18,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default ReportScreen;