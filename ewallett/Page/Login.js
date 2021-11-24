import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LogoReact from '../assets/images/LogoReact.svg';
import TextInputTemplate from '../Component/TemplateTextInput';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <View style={styles.Logo}>
        <LogoReact width={92.63} height={92.63} />
      </View>
      <Text style={styles.TextEwallet}>e-wallet</Text>
      <TextInputTemplate placeholder="Email" />
      <TextInputTemplate placeholder="Password" />
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('TabBottom');
        }}>
        <Text style={styles.Button.ButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 20, color: '#000', fontSize: 14, fontWeight: '400'}}
        onPress={() => {
          navigation.navigate('RegistrasiScreen');
        }}>
        <Text style={{fontSize: 14, color: '#4E4E4E'}}>Registrasi</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Logo: {
    backgroundColor: '#005690',
    borderRadius: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 69,
    marginHorizontal: 112,
  },
  TextEwallet: {
    fontSize: 24,
    color: '#4982C1',
    marginVertical: 23,
    textAlign: 'center',
  },
  Button: {
    ButtonStyle: {
      width: 280,
      backgroundColor: '#4982C1',
      borderRadius: 4,
      paddingVertical: 10,
      marginTop: 30,
      alignItems: 'center',
    },
    ButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
