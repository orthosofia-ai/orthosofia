import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, savePost, deletePost, generateSlug } from '@/lib/blog';

export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const post = await request.json();
    
    // Generate slug if not provided
    if (!post.slug) {
      post.slug = generateSlug(post.title);
    }
    
    // Generate ID if not provided
    if (!post.id) {
      post.id = Date.now().toString();
    }
    
    savePost(post);
    
    return NextResponse.json({ success: true, post }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    deletePost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
}

