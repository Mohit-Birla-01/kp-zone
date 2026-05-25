"use client";
import React, { useEffect, useRef } from "react";

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Configuration Settings
    const particleCount = 20; // Total number of moving dots
    const baseSpeed = 1;    // Drift velocity
    const dotRadius = 3;      // Size of the dots
    const dotColor = "rgba(55, 51, 161)"; // Soft brand blue with transparency

    // Setup Canvas Boundaries
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Particle Object blueprint blueprint
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        // Random direction assignment
        this.vx = (Math.random() - 0.5) * baseSpeed;
        this.vy = (Math.random() - 0.5) * baseSpeed;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce mechanics when hitting edge parameters
        if (this.x < 0 || this.x > canvas!.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas!.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }
    }

    // Initialize Particle Arrays
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Continuous Animation Loop Execution
    const renderLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };
    renderLoop();

    // Cleanup Events on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 w-full h-full pointer-events-none bg-gradient-to-b from-[#fbfbfc] to-[#f5f7f8]"
    />
  );
};

export default AnimatedBackground;