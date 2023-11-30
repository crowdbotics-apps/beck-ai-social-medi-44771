import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';

const ScreenComponent = () => {
  const dummyData = {
    username: 'John Doe',
    profilePicture: 'https://tinyurl.com/42evm3m3',
    caption: 'This is a caption',
    image: 'https://tinyurl.com/42evm3m3',
    likes: 123,
    comments: 45,
    followers: 678
  };
  return <SafeAreaView style={_styles.YtlxfciA}>
      <TextInput placeholder="Search" style={_styles.IEMSiKSp} />
      <ScrollView>
        <View style={_styles.iJMTlcUw}>
          <Text style={_styles.nOycANSg}>Trending posts</Text>
          <Text style={_styles.YUdONuXT}>Most liked</Text>
          <Text style={_styles.lMlbmkfS}>Most Commented</Text>
        </View>
        <View style={_styles.vgJsaCDh}>
          <Text style={_styles.FbMvEawO}>Search results for Feeds</Text>
          <View style={_styles.mLPrwiNw}>
            <Image source={{
            uri: dummyData.profilePicture
          }} style={_styles.ZYOWfnmu} />
            <Text style={_styles.QIHsVjbv}>{dummyData.username}</Text>
          </View>
          <Text>{dummyData.caption}</Text>
          <Image source={{
          uri: dummyData.image
        }} style={_styles.SMMbhIeE} />
          <View style={_styles.InBIIeKF}>
            <Text>{dummyData.likes} likes</Text>
            <Text>{dummyData.comments} comments</Text>
          </View>
          <TouchableOpacity style={_styles.THdlPTyL}>
            <Text>Go to Comments screen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.oYDJurOr}>
            <Text>Report</Text>
          </TouchableOpacity>
        </View>
        <View style={_styles.CzQkQuab}>
          <Text style={_styles.muDuZlRv}>Search for users</Text>
          <View style={_styles.NuleBtjq}>
            <Image source={{
            uri: dummyData.profilePicture
          }} style={_styles.BNnzYXQX} />
            <Text style={_styles.ppEIgSyl}>{dummyData.username}</Text>
          </View>
          <Text>{dummyData.followers} followers</Text>
          <TouchableOpacity style={_styles.oKWSKGjE}>
            <Text>Go to Other user profile screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  YtlxfciA: {
    flex: 1,
    backgroundColor: "#fff"
  },
  IEMSiKSp: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  iJMTlcUw: {
    padding: 10
  },
  nOycANSg: {
    fontSize: 20,
    fontWeight: "bold"
  },
  YUdONuXT: {
    fontSize: 20,
    fontWeight: "bold"
  },
  lMlbmkfS: {
    fontSize: 20,
    fontWeight: "bold"
  },
  vgJsaCDh: {
    padding: 10
  },
  FbMvEawO: {
    fontSize: 20,
    fontWeight: "bold"
  },
  mLPrwiNw: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  ZYOWfnmu: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  QIHsVjbv: {
    marginLeft: 10
  },
  SMMbhIeE: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  InBIIeKF: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  THdlPTyL: {
    marginTop: 10
  },
  oYDJurOr: {
    marginTop: 10
  },
  CzQkQuab: {
    padding: 10
  },
  muDuZlRv: {
    fontSize: 20,
    fontWeight: "bold"
  },
  NuleBtjq: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  BNnzYXQX: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  ppEIgSyl: {
    marginLeft: 10
  },
  oKWSKGjE: {
    marginTop: 10
  }
});