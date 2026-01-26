export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

// In production, this would connect to a database
// For now, using a simple in-memory store that persists across requests
let reviews: Review[] = [];

export function getReviews(): Review[] {
  return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function addReview(review: Omit<Review, 'id' | 'date' | 'verified'>): Review {
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    verified: false // Would be verified after moderation
  };
  
  reviews.push(newReview);
  return newReview;
}

export function getAverageRating(): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return sum / reviews.length;
}

export function getReviewCount(): number {
  return reviews.length;
}

