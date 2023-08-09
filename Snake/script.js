// Set up the size of the game board and how fast the snake moves
const boardSize = 20;        // Number of rows and columns in the grid
const cellSize = 20;         // Size of each cell (box) on the grid
const snakeSpeed = 100;      // Speed of the snake's movement in milliseconds

// Get the element representing the game board from the HTML
const gameBoard = document.getElementById('game-board');

// Initialize the snake's starting position and direction
let snake = [{ x: 10, y: 10 }];   // The snake's body parts (head and tail)
let food = { x: Math.floor(Math.random() * 5), y: Math.floor(Math.random() * 5) };         // The position of the food
let direction = 'right'; 
let gameBool = 0;          // The direction the snake is moving

// Create a function to make the snake appear on the game board
function createSnake() {
  for (let segment of snake) {
    const snakeSegment = document.createElement('div');  // Create a new element for a snake segment
    snakeSegment.classList.add('snake');                  // Add a CSS class to style the segment
    snakeSegment.style.left = `${segment.x * cellSize}px`;  // Set the position of the segment on the grid
    snakeSegment.style.top = `${segment.y * cellSize}px`;
    gameBoard.appendChild(snakeSegment);                 // Add the segment to the game board
  }
}

// Create a function to make the food appear on the game board
function createFood() {
  const foodElement = document.createElement('div');   // Create a new element for the food
  foodElement.classList.add('food');                    // Add a CSS class to style the food
  foodElement.style.left = `${food.x * cellSize}px`;    // Set the position of the food on the grid
  foodElement.style.top = `${food.y * cellSize}px`;
  gameBoard.appendChild(foodElement);                   // Add the food to the game board
}

// Create a function to move the snake
function moveSnake() {
  let headX = snake[0].x;
  let headY = snake[0].y;

  // Update the head's position based on the current direction
  if (direction === 'right') headX++;
  if (direction === 'left') headX--;
  if (direction === 'up') headY--;
  if (direction === 'down') headY++;

  const newHead = { x: headX, y: headY };   // Create a new head position
  snake.unshift(newHead);                   // Add the new head to the snake's body

  // Check if the snake eats the food
  if (headX === food.x && headY === food.y) {
    // Generate new random position for the food
    food = {
      x: Math.floor(Math.random() * boardSize),
      y: Math.floor(Math.random() * boardSize)
    };
    createFood();    // Create the new food on the board
  } else {
    snake.pop();     // Remove the tail segment (snake gets shorter)
  }
}

// Function to handle the game over scenario
function gameOver() {
 // alert('Game Over');        // Show an alert message
 // Document.location.reload(); // Refresh the page to restart the game
  var userResponse = prompt("GAME OVER! Would you like to restart the game?");
      
  if (userResponse === "yes" || userResponse === "Yes" || userResponse === "YES") {
    // Reset the game state
    snake = [{ x: 10, y: 10 }];
    food = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };
    direction = 'right';
    
    // Clear the game board
    gameBoard.innerHTML = '';
    gameBool = 1;
    // Start the game again
    startGame(gameBool);
  }else{
    alert("GOOD BYE");
    close();
  }
 }

// Function to update the game state
function updateGame() {
  const head = snake[0];   // Get the snake's head position

  // Check if the snake hits the wall or runs into itself
  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
    gameOver();   // Call the gameOver function
  }

  // Check for collision with the snake's body segments
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      gameOver();   // Call the gameOver function
    }
  }

  moveSnake();         // Move the snake
  gameBoard.innerHTML = '';   // Clear the game board
  createSnake();       // Recreate the snake on the board
  createFood();        // Recreate the food on the board
}

// Function to change the snake's direction based on key presses
function changeDirection(event) {
  const key = event.key;
  if (key === 'ArrowUp' && direction !== 'down') direction = 'up';
  if (key === 'ArrowDown' && direction !== 'up') direction = 'down';
  if (key === 'ArrowLeft' && direction !== 'right') direction = 'left';
  if (key === 'ArrowRight' && direction !== 'left') direction = 'right';
}


function startGame(gameBool){
  createSnake();   // Call the createSnake function to initialize the game
  createFood();    // Call the createFood function to place the initial food
  
  if (gameBool == 0){
    setInterval(updateGame, snakeSpeed);   // Call the updateGame function repeatedly based on snakeSpeed
  }
  
  window.addEventListener('keydown', changeDirection);  // Listen for key presses and change direction
}

startGame(gameBool);