import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';

const CommentScreen = () => {
  const [comment, setComment] = useState('');
  const dummyData = [{
    id: '1',
    username: 'User1',
    comment: 'This is a comment',
    date: '2021-09-01',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    username: 'User2',
    comment: 'This is another comment',
    date: '2021-09-02',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const renderItem = ({
    item
  }) => <View style={_styles.IRYvLcWk}>
      <Image source={{
      uri: item.image
    }} style={_styles.eZrXCFkj} />
      <View style={_styles.MDRFaZOp}>
        <Text style={_styles.dbRnRaBm}>{item.username}</Text>
        <Text style={_styles.NZdkGRKp}>{item.comment}</Text>
        <Text style={_styles.LqpnpJVs}>{item.date}</Text>
      </View>
    </View>;

  return <SafeAreaView style={_styles.oSaveEeS}>
      <Button title="Back" onPress={() => {}} />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={_styles.MtaHPFqu}>
        <TextInput style={_styles.TlbxiVVz} onChangeText={text => setComment(text)} value={comment} placeholder="Add a comment" />
        <Button title="Post" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default CommentScreen;

const _styles = StyleSheet.create({
  IRYvLcWk: {
    flexDirection: "row",
    margin: 10
  },
  eZrXCFkj: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  MDRFaZOp: {
    marginLeft: 10
  },
  dbRnRaBm: {
    fontSize: 18
  },
  NZdkGRKp: {
    fontSize: 16,
    color: "gray"
  },
  LqpnpJVs: {
    fontSize: 14,
    color: "gray"
  },
  oSaveEeS: {
    flex: 1,
    backgroundColor: "#fff"
  },
  MtaHPFqu: {
    flexDirection: "row",
    margin: 10
  },
  TlbxiVVz: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});