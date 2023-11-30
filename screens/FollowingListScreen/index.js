import React from 'react';
import { SafeAreaView, View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';

const FollowingList = () => {
  const users = [{
    id: '1',
    name: 'User 1'
  }, {
    id: '2',
    name: 'User 2'
  }, {
    id: '3',
    name: 'User 3'
  }, {
    id: '4',
    name: 'User 4'
  }, {
    id: '5',
    name: 'User 5'
  }];

  const handleUnfollow = id => {
    console.log(`Unfollow user with id: ${id}`);
  };

  const renderItem = ({
    item
  }) => <View style={styles.item}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.name}>{item.name}</Text>
      <Button title="Unfollow" onPress={() => handleUnfollow(item.id)} />
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={users} renderItem={renderItem} keyExtractor={item => item.id} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16
  }
});
export default FollowingList;