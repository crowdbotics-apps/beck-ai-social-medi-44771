import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const dummyData = {
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    username: 'johndoe',
    phoneNumber: '123-456-7890',
    profilePicture: 'https://tinyurl.com/42evm3m3',
    bio: 'This is my bio',
    followers: 100,
    following: 50,
    posts: [{
      id: 1,
      caption: 'This is my first post',
      image: 'https://tinyurl.com/42evm3m3',
      likes: 20,
      comments: 10
    } // More posts...
    ]
  };
  return <SafeAreaView style={_styles.FdViIKYu}>
      <ScrollView>
        <View style={_styles.neqNDSku}>
          <Image source={{
          uri: dummyData.profilePicture
        }} style={_styles.aTGTMkBn} />
          <Button title="Update profile picture" onPress={() => {}} />
          <Text style={_styles.gjfrIOGT}>{dummyData.fullName}</Text>
          <Text>{dummyData.email}</Text>
          <Text>{dummyData.username}</Text>
          <Text>{dummyData.phoneNumber}</Text>
          <Text>{dummyData.bio}</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>
          <Button title="Save" onPress={() => {}} />
          <Text>Followers: {dummyData.followers}</Text>
          <Text>Following: {dummyData.following}</Text>
          <Text>Posts: {dummyData.posts.length}</Text>
        </View>
        {dummyData.posts.map(post => <View key={post.id} style={_styles.JZvcxpok}>
            <Text>{post.caption}</Text>
            <TouchableOpacity onPress={() => {}}>
              <Image source={{
            uri: post.image
          }} style={_styles.WlWYvWxP} />
            </TouchableOpacity>
            <Text>Likes: {post.likes}</Text>
            <Text>Comments: {post.comments}</Text>
            <Button title="Remove post" onPress={() => {}} />
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

export default ProfileScreen;

const _styles = StyleSheet.create({
  FdViIKYu: {
    flex: 1,
    backgroundColor: "#fff"
  },
  neqNDSku: {
    alignItems: "center",
    padding: 20
  },
  aTGTMkBn: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  gjfrIOGT: {
    fontSize: 20,
    fontWeight: "bold"
  },
  JZvcxpok: {
    margin: 20
  },
  WlWYvWxP: {
    width: "100%",
    height: 200
  }
});