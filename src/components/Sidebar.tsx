// src/Sidebar.tsx
import React from 'react';
import './Sidebar.css'; // Optional: for styling

interface SidebarProps {
  photoUrl: string;
  websiteName: string;
  description: string;
}

const Sidebar: React.FC<SidebarProps> = ({ photoUrl, websiteName, description }) => {
  return (
    <div className="sidebar">
      <img src={photoUrl} alt={`${websiteName} Logo`} className="sidebar-photo" />
      <h2 className="sidebar-title">{websiteName}</h2>
      <p className="sidebar-description">{description}</p>
    </div>
  );
};

export default Sidebar;