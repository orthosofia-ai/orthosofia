import { NextRequest, NextResponse } from 'next/server';
import { getReviews, addReview, getAverageRating, getReviewCount } from '@/lib/reviews';

export async function GET() {
  try {
    const reviews = getReviews();
    const averageRating = getAverageRating();
    const reviewCount = getReviewCount();

    return NextResponse.json({
      reviews,
      averageRating,
      reviewCount
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { author, rating, comment } = body;

    // Validation
    if (!author || !rating || !comment) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Rating must be between 1 and 5' },
        { status: 400 }
      );
    }

    const newReview = addReview({ author, rating, comment });

    return NextResponse.json({
      success: true,
      review: newReview
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
}

