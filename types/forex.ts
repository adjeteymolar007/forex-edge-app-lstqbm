
export interface ForexSignal {
  id: string;
  pair: string;
  type: 'BUY' | 'SELL';
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
  status: 'ACTIVE' | 'CLOSED' | 'PENDING';
  pips: number;
  timestamp: Date;
  confidence: number;
}

export interface MarketData {
  pair: string;
  price: number;
  change: number;
  changePercent: number;
  high: number;
  low: number;
  volume: number;
}

export interface EducationArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  readTime: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl?: string;
  publishedAt: Date;
}

export interface ChatMessage {
  id: string;
  userId: string;
  username: string;
  message: string;
  timestamp: Date;
  avatar?: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  memberSince: Date;
  totalPips: number;
  winRate: number;
  avatar?: string;
  subscription: 'FREE' | 'PREMIUM' | 'VIP';
}

export interface Forecast {
  id: string;
  pair: string;
  direction: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  timeframe: '1H' | '4H' | '1D' | '1W';
  confidence: number;
  analysis: string;
  targetPrice: number;
  createdAt: Date;
}
