import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LogoReact from '../assets/images/LogoReact.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <LogoReact width={179} height={179} style={{marginTop: 85}} />
      <Text style={styles.styletext}>e-wallet apps</Text>
      <Text
        style={{
          fontSize: 36,
          color: '#FFFFFF',
          marginTop: 52,
          textAlign: 'center',
        }}>
        Final Project
      </Text>
      <Text
        style={{
          fontSize: 36,
          color: '#FFFFFF',
          textAlign: 'center',
        }}>
        React Native
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#005690',
    flex: 1,
  },
  styletext: {
    fontSize: 36,
    color: '#FFFFFF',
    marginTop: 52,
    textAlign: 'center',
  },
});
