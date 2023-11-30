import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native';
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

  return <SafeAreaView style={_styles.SuEjNWzV}>
      <Text style={_styles.EUxWQHCR}>Payment Amount</Text>
      <Text style={_styles.fcHPbAfa}>Details of the selected Model</Text>
      <Text style={_styles.tCaESkWG}>Select the card</Text>
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <Button title="Add a new card" onPress={() => navigation.navigate('AddCard')} />
      <View style={_styles.iifKGrVA}>
        <Button title="Pay" onPress={() => console.log('Payment successful')} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
      <Image style={_styles.oJHLuhjO} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  SuEjNWzV: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  EUxWQHCR: {
    fontSize: 24,
    fontWeight: "bold"
  },
  fcHPbAfa: {
    fontSize: 20
  },
  tCaESkWG: {
    fontSize: 18,
    marginTop: 20
  },
  iifKGrVA: {
    flexDirection: "row",
    marginTop: 20
  },
  oJHLuhjO: {
    width: 100,
    height: 100,
    marginTop: 20
  }
});