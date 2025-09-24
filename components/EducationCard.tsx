
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { EducationArticle } from '../types/forex';
import { colors, commonStyles } from '../styles/commonStyles';

interface EducationCardProps {
  article: EducationArticle;
  onPress: () => void;
}

export default function EducationCard({ article, onPress }: EducationCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return colors.success;
      case 'Intermediate':
        return colors.warning;
      case 'Advanced':
        return colors.danger;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <TouchableOpacity style={[commonStyles.card, styles.container]} onPress={onPress}>
      {article.imageUrl && (
        <Image source={{ uri: article.imageUrl }} style={styles.image} />
      )}
      <View style={styles.content}>
        <View style={commonStyles.spaceBetween}>
          <Text style={styles.category}>{article.category}</Text>
          <Text style={[styles.difficulty, { color: getDifficultyColor(article.difficulty) }]}>
            {article.difficulty}
          </Text>
        </View>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {article.content}
        </Text>
        <View style={[commonStyles.spaceBetween, styles.footer]}>
          <Text style={commonStyles.textSecondary}>{article.readTime} min read</Text>
          <Text style={commonStyles.textSecondary}>
            {article.publishedAt.toLocaleDateString()}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
  },
  difficulty: {
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginTop: 8,
    marginBottom: 8,
  },
  footer: {
    marginTop: 12,
  },
});
