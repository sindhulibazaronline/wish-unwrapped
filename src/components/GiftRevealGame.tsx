import { useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';

interface GiftItem {
  name: string;
  quantity: number;
  price: string;
}

interface GiftRevealGameProps {
  gifts: GiftItem[];
  onAllRevealed: () => void;
}

export const GiftRevealGame = ({ gifts, onAllRevealed }: GiftRevealGameProps) => {
  const [revealedGifts, setRevealedGifts] = useState<Set<number>>(new Set());
  const [isRevealing, setIsRevealing] = useState(false);

  const handleCardClick = (index: number) => {
    if (revealedGifts.has(index) || isRevealing) return;
    
    setIsRevealing(true);
    
    setTimeout(() => {
      const newRevealed = new Set(revealedGifts);
      newRevealed.add(index);
      setRevealedGifts(newRevealed);
      setIsRevealing(false);
      
      if (newRevealed.size === gifts.length) {
        setTimeout(() => onAllRevealed(), 500);
      }
    }, 600);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-festive">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Discover Your Gifts! 🎁
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Click on each mystery box to reveal your special gifts
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {gifts.map((gift, index) => {
            const isRevealed = revealedGifts.has(index);
            
            return (
              <div
                key={index}
                className={`
                  relative h-48 cursor-pointer transform transition-all duration-300 hover:scale-105
                  ${!isRevealed && !isRevealing ? 'hover:shadow-glow' : ''}
                `}
                onClick={() => handleCardClick(index)}
              >
                <div className={`
                  absolute inset-0 rounded-2xl preserve-3d transition-transform duration-600
                  ${isRevealed ? 'rotate-y-180' : ''}
                `}>
                  {/* Front of card - Mystery Box */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-card border-2 border-primary/20 rounded-2xl flex items-center justify-center shadow-card">
                    <div className="text-center">
                      <Gift className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-glow" />
                      <p className="text-lg font-semibold text-foreground">Mystery Gift #{index + 1}</p>
                      <p className="text-sm text-muted-foreground">Click to reveal!</p>
                    </div>
                  </div>
                  
                  {/* Back of card - Revealed Gift */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-celebration border-2 border-accent/30 rounded-2xl flex items-center justify-center shadow-celebration">
                    <div className="text-center text-primary-foreground p-6">
                      <Sparkles className="h-12 w-12 mx-auto mb-4 animate-sparkle" />
                      <h3 className="text-xl font-bold mb-2">{gift.name}</h3>
                      <p className="text-lg">Quantity: {gift.quantity}</p>
                      <p className="text-2xl font-bold mt-2">${gift.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {revealedGifts.size > 0 && revealedGifts.size < gifts.length && (
          <p className="text-lg text-muted-foreground animate-bounce-in">
            {gifts.length - revealedGifts.size} more gift{gifts.length - revealedGifts.size !== 1 ? 's' : ''} to discover!
          </p>
        )}
      </div>
    </section>
  );
};