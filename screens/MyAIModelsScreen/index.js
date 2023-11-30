import React from 'react';
import { SafeAreaView, View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  name: 'Model 1',
  description: 'This is model 1'
}, {
  id: '2',
  name: 'Model 2',
  description: 'This is model 2'
}, {
  id: '3',
  name: 'Model 3',
  description: 'This is model 3'
} // Add more models as needed
];

const ModelScreen = () => {
  return <SafeAreaView style={styles.container}>
      <FlatList data={dummyData} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <Image style={styles.icon} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.icon} source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} />
              </TouchableOpacity>
            </View>
          </View>} />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add new model</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
  addButton: {
    backgroundColor: '#4B9DF8',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ModelScreen;