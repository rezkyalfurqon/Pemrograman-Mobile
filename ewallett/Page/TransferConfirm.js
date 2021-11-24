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
      <TemplateTextInput placeholder="Nominal Transfer" />
      <Text
        style={{
          fontSize: 16,
          fontWeight: '400',
          color: '#000000',
          marginVertical: 5,
        }}>
        Receiver :
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '400',
          color: '#000000',
          marginVertical: 5,
        }}>
        YANA YANA YANA
      </Text>
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('TransferSuccess');
        }}>
        <Text style={styles.Button.ButtonText}>TRANSFER</Text>
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
