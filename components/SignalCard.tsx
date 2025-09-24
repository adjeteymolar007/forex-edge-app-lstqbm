
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ForexSignal } from '../types/forex';
import { colors, commonStyles } from '../styles/commonStyles';

interface SignalCardProps {
  signal: ForexSignal;
}

export default function SignalCard({ signal }: SignalCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return colors.primary;
      case 'CLOSED':
        return colors.success;
      case 'PENDING':
        return colors.warning;
      default:
        return colors.textSecondary;
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'BUY' ? colors.success : colors.danger;
  };

  return (
    <View style={[commonStyles.card, styles.container]}>
      <View style={commonStyles.spaceBetween}>
        <View>
          <Text style={styles.pair}>{signal.pair}</Text>
          <Text style={[styles.type, { color: getTypeColor(signal.type) }]}>
            {signal.type}
          </Text>
        </View>
        <View style={styles.rightSection}>
          <Text style={[styles.status, { color: getStatusColor(signal.status) }]}>
            {signal.status}
          </Text>
          <Text style={styles.confidence}>{signal.confidence}% confidence</Text>
        </View>
      </View>
      
      <View style={styles.priceSection}>
        <View style={styles.priceItem}>
          <Text style={commonStyles.textSecondary}>Entry</Text>
          <Text style={styles.price}>{signal.entryPrice.toFixed(4)}</Text>
        </View>
        <View style={styles.priceItem}>
          <Text style={commonStyles.textSecondary}>SL</Text>
          <Text style={styles.price}>{signal.stopLoss.toFixed(4)}</Text>
        </View>
        <View style={styles.priceItem}>
          <Text style={commonStyles.textSecondary}>TP</Text>
          <Text style={styles.price}>{signal.takeProfit.toFixed(4)}</Text>
        </View>
        <View style={styles.priceItem}>
          <Text style={commonStyles.textSecondary}>Pips</Text>
          <Text style={[styles.pips, { color: signal.pips >= 0 ? colors.success : colors.danger }]}>
            {signal.pips > 0 ? '+' : ''}{signal.pips}
          </Text>
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
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  type: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 2,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  confidence: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  priceItem: {
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
    marginTop: 4,
  },
  pips: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 4,
  },
});
