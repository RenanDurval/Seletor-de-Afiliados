import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', style, ...props }) => {
  const getStyle = (): React.CSSProperties => {
     let baseStyle: React.CSSProperties = {
         padding: '12px 24px',
         borderRadius: '8px',
         fontWeight: 'bold',
         cursor: 'pointer',
         transition: 'all 0.3s ease',
         border: 'none',
         outline: 'none',
         ...style
     };

     if (variant === 'primary') {
       baseStyle = { ...baseStyle, background: 'linear-gradient(90deg, var(--primary), var(--secondary))', color: '#000', boxShadow: '0 0 15px var(--primary-glow)' };
     } else if (variant === 'outline') {
       baseStyle = { ...baseStyle, background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' };
     } else {
       baseStyle = { ...baseStyle, background: 'transparent', color: 'var(--foreground)' };
     }
     
     return baseStyle;
  };

  return (
    <button 
      onClick={onClick} 
      className={className}
      style={getStyle()}
      onMouseEnter={(e) => {
        if(variant === 'primary') e.currentTarget.style.boxShadow = '0 0 25px var(--secondary-glow)';
      }}
      onMouseLeave={(e) => {
        if(variant === 'primary') e.currentTarget.style.boxShadow = '0 0 15px var(--primary-glow)';
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
