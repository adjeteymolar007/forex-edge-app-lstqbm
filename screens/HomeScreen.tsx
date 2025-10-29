
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import SignalCard from '../components/SignalCard';
import MarketCard from '../components/MarketCard';
import ForecastCard from '../components/ForecastCard';
import Icon from '../components/Icon';
import { mockSignals, mockMarketData, mockForecasts, mockTools } from '../data/mockData';

export default function HomeScreen() {
  const activeSignals = mockSignals.filter(signal => signal.status === 'ACTIVE');
  const latestForecast = mockForecasts[0];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Indicator':
        return colors.success;
      case 'EA':
        return colors.primary;
      case 'Utility':
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

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

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={commonStyles.subtitle}>Trading Tools</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <Icon name="chevron-forward" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.toolsScrollContent}
          >
            {mockTools.map((tool) => (
              <View key={tool.id} style={styles.toolPreviewCard}>
                <View style={styles.toolHeader}>
                  <Text style={styles.toolName} numberOfLines={1}>{tool.name}</Text>
                  <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(tool.category) }]}>
                    <Text style={styles.categoryText}>{tool.category}</Text>
                  </View>
                </View>
                <Text style={styles.toolDescription} numberOfLines={2}>
                  {tool.description}
                </Text>
                <View style={styles.toolFooter}>
                  <View style={styles.toolStats}>
                    <Icon name="star" size={14} color={colors.warning} />
                    <Text style={styles.toolRating}>{tool.rating}</Text>
                  </View>
                  {tool.isFree ? (
                    <Text style={styles.freeTag}>FREE</Text>
                  ) : (
                    <Text style={styles.priceTag}>${tool.price}</Text>
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
    marginRight: 4,
  },
  toolsScrollContent: {
    paddingHorizontal: 16,
  },
  toolPreviewCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    width: 200,
    borderWidth: 1,
    borderColor: colors.border,
  },
  toolHeader: {
    marginBottom: 8,
  },
  toolName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  categoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  categoryText: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.background,
  },
  toolDescription: {
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 16,
    marginBottom: 8,
  },
  toolFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toolStats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toolRating: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
    fontWeight: '500',
  },
  freeTag: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.success,
  },
  priceTag: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.primary,
  },
});
