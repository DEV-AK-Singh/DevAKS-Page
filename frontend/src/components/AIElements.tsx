import React, { useEffect } from 'react';

const AIElements: React.FC = () => {
  useEffect(() => {
    const createElements = () => {
      const neurons = 50;
      const connections = 10;
      const container = document.getElementById('ai-elements');
      if (!container) return;

      // Clear existing elements
      container.innerHTML = '';

      // Create neurons
      for (let i = 0; i < neurons; i++) {
        const neuron = document.createElement('div');
        neuron.className = 'neuron';
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 3;
        
        neuron.style.left = `${posX}%`;
        neuron.style.top = `${posY}%`;
        neuron.style.animationDelay = `${delay}s`;
        
        container.appendChild(neuron);
      }

      // Create connections
      for (let i = 0; i < connections; i++) {
        const connection = document.createElement('div');
        connection.className = 'connection';
        
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const length = 50 + Math.random() * 100;
        const rotation = Math.random() * 360;
        const delay = Math.random() * 5;
        
        connection.style.left = `${posX}%`;
        connection.style.top = `${posY}%`;
        connection.style.width = `${length}px`;
        connection.style.transform = `rotate(${rotation}deg)`;
        connection.style.animationDelay = `${delay}s`;
        
        container.appendChild(connection);
      }
    };

    createElements();
  }, []);

  return <div id="ai-elements" className="fixed inset-0 pointer-events-none z-0" />;
};

export default AIElements;