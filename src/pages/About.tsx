import '../App.css';
import '../styles/pages/About.css';

// ============================================
// PLACEHOLDER DATA - Replace with your information
// ============================================

interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
  photoPath: string;
}

interface Skill {
  name: string;
  icon: string; // Font Awesome icon class (e.g., 'fab fa-react')
  category: string;
}

interface TimelineItem {
  date: string;
  title: string;
  organization: string;
  description: string[];
}

interface Interest {
  name: string;
  icon: string; // Font Awesome icon class
  description: string;
}

const personalInfo: PersonalInfo = {
  name: 'David Rollo',
  title: 'Software Engineer, Applied Math Student',
  bio: [
    'Currently studying applied mathematics at the University of Utah with coursework in high-dimensional data analysis, optimization, and reinforcement learning. ',
  ],
  photoPath: '/images/DSC01157.webp'
};

const skills: Skill[] = [
  // Programming Languages
  // Python, Java, Go, TypeScript, SQL, R
  { name: 'Python', icon: 'fab fa-python', category: 'Languages' },
  { name: 'TypeScript', icon: 'fab fa-js-square', category: 'Languages' },
  { name: 'Java', icon: 'fab fa-java', category: 'Languages' },
  { name: 'Go', icon: 'fa-brands fa-golang', category: 'Languages' },
  

  // Data
  // PyTorch, Pandas, Numpy, PostgreSQL
  { name: 'PostgreSQL', icon: 'fa-solid fa-table', category: 'Data' },
  { name: 'Pandas', icon: 'fa-solid fa-chart-column', category: 'Data' },
  { name: 'Numpy', icon: 'fa-solid fa-chart-line', category: 'Data' },
  { name: 'PyTorch', icon: 'fa-solid fa-network-wired', category: 'Data' },
  

  // Tools & Technologies
  // Git, React, HTMX, APIs
  { name: 'Git', icon: 'fab fa-git-alt', category: 'Tools' },
  { name: 'React', icon: 'fab fa-react', category: 'Tools' },
  { name: 'HTMX', icon: 'fa-solid fa-link', category: 'Tools' },
  { name: 'APIs', icon: 'fa-solid fa-code', category: 'Tools' }
];

const education: TimelineItem[] = [
  {
    date: '2024 - 2026',
    title: 'Master of Science in Applied Mathematics',
    organization: 'University of Utah',
    description: [
      'Certificate in Deep Learning, Artificial Intelligence, and Robotics (DL-AIR)',
      'Thesis: TBD',
      '4.0 GPA'
    ]
  },
  {
    date: '2019 - 2023',
    title: 'Bachelor of Science in Computational Mathematics',
    organization: 'Utah State University',
    description: [
      'Minors: Computer Science, Statistics, Anticipatory Intelligence',
      'Capstone: Analyzed Dept. of Energy data to model threat resilience in the US electric grid, applying methods from Anticipatory Intelligence including modelling dynamic system interactions and risk forecasting.'
    ]
  }
];

const experience: TimelineItem[] = [
  {
    date: 'March 2025 - Present',
    title: 'Software Engineer',
    organization: 'Signals',
    description: [
      'Processed a dataset of 2.5 million audio recordings and transcriptions using topic modeling to isolate high-value data clusters for model training.',
      'Engineered backend optimizations in PostgreSQL, achieving a 60x reduction in query latency and a 30% increase in vector-based retrieval accuracy.',
      'Automated quality control systems to flag lead qualification in AI chat conversations.'
    ]
  },
  {
    date: '2023 - 2025',
    title: 'Code Review',
    organization: 'Outlier AI',
    description: [
      'Evaluated and refined RLHF training data for LLMs, auditing code quality across 6 metrics to ensure numerical accuracy and reasoning consistency.',
      'Corrected complex SQL queries joining between 15+ tables generated from client models, ensuring data integrity and performance optimization.'
    ]
  },
  {
    date: '2022',
    title: 'Research Assistant',
    organization: 'James Madison University',
    description: [
      'Automated data pipelines to generate networks with variable connectivities, compare results with previous methods, and unit-test our parallelizable, unsupervised algorithm.',
      'Co-authored and presented a research paper on directed graph community detection at MIT’s URTC conference; open-sourced the Python preprocessing algorithm on GitHub.'
    ]
  }
];

const interests: Interest[] = [
  {
    name: 'Photography',
    icon: 'fas fa-camera',
    description: 'Everything I know I learned from my HS newsroom'
  },
  {
    name: 'Reading',
    icon: 'fas fa-book',
    description: 'Would love to do it more'
  },
  {
    name: 'Hiking',
    icon: 'fas fa-mountain',
    description: 'Casual National Parks enjoyer'
  },
  {
    name: 'Cooking',
    icon: 'fas fa-utensils',
    description: 'Mostly desserts, but I enjoy cooking other things too'
  },
  {
    name: 'Board Games',
    icon: 'fa-solid fa-chess',
    description: 'Studying their strategies in simulation only adds to the fun!'
  },
];

import { handleResumeDownload } from '../lib/utils';

// ============================================
// COMPONENT
// ============================================

function About() {

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <div className="hero-photo-container">
            <img 
              src={personalInfo.photoPath} 
              alt={personalInfo.name}
              className="hero-photo"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <div className="hero-intro">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="bio-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-section about-skills">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-container">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <i className={`${skill.icon} skill-icon`}></i>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="about-section about-timeline">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline-container">
          {/* Experience */}
          <div className="timeline-section">
            <h3 className="timeline-section-title">Experience</h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                  <div className="timeline-content">
                    <div className="timeline-date">{item.date}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <div className="timeline-organization">{item.organization}</div>
                    <ul className="timeline-description">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Education */}
          <div className="timeline-section">
            <h3 className="timeline-section-title">Education</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <div key={index} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                  <div className="timeline-content">
                    <div className="timeline-date">{item.date}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <div className="timeline-organization">{item.organization}</div>
                    <ul className="timeline-description">
                      {item.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="about-section about-interests">
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-item">
              <i className={`${interest.icon} interest-icon`}></i>
              <h4 className="interest-name">{interest.name}</h4>
              <p className="interest-description">{interest.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Download Button */}
      <section className="about-section about-resume">
        <button 
          className="resume-button"
          onClick={handleResumeDownload}
        >
          <i className="fas fa-download"></i>
          Download Resume / CV
        </button>
      </section>
    </div>
  );
}

export default About;
