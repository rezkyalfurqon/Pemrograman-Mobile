import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const Profil = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#005690',
          alignItems: 'center',
          paddingVertical: 30,
          marginBottom: 20,
        }}>
        <Image
          source={require('../assets/images/profil.png')}
          style={styles.picture}
        />
        <Text style={styles.text}>Rezky Alfurqon</Text>
        <Text style={styles.text}>082117228874</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.Button.ButtonStyle}>
          <Text style={styles.Button.ButtonText}>CHANGE PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Button.ButtonStyle}>
          <Text style={styles.Button.ButtonText}>CHANGE PASSWORD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button.ButtonStyle}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={styles.Button.ButtonText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  picture: {
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '400',
    color: '#FFF',
    marginVertical: 4,
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
