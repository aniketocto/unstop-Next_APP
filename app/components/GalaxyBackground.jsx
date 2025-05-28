'use client';
import { useEffect, useRef } from 'react';

const GalaxyBackground = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const scrollVelocity = useRef(0);
  const scrollTimeout = useRef(null);
  const angle = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const starCount = 800;

    const colors = [
      'rgba(255,255,255',
      'rgba(173,216,230,', // light blue
      'rgba(186,85,211,',  // medium orchid
      'rgba(138,43,226,',  // blue violet
    ];

    const createStar = () => ({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      size: Math.random() * 1.2 + 0.03,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    stars.current = Array.from({ length: starCount }, createStar);

    const draw = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      angle.current += 0.0004;
      const time = Date.now() * 0.002;

      stars.current.forEach((star, i) => {
        // Rotate around origin
        const cos = Math.cos(angle.current);
        const sin = Math.sin(angle.current);
        const x = star.x * cos - star.y * sin;
        const y = star.x * sin + star.y * cos;

        star.z -= scrollVelocity.current * 3;

        // Reset star if it's too close (z < 1) or too far (z > width)
        if (star.z < 1 || star.z > width) {
          stars.current[i] = createStar();
          stars.current[i].z = width; // Respawn far away
          return;
        }

        // Perspective projection
        const f = width / (star.z || 1);
        const sx = x * f + width / 2;
        const sy = y * f + height / 2;

        if (sx < 0 || sx > width || sy < 0 || sy > height) {
          // If off-screen, reset to random position
          stars.current[i] = createStar();
          stars.current[i].z = width;
          return;
        }

        const twinkle = Math.sin(time + star.twinkleOffset) * 0.3;
        const alpha = Math.min(1, Math.max(0, star.baseAlpha + twinkle));

        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      scrollVelocity.current = 1.2;
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        scrollVelocity.current = 0.15;
      }, 100);
    };

    scrollVelocity.current = 0.15;

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-[-1] w-full h-full"
    />
  );
};

export default GalaxyBackground;
