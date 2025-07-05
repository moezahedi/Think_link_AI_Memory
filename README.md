# Epic Clicker Game

A fun clicker game built with React Native and Expo, deployable to the web!

## Features
- 🎮 Interactive clicker gameplay
- ⏰ 30-second timer challenge
- 🏆 High score tracking
- 💰 Coin system with shop
- 🛒 Upgrades (Auto Clicker, Power Up)
- 🎊 Level progression
- 🌐 Web and mobile support

## How to run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for web:
   ```
   npm run build:web
   ```

4. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

## Game Instructions
- Click the big red button to earn points and coins
- Buy upgrades in the shop to get stronger
- Try to beat your high score before time runs out!
- Level up every 50 points for increased click power

## Technologies Used
- React Native
- Expo
- React Native Web
- GitHub Pages (for deployment)

## Live Demo
Play the game at: https://moezahedi.github.io/Think_link_AI_Memory

## Project Structure
```
my-project/
  App.js              # Main game component
  index.js            # Entry point
  app.json            # Expo configuration
  package.json        # Dependencies and scripts
  assets/             # Images and icons
  dist/               # Web build (generated)
  README.md           # This file
  .gitignore          # Git ignore rules
```

## Development
- Run `npm start` to start the development server
- Press `w` to open in web browser
- Press `a` to open in Android emulator
- Press `i` to open in iOS simulator

## Deployment
This project is configured for easy deployment to GitHub Pages. The `dist/` folder contains the web build that gets served. 