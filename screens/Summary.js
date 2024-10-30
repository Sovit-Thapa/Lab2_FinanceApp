import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/SummaryStyles';

export default function Summary({ transactionList }) {
  const totalExpense = transactionList.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Summary</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Ionicons name="wallet" size={40} color="#4caf50" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Total Expense</Text>
          <Text style={styles.totalText}>${totalExpense}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}