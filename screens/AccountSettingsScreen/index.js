import React from 'react';
import { SafeAreaView, View, Text, Button, Switch, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const [isNotificationEnabled, setNotificationEnabled] = React.useState(false);
  const [isPushNotificationEnabled, setPushNotificationEnabled] = React.useState(false);
  const [isEmailNotificationEnabled, setEmailNotificationEnabled] = React.useState(false);
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Subscription</Text>
      <Text style={styles.text}>Current plan: Premium</Text>
      <Text style={styles.text}>Ending date: 31/12/2022</Text>
      <Text style={styles.text}>Plan features: Unlimited AI Models, Priority Support</Text>
      <Text style={styles.text}>Price: $9.99/month</Text>
      <Button title="Unsubscribe" />
      <Button title="Upgrade" />
      <Button title="My AI Models" />
      <View style={styles.switchContainer}>
        <Text>Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isNotificationEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => setNotificationEnabled(previousState => !previousState)} value={isNotificationEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Push Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isPushNotificationEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => setPushNotificationEnabled(previousState => !previousState)} value={isPushNotificationEnabled} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Email Notifications</Text>
        <Switch trackColor={{
        false: "#767577",
        true: "#81b0ff"
      }} thumbColor={isEmailNotificationEnabled ? "#f5dd4b" : "#f4f3f4"} ios_backgroundColor="#3e3e3e" onValueChange={() => setEmailNotificationEnabled(previousState => !previousState)} value={isEmailNotificationEnabled} />
      </View>
      <Button title="Privacy Policy" />
      <Button title="Terms and Conditions" />
      <Button title="Support/ Send Feedback" />
      <Button title="Delete Account" color="red" />
      <Button title="Log Out" color="blue" />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10
  }
});
export default SubscriptionScreen;