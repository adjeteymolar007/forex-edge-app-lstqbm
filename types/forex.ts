
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

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  isFree: boolean;
  price?: number;
  imageUrl?: string;
  instructor: string;
  rating: number;
  enrolledStudents: number;
  createdAt: Date;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'Indicator' | 'EA' | 'Utility';
  type: 'MolarMax' | 'Surfway Pro' | 'Lazyman';
  version: string;
  price: number;
  isFree: boolean;
  rating: number;
  downloads: number;
  imageUrl?: string;
  features: string[];
  compatibility: string[];
  createdAt: Date;
}

export interface TradeEntry {
  id: string;
  instrument: string;
  direction: 'BUY' | 'SELL';
  entryPrice: number;
  exitPrice?: number;
  stopLoss: number;
  takeProfits: number[];
  lotSize: number;
  entryTime: Date;
  exitTime?: Date;
  notes: string;
  status: 'OPEN' | 'CLOSED' | 'PENDING';
  pnl?: number;
  pnlPercent?: number;
  screenshotUrl?: string;
}

export interface VIPPost {
  id: string;
  title: string;
  type: 'ELLIOTT_WAVE' | 'SIGNAL' | 'SMC_ENTRY';
  content: string;
  instrument?: string;
  direction?: 'BUY' | 'SELL';
  entry?: number;
  stopLoss?: number;
  takeProfits?: number[];
  rationale: string;
  chartImageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  isVisible: boolean;
  scheduledFor?: Date;
}

export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'ADMIN' | 'MODERATOR' | 'USER';
  createdAt: Date;
}
