import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsStack from './navigations/TransactionStack';
import Summary from './screens/Summary';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const transactions = [
  { id: '1', name: 'Grocery', amount: 40, date: '2024-10-15', icon: 'cart' },
  { id: '2', name: 'Transport', amount: 15, date: '2024-10-16', icon: 'bus' },
  { id: '3', name: 'Utilities', amount: 80, date: '2024-10-17', icon: 'flash' },
];

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,  
        })}
      >
        <Tab.Screen name="Transactions">
          {props => <TransactionsStack {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Summary">
          {props => <Summary {...props} transactionList={transactions} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}