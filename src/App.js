import React, { useEffect, useState, useCallback } from 'react';
import chroma from 'chroma-js';
import './App.css';

const TOTAL_ROWS = 15;
const TOTAL_COLUMNS = 20;
const DROP_SIZE = 4; // Number of cells in a drop
const DROP_OPACITIES = [1, 0.8, 0.6, 0.4]; // Transparency gradient
const MIN_ACTIVE_DROPS = 10; // Minimum drops on screen at any time

// Function to generate a new raindrop
const createRaindrop = () => ({
  id: Math.random().toString(36).substr(2, 9),
  positionX: Math.floor(Math.random() * TOTAL_COLUMNS),
  positionY: 0,
  color: chroma.random().hex(),
});

const App = () => {
  const [activeDrops, setActiveDrops] = useState([]);

  const addRaindrop = useCallback(() => {
    setActiveDrops(existingDrops => {
      const filteredDrops = existingDrops.filter(
        drop => drop.positionY < TOTAL_ROWS + DROP_SIZE - 1
      );
      if (filteredDrops.length < MIN_ACTIVE_DROPS) {
        return [...filteredDrops, createRaindrop()];
      }
      return filteredDrops;
    });
  }, []);

  useEffect(() => {
    const spawnInterval = setInterval(addRaindrop, 500);
    return () => clearInterval(spawnInterval);
  }, [addRaindrop]);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setActiveDrops(existingDrops => {
        const movedDrops = existingDrops.map(drop => ({
          ...drop,
          positionY: drop.positionY + 1,
        }));

        if (movedDrops.length < MIN_ACTIVE_DROPS) {
          movedDrops.push(createRaindrop());
        }

        return movedDrops;
      });
    }, 200);

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="app">
      <div className="fog">Falling Rain Pattern</div>
      <div className="grid">
        {Array.from({ length: TOTAL_ROWS }).map((_, rowIdx) => (
          <div key={rowIdx} className="grid-row">
            {Array.from({ length: TOTAL_COLUMNS }).map((_, colIdx) => {
              const raindrop = activeDrops.find(
                drop =>
                  drop.positionX === colIdx &&
                  rowIdx >= drop.positionY &&
                  rowIdx < drop.positionY + DROP_SIZE
              );

              const opacityLevel = raindrop
                ? DROP_OPACITIES[rowIdx - raindrop.positionY]
                : 1;

              return (
                <div
                  key={colIdx}
                  className="grid-cell"
                  style={{
                    backgroundColor: raindrop ? raindrop.color : 'transparent',
                    opacity: raindrop ? opacityLevel : 1,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
