import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(post: Post) {
  const words = (post.body ?? '').split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
