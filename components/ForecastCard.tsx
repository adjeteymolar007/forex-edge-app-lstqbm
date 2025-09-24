
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Forecast } from '../types/forex';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface ForecastCardProps {
  forecast: Forecast;
}

export default function ForecastCard({ forecast }: ForecastCardProps) {
  const getDirectionColor = (direction: string) => {
    switch (direction) {
      case 'BULLISH':
        return colors.success;
      case 'BEARISH':
        return colors.danger;
      case 'NEUTRAL':
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

  const getDirectionIcon = (direction: string) => {
    switch (direction) {
      case 'BULLISH':
        return 'trending-up';
      case 'BEARISH':
        return 'trending-down';
      case 'NEUTRAL':
        return 'remove';
      default:
        return 'help';
    }
  };

  return (
    <View style={[commonStyles.card, styles.container]}>
      <View style={commonStyles.spaceBetween}>
        <View>
          <Text style={styles.pair}>{forecast.pair}</Text>
          <Text style={styles.timeframe}>{forecast.timeframe}</Text>
        </View>
        <View style={styles.directionSection}>
          <View style={[styles.directionBadge, { backgroundColor: getDirectionColor(forecast.direction) }]}>
            <Icon
              name={getDirectionIcon(forecast.direction) as any}
              size={16}
              color={colors.background}
            />
            <Text style={styles.directionText}>{forecast.direction}</Text>
          </View>
          <Text style={styles.confidence}>{forecast.confidence}%</Text>
        </View>
      </View>
      
      <Text style={styles.analysis} numberOfLines={3}>
        {forecast.analysis}
      </Text>
      
      <View style={styles.footer}>
        <View>
          <Text style={commonStyles.textSecondary}>Target Price</Text>
          <Text style={styles.targetPrice}>{forecast.targetPrice.toFixed(4)}</Text>
        </View>
        <Text style={commonStyles.textSecondary}>
          {forecast.createdAt.toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  pair: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  timeframe: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  directionSection: {
    alignItems: 'flex-end',
  },
  directionBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  directionText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.background,
    marginLeft: 4,
  },
  confidence: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  analysis: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginTop: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  targetPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginTop: 4,
  },
});
