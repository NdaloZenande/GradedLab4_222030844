import React, { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from './screens/MenuScreen';
import AddressDetailsScreen from './screens/AddressDetailsScreen';
import PaymentDetailsScreen from './screens/PaymentDetailsScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ formData, setFormData, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function ProfileSetupNavigator() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="AddressDetails" component={AddressDetailsScreen} />
      <ProfileStack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
    </ProfileStack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="ProfileSetup" component={ProfileSetupNavigator} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
