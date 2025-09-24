
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { colors } from '../styles/commonStyles';
import TabBar from '../components/TabBar';
import HomeScreen from '../screens/HomeScreen';
import SignalsScreen from '../screens/SignalsScreen';
import EducationScreen from '../screens/EducationScreen';
import ToolsScreen from '../screens/ToolsScreen';
import ChatScreen from '../screens/ChatScreen';

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'signals':
        return <SignalsScreen />;
      case 'education':
        return <EducationScreen />;
      case 'tools':
        return <ToolsScreen />;
      case 'chat':
        return <ChatScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.content}>
          {renderScreen()}
        </View>
        <TabBar activeTab={activeTab} onTabPress={setActiveTab} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});
