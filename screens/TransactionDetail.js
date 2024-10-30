import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/TransactionDetailStyles';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Transaction Details',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 10 }}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: '#ffffff' },
      headerTintColor: '#000',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.singleCard}>
        <View style={styles.detailRow}>
          <Ionicons name={transaction.icon} size={30} color="#4caf50" style={styles.icon} />
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{transaction.name}</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="cash" size={30} color="#ff9800" style={styles.icon} />
          <Text style={styles.label}>Amount</Text>
          <Text style={[styles.value, styles.amount]}>${transaction.amount}</Text>
        </View>

        <View style={styles.detailRow}>
          <Ionicons name="calendar" size={30} color="#3f51b5" style={styles.icon} />
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{transaction.date}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
