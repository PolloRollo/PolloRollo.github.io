// Site-wide configuration values
// Update these values to customize the site content

import introImage from '../assets/images/DSC01157.webp';
import seeMoreImageDefault from '../assets/images/2020_08_Wildflowers.webp';
import seeMoreImageProjects from '../assets/images/2020_08_Wildflowers.webp';
import seeMoreImageResearch from '../assets/images/2020_08_Wildflowers.webp';

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
    title: "Hi, I'm David Rollo",
    description: 'I\'m a software engineer and applied math student at the University of Utah. Explore my past experiences and ongoing projects.',
    linkText: 'Read my story',
    linkTo: '/about',
  },

  // See More Card Configuration
  seeMore: {
    // Default seeMore card settings
    default: {
      image: seeMoreImageDefault,
      title: 'See more',
    },
    // Projects page seeMore card
    projects: {
      image: seeMoreImageProjects,
      title: 'View more projects',
    },
    // Research page seeMore card
    research: {
      image: seeMoreImageResearch,
      title: 'See more',
    },
  },
};

