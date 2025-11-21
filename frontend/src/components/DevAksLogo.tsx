import React, { useEffect, useRef } from "react";

export default function DevAksLogo(): React.ReactElement {
  const neuralBgRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create neural network nodes and connections
    const neuralBg = neuralBgRef.current;
    const nodePositions: Array<{ x: number; y: number }> = [
      { x: 50, y: 50 },
      { x: 150, y: 80 },
      { x: 250, y: 60 },
      { x: 350, y: 90 },
      { x: 80, y: 150 },
      { x: 180, y: 180 },
      { x: 280, y: 160 },
      { x: 320, y: 200 },
      { x: 100, y: 250 },
      { x: 200, y: 280 },
      { x: 300, y: 260 },
      { x: 360, y: 300 },
      { x: 60, y: 340 },
      { x: 160, y: 360 },
      { x: 260, y: 350 },
      { x: 340, y: 370 },
    ];

    if (neuralBg) {
      nodePositions.forEach((pos, i) => {
        const node = document.createElement("div");
        node.className = "absolute w-2 h-2 bg-white rounded-full";
        node.style.left = pos.x + "px";
        node.style.top = pos.y + "px";
        node.style.animationDelay = i * 0.2 + "s";
        node.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.8)";
        node.style.animation = "pulse 3s ease-in-out infinite";
        neuralBg.appendChild(node);

        // Create connections to nearby nodes
        nodePositions.forEach((targetPos, j) => {
          if (j > i) {
            const distance = Math.sqrt(
              Math.pow(targetPos.x - pos.x, 2) +
                Math.pow(targetPos.y - pos.y, 2)
            );
            if (distance < 120) {
              const connection = document.createElement("div");
              connection.className = "absolute h-px";
              connection.style.background =
                "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)";
              const angle =
                (Math.atan2(targetPos.y - pos.y, targetPos.x - pos.x) * 180) /
                Math.PI;
              connection.style.width = distance + "px";
              connection.style.left = pos.x + "px";
              connection.style.top = pos.y + "px";
              connection.style.transform = `rotate(${angle}deg)`;
              connection.style.transformOrigin = "left center";
              connection.style.animationDelay = i * 0.15 + j * 0.1 + "s";
              connection.style.animation = "flow 2s linear infinite";
              neuralBg.appendChild(connection);
            }
          }
        });
      });
    }

    // Create floating particles
    const particlesContainer = particlesRef.current;
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute w-0.5 h-0.5 bg-white rounded-full";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 4 + "s";
        particle.style.animationDuration = 3 + Math.random() * 2 + "s";
        particle.style.animation = `rise ${
          3 + Math.random() * 2
        }s linear infinite`;
        particle.style.opacity = "0";
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.5); opacity: 1; }
        }
        @keyframes flow {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.3); }
          50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.6); }
        }
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-400px) translateX(100px); opacity: 0; }
        }
        .logo-icon {
          animation: float 3s ease-in-out infinite;
        }
        .logo-icon:hover {
          transform: scale(1.05) translateY(-5px);
        }
        .logo-text:hover {
          transform: scale(1.02);
        }
        .subtitle-text {
          animation: glow 2s ease-in-out infinite;
        }
        .blink-dot {
          animation: blink 2s ease-in-out infinite;
        }
        .gradient-white-light {
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-gray-medium {
          background: linear-gradient(135deg, #aaaaaa 0%, #888888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-light-white {
          background: linear-gradient(135deg, #cccccc 0%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden font-mono">
        <div className="relative text-center p-6 sm:p-10 md:p-16">
          {/* Neural network background */}
          <div
            ref={neuralBgRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 opacity-15"
          />

          <div className="relative inline-block">
            {/* Logo icon */}
            <div
              className="logo-icon relative w-24 h-24 sm:w-28 sm:h-28 md:w-48 md:h-48 mx-auto mb-4 sm:mb-6 bg-linear-to-br from-white to-gray-300 rounded-2xl flex items-center justify-center transition-all duration-300"
              style={{ boxShadow: "0 20px 60px rgba(255, 255, 255, 0.2)" }}
            >
              <div className="absolute inset-0.5 bg-black rounded-full" />
              <div
                className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold gradient-white-light flex items-center justify-center mb-1 sm:mb-2"
                style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.5)" }}
              >
                <span className="inline-flex">&lt;🧠&gt;</span>
              </div>
            </div>

            {/* Logo text */}
            <div className="logo-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-2 sm:mb-3 transition-all duration-300">
              <span className="gradient-white-light">dev</span>
              <span className="gradient-gray-medium">aks</span>
              <span
                className="blink-dot text-white"
                style={{ textShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
              >
                .
              </span>
              <span className="gradient-light-white">space</span>
            </div>

            {/* Subtitle */}
            <div className="subtitle-text text-xs sm:text-sm text-gray-300 tracking-widest opacity-80">
              Gen AI • Full Stack Developer
            </div>
          </div>

          {/* Particles */}
          <div
            ref={particlesRef}
            className="absolute inset-0 pointer-events-none"
          />
        </div>
      </div>
    </>
  );
}
