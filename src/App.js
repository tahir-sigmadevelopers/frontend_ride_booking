import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusBarHeight = Platform.OS === 'android' ? 30 : 50;

// Rider Screen Component
function RiderScreen({ onBack }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleContinue = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Rider registration successful with number: ' + phoneNumber);
      onBack(); // Go back to home screen
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.safeArea}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <View style={styles.content}>
          <Image 
            source={require('./assets/images/rider.jpg')} 
            style={styles.profileImage}
          />
          <Text style={styles.screenTitle}>Register as Rider</Text>
          <Text style={styles.screenSubtitle}>Enter your phone number to continue</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
          </View>
          
          <TouchableOpacity 
            style={[
              styles.continueButton, 
              phoneNumber.length === 10 ? styles.activeButton : styles.inactiveButton
            ]}
            onPress={handleContinue}
            disabled={phoneNumber.length !== 10 || loading}
          >
            <Text style={styles.continueButtonText}>
              {loading ? 'Loading...' : 'Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Customer Screen Component
function CustomerScreen({ onBack }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleContinue = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert('Customer registration successful with number: ' + phoneNumber);
      onBack(); // Go back to home screen
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.safeArea}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <View style={styles.content}>
          <Image 
            source={require('./assets/images/customer.jpg')} 
            style={styles.profileImage}
          />
          <Text style={styles.screenTitle}>Register as Customer</Text>
          <Text style={styles.screenSubtitle}>Enter your phone number to continue</Text>
          
          <View style={styles.inputContainer}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={10}
            />
          </View>
          
          <TouchableOpacity 
            style={[
              styles.continueButton, 
              phoneNumber.length === 10 ? styles.activeButton : styles.inactiveButton
            ]}
            onPress={handleContinue}
            disabled={phoneNumber.length !== 10 || loading}
          >
            <Text style={styles.continueButtonText}>
              {loading ? 'Loading...' : 'Continue'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// Main App Component
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  
  // Function to navigate back to home screen
  const goToHome = () => setCurrentScreen('home');
  
  // Render screens based on current state
  if (currentScreen === 'rider') {
    return <RiderScreen onBack={goToHome} />;
  }
  
  if (currentScreen === 'customer') {
    return <CustomerScreen onBack={goToHome} />;
  }
  
  // Home screen
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.title}>Welcome to Ride Booking Application</Text>
            <Text style={styles.subtitle}>Choose your role to continue</Text>
          </View>
          
          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={styles.optionCard}
              onPress={() => setCurrentScreen('rider')}
            >
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
            
            <TouchableOpacity 
              style={styles.optionCard}
              onPress={() => setCurrentScreen('customer')}
            >
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  safeArea: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    paddingTop: 30,
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
    marginBottom: 30,
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
  },
  // Styles for rider and customer screens
  backButton: {
    padding: 16,
    paddingTop: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#2E86C1',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  screenSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 30,
    paddingHorizontal: 12,
    height: 56,
  },
  prefix: {
    fontSize: 16,
    marginRight: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
  },
  continueButton: {
    width: '100%',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#2E86C1',
  },
  inactiveButton: {
    backgroundColor: '#ccc',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
}); 