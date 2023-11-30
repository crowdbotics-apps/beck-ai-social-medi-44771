import React from 'react';
import { SafeAreaView, View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  card: '**** **** **** 1234'
}, {
  id: '2',
  card: '**** **** **** 5678'
}, {
  id: '3',
  card: '**** **** **** 9012'
}];

const PaymentScreen = ({
  navigation
}) => {
  const renderItem = ({
    item
  }) => <TouchableOpacity onPress={() => console.log('Card selected')}>
      <Text>{item.card}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Payment Amount</Text>
      <Text style={styles.details}>Details of the Selected Model</Text>
      <Text style={styles.addCardDetails}>Add card details</Text>
      <TextInput placeholder="Card holder name" style={styles.input} />
      <TextInput placeholder="Account number" style={styles.input} />
      <TextInput placeholder="CVV" style={styles.input} />
      <Button title="Pay" onPress={() => console.log('Payment successful')} />
      <Text style={styles.listTitle}>List of added cards</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={styles.buttonContainer}>
        <Button title="Pay" onPress={() => console.log('Payment successful')} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>;
};

export default PaymentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 20
  },
  addCardDetails: {
    fontSize: 18,
    marginTop: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginTop: 10,
    padding: 10
  },
  listTitle: {
    fontSize: 18,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '60%'
  }
});