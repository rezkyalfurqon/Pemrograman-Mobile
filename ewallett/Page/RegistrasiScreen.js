import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  textAlign,
  TouchableOpacity,
} from 'react-native';
import TextInputTemplate from '../Component/TemplateTextInput';

const RegistrasiScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20, backgroundColor: '#FFFFFF'}}>
      <View style={{marginTop: 95}}>
        <TextInputTemplate placeholder="Email" />
      </View>
      <View style={{marginTop: 15}}>
        <TextInputTemplate placeholder="Password" />
      </View>
      <View style={{marginTop: 15}}>
        <TextInputTemplate placeholder="Nama" />
      </View>
      <View style={{marginTop: 15}}>
        <TextInputTemplate placeholder="Nomor Handphone" />
      </View>
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('TabBottom');
        }}>
        <Text style={styles.Button.ButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrasiScreen;

const styles = StyleSheet.create({
  Button: {
    ButtonStyle: {
      width: 280,
      backgroundColor: '#4982C1',
      borderRadius: 4,
      paddingVertical: 10,
      marginTop: 30,
      alignSelf: 'center',
    },
    ButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});
