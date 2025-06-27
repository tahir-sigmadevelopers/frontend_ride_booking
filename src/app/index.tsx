import { Colors } from '@/utils/Constants';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function RoleSelection() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Image 
          source={require('@/assets/images/rider_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Ride Booking</Text>
        <Text style={styles.subtitle}>Choose how you want to continue</Text>
        
        <View style={styles.buttonsContainer}>
          <Link href="/rider" asChild>
            <TouchableOpacity style={styles.roleButton}>
              <Image 
                source={require('@/assets/images/rider.jpg')}
                style={styles.roleImage}
              />
              <Text style={styles.roleText}>Go as Rider</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/customer" asChild>
            <TouchableOpacity style={styles.roleButton}>
              <Image 
                source={require('@/assets/images/customer.jpg')}
                style={styles.roleImage}
              />
              <Text style={styles.roleText}>Go as Customer</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
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
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  roleButton: {
    alignItems: 'center',
    width: '45%',
  },
  roleImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.theme,
  }
});