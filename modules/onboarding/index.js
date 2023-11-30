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
  return <SafeAreaView style={_styles.fVTpxBPo}>
      <View style={_styles.VvtNBuYV}>
        <Text style={_styles.soxAJZzW}>Generate Username</Text>
        <Text style={_styles.lIRINJBD}>Registered email</Text>
        <TextInput style={_styles.XeswZQJw} onChangeText={text => setUsername(text)} value={username} placeholder="Unique username" />
        <Button title="Continue" onPress={() => console.log('Continue')} />
      </View>
      <View style={_styles.LNmRUrqu}>
        <Text style={_styles.MRfZmUba}>Connect with friends</Text>
        <TextInput style={_styles.YQkVArWi} onChangeText={text => setSearch(text)} value={search} placeholder="Search" />
        <FlatList data={users} renderItem={({
        item
      }) => <View style={_styles.ECIETRLk}>
              <Image style={_styles.TyFMmrJf} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <View style={_styles.UFYpSaHV}>
                <Text style={_styles.qjlYWejF}>{item.username}</Text>
                <Text style={_styles.gxhIBrHP}>{item.followers} followers</Text>
              </View>
              <TouchableOpacity style={_styles.nysRyqjy}>
                <Text style={_styles.msvwWLKj}>Follow</Text>
              </TouchableOpacity>
            </View>} keyExtractor={item => item.id} />
        <Button title="Continue" onPress={() => console.log('Continue')} />
      </View>
    </SafeAreaView>;
};

export default AccountSetupScreen;

const _styles = StyleSheet.create({
  fVTpxBPo: {
    flex: 1,
    backgroundColor: "#fff"
  },
  VvtNBuYV: {
    padding: 20
  },
  soxAJZzW: {
    fontSize: 24,
    fontWeight: "bold"
  },
  lIRINJBD: {
    fontSize: 16,
    color: "#888"
  },
  XeswZQJw: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  LNmRUrqu: {
    padding: 20
  },
  MRfZmUba: {
    fontSize: 24,
    fontWeight: "bold"
  },
  YQkVArWi: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10
  },
  ECIETRLk: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  TyFMmrJf: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  UFYpSaHV: {
    marginLeft: 10
  },
  qjlYWejF: {
    fontSize: 16,
    fontWeight: "bold"
  },
  gxhIBrHP: {
    fontSize: 14,
    color: "#888"
  },
  nysRyqjy: {
    marginLeft: "auto",
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5
  },
  msvwWLKj: {
    color: "#fff"
  }
});