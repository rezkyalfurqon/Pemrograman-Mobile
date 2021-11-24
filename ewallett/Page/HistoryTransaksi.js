import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LatestTansaksi from '../Component/LatestTansaction';

const HistoryTransaksi = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <Text style={{marginTop: 30, marginBottom: 10}}>Latest Transaction</Text>
      <ScrollView style={{}}>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
        <LatestTansaksi></LatestTansaksi>
      </ScrollView>
    </View>
  );
};

export default HistoryTransaksi;

const styles = StyleSheet.create({});
