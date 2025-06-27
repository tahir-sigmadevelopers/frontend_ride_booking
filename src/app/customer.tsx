import { Colors } from '@/utils/Constants';
import CustomButton from '@/utils/CustomButton';
import PhoneInput from '@/utils/PhoneInput';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CustomerScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleContinue = () => {
    // Here you would typically validate the phone number and proceed with authentication
    setLoading(true);
    console.log('Customer phone number:', phoneNumber);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // For now, just navigate back to the home screen
      router.back();
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/rider_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Register as Customer</Text>
        <Text style={styles.subtitle}>Enter your phone number to continue</Text>
        
        <PhoneInput
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        
        <CustomButton
          title="Continue"
          onPress={handleContinue}
          disabled={phoneNumber.length !== 10}
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  backButton: {
    padding: 16,
    paddingTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.theme,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
}); 