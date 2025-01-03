# Raindrop Animation in React

This project implements a visually appealing raindrop animation using React.js. The raindrops cascade down a grid, with each drop having a dynamic color and opacity gradient.

## Features
- Animated raindrops falling in a grid layout.
- Dynamic raindrop colors generated using the `chroma-js` library.
- Smooth opacity gradient for raindrops.

## Technologies Used
- **React.js**: For creating the user interface and managing state.
- **CSS**: For styling the grid and animation effects.
- **chroma-js**: To generate random colors for the raindrops.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Rookie768/rain-drop-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rain-animation
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the animation.

## File Structure
- **src/App.js**: Contains the main logic for the raindrop animation.
- **src/App.css**: Styles for the grid, raindrops, and the "Hi Fog" text.
- **package.json**: Project configuration and dependencies.

## How It Works
1. **Raindrop Creation**:
   - Raindrops are created dynamically with random colors and a starting position at the top of the grid.

2. **Animation**:
   - Each raindrop falls down the grid over time, with its position updated using React state and timers.

3. **Opacity Gradient**:
   - Raindrops have a fading trail, achieved by adjusting the opacity of each cell in the drop.


## Customization
- **Grid Size**:
  - Modify the `TOTAL_ROWS` and `TOTAL_COLUMNS` constants in `App.js` to change the grid dimensions.

- **Raindrop Appearance**:
  - Adjust `DROP_SIZE` and `DROP_OPACITIES` in `App.js` to control the size and fade effect of the raindrops.


## Dependencies
- React: `^18.3.1`
- chroma-js: `^2.6.0`
- react-scripts: `5.0.1`


