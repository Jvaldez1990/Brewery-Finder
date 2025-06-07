import React, { useRef, useEffect } from "react";

const NUM_BUBBLES = 60;

const BeerSudsCanvasBackground = () => {
  const canvasRef = useRef(null);
  const bubbles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize bubbles
    bubbles.current = Array.from({ length: NUM_BUBBLES }, () => ({
      baseX: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 8 + 4,
      speed: Math.random() * 0.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      wobbleRange: Math.random() * 10 + 5,
      wobbleSpeed: Math.random() * 0.02 + 0.01,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      // Beer gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#f6d365");
      gradient.addColorStop(1, "#fda085");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bubbles
      bubbles.current.forEach((bubble) => {
        const x = bubble.baseX + Math.sin(time * bubble.wobbleSpeed + bubble.phase) * bubble.wobbleRange;
        ctx.beginPath();
        ctx.arc(x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity})`;
        ctx.fill();

        // Move upward
        bubble.y -= bubble.speed;
        if (bubble.y + bubble.radius < 0) {
          bubble.y = canvas.height + bubble.radius;
          bubble.baseX = Math.random() * canvas.width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        display: "block",
      }}
    />
  );
};

export default BeerSudsCanvasBackground;
