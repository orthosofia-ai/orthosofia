import fs from 'fs';
import path from 'path';

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const REVIEWS_FILE = path.join(DATA_DIR, 'reviews.json');

const seedReviews: Review[] = [
  {
    id: '1',
    author: 'Parent d’un patient',
    rating: 5,
    comment:
      'Super expérience, merci pour tous les efforts fournis avec mon fils.',
    date: '2025-12-10T10:00:00.000Z',
    verified: true,
  },
  {
    id: '2',
    author: 'Maman d’une patiente',
    rating: 5,
    comment:
      'Excellent cabinet. J’ai fait le bilan de ma fille : vraiment bien orientée, on dit les choses clairement.',
    date: '2025-12-08T10:00:00.000Z',
    verified: true,
  },
  {
    id: '3',
    author: 'Famille',
    rating: 5,
    comment:
      'J’ai fait 10 séances pour ma sœur qui bégaie. Elle bégaie rarement maintenant, surtout en cas de stress. Je recommande cette orthophoniste.',
    date: '2023-05-12T10:00:00.000Z',
    verified: true,
  },
  {
    id: '4',
    author: 'Patient',
    rating: 5,
    comment:
      'Un très bon cabinet. Mme Sofia Elfenne est parmi les meilleures orthophonistes que je connaisse.',
    date: '2023-05-03T10:00:00.000Z',
    verified: true,
  },
];

function ensureStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(REVIEWS_FILE)) {
      fs.writeFileSync(REVIEWS_FILE, JSON.stringify(seedReviews, null, 2));
    }
  } catch {
    // Read-only environments skip writes.
  }
}

function readReviews(): Review[] {
  ensureStore();
  try {
    return JSON.parse(fs.readFileSync(REVIEWS_FILE, 'utf-8')) as Review[];
  } catch {
    return [...seedReviews];
  }
}

function writeReviews(reviews: Review[]) {
  ensureStore();
  fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
}

export function getReviews(): Review[] {
  return readReviews().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function addReview(
  review: Omit<Review, 'id' | 'date' | 'verified'>
): Review {
  const reviews = readReviews();
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    verified: false,
  };
  reviews.push(newReview);
  writeReviews(reviews);
  return newReview;
}

export function getAverageRating(): number {
  const reviews = readReviews();
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

export function getReviewCount(): number {
  return readReviews().length;
}
