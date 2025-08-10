import { CheckCircle, Heart, Sparkles } from 'lucide-react';

interface ThankYouMessageProps {
  receiverName: string;
  senderName: string;
}

export const ThankYouMessage = ({ receiverName, senderName }: ThankYouMessageProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-celebration relative overflow-hidden">
      {/* Extra sparkle effects for celebration */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            {['✨', '🎉', '🎊', '💝', '⭐'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>
      
      <div className="text-center space-y-8 animate-bounce-in relative z-10">
        <div className="space-y-6">
          <CheckCircle className="h-32 w-32 text-primary-foreground mx-auto animate-pulse-glow" />
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg">
            Congratulations! 🎉
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground">
            Your Gifts Have Been Claimed!
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-celebration border border-white/20">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-lg text-foreground">
                <Heart className="h-6 w-6 text-red-500 animate-sparkle" />
                <span className="font-semibold">Thank you, {receiverName}!</span>
                <Heart className="h-6 w-6 text-red-500 animate-sparkle" />
              </div>
              <p className="text-foreground">
                Your wonderful gifts from <span className="font-semibold">{senderName}</span> have been successfully claimed!
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-primary-foreground">
              <Sparkles className="h-8 w-8 mx-auto mb-2 animate-sparkle" />
              <p className="text-sm font-medium">Gift Confirmation</p>
              <p className="text-xs opacity-90">Check your messages for details</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-primary-foreground">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 animate-bounce-in" />
              <p className="text-sm font-medium">Next Steps</p>
              <p className="text-xs opacity-90">You'll be contacted soon</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-primary-foreground">
              <Heart className="h-8 w-8 mx-auto mb-2 animate-pulse-glow" />
              <p className="text-sm font-medium">Enjoy!</p>
              <p className="text-xs opacity-90">Your gifts are on the way</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};