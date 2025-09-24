
import { ForexSignal, MarketData, EducationArticle, ChatMessage, UserProfile, Forecast } from '../types/forex';

export const mockSignals: ForexSignal[] = [
  {
    id: '1',
    pair: 'EUR/USD',
    type: 'BUY',
    entryPrice: 1.0850,
    stopLoss: 1.0800,
    takeProfit: 1.0920,
    status: 'ACTIVE',
    pips: 25,
    timestamp: new Date('2024-01-15T10:30:00'),
    confidence: 85,
  },
  {
    id: '2',
    pair: 'GBP/USD',
    type: 'SELL',
    entryPrice: 1.2650,
    stopLoss: 1.2700,
    takeProfit: 1.2580,
    status: 'CLOSED',
    pips: 70,
    timestamp: new Date('2024-01-15T08:15:00'),
    confidence: 92,
  },
  {
    id: '3',
    pair: 'USD/JPY',
    type: 'BUY',
    entryPrice: 148.50,
    stopLoss: 147.80,
    takeProfit: 149.80,
    status: 'PENDING',
    pips: 0,
    timestamp: new Date('2024-01-15T12:00:00'),
    confidence: 78,
  },
];

export const mockMarketData: MarketData[] = [
  {
    pair: 'EUR/USD',
    price: 1.0875,
    change: 0.0025,
    changePercent: 0.23,
    high: 1.0890,
    low: 1.0840,
    volume: 125000,
  },
  {
    pair: 'GBP/USD',
    price: 1.2580,
    change: -0.0070,
    changePercent: -0.55,
    high: 1.2650,
    low: 1.2570,
    volume: 98000,
  },
  {
    pair: 'USD/JPY',
    price: 148.75,
    change: 0.25,
    changePercent: 0.17,
    high: 149.00,
    low: 148.20,
    volume: 87000,
  },
  {
    pair: 'AUD/USD',
    price: 0.6580,
    change: 0.0015,
    changePercent: 0.23,
    high: 0.6595,
    low: 0.6560,
    volume: 65000,
  },
];

export const mockEducationArticles: EducationArticle[] = [
  {
    id: '1',
    title: 'Understanding Forex Basics',
    category: 'Fundamentals',
    content: 'Learn the fundamentals of forex trading including currency pairs, pips, and market structure.',
    readTime: 5,
    difficulty: 'Beginner',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400',
    publishedAt: new Date('2024-01-10'),
  },
  {
    id: '2',
    title: 'Technical Analysis Strategies',
    category: 'Technical Analysis',
    content: 'Master the art of reading charts and identifying trading opportunities using technical indicators.',
    readTime: 8,
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400',
    publishedAt: new Date('2024-01-12'),
  },
  {
    id: '3',
    title: 'Risk Management Principles',
    category: 'Risk Management',
    content: 'Learn how to protect your capital and manage risk effectively in forex trading.',
    readTime: 6,
    difficulty: 'Intermediate',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400',
    publishedAt: new Date('2024-01-14'),
  },
];

export const mockChatMessages: ChatMessage[] = [
  {
    id: '1',
    userId: 'user1',
    username: 'TraderPro',
    message: 'Great signal on EUR/USD today! Already up 30 pips.',
    timestamp: new Date('2024-01-15T14:30:00'),
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: '2',
    userId: 'user2',
    username: 'ForexMaster',
    message: 'What do you think about GBP/USD for tomorrow?',
    timestamp: new Date('2024-01-15T14:32:00'),
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    id: '3',
    userId: 'user3',
    username: 'PipHunter',
    message: 'USD/JPY looking bullish on the 4H chart',
    timestamp: new Date('2024-01-15T14:35:00'),
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
];

export const mockUserProfile: UserProfile = {
  id: 'current-user',
  username: 'YourUsername',
  email: 'user@example.com',
  memberSince: new Date('2023-06-15'),
  totalPips: 1250,
  winRate: 78.5,
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100',
  subscription: 'PREMIUM',
};

export const mockForecasts: Forecast[] = [
  {
    id: '1',
    pair: 'EUR/USD',
    direction: 'BULLISH',
    timeframe: '1D',
    confidence: 82,
    analysis: 'Strong support at 1.0800 level with bullish momentum building. ECB policy outlook remains supportive.',
    targetPrice: 1.0950,
    createdAt: new Date('2024-01-15T09:00:00'),
  },
  {
    id: '2',
    pair: 'GBP/USD',
    direction: 'BEARISH',
    timeframe: '4H',
    confidence: 75,
    analysis: 'Resistance at 1.2700 holding strong. UK economic data showing weakness.',
    targetPrice: 1.2500,
    createdAt: new Date('2024-01-15T11:30:00'),
  },
];
