import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Gift } from 'lucide-react';

export const ClaimSection = ({ claimed, claimedAt, onClaim }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleClaim = async () => {
    setIsProcessing(true);
    await onClaim();
    setIsProcessing(false);
  };

  if (claimed) {
    return (
      <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-card">
        <div className="text-center space-y-8 animate-bounce-in">
          <CheckCircle className="h-24 w-24 text-green-500 mx-auto animate-sparkle" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Gift Already Claimed! 🎉
          </h2>
          <p className="text-xl text-muted-foreground">
            This wonderful gift was claimed on{' '}
            {claimedAt ? new Date(claimedAt).toLocaleDateString() : 'an earlier date'}
          </p>
          <div className="bg-gradient-celebration text-primary-foreground rounded-2xl p-8 max-w-md mx-auto shadow-celebration">
            <p className="text-lg font-semibold">Thank you for checking! 💝</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background to-secondary/20">
      <div className="text-center space-y-12 animate-bounce-in">
        <div className="space-y-6">
          <Gift className="h-24 w-24 text-primary mx-auto animate-pulse-glow" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Claim Your Gifts? 🎁
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            All your wonderful gifts have been revealed! Click the button below to officially claim them and complete your special surprise.
          </p>
        </div>
        
        <Button
          variant="celebration"
          size="lg"
          onClick={handleClaim}
          disabled={isProcessing}
          className="text-2xl px-12 py-6 h-auto rounded-full text-primary-foreground font-bold"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-foreground" />
              Processing...
            </>
          ) : (
            <>
              <Gift className="h-8 w-8" />
              Claim My Gifts Now!
            </>
          )}
        </Button>
        
        <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto shadow-card border border-white/20">
          <p className="text-sm text-muted-foreground">
            Once claimed, you'll receive confirmation and next steps for receiving your gifts! ✨
          </p>
        </div>
      </div>
    </section>
  );
};