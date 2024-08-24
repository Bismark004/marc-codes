import React, { useRef, useEffect, useState } from 'react';

const TextImageEffect = ({ imageUrl, text, fontSize = 12, textColor = '#fff', lineHeight = 15, letterSpacing = 8 }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = function() {
      // Set canvas size to match image
      canvas.width = img.width;
      canvas.height = img.height;
      setDimensions({ width: img.width, height: img.height });

      // Draw image
      ctx.drawImage(img, 0, 0);

      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set text properties
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = textColor;

      // Draw text
      let textIndex = 0;
      for (let y = 0; y < imageData.height; y += lineHeight) {
        for (let x = 0; x < imageData.width; x += letterSpacing) {
          const i = (y * imageData.width + x) * 4;
          const brightness = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
          
          if (brightness > 128) {
            ctx.fillText(text[textIndex % text.length], x, y);
            textIndex++;
          }
        }
      }
    };
    img.onerror = function() {
      console.error('Error loading image:', imageUrl);
    };
    img.src = imageUrl;
  }, [imageUrl, text, fontSize, textColor, lineHeight, letterSpacing]);

  return (
    <div style={{ maxWidth: '100%', height: 'auto', overflow: 'hidden' }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: '100%', 
          height: 'auto', 
          maxWidth: dimensions.width, 
          maxHeight: dimensions.height 
        }} 
      />
    </div>
  );
};

export default TextImageEffect;