import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet } from 'react-native';

const UserScreen = () => {
  const [followers, setFollowers] = useState([{
    id: '1',
    name: 'User 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '2',
    name: 'User 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: '3',
    name: 'User 3',
    image: 'https://tinyurl.com/42evm3m3'
  } // Add more users as needed
  ]);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Followers</Text>
      <FlatList data={followers} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.userContainer}>
            <Image source={{
        uri: item.image
      }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </View>} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  name: {
    fontSize: 18,
    color: '#333'
  }
});
export default UserScreen;