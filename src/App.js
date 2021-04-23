import './App.css';

import GridBoard from './components/GridBoard/GridBoard';
import NextBlock from './components/NextBlock/NextBlock';
import ScoreBoard from './components/ScoreBoard/ScoreBoard'

function App() {
  return(
    <div>
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard/>
      <NextBlock/>
      <ScoreBoard/>
    </div>
  );

}

export default App;
