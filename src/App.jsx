import React, { useEffect } from 'react';
import Canvas from './assets/data/components/Canvas';

function App() {
  useEffect(() => {
    const handleWheel = (e) => {
      window.scrollBy({
        top: e.deltaY,
        behavior: "auto"
      });
    };

   
    const handleKeyDown = (e) => {
      const scrollAmount = 100; 
      switch (e.key) {
        case "ArrowDown":
          window.scrollBy(0, scrollAmount);
          break;
        case "ArrowUp":
          window.scrollBy(0, -scrollAmount);
          break;
        case " ": 
          e.preventDefault(); 
          window.scrollBy(0, window.innerHeight * 0.5);
          break;
        case "PageDown":
          window.scrollBy(0, window.innerHeight);
          break;
        case "PageUp":
          window.scrollBy(0, -window.innerHeight);
          break;
        default:
          break;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="font-sans text-platinum-gray bg-deep-navy">
      <Canvas />
    </div>
  );
}

export default App;