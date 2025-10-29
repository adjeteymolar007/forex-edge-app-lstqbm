
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import SignalCard from '../components/SignalCard';
import MarketCard from '../components/MarketCard';
import ForecastCard from '../components/ForecastCard';
import { mockSignals, mockMarketData, mockForecasts } from '../data/mockData';

export default function HomeScreen() {
  const activeSignals = mockSignals.filter(signal => signal.status === 'ACTIVE');
  const latestForecast = mockForecasts[0];

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>Forex Hub</Text>
          <Text style={commonStyles.textSecondary}>Welcome back, trader!</Text>
        </View>

        <View style={styles.section}>
          <Text style={commonStyles.subtitle}>Active Signals</Text>
          {activeSignals.length > 0 ? (
            activeSignals.map(signal => (
              <SignalCard key={signal.id} signal={signal} />
            ))
          ) : (
            <View style={[commonStyles.card, styles.emptyCard]}>
              <Text style={commonStyles.textSecondary}>No active signals at the moment</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={commonStyles.subtitle}>Market Overview</Text>
          {mockMarketData.slice(0, 3).map(market => (
            <MarketCard key={market.pair} market={market} />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={commonStyles.subtitle}>Latest Forecast</Text>
          <ForecastCard forecast={latestForecast} />
        </View>

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
  section: {
    marginBottom: 24,
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
