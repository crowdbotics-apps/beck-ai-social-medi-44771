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
  return <SafeAreaView style={_styles.kqnwxbIk}>
      <TextInput placeholder="Search" style={_styles.EsijljHI} />
      <ScrollView>
        <View style={_styles.eQCSxiZK}>
          <Text style={_styles.ZxEQgEAu}>Trending posts</Text>
          <Text style={_styles.EmwxXzsB}>Most liked</Text>
          <Text style={_styles.jevTckSh}>Most Commented</Text>
        </View>
        <View style={_styles.LvlIrZzy}>
          <Text style={_styles.RTrNaGgt}>Search results for Feeds</Text>
          <View style={_styles.tkccUeWH}>
            <Image source={{
            uri: dummyData.profilePicture
          }} style={_styles.MSworQfw} />
            <Text style={_styles.RjzzlhyD}>{dummyData.username}</Text>
          </View>
          <Text>{dummyData.caption}</Text>
          <Image source={{
          uri: dummyData.image
        }} style={_styles.bLIkCxmO} />
          <View style={_styles.NgXkKWhN}>
            <Text>{dummyData.likes} likes</Text>
            <Text>{dummyData.comments} comments</Text>
          </View>
          <TouchableOpacity style={_styles.uGJUmuVv}>
            <Text>Go to Comments screen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.BbDnFAif}>
            <Text>Report</Text>
          </TouchableOpacity>
        </View>
        <View style={_styles.Osxiafes}>
          <Text style={_styles.bRhTbaHr}>Search for users</Text>
          <View style={_styles.IzphhtMu}>
            <Image source={{
            uri: dummyData.profilePicture
          }} style={_styles.EmQBkLAa} />
            <Text style={_styles.KZBSgTVh}>{dummyData.username}</Text>
          </View>
          <Text>{dummyData.followers} followers</Text>
          <TouchableOpacity style={_styles.XJIrtVCV}>
            <Text>Go to Other user profile screen</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default ScreenComponent;

const _styles = StyleSheet.create({
  kqnwxbIk: {
    flex: 1,
    backgroundColor: "#fff"
  },
  EsijljHI: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1
  },
  eQCSxiZK: {
    padding: 10
  },
  ZxEQgEAu: {
    fontSize: 20,
    fontWeight: "bold"
  },
  EmwxXzsB: {
    fontSize: 20,
    fontWeight: "bold"
  },
  jevTckSh: {
    fontSize: 20,
    fontWeight: "bold"
  },
  LvlIrZzy: {
    padding: 10
  },
  RTrNaGgt: {
    fontSize: 20,
    fontWeight: "bold"
  },
  tkccUeWH: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  MSworQfw: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  RjzzlhyD: {
    marginLeft: 10
  },
  bLIkCxmO: {
    width: "100%",
    height: 200,
    marginTop: 10
  },
  NgXkKWhN: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  uGJUmuVv: {
    marginTop: 10
  },
  BbDnFAif: {
    marginTop: 10
  },
  Osxiafes: {
    padding: 10
  },
  bRhTbaHr: {
    fontSize: 20,
    fontWeight: "bold"
  },
  IzphhtMu: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  EmQBkLAa: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  KZBSgTVh: {
    marginLeft: 10
  },
  XJIrtVCV: {
    marginTop: 10
  }
});