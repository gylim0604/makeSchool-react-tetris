import {
  MOVE_RIGHT,
  MOVE_LEFT,
  MOVE_DOWN,
  ROTATE,
  PAUSE,
  RESUME,
  RESTART,
  GAME_OVER,
} from '../actions';
import { defaultState,nextRotation,canMoveTo,addBlockToGrid, checkRows,randomShape, shapes } from '../utils';


const gameReducer = (state = defaultState(), action) => {
  const { shape, grid,x,y,rotation,nextShape,score,isRunning} = state
  switch (action.type) {
    case ROTATE:
      const newRotation = nextRotation(shape, rotation)
      if(canMoveTo(shape,grid,x,y,newRotation)){
        return {...state,rotation: newRotation}
      }
      return state;

    case MOVE_RIGHT:
      if (canMoveTo(shape, grid,x+1,y,rotation)){
        return { ...state, x: x+1}
      }
      return state;

    case MOVE_LEFT:
      if (canMoveTo(shape, grid,x-1,y,rotation)){
        return { ...state, x: x-1}
      }
      return state;

    case MOVE_DOWN:
      const maybeY = y +1;
      if(canMoveTo(shape,grid,x,maybeY,rotation)){
        return {...state, y: maybeY}
      }
      const newGrid = addBlockToGrid(shape,grid,x,y,rotation)
      const newState = defaultState()
      newState.grid = newGrid
      newState.shape = nextShape
      newState.nextShape = randomShape()
      newState.score = score
      newState.isRunning = isRunning
      if(!canMoveTo(nextShape,newGrid,0,4,0)){
        console.log("Game should be over...")
        newState.shape = 0
        return {...state, gameOver: true }
      }

      newState.score = score + checkRows(newGrid)
      
      return newState;

    case RESUME:
      return state;

    case PAUSE:
      return state;

    case GAME_OVER:
      return state;

    case RESTART:
      return state;

    default:
      return state;
  }
};


export default gameReducer;