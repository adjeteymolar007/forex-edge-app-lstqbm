
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MarketData } from '../types/forex';
import { colors, commonStyles } from '../styles/commonStyles';

interface MarketCardProps {
  market: MarketData;
}

export default function MarketCard({ market }: MarketCardProps) {
  const isPositive = market.change >= 0;

  return (
    <View style={[commonStyles.card, styles.container]}>
      <View style={commonStyles.spaceBetween}>
        <View>
          <Text style={styles.pair}>{market.pair}</Text>
          <Text style={styles.price}>{market.price.toFixed(4)}</Text>
        </View>
        <View style={styles.changeSection}>
          <Text style={[styles.change, { color: isPositive ? colors.success : colors.danger }]}>
            {isPositive ? '+' : ''}{market.change.toFixed(4)}
          </Text>
          <Text style={[styles.changePercent, { color: isPositive ? colors.success : colors.danger }]}>
            {isPositive ? '+' : ''}{market.changePercent.toFixed(2)}%
          </Text>
        </View>
      </View>
      
      <View style={styles.detailsSection}>
        <View style={styles.detailItem}>
          <Text style={commonStyles.textSecondary}>High</Text>
          <Text style={styles.detailValue}>{market.high.toFixed(4)}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={commonStyles.textSecondary}>Low</Text>
          <Text style={styles.detailValue}>{market.low.toFixed(4)}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={commonStyles.textSecondary}>Volume</Text>
          <Text style={styles.detailValue}>{(market.volume / 1000).toFixed(0)}K</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  pair: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  price: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginTop: 4,
  },
  changeSection: {
    alignItems: 'flex-end',
  },
  change: {
    fontSize: 16,
    fontWeight: '600',
  },
  changePercent: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 2,
  },
  detailsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailValue: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
    marginTop: 4,
  },
});
