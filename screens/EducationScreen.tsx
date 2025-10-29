
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import EducationCard from '../components/EducationCard';
import CourseCard from '../components/CourseCard';
import { mockEducationArticles, mockCourses } from '../data/mockData';

export default function EducationScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [contentType, setContentType] = useState<'courses' | 'articles'>('courses');

  const categories = ['All', 'Technical Analysis', 'Chart Patterns', 'Trading Strategies', 'Market Structure', 'Fundamentals', 'Risk Management'];
  
  const filteredCourses = selectedCategory === 'All' 
    ? mockCourses 
    : mockCourses.filter(course => course.category === selectedCategory);

  const filteredArticles = selectedCategory === 'All' 
    ? mockEducationArticles 
    : mockEducationArticles.filter(article => article.category === selectedCategory);

  const handleCoursePress = (courseId: string) => {
    console.log('Opening course:', courseId);
  };

  const handleArticlePress = (articleId: string) => {
    console.log('Opening article:', articleId);
  };

  const freeCourses = mockCourses.filter(course => course.isFree);
  const paidCourses = mockCourses.filter(course => !course.isFree);

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={commonStyles.title}>Education</Text>
          <Text style={commonStyles.textSecondary}>Master forex trading with our comprehensive courses</Text>
        </View>

        {/* Content Type Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              contentType === 'courses' && styles.activeToggleButton
            ]}
            onPress={() => setContentType('courses')}
          >
            <Text style={[
              styles.toggleText,
              contentType === 'courses' && styles.activeToggleText
            ]}>
              Courses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              contentType === 'articles' && styles.activeToggleButton
            ]}
            onPress={() => setContentType('articles')}
          >
            <Text style={[
              styles.toggleText,
              contentType === 'articles' && styles.activeToggleText
            ]}>
              Articles
            </Text>
          </TouchableOpacity>
        </View>

        {/* Category Filter */}
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

        {contentType === 'courses' ? (
          <>
            {/* Free Courses Section */}
            {selectedCategory === 'All' && (
              <>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Free Courses</Text>
                  <Text style={styles.sectionSubtitle}>Start learning without any cost</Text>
                </View>
                {freeCourses.map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onPress={() => handleCoursePress(course.id)}
                  />
                ))}

                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Premium Courses</Text>
                  <Text style={styles.sectionSubtitle}>Advanced training for serious traders</Text>
                </View>
                {paidCourses.map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onPress={() => handleCoursePress(course.id)}
                  />
                ))}
              </>
            )}

            {/* Filtered Courses */}
            {selectedCategory !== 'All' && (
              <>
                {filteredCourses.map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    onPress={() => handleCoursePress(course.id)}
                  />
                ))}
                {filteredCourses.length === 0 && (
                  <View style={[commonStyles.card, styles.emptyCard]}>
                    <Text style={commonStyles.textSecondary}>
                      No courses found in this category
                    </Text>
                  </View>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {/* Articles */}
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
          </>
        )}

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: colors.backgroundAlt,
    borderRadius: 8,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeToggleButton: {
    backgroundColor: colors.primary,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  activeToggleText: {
    color: colors.background,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    marginRight: 8,
    minHeight: 36,
    justifyContent: 'center',
  },
  activeCategoryButton: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  activeCategoryText: {
    color: colors.background,
    fontWeight: '600',
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
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
