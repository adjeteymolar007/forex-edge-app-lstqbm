
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ChatMessage } from '../types/forex';
import { colors, commonStyles } from '../styles/commonStyles';

interface ChatBubbleProps {
  message: ChatMessage;
  isCurrentUser?: boolean;
}

export default function ChatBubble({ message, isCurrentUser = false }: ChatBubbleProps) {
  return (
    <View style={[styles.container, isCurrentUser && styles.currentUserContainer]}>
      {!isCurrentUser && (
        <Image
          source={{ uri: message.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100' }}
          style={styles.avatar}
        />
      )}
      <View style={[styles.bubble, isCurrentUser && styles.currentUserBubble]}>
        {!isCurrentUser && (
          <Text style={styles.username}>{message.username}</Text>
        )}
        <Text style={[styles.messageText, isCurrentUser && styles.currentUserText]}>
          {message.message}
        </Text>
        <Text style={[styles.timestamp, isCurrentUser && styles.currentUserTimestamp]}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 4,
    paddingHorizontal: 16,
  },
  currentUserContainer: {
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  bubble: {
    backgroundColor: colors.backgroundAlt,
    borderRadius: 16,
    padding: 12,
    maxWidth: '75%',
  },
  currentUserBubble: {
    backgroundColor: colors.primary,
  },
  username: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  currentUserText: {
    color: colors.background,
  },
  timestamp: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  currentUserTimestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
