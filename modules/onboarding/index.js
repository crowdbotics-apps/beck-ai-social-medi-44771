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
  return <SafeAreaView style={_styles.pglDQRuM}>
      <ScrollView>
        <View style={_styles.IAqsKreM}>
          <Image source={{
          uri: dummyData.profilePicture
        }} style={_styles.lKszomUC} />
          <Button title="Update profile picture" onPress={() => {}} />
          <Text style={_styles.StgBOwPy}>{dummyData.fullName}</Text>
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
        {dummyData.posts.map(post => <View key={post.id} style={_styles.UBQwpQpR}>
            <Text>{post.caption}</Text>
            <TouchableOpacity onPress={() => {}}>
              <Image source={{
            uri: post.image
          }} style={_styles.jrmMVZeU} />
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
  pglDQRuM: {
    flex: 1,
    backgroundColor: "#fff"
  },
  IAqsKreM: {
    alignItems: "center",
    padding: 20
  },
  lKszomUC: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  StgBOwPy: {
    fontSize: 20,
    fontWeight: "bold"
  },
  UBQwpQpR: {
    margin: 20
  },
  jrmMVZeU: {
    width: "100%",
    height: 200
  }
});