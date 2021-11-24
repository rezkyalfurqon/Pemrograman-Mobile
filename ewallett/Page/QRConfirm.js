import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Payment from '../assets/icons/payment.svg';

const QRConfirm = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        backgroundColor: '#FFF',
      }}>
      <Payment width={200} height={200} style={{marginBottom: 10}} />
      <View style={{marginBottom: 5}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#000',
            textAlign: 'center',
          }}>
          Rp. 60,000
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          height: 0,
          width: 280,
          borderColor: '#B2B2B2',
          marginBottom: 20,
        }}></View>
      <View style={styles.info}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
            color: '#FFF',
            marginVertical: 5,
          }}>
          Payment to
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#FFF',
            marginVertical: 5,
          }}>
          Basicschool
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: '#FFF',
            marginVertical: 5,
          }}>
          Jl. Ciparay No 20B, Kota Bandung
        </Text>
      </View>
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('QRSuccess');
        }}>
        <Text style={styles.Button.ButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QRConfirm;

const styles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
  },
  info: {
    width: '100%',
    backgroundColor: '#4982C1',
    alignItems: 'center',
    paddingVertical: 15,
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
