import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome to Ride Booking</Text>
          <Text style={styles.subtitle}>Choose your role to continue</Text>
        </View>
        
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionCard}>
            <Image 
              source={require('./assets/images/rider.jpg')} 
              style={styles.optionImage}
              resizeMode="cover"
            />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Are you a Rider?</Text>
              <Text style={styles.optionDescription}>Earn money by giving rides to customers</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Go as a Rider</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionCard}>
            <Image 
              source={require('./assets/images/customer.jpg')} 
              style={styles.optionImage}
              resizeMode="cover"
            />
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>Are you a Customer?</Text>
              <Text style={styles.optionDescription}>Book rides to your destination</Text>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Go as a Customer</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionImage: {
    width: '100%',
    height: 150,
  },
  optionTextContainer: {
    padding: 16,
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2E86C1',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
}); 