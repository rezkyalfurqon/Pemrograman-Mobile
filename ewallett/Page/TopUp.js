import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Topup from '../assets/icons/dompettopup.svg';
import TextInputTemplate from '../Component/TemplateTextInput';

const TopUp = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 50,
      }}>
      <Topup width={200} height={200} style={{marginBottom: 30}} />
      <TextInputTemplate placeholder="Nominal Top Up" type="numeric" />
      <TouchableOpacity
        style={styles.Button.ButtonStyle}
        onPress={() => {
          navigation.navigate('TopUpSuccess');
        }}>
        <Text style={styles.Button.ButtonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopUp;

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
