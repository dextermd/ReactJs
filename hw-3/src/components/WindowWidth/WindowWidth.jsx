import React, { useState, useEffect } from 'react';

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Текущая ширина окна: {width}px</div>;
};

export default WindowWidth;
