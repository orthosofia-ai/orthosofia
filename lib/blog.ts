import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  published: boolean;
  keywords: string[];
  category: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const BLOG_FILE = path.join(DATA_DIR, 'blog-posts.json');

function ensureStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(BLOG_FILE)) {
      fs.writeFileSync(BLOG_FILE, JSON.stringify([], null, 2));
    }
  } catch {
    // Read-only environments (e.g. some serverless hosts) skip writes.
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    ensureStore();
    const data = fs.readFileSync(BLOG_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts()
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function savePost(post: BlogPost): void {
  const posts = getAllPosts();
  const existingIndex = posts.findIndex(p => p.id === post.id);
  
  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.push(post);
  }
  
  ensureStore();
  fs.writeFileSync(BLOG_FILE, JSON.stringify(posts, null, 2));
}

export function deletePost(id: string): void {
  const posts = getAllPosts();
  const filteredPosts = posts.filter(p => p.id !== id);
  fs.writeFileSync(BLOG_FILE, JSON.stringify(filteredPosts, null, 2));
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/-+/g, '-') // Remove multiple -
    .trim();
}

