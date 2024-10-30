import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from '../screens/TransactionsList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createStackNavigator();

const transactions = [
  { id: '1', name: 'Grocery', amount: 40, date: '2024-10-15', icon: 'cart' },
  { id: '2', name: 'Transport', amount: 15, date: '2024-10-16', icon: 'bus' },
  { id: '3', name: 'Utilities', amount: 80, date: '2024-10-17', icon: 'flash' },
];

export default function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionsList"
        options={{ headerShown: false }}
      >
        {props => <TransactionsList {...props} transactions={transactions} />}
      </Stack.Screen>
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetail} 
        options={{ title: 'Transaction Detail', headerBackTitle: '' }}
      />
    </Stack.Navigator>
  );
}