
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import { mockTools } from '../data/mockData';
import ToolCard from '../components/ToolCard';
import Icon from '../components/Icon';

export default function ToolsScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Indicator', 'EA', 'Utility'];

  const filteredTools = selectedCategory === 'All' 
    ? mockTools 
    : mockTools.filter(tool => tool.category === selectedCategory);

  const handleToolPress = (toolId: string) => {
    console.log('Tool pressed:', toolId);
    // Handle tool press - could navigate to tool details or open download
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <Text style={commonStyles.title}>Trading Tools</Text>
        <Text style={styles.subtitle}>Indicators, EAs & Utilities</Text>
      </View>

      <View style={styles.categoryFilter}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.categoryButtonActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryButtonText,
                selectedCategory === category && styles.categoryButtonTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.toolsGrid}>
          {filteredTools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onPress={() => handleToolPress(tool.id)}
            />
          ))}
        </View>

        {filteredTools.length === 0 && (
          <View style={styles.emptyState}>
            <Icon name="construct-outline" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyStateTitle}>No Tools Found</Text>
            <Text style={styles.emptyStateText}>
              No tools available in the selected category.
            </Text>
          </View>
        )}

        <View style={styles.footer}>
          <View style={styles.footerCard}>
            <Icon name="information-circle" size={24} color={colors.primary} />
            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>Need Help?</Text>
              <Text style={styles.footerText}>
                Contact our support team for tool installation and setup assistance.
              </Text>
              <TouchableOpacity style={styles.contactButton}>
                <Text style={styles.contactButtonText}>Contact Support</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  categoryFilter: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  categoryScrollContent: {
    paddingHorizontal: 20,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 12,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  categoryButtonTextActive: {
    color: colors.background,
  },
  content: {
    flex: 1,
  },
  toolsGrid: {
    padding: 20,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    paddingTop: 0,
  },
  footerCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: colors.border,
  },
  footerContent: {
    flex: 1,
    marginLeft: 12,
  },
  footerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  footerText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  contactButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  contactButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.background,
  },
});
