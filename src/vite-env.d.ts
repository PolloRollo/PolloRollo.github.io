/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Umami Analytics types
interface Window {
  umami?: {
    track: (eventName: string, eventData?: Record<string, string>) => void;
  };
}
