import { useState } from 'react';
import { AnimatedBackground } from './AnimatedBackground';
import { GreetingSection } from './GreetingSection';
import { GiftRevealGame } from './GiftRevealGame';
import { ClaimSection } from './ClaimSection';
import { ThankYouMessage } from './ThankYouMessage';

export const BuyForFriend = ({ data }) => {
  const [currentSection, setCurrentSection] = useState('greeting');
  const [gameCompleted, setGameCompleted] = useState(false);
  const [giftClaimed, setGiftClaimed] = useState(data.claimed);

  const handleStartGame = () => {
    setCurrentSection('game');
  };

  const handleGameComplete = () => {
    setGameCompleted(true);
    setCurrentSection('claim');
  };

  const handleClaim = async () => {
    // Simulate API call to mark gift as claimed
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGiftClaimed(true);
    setCurrentSection('thanks');
  };

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      
      {currentSection === 'greeting' && (
        <div>
          <GreetingSection
            occasion={data.occasion}
            receiverName={data.receiverName}
            senderName={data.senderName}
            relationship={data.relationship}
            message={data.message}
          />
          
          {/* Navigation to game */}
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={handleStartGame}
              className="bg-gradient-celebration text-primary-foreground px-8 py-4 rounded-full font-bold text-lg shadow-celebration hover:shadow-glow transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              Discover Your Gifts! 🎁
            </button>
          </div>
        </div>
      )}
      
      {currentSection === 'game' && (
        <GiftRevealGame
          gifts={data.itemsOrdered}
          onAllRevealed={handleGameComplete}
        />
      )}
      
      {currentSection === 'claim' && (
        <ClaimSection
          claimed={giftClaimed}
          claimedAt={data.claimedAt}
          onClaim={handleClaim}
        />
      )}
      
      {currentSection === 'thanks' && (
        <ThankYouMessage
          receiverName={data.receiverName}
          senderName={data.senderName}
        />
      )}
    </div>
  );
};