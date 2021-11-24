import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import TF from '../assets/icons/transfer';
import TemplateTextInput from '../Component/TemplateTextInput';

const Transfer = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: '#FFF',
      }}>
      <TF width={240} height={172} style={{marginBottom: 30}} />
      <TemplateTextInput placeholder="Receiver Phone Number" />
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('TransferConfirm');
        }}>
        <Text style={styles.Button.ButtonText}>CHECK NUMBER</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
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
