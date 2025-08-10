# BuyForFriend - Gift Wish Landing Page

## Required NPM Dependencies

Install these packages to run the project:

```bash
npm install react@^18.3.1 react-dom@^18.3.1 react-router-dom@^6.30.1
npm install @tanstack/react-query@^5.83.0
npm install @radix-ui/react-slot@^1.2.3 @radix-ui/react-toast@^1.2.14 @radix-ui/react-tooltip@^1.2.7
npm install class-variance-authority@^0.7.1 clsx@^2.1.1 tailwind-merge@^2.6.0
npm install lucide-react@^0.462.0
npm install tailwindcss-animate@^1.0.7
```

## Development Dependencies

```bash
npm install -D vite tailwindcss postcss autoprefixer
npm install -D @types/react @types/react-dom
npm install -D typescript eslint
```

## Project Structure

- `src/App.jsx` - Main app component with routing
- `src/components/BuyForFriend.jsx` - Main gift landing page component
- `src/components/AnimatedBackground.jsx` - Confetti and sparkle animations
- `src/components/GreetingSection.jsx` - Personalized greeting display
- `src/components/GiftRevealGame.jsx` - 10-gift selection game
- `src/components/ClaimSection.jsx` - Gift claiming interface
- `src/components/ThankYouMessage.jsx` - Post-claim confirmation
- `src/components/ui/button.jsx` - Enhanced button with celebration variant

## Features

- Interactive gift reveal game (10 gifts, select one)
- Animated confetti background
- Yellow/red color scheme
- Responsive design
- Celebration animations
- Gift claiming workflow