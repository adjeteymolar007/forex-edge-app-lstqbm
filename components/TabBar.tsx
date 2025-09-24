
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../styles/commonStyles';
import Icon from './Icon';

interface TabBarProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const tabs = [
  { id: 'home', icon: 'home-outline', activeIcon: 'home' },
  { id: 'signals', icon: 'trending-up-outline', activeIcon: 'trending-up' },
  { id: 'education', icon: 'book-outline', activeIcon: 'book' },
  { id: 'tools', icon: 'construct-outline', activeIcon: 'construct' },
  { id: 'chat', icon: 'chatbubbles-outline', activeIcon: 'chatbubbles' },
];

export default function TabBar({ activeTab, onTabPress }: TabBarProps) {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => onTabPress(tab.id)}
        >
          <Icon
            name={activeTab === tab.id ? tab.activeIcon as any : tab.icon as any}
            size={24}
            color={activeTab === tab.id ? colors.primary : colors.text}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 8,
    paddingBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
});
