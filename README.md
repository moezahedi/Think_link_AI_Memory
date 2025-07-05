# Think & Link – AI Memory

An educational memory game that teaches AI ethics through interactive gameplay!

## Features
- 🧠 Memory-matching gameplay with AI-themed cards
- 🎓 Educational content about AI ethics and concepts
- 🎯 Quizzes and explanations after matches
- 🏆 Progress tracking and badges
- 📚 Library to review learned content
- 🌐 Web-based, no installation required
- 📱 Responsive design for all devices

## How to run

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Game Instructions
- Match pairs of AI-themed cards to learn about AI ethics
- Each match reveals educational content and explanations
- Complete quizzes to test your understanding
- Unlock new levels and collect badges
- Review all learned content in the Library

## Technologies Used
- React
- React Router DOM
- Bootstrap 5
- CSS3 with modern styling

## Live Demo
Play the game at: https://moezahedi.github.io/Think_link_AI_Memory

## Project Structure
```
ThinkLinkAIMemory/
  App.js              # Main app with routing
  index.js            # Entry point
  index.html          # HTML template
  components/         # React components
    Auth/             # Login, Register, Guest
    Game/             # Memory board, cards, modals
    Dashboard.js      # Main menu
    Onboarding.js     # Welcome screen
    Library.js        # Content review
  data/               # Game data and levels
  styles/             # CSS and theming
  assets/             # Images and icons
  package.json        # Dependencies and scripts
  README.md           # This file
  .gitignore          # Git ignore rules
```

## Development
- Run `npm start` to start the development server
- Open http://localhost:3000 in your browser
- The app uses React Router for navigation

## Deployment
This project is configured for deployment to GitHub Pages. The build folder contains the production-ready files. 