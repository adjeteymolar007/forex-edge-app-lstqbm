
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import EducationCard from '../components/EducationCard';
import { mockEducationArticles } from '../data/mockData';

export default function EducationScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fundamentals', 'Technical Analysis', 'Risk Management'];
  
  const filteredArticles = selectedCategory === 'All' 
    ? mockEducationArticles 
    : mockEducationArticles.filter(article => article.category === selectedCategory);

  const handleArticlePress = (articleId: string) => {
    console.log('Opening article:', articleId);
    // Navigate to article detail screen
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={styles.header}>
        <Text style={commonStyles.title}>Education</Text>
        <Text style={commonStyles.textSecondary}>Learn and improve your trading skills</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategoryButton
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.activeCategoryText
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {filteredArticles.map(article => (
          <EducationCard
            key={article.id}
            article={article}
            onPress={() => handleArticlePress(article.id)}
          />
        ))}
        
        {filteredArticles.length === 0 && (
          <View style={[commonStyles.card, styles.emptyCard]}>
            <Text style={commonStyles.textSecondary}>
              No articles found in this category
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
  categoryContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    marginRight: 8,
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  activeCategoryText: {
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
