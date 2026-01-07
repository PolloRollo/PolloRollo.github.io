// Data loader utility to load JSON files
// Using direct imports to avoid routing conflicts with HashRouter/SPA fallback

// Import JSON files directly as modules (Vite handles this)
// This avoids fetch issues where the server returns index.html instead of JSON
import projectsJson from '../data/projects.json';
import researchJson from '../data/research.json';

const dataMap: Record<string, any> = {
  'projects.json': projectsJson,
  'research.json': researchJson,
};

export async function loadJsonData(filename: string): Promise<any> {
  const data = dataMap[filename];
  
  if (!data) {
    throw new Error(`Unknown JSON file: ${filename}. Available files: ${Object.keys(dataMap).join(', ')}`);
  }
  
  // Return as a Promise to maintain the same API
  return Promise.resolve(data);
}
