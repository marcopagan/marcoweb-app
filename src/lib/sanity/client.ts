import { createClient } from '@sanity/client';
//import imageUrlBuilder from '@sanity/image-url';
//import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const sanity = createClient({
  //projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  //dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  projectId: '4bh8ccs9',
  dataset: 'production',
  apiVersion: '2025-10-01',
  useCdn: false, // false during development for fresh content
  //token: import.meta.env.SANITY_READ_TOKEN // read-only token
});