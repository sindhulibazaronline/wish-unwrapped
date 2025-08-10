import { useState } from 'react';
import { Gift, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface GiftItem {
  name: string;
  quantity: number;
  price: string;
}

interface GiftRevealGameProps {
  gifts: GiftItem[];
  onAllRevealed: () => void;
}

// Generate 10 gifts, using the provided gifts and filling with random ones
const generateTenGifts = (originalGifts: GiftItem[]): GiftItem[] => {
  const additionalGifts = [
    { name: "Bluetooth Headphones", quantity: 1, price: "2000.00" },
    { name: "Premium Coffee Beans", quantity: 1, price: "800.00" },
    { name: "Silk Scarf", quantity: 1, price: "1200.00" },
    { name: "Artisan Candle Set", quantity: 1, price: "600.00" },
    { name: "Wireless Charger", quantity: 1, price: "1500.00" },
    { name: "Gourmet Tea Collection", quantity: 1, price: "900.00" },
    { name: "Designer Sunglasses", quantity: 1, price: "3500.00" },
    { name: "Essential Oils Kit", quantity: 1, price: "1100.00" },
    { name: "Smart Watch", quantity: 1, price: "4500.00" },
    { name: "Premium Notebook Set", quantity: 1, price: "700.00" }
  ];

  const allGifts = [...originalGifts, ...additionalGifts];
  return allGifts.slice(0, 10);
};

export const GiftRevealGame = ({ gifts, onAllRevealed }: GiftRevealGameProps) => {
  const tenGifts = generateTenGifts(gifts);
  const [selectedGift, setSelectedGift] = useState<number | null>(null);
  const [allRevealed, setAllRevealed] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const handleCardClick = (index: number) => {
    if (selectedGift !== null || isRevealing) return;
    
    setIsRevealing(true);
    setSelectedGift(index);
    
    setTimeout(() => {
      setAllRevealed(true);
      setIsRevealing(false);
    }, 600);
  };

  const handleClaimGift = () => {
    onAllRevealed();
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-festive">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Choose Your Gift! 🎁
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          {selectedGift === null ? "Click on any mystery box to select your gift" : "Your gift selection is complete!"}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {tenGifts.map((gift, index) => {
            const isRevealed = allRevealed;
            const isSelected = selectedGift === index;
            
            return (
              <div
                key={index}
                className={`
                  relative h-40 transform transition-all duration-300
                  ${selectedGift === null && !isRevealing ? 'cursor-pointer hover:scale-105 hover:shadow-glow' : ''}
                  ${isSelected && allRevealed ? 'ring-4 ring-celebration shadow-celebration scale-110' : ''}
                `}
                onClick={() => handleCardClick(index)}
              >
                <div className={`
                  absolute inset-0 rounded-xl preserve-3d transition-transform duration-600
                  ${isRevealed ? 'rotate-y-180' : ''}
                `}>
                  {/* Front of card - Mystery Box */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-card border-2 border-primary/20 rounded-xl flex items-center justify-center shadow-card">
                    <div className="text-center">
                      <Gift className="h-10 w-10 text-primary mx-auto mb-2 animate-pulse-glow" />
                      <p className="text-sm font-semibold text-foreground">Gift #{index + 1}</p>
                    </div>
                  </div>
                  
                  {/* Back of card - Revealed Gift */}
                  <div className={`
                    absolute inset-0 backface-hidden rotate-y-180 rounded-xl flex items-center justify-center shadow-celebration
                    ${isSelected ? 'bg-gradient-celebration border-4 border-celebration' : 'bg-gradient-card border-2 border-primary/20'}
                  `}>
                    <div className={`text-center p-3 ${isSelected ? 'text-primary-foreground' : 'text-foreground'}`}>
                      <Sparkles className={`h-8 w-8 mx-auto mb-2 ${isSelected ? 'animate-sparkle text-yellow-200' : 'text-primary'}`} />
                      <h3 className="text-sm font-bold mb-1">{gift.name}</h3>
                      <p className="text-xs">Qty: {gift.quantity}</p>
                      <p className="text-lg font-bold">${gift.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {selectedGift !== null && allRevealed && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-celebration text-primary-foreground p-6 rounded-2xl shadow-celebration max-w-md mx-auto">
              <Sparkles className="h-12 w-12 mx-auto mb-4 animate-sparkle" />
              <h3 className="text-2xl font-bold mb-2">Your Selected Gift!</h3>
              <p className="text-lg">{tenGifts[selectedGift].name}</p>
              <p className="text-3xl font-bold mt-2">${tenGifts[selectedGift].price}</p>
            </div>
            
            <Button
              onClick={handleClaimGift}
              variant="celebration"
              size="lg"
              className="text-lg px-12 py-6"
            >
              Claim Your Gift! 🎉
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};