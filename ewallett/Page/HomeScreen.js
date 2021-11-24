import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Topup from '../assets/icons/LogoPlus';
import QR from '../assets/icons/QRCode';
import TFkiri from '../assets/icons/TFkiri';
import LatestTansaksi from '../Component/LatestTansaction';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 12,
      }}>
      <View style={styles.menuatas}>
        <Text style={[styles.menuatas.text, {fontSize: 14, color: '#575757'}]}>
          Your Balance :
        </Text>
        <Text style={[styles.menuatas.text, {fontSize: 34, color: '#575757'}]}>
          Rp. 7.777.777.777
        </Text>
      </View>
      <View style={styles.menuutama}>
        {/* Menu Top Up */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('TopUp');
          }}>
          <View>
            <View style={styles.menuutama.border}>
              <Topup width={30} height={30} />
            </View>
            <Text style={styles.menuutama.text}>Top Up</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Menu QR Pay */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('QR');
          }}>
          <View>
            <View style={styles.menuutama.border}>
              <QR width={30} height={30} />
            </View>
            <Text style={styles.menuutama.text}>QR Pay</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* MENU TF */}
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Transfer');
          }}>
          <View>
            <View style={styles.menuutama.border}>
              <TFkiri width={30} height={30} />
            </View>
            <Text style={styles.menuutama.text}>Transfer</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{marginTop: 10, color: '#575757'}}>
          5 Latest Transaction
        </Text>
        <ScrollView style={{height: '50%', marginTop: 10}}>
          <LatestTansaksi />
          <LatestTansaksi />
          <LatestTansaksi />
          <LatestTansaksi />
          <LatestTansaksi />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  menuatas: {
    alignItems: 'center',
    paddingVertical: 12,
    text: {
      width: '80%',
      fontWeight: '500',
    },
  },
  menuutama: {
    backgroundColor: '#4982C1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    margin: 20,
    borderRadius: 4,
    text: {
      color: '#FFF',
      marginTop: 5,
      fontWeight: '500',
      fontSize: 14,
      textAlign: 'center',
    },
    border: {
      width: 48,
      height: 48,
      backgroundColor: '#FFF',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
