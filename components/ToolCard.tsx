
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import { Tool } from '../types/forex';
import Icon from './Icon';

interface ToolCardProps {
  tool: Tool;
  onPress: () => void;
}

export default function ToolCard({ tool, onPress }: ToolCardProps) {
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

  const formatDownloads = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <Image
          source={{ uri: tool.imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{tool.name}</Text>
          <View style={styles.categoryContainer}>
            <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(tool.category) }]}>
              <Text style={styles.categoryText}>{tool.category}</Text>
            </View>
            <Text style={styles.version}>v{tool.version}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {tool.description}
      </Text>

      <View style={styles.features}>
        {tool.features.slice(0, 3).map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Icon name="checkmark-circle" size={14} color={colors.success} />
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
        {tool.features.length > 3 && (
          <Text style={styles.moreFeatures}>+{tool.features.length - 3} more features</Text>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Icon name="star" size={16} color={colors.warning} />
            <Text style={styles.statText}>{tool.rating}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="download-outline" size={16} color={colors.textSecondary} />
            <Text style={styles.statText}>{formatDownloads(tool.downloads)}</Text>
          </View>
        </View>
        
        <View style={styles.priceContainer}>
          {tool.isFree ? (
            <Text style={styles.freePrice}>FREE</Text>
          ) : (
            <Text style={styles.price}>${tool.price}</Text>
          )}
        </View>
      </View>

      <View style={styles.compatibility}>
        <Text style={styles.compatibilityLabel}>Compatible with:</Text>
        <View style={styles.compatibilityList}>
          {tool.compatibility.map((platform, index) => (
            <View key={index} style={styles.platformBadge}>
              <Text style={styles.platformText}>{platform}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.background,
  },
  version: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  features: {
    marginBottom: 12,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  featureText: {
    fontSize: 12,
    color: colors.text,
    marginLeft: 6,
    flex: 1,
  },
  moreFeatures: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
    fontWeight: '500',
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  freePrice: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.success,
  },
  compatibility: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 12,
  },
  compatibilityLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  compatibilityList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  platformBadge: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 6,
    marginBottom: 4,
  },
  platformText: {
    fontSize: 11,
    color: colors.text,
    fontWeight: '500',
  },
});
