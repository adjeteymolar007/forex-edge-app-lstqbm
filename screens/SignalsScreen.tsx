
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import SignalCard from '../components/SignalCard';
import { mockSignals } from '../data/mockData';

export default function SignalsScreen() {
  const [filter, setFilter] = useState<'ALL' | 'ACTIVE' | 'CLOSED' | 'PENDING'>('ALL');

  const filteredSignals = filter === 'ALL' 
    ? mockSignals 
    : mockSignals.filter(signal => signal.status === filter);

  const filters = [
    { key: 'ALL', label: 'All' },
    { key: 'ACTIVE', label: 'Active' },
    { key: 'CLOSED', label: 'Closed' },
    { key: 'PENDING', label: 'Pending' },
  ];

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <Text style={commonStyles.title}>Trading Signals</Text>
        <Text style={commonStyles.textSecondary}>Professional forex signals</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {filters.map(filterItem => (
          <TouchableOpacity
            key={filterItem.key}
            style={[
              styles.filterButton,
              filter === filterItem.key && styles.activeFilterButton
            ]}
            onPress={() => setFilter(filterItem.key as any)}
          >
            <Text style={[
              styles.filterText,
              filter === filterItem.key && styles.activeFilterText
            ]}>
              {filterItem.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {filteredSignals.map(signal => (
          <SignalCard key={signal.id} signal={signal} />
        ))}
        
        {filteredSignals.length === 0 && (
          <View style={[commonStyles.card, styles.emptyCard]}>
            <Text style={commonStyles.textSecondary}>
              No {filter.toLowerCase()} signals found
            </Text>
          </View>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  filterContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    marginRight: 8,
  },
  activeFilterButton: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  activeFilterText: {
    color: colors.background,
  },
  emptyCard: {
    marginHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 32,
  },
  bottomPadding: {
    height: 100,
  },
});
