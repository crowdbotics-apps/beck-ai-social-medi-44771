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
  }) => <View style={_styles.DiprNibi}>
      <Image source={{
      uri: item.image
    }} style={_styles.YjPNBHyZ} />
      <View style={_styles.iBLhgQEG}>
        <Text style={_styles.szcpgolh}>{item.username}</Text>
        <Text style={_styles.nWHLXKQQ}>{item.comment}</Text>
        <Text style={_styles.GpBpauye}>{item.date}</Text>
      </View>
    </View>;

  return <SafeAreaView style={_styles.GRcXeuWd}>
      <Button title="Back" onPress={() => {}} />
      <FlatList data={dummyData} renderItem={renderItem} keyExtractor={item => item.id} />
      <View style={_styles.aexFnbFn}>
        <TextInput style={_styles.IGTGZPnZ} onChangeText={text => setComment(text)} value={comment} placeholder="Add a comment" />
        <Button title="Post" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default CommentScreen;

const _styles = StyleSheet.create({
  DiprNibi: {
    flexDirection: "row",
    margin: 10
  },
  YjPNBHyZ: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  iBLhgQEG: {
    marginLeft: 10
  },
  szcpgolh: {
    fontSize: 18
  },
  nWHLXKQQ: {
    fontSize: 16,
    color: "gray"
  },
  GpBpauye: {
    fontSize: 14,
    color: "gray"
  },
  GRcXeuWd: {
    flex: 1,
    backgroundColor: "#fff"
  },
  aexFnbFn: {
    flexDirection: "row",
    margin: 10
  },
  IGTGZPnZ: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  }
});