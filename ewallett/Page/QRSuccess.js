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
            marginBottom: 20,
          }}>
          Payment Complete!
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '400',
            color: '#000',
            textAlign: 'center',
            marginBottom: 15,
          }}>
          Rp. 60,000
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.info.text}>20 August 2020</Text>
        <Text style={styles.info.text}>Merchant : Basicschool</Text>
        <Text style={styles.info.text}>Jl. Ciparay No 20B, Kota Bandung</Text>
      </View>
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('TabBottom');
        }}>
        <Text style={styles.Button.ButtonText}>FINISH</Text>
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
    text: {
      fontSize: 18,
      fontWeight: '400',
      color: '#FFF',
      marginVertical: 5,
    },
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
