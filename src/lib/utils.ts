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

// Type definitions for JSON data structures
export interface JsonDataFile<T> {
  category: string;
  content: T[];
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  raw: string;
  image?: string;
  photoId?: number;
  focalPoint?: { x: number; y: number };
  github?: string;
  paper?: string;
  technologies?: string[];
  category?: string;
  content?: string;
  link?: string;
}

type ProjectsData = JsonDataFile<Article>;
type ResearchData = JsonDataFile<Article>;
type PhotosData = JsonDataFile<Photo>;

const dataMap: Record<string, ProjectsData | ResearchData | PhotosData> = {
  'projects.json': projectsJson as ProjectsData,
  'research.json': researchJson as ResearchData,
  'photos.json': photosJson as PhotosData,
};

export async function loadJsonData(filename: string): Promise<JsonDataFile<Article | Photo>> {
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
  cloudinary: string;
  attribution?: string;
  attributionUrl?: string;
  date?: string;
  location?: string;
  focalPoint?: { x: number; y: number };
}

let photosCache: Photo[] | null = null;

export async function getPhotoById(id: number): Promise<Photo | null> {
  if (!photosCache) {
    const data = await loadJsonData('photos.json') as PhotosData;
    photosCache = data.content;
  }
  return photosCache.find(p => p.id === id) ?? null;
}

export async function getAllPhotos(): Promise<Photo[]> {
  if (!photosCache) {
    const data = await loadJsonData('photos.json') as PhotosData;
    photosCache = data.content;
  }
  return photosCache;
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

