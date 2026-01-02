// Site-wide configuration values
// Update these values to customize the site content

import introImage from '../assets/images/IMG_0453.webp';

export const siteConfig = {
  // Personal Information
  personal: {
    name: 'David Rollo',
    bio: 'A passionate developer and outdoor enthusiast based in Utah. I build thoughtful digital experiences and explore the wilderness whenever I can. Click to learn more about my journey.',
    location: 'Utah',
    profileImage: introImage, // Path to profile image
  },

  // Navigation
  navigation: {
    aboutLink: '/about',
  },

  // Intro Section
  intro: {
    image: introImage,
    title: "Hello, I'm David Rollo",
    description: 'A passionate developer and outdoor enthusiast based in Utah. I build thoughtful digital experiences and explore the wilderness whenever I can. Click to learn more about my journey.',
    linkText: 'Read my story',
    linkTo: '/about',
  },
};

