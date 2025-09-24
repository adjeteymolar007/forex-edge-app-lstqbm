
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

  const getOrderColor = (order: string) => {
    return order === 'BUY' ? colors.success : colors.danger;
  };

  const formatPrice = (price: number) => {
    return price.toFixed(signal.asset.includes('JPY') ? 2 : 4);
  };

  return (
    <View style={[commonStyles.card, styles.container]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.tradeName}>{signal.tradeName}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(signal.status) }]}>
          <Text style={styles.statusText}>{signal.status}</Text>
        </View>
      </View>

      {/* Asset and Order */}
      <View style={styles.assetSection}>
        <Text style={styles.label}>Asset: <Text style={styles.value}>{signal.asset}</Text></Text>
        <Text style={styles.label}>Order: <Text style={[styles.value, styles.orderText, { color: getOrderColor(signal.order) }]}>{signal.order}</Text></Text>
      </View>

      {/* TimeZone */}
      <View style={styles.timeZoneSection}>
        <Text style={styles.label}>TimeZone: <Text style={styles.value}>{signal.timeZone}</Text></Text>
      </View>

      {/* Entry Zone */}
      <View style={styles.entrySection}>
        <Text style={styles.label}>Entry Zone: <Text style={styles.value}>{formatPrice(signal.entryZone.min)} - {formatPrice(signal.entryZone.max)}</Text></Text>
      </View>

      {/* Stop Loss */}
      <View style={styles.slSection}>
        <Text style={styles.label}>SL: <Text style={styles.value}>{formatPrice(signal.stopLoss)}</Text></Text>
      </View>

      {/* Take Profits */}
      <View style={styles.tpSection}>
        <Text style={styles.label}>TP1: <Text style={styles.value}>{formatPrice(signal.takeProfits.tp1)}</Text></Text>
        <Text style={styles.label}>TP2: <Text style={styles.value}>{formatPrice(signal.takeProfits.tp2)}</Text></Text>
        <Text style={styles.label}>TP3: <Text style={styles.value}>{formatPrice(signal.takeProfits.tp3)}</Text></Text>
        <Text style={styles.label}>TP4: <Text style={styles.value}>{signal.takeProfits.tp4}</Text></Text>
      </View>

      {/* Notes */}
      <View style={styles.notesSection}>
        <Text style={styles.notesTitle}>Note Below</Text>
        {signal.notes.map((note, index) => (
          <Text key={index} style={styles.noteItem}>{index + 1}. {note}</Text>
        ))}
      </View>

      {/* Disclaimer */}
      <View style={styles.disclaimerSection}>
        <Text style={styles.disclaimerTitle}>Disclaimer</Text>
        <Text style={styles.disclaimerText}>{signal.disclaimer}</Text>
      </View>

      {/* Contact Info */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>For More Enquiries</Text>
        <Text style={styles.contactText}>📞Contact Us 24/7</Text>
        <Text style={styles.contactText}>Admin: {signal.contactInfo.admin}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  tradeName: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '600',
  },
  assetSection: {
    marginBottom: 12,
  },
  timeZoneSection: {
    marginBottom: 12,
  },
  entrySection: {
    marginBottom: 12,
  },
  slSection: {
    marginBottom: 12,
  },
  tpSection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
    fontWeight: '500',
  },
  value: {
    fontWeight: '600',
    color: colors.text,
  },
  orderText: {
    fontSize: 16,
    fontWeight: '700',
  },
  notesSection: {
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  notesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  noteItem: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
    lineHeight: 20,
  },
  disclaimerSection: {
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  disclaimerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.danger,
    marginBottom: 8,
  },
  disclaimerText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  contactSection: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  contactText: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 4,
    fontWeight: '500',
  },
});
