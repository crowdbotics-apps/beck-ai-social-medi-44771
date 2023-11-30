import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, Share } from 'react-native';
const shareOptions = {
  title: 'Share via',
  message: 'Check out this cool app!',
  url: 'https://tinyurl.com/42evm3m3'
};

const App = () => {
  const onSharePress = () => {
    Share.share(shareOptions);
  };

  return <SafeAreaView style={_styles.SKxpeBwC}>
      <View style={_styles.zeRSGKCZ}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.LIeIgHuv} />
        <Text style={_styles.qojIyCIk}>Share this App</Text>
      </View>
      <Button title="Share" onPress={onSharePress} />
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  SKxpeBwC: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },
  zeRSGKCZ: {
    marginBottom: 20,
    alignItems: "center"
  },
  LIeIgHuv: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  qojIyCIk: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10
  }
});