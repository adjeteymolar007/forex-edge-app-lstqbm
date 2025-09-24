
export interface ForexSignal {
  id: string;
  tradeName: string;
  asset: string;
  order: 'BUY' | 'SELL';
  timeZone: string;
  entryZone: {
    min: number;
    max: number;
  };
  stopLoss: number;
  takeProfits: {
    tp1: number;
    tp2: number;
    tp3: number;
    tp4: string | number; // Can be "Open" or a number
  };
  notes: string[];
  disclaimer: string;
  contactInfo: {
    admin: string;
  };
  status: 'ACTIVE' | 'CLOSED' | 'PENDING';
  timestamp: Date;
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
