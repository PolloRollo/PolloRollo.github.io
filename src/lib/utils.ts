/**
 * Utility function to merge class names conditionally
 * Similar to clsx/classnames but simpler
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

// ============================================
// Data Loading Utilities
// ============================================
import projectsJson from '../data/projects.json';
import researchJson from '../data/research.json';
import photosJson from '../data/photos.json';

const dataMap: Record<string, any> = {
  'projects.json': projectsJson,
  'research.json': researchJson,
  'photos.json': photosJson,
};

export async function loadJsonData(filename: string): Promise<any> {
  const data = dataMap[filename];
  
  if (!data) {
    throw new Error(`Unknown JSON file: ${filename}. Available files: ${Object.keys(dataMap).join(', ')}`);
  }
  
  // Return as a Promise to maintain the same API
  return Promise.resolve(data);
}

// ============================================
// Photo Utilities
// ============================================
export interface Photo {
  id: number;
  title: string;
  slug: string;
  image: string;
  attribution?: string;
  attributionUrl?: string;
  date?: string;
  location?: string;
  focalPoint?: { x: number; y: number };
}

let photosCache: Photo[] | null = null;

export async function getPhotoById(id: number): Promise<Photo | null> {
  if (!photosCache) {
    const data = await loadJsonData('photos.json');
    photosCache = data.content;
  }
  // TypeScript doesn't narrow after async, so we assert photosCache is non-null
  return photosCache!.find(p => p.id === id) || null;
}

export async function getAllPhotos(): Promise<Photo[]> {
  if (!photosCache) {
    const data = await loadJsonData('photos.json');
    photosCache = data.content;
  }
  // TypeScript doesn't narrow after async, so we assert photosCache is non-null
  return photosCache!;
}

// ============================================
// Resume Download Utility
// ============================================
const resumePath = '/resumes/rollo-resume-2025-12.pdf';

export function handleResumeDownload(): void {
  // Track download event with Umami
  if (window.umami) {
    window.umami.track('Resume Download', { name: 'rollo-resume-2025-12.pdf' });
  }

  const link = document.createElement('a');
  link.href = resumePath;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

