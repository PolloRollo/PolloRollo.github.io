// Data loader utility to load JSON files from public directory
// This avoids routing conflicts by ensuring correct paths

const dataCache: Record<string, any> = {};

export async function loadJsonData(filename: string): Promise<any> {
  // Check cache first
  if (dataCache[filename]) {
    return dataCache[filename];
  }

  // Ensure we have a leading slash and use the base URL
  // Files in public/ are served from root, so we use absolute path
  const baseUrl = import.meta.env.BASE_URL || '/';
  const jsonPath = filename.startsWith('/') ? filename : `/${filename}`;
  // Remove trailing slash from baseUrl if present, then add jsonPath
  const url = `${baseUrl.replace(/\/$/, '')}${jsonPath}`;

  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}: ${response.status} ${response.statusText}`);
    }
    
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await response.text();
      throw new Error(`Expected JSON but got ${contentType}. Response: ${text.substring(0, 200)}`);
    }
    
    const data = await response.json();
    dataCache[filename] = data;
    return data;
  } catch (error) {
    console.error(`Error loading ${filename} from ${url}:`, error);
    throw error;
  }
}

