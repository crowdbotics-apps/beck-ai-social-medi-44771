import React from 'react';
import { SafeAreaView, View, Text, Image, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const dummyData = [{
  id: '1',
  username: 'User1',
  profilePic: 'https://tinyurl.com/42evm3m3',
  caption: 'This is a caption',
  image: 'https://tinyurl.com/42evm3m3',
  likes: 123,
  comments: 4
} // Add more data as needed
];

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Create a post" onPress={() => {}} />
        <Button title="Create an AI Headshot" onPress={() => {}} />
        <Ionicons name="settings" size={24} color="black" onPress={() => {}} />
        <Ionicons name="person-circle" size={24} color="black" onPress={() => {}} />
      </View>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.feedItem}>
            <Image source={{
        uri: item.profilePic
      }} style={styles.profilePic} />
            <Text>{item.username}</Text>
            <Text>{item.caption}</Text>
            <TouchableOpacity onPress={() => {}}>
              <Image source={{
          uri: item.image
        }} style={styles.feedImage} />
            </TouchableOpacity>
            <Text>{item.likes} likes</Text>
            <Text>{item.comments} comments</Text>
            <View style={styles.icons}>
              <Ionicons name="heart" size={24} color="black" onPress={() => {}} />
              <Ionicons name="chatbubble" size={24} color="black" onPress={() => {}} />
              <Ionicons name="share-social" size={24} color="black" onPress={() => {}} />
              <Ionicons name="repeat" size={24} color="black" onPress={() => {}} />
              <Ionicons name="alert-circle" size={24} color="black" onPress={() => {}} />
            </View>
          </View>} />
      <View style={styles.navBar}>
        <Ionicons name="home" size={24} color="black" onPress={() => {}} />
        <Ionicons name="search" size={24} color="black" onPress={() => {}} />
        <Ionicons name="person-circle" size={24} color="black" onPress={() => {}} />
        <Ionicons name="chatbubble" size={24} color="black" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  feedItem: {
    padding: 10
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  feedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd'
  }
});
export default ScreenComponent;