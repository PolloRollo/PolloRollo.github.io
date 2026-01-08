/// <reference types="vite/client" />

// Umami Analytics types
interface Window {
  umami?: {
    track: (eventName: string, eventData?: Record<string, string>) => void;
  };
}
