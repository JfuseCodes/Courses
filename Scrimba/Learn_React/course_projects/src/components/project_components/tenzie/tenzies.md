# 🎲 Tenzies Game Project

A React-based dice game where the goal is to roll until all dice are the same. This project focuses on state management, side effects with useEffect, and conditional rendering.

## 🚀 Features Added
- Game Timer: Tracks minutes and seconds to provide a sense of urgency.
- Roll Counter: Monitors how many attempts the user takes to win.
- Real Dice Styling: Transitioned from simple numbers to a visual "pip" layout for a premium feel.

## 🛠 Technical Architecture
For future refactoring here is the current logic flow:
-  State Synchronization: The useEffect hook is the "Brain." It handles the 1-second timer interval and checks the win condition simultaneously.
- Win Logic: Success is defined as allDiceFrozen AND allSameValue. It benchmarks every die against dice[0].number.
- Conditional Button: The main button toggles between rollDice() and playAgain() based on the gameOver state.
- Start Trigger: The timer doesn't start on page load; it triggers the moment a user clicks their first die (freezeDie).

## ⚠️ Refactor Notes & "Technical Debt"
1. Effect Separation: 
    1. Currently, the win condition check is tied to the timer interval (running every second). 
    2. Implement a "Fast Mode," 
    3. Move the win check into the freezeDie function for instant feedback.

2. Dependency Array: 
    1. The useEffect depends on time. This is why the timer works, but it means the entire win-check logic re-runs every single second.

## 🔮 Future Implementations
##### ⚙️ Core Logic Updates
- Dynamic Dice Creation: Replace the static data.js with a generator function. This allows for a "Difficulty" setting where users choose 10, 15, or 20 dice.
- High Score Persistence: Integrate localStorage to save the bestTime and lowestRolls.

##### 🎨 UX & Feedback
- "Nearly There" Feedback: Add a CSS wiggle animation or a gold border to dice that match the majority value but aren't frozen yet.
- Leaderboard: A "History" sidebar showing the last 5 games with dates and stats.

##### 🕹️ New Game Modes
- Time Limit: Add a "Blitz" mode where a 30-second countdown results in a "Game Over" if not completed.
- Sound Effects: Add satisfying click sounds for freezing dice and a celebratory "Tada!" for the confetti state.
