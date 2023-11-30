import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, ScrollView, Picker } from 'react-native';

const ScreenComponent = () => {
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [aiPrompt, setAiPrompt] = useState('');
  const [model, setModel] = useState('');
  const categories = ['Animal', 'Cosplay', 'AI Headshot', 'Art'];
  const models = ['Model 1', 'Model 2', 'Model 3'];
  return <SafeAreaView style={_styles.zJWzvWJt}>
      <ScrollView style={_styles.TaDWwCej}>
        <Image style={_styles.BIXuAHIm} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <TextInput style={_styles.xKSnCVcA} onChangeText={text => setCaption(text)} value={caption} placeholder="Enter Caption" />
        <TextInput style={_styles.lvxDwKDx} onChangeText={text => setTags(text)} value={tags} placeholder="Include #tags" />
        <Text style={_styles.ZmdWBwqa}>Categories</Text>
        <Picker selectedValue={category} style={_styles.BjvKCHXx} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
          {categories.map((category, index) => <Picker.Item key={index} label={category} value={category} />)}
        </Picker>
        <TextInput style={_styles.WHdLwTWf} onChangeText={text => setAiPrompt(text)} value={aiPrompt} placeholder="Enter AI-prompt" />
        <Text style={_styles.vapbcPNz}>Include trained models</Text>
        <Picker selectedValue={model} style={_styles.NZJVtelq} onValueChange={(itemValue, itemIndex) => setModel(itemValue)}>
          {models.map((model, index) => <Picker.Item key={index} label={model} value={model} />)}
        </Picker>
        <Button title="Generate" onPress={() => {}} />
        <View style={_styles.KSxmrgzx} />
        <Button title="Add post" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  zJWzvWJt: {
    flex: 1,
    backgroundColor: "#fff"
  },
  TaDWwCej: {
    padding: 20
  },
  BIXuAHIm: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  xKSnCVcA: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  lvxDwKDx: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  ZmdWBwqa: {
    marginBottom: 10
  },
  BjvKCHXx: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  WHdLwTWf: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20
  },
  vapbcPNz: {
    marginBottom: 10
  },
  NZJVtelq: {
    height: 50,
    width: "100%",
    marginBottom: 20
  },
  KSxmrgzx: {
    height: 20
  }
});