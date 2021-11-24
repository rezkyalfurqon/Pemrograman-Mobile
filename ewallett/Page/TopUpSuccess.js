import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Topup from '../assets/icons/dompettopup.svg';

const TopUpSuccess = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 20,
      }}>
      <Topup width={200} height={200} />
      <Text style={styles.text}>Top Up Complete</Text>
      <Text style={styles.text}>Rp. 60,000</Text>
      <View style={styles.info}>
        <Text style={styles.info.text}>21 Agustus 2021</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.info.text}>Via Mandiri</Text>
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

export default TopUpSuccess;

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
