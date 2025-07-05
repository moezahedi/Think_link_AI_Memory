import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [clickPower, setClickPower] = useState(5);
  const [autoClicker, setAutoClicker] = useState(0);
  const [coins, setCoins] = useState(0);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isGameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && isGameActive) {
      endGame();
    }
    return () => clearInterval(interval);
  }, [isGameActive, timeLeft]);

  // Auto clicker effect
  useEffect(() => {
    let interval = null;
    if (isGameActive && autoClicker > 0) {
      interval = setInterval(() => {
        setScore(prev => prev + autoClicker);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isGameActive, autoClicker]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(true);
    setLevel(1);
    setClickPower(5);
    setAutoClicker(0);
    setCoins(0);
  };

  const endGame = () => {
    setIsGameActive(false);
    if (score > highScore) {
      setHighScore(score);
      Alert.alert('🎉 New High Score! 🎉', `Congratulations! You scored ${score} points!`);
    }
  };

  const handleClick = () => {
    if (isGameActive) {
      const newScore = score + clickPower;
      setScore(newScore);
      setCoins(coins + 1);
      
      // Level up every 50 points
      const newLevel = Math.floor(newScore / 50) + 1;
      if (newLevel > level) {
        setLevel(newLevel);
        setClickPower(clickPower + 2);
        Alert.alert('🎊 Level Up! 🎊', `You reached level ${newLevel}! Click power increased!`);
      }
    }
  };

  const buyAutoClicker = () => {
    const cost = (autoClicker + 1) * 10;
    if (coins >= cost) {
      setCoins(coins - cost);
      setAutoClicker(autoClicker + 1);
      Alert.alert('🛒 Purchase Successful!', 'Auto clicker upgraded!');
    } else {
      Alert.alert('❌ Not Enough Coins', 'You need more coins to buy this upgrade!');
    }
  };

  const buyClickPower = () => {
    const cost = 20;
    if (coins >= cost) {
      setCoins(coins - cost);
      setClickPower(clickPower + 3);
      Alert.alert('💪 Power Up!', 'Click power increased!');
    } else {
      Alert.alert('❌ Not Enough Coins', 'You need more coins to buy this upgrade!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Epic Clicker Game 🚀</Text>
      
      {/* Game Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.score}>Score: {score}</Text>
        <Text style={styles.highScore}>High Score: {highScore}</Text>
        <Text style={styles.level}>Level: {level}</Text>
        <Text style={styles.coins}>💰 Coins: {coins}</Text>
        {isGameActive && <Text style={styles.timer}>⏰ Time: {timeLeft}s</Text>}
      </View>

      {/* Main Game Area */}
      <View style={styles.gameArea}>
        <TouchableOpacity 
          style={[styles.clickButton, { transform: [{ scale: isGameActive ? 1 : 0.9 }] }]}
          onPress={handleClick}
          disabled={!isGameActive}
        >
          <Text style={styles.clickButtonText}>CLICK!</Text>
          <Text style={styles.clickPowerText}>+{clickPower}</Text>
        </TouchableOpacity>
      </View>

      {/* Shop */}
      {isGameActive && (
        <View style={styles.shopContainer}>
          <Text style={styles.shopTitle}>🛒 Shop</Text>
          <View style={styles.shopButtons}>
            <TouchableOpacity 
              style={styles.shopButton} 
              onPress={buyAutoClicker}
            >
              <Text style={styles.shopButtonText}>Auto Clicker</Text>
              <Text style={styles.shopButtonPrice}>{(autoClicker + 1) * 10} coins</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.shopButton} 
              onPress={buyClickPower}
            >
              <Text style={styles.shopButtonText}>Power Up</Text>
              <Text style={styles.shopButtonPrice}>20 coins</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Game Controls */}
      <View style={styles.controlsContainer}>
        {!isGameActive ? (
          <TouchableOpacity style={styles.startButton} onPress={startGame}>
            <Text style={styles.startButtonText}>🎮 Start Game</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.endButton} onPress={endGame}>
            <Text style={styles.endButtonText}>⏹️ End Game</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Instructions */}
      <Text style={styles.instructions}>
        Click to earn points and coins! Buy upgrades in the shop. Reach higher levels for more power!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#00d4ff',
    textAlign: 'center',
  },
  statsContainer: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    maxWidth: 300,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ff88',
    textAlign: 'center',
    marginBottom: 5,
  },
  highScore: {
    fontSize: 18,
    color: '#ffaa00',
    textAlign: 'center',
    marginBottom: 5,
  },
  level: {
    fontSize: 18,
    color: '#ff6b6b',
    textAlign: 'center',
    marginBottom: 5,
  },
  coins: {
    fontSize: 18,
    color: '#ffd700',
    textAlign: 'center',
    marginBottom: 5,
  },
  timer: {
    fontSize: 18,
    color: '#ff4757',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  gameArea: {
    marginVertical: 20,
  },
  clickButton: {
    backgroundColor: '#ff6b6b',
    padding: 30,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  clickButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  clickPowerText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  shopContainer: {
    backgroundColor: '#16213e',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    maxWidth: 300,
  },
  shopTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00d4ff',
    textAlign: 'center',
    marginBottom: 10,
  },
  shopButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shopButton: {
    backgroundColor: '#0f3460',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100,
  },
  shopButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  shopButtonPrice: {
    fontSize: 12,
    color: '#ffd700',
    marginTop: 2,
  },
  controlsContainer: {
    marginVertical: 20,
  },
  startButton: {
    backgroundColor: '#00ff88',
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  endButton: {
    backgroundColor: '#ff4757',
    padding: 15,
    borderRadius: 10,
    minWidth: 150,
    alignItems: 'center',
  },
  endButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  instructions: {
    marginTop: 20,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 20,
  },
});
