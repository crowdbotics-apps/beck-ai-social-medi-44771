import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';

const AccountSetupScreen = () => {
  const [username, setUsername] = useState('');
  const [search, setSearch] = useState('');
  const users = [{
    id: '1',
    username: 'user1',
    followers: 100
  }, {
    id: '2',
    username: 'user2',
    followers: 200
  }, {
    id: '3',
    username: 'user3',
    followers: 300
  }];
  return <SafeAreaView style={_styles.dEGWxBvX}>
      <View style={_styles.fXRStBcr}>
        <Text style={_styles.hcVzrSWt}>Generate Username</Text>
        <Text style={_styles.MvBVRMyV}>Registered email</Text>
        <TextInput style={_styles.DjYzcyul} onChangeText={text => setUsername(text)} value={username} placeholder="Unique username" />
        <Button title="Continue" onPress={() => console.log('Continue')} />
      </View>
      <View style={_styles.PvJrTQYh}>
        <Text style={_styles.SUREsVmY}>Connect with friends</Text>
        <TextInput style={_styles.rVMbeOdQ} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
        <FlatList data={users} renderItem={({
        item
      }) => <View style={_styles.SKfAijND}>
              <Image style={_styles.QpJSOojK} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <View style={_styles.DYfkBMqT}>
                <Text style={_styles.JFAlhwLH}>{item.username}</Text>
                <Text style={_styles.DvaEXoLN}>{item.followers} followers</Text>
              </View>
              <TouchableOpacity style={_styles.fPkVQddA}>
                <Text style={_styles.UmfKpery}>Follow</Text>
              </TouchableOpacity>
            </View>} keyExtractor={item => item.id} />
        <Button title="Continue" onPress={() => console.log('Continue')} />
      </View>
    </SafeAreaView>;
};

export default AccountSetupScreen;

const _styles = StyleSheet.create({
  dEGWxBvX: {
    flex: 1,
    backgroundColor: "#fff"
  },
  fXRStBcr: {
    padding: 20
  },
  hcVzrSWt: {
    fontSize: 24,
    fontWeight: "bold"
  },
  MvBVRMyV: {
    fontSize: 16,
    color: "#888"
  },
  DjYzcyul: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  PvJrTQYh: {
    padding: 20
  },
  SUREsVmY: {
    fontSize: 24,
    fontWeight: "bold"
  },
  rVMbeOdQ: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  SKfAijND: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  QpJSOojK: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  DYfkBMqT: {
    marginLeft: 10
  },
  JFAlhwLH: {
    fontSize: 16,
    fontWeight: "bold"
  },
  DvaEXoLN: {
    fontSize: 14,
    color: "#888"
  },
  fPkVQddA: {
    marginLeft: "auto",
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  UmfKpery: {
    color: "#fff"
  }
});