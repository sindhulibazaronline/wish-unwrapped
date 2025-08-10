import { useEffect, useState } from 'react';

export const AnimatedBackground = () => {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const colors = [
      'hsl(var(--celebration-purple))',
      'hsl(var(--celebration-pink))',
      'hsl(var(--celebration-gold))',
      'hsl(var(--celebration-blue))',
    ];

    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
      size: Math.random() * 8 + 4,
    }));

    setConfetti(pieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            animationDelay: `${piece.delay}s`,
            borderRadius: '50%',
          }}
        />
      ))}
      
      {/* Sparkle effects */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1.5}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};