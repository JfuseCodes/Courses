### Word
- fetch word
- store word to state as an object with the following key value pairs: 

step by step: 

1. React Use effect
 - fetch the word
 - split the word
 - store as objects:
  - id
  - active
  - letter

GAMEPLAY LOGIC:

2. each letter should start as inactive
3. When you press a keyboard button
4. take the keyboard button value, store it in a variable
5. check if each letter in the word matches that button:
   
   # IF IT MATCHES
   a1. change letter's "isShown" state from false to true
   a2. Change the keyboard key's color to green (make it unpressable until remainder of game)
   
   # IF IT DOES NOT MATCH
   b1. change letter's state from not active to active
   b2. change the keyboard key's color to red(make it unpressable until remainder of the game)
   b3. first index of an array gets skull so on, and so forth until there is no more left