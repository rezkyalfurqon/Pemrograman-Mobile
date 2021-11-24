import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import Kamera from '../assets/icons/kamera.svg';

const QRScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('kamera');
          navigation.navigate('QRConfirm');
        }}>
        <View style={styles.picture}>
          <Kamera width={30} height={30} fill={'#000000'} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  picture: {
    width: 320,
    height: 320,
    backgroundColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
