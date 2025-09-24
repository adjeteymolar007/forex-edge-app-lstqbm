
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Course } from '../types/forex';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface CourseCardProps {
  course: Course;
  onPress: () => void;
}

export default function CourseCard({ course, onPress }: CourseCardProps) {
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

  const formatStudentCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <TouchableOpacity style={[commonStyles.card, styles.container]} onPress={onPress}>
      {course.imageUrl && (
        <Image source={{ uri: course.imageUrl }} style={styles.image} />
      )}
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>{course.category}</Text>
            {course.isFree && (
              <View style={styles.freeTag}>
                <Text style={styles.freeText}>FREE</Text>
              </View>
            )}
          </View>
          <Text style={[styles.difficulty, { color: getDifficultyColor(course.difficulty) }]}>
            {course.difficulty}
          </Text>
        </View>

        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {course.description}
        </Text>

        <View style={styles.instructor}>
          <Icon name="person" size={14} color={colors.textSecondary} />
          <Text style={styles.instructorText}>{course.instructor}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Icon name="time" size={14} color={colors.textSecondary} />
            <Text style={styles.statText}>{course.duration}</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="book" size={14} color={colors.textSecondary} />
            <Text style={styles.statText}>{course.lessons} lessons</Text>
          </View>
          <View style={styles.statItem}>
            <Icon name="people" size={14} color={colors.textSecondary} />
            <Text style={styles.statText}>{formatStudentCount(course.enrolledStudents)} students</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.rating}>
            <Icon name="star" size={14} color={colors.warning} />
            <Text style={styles.ratingText}>{course.rating}</Text>
          </View>
          {!course.isFree && course.price && (
            <Text style={styles.price}>${course.price}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 12,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
  },
  freeTag: {
    backgroundColor: colors.success,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8,
  },
  freeText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.background,
  },
  difficulty: {
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  instructor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  instructorText: {
    fontSize: 13,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  statText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
});
