import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const tiers = [{
    name: 'Free Tier',
    services: ['App photos with captions to the app']
  }, {
    name: 'Tier 1',
    price: '$',
    services: ['App photos with captions to the app', 'Train AI models', 'Use AI to modify the image (Change the background of the trained models or uploaded image)']
  }, {
    name: 'Tier 2',
    price: '$$',
    services: ['App photos with captions to the app', 'Train AI models', 'Use AI to modify the image', 'Change the background of the trained models', 'Choose from a list of categories and use AI prompts to modify the uploaded image and trained models', 'Add prompts to modify the uploaded image- Change clothes, change the background, edit content, etc based on the prompt', 'Create AI headshots of the trained models']
  }];
  return <SafeAreaView style={styles.container}>
      {tiers.map((tier, index) => <View key={index} style={styles.tierContainer}>
          <Text style={styles.tierName}>{tier.name}</Text>
          {tier.price && <Text style={styles.tierPrice}>{tier.price}</Text>}
          {tier.services.map((service, index) => <Text key={index} style={styles.service}>
              {service}
            </Text>)}
          <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
          <Button title="Choose" onPress={() => {}} />
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  tierContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  tierName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  tierPrice: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10
  },
  service: {
    fontSize: 14,
    marginBottom: 5
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10
  }
});
export default SubscriptionScreen;