import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className = '', style = {} }) => {
  const defaultStyle: React.CSSProperties = {
    background: 'var(--card-bg)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid var(--card-border)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    color: 'var(--foreground)',
    ...style
  };

  return (
    <div className={className} style={defaultStyle}>
      {children}
    </div>
  );
};

export default Card;
