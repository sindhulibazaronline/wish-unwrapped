export const GreetingSection = ({
  occasion,
  receiverName,
  senderName,
  relationship,
  message,
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-gradient-celebration relative">
      <div className="text-center space-y-8 animate-bounce-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-primary-foreground drop-shadow-lg">
            Happy {occasion}!
          </h1>
          <h2 className="text-4xl md:text-6xl font-semibold text-primary-foreground">
            {receiverName} 🎉
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
            A special wish from <span className="font-semibold">{senderName}</span> ({relationship})
          </p>
          
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-card border border-white/20">
            <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed">
              "{message}"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};