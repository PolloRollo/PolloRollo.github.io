import { ReactNode } from "react";
import '../styles/components/BentoGrid.css';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
  return (
    <div className={`bento-grid ${className}`}>
      {children}
    </div>
  );
};

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}

const BentoItem = ({ children, className = "", featured }: BentoItemProps) => {
  return (
    <div
      className={`bento-item ${featured ? "bento-item-featured" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export { BentoGrid, BentoItem };

