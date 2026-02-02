import React from 'react';

const AdBanner = () => {
  const style: React.CSSProperties = {
    width: '100%',
    height: '100px',
    background: '#1a1a1a',
    border: '1px dashed #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#555',
    margin: '20px 0',
    borderRadius: '8px'
  };

  return (
    <div style={style}>
      <p>Anúncio (Space for Ads)</p>
    </div>
  );
};

export default AdBanner;
