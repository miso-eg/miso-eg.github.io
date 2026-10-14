import { getCollection } from 'astro:content';
export async function publishedWorks() {
  return (await getCollection('works', ({ data }) => !data.draft))
    .sort((a, b) => a.data.order - b.data.order || b.data.date.valueOf() - a.data.date.valueOf());
}
export function workPath(id: string) { return `/works/${id}/`; }
export function formatDate(date: Date) { return date.toISOString().slice(0, 10).replaceAll('-', '.'); }
