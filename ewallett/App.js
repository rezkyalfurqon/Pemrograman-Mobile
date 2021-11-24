import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Page/SplashScreen';
import Login from './Page/Login';
import HomeScreen from './Page/HomeScreen';
import RegistrasiScreen from './Page/RegistrasiScreen';
import TopUp from './Page/TopUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HistoryTransaksi from './Page/HistoryTransaksi';
import IconHome from './assets/icons/home.svg';
import IconTransaksi from './assets/icons/TFatasbawah';
import Profil from './Page/Profil';
import IconProfil from './assets/icons/profile';
import TopUpSuccess from './Page/TopUpSuccess';
import QRScreen from './Page/QRScreen';
import QRConfirm from './Page/QRConfirm';
import QRSuccess from './Page/QRSuccess';
import Transfer from './Page/Transfer';
import TransferConfirm from './Page/TransferConfirm';
import TransferSuccess from './Page/TransferSuccess';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabBottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIcon: tabState => {
            return (
              <IconHome
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="HistoryTransaksi"
        component={HistoryTransaksi}
        options={{
          headerShown: false,
          tabBarLabel: 'Tansaksi',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIcon: tabState => {
            return (
              <IconTransaksi
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          headerShown: false,
          tabBarLabel: 'Profil',
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIcon: tabState => {
            return (
              <IconProfil
                width={32}
                height={32}
                fill={tabState.focused ? '#005690' : '#000'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="RegistrasiScreen"
          component={RegistrasiScreen}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Account Registration',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TopUp"
          component={TopUp}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Top Up',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TabBottom"
          component={TabBottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopUpSuccess"
          component={TopUpSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="QR"
          component={QRScreen}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'QR Payment',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="QRConfirm"
          component={QRConfirm}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Payment Confirmation',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="QRSuccess"
          component={QRSuccess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transfer"
          component={Transfer}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Transfer',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TransferConfirm"
          component={TransferConfirm}
          options={{
            headerStyle: {backgroundColor: '#005690'},
            headerTitle: 'Transfer',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="TransferSuccess"
          component={TransferSuccess}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
