import { ReactNode } from "react";
import '../styles/components/BentoGrid.css';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
  itemCount?: number;
}

const BentoGrid = ({ children, className = "", itemCount }: BentoGridProps) => {
  const singleItem = itemCount === 1;
  return (
    <div className={`bento-grid ${singleItem ? 'bento-grid-single' : ''} ${className}`}>
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

