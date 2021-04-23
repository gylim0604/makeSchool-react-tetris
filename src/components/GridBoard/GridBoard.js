import GridSquare from '../GridSquare/GridSquare';
import './GridBoard.css';


export default function GridBoard(props){

    const grid = []
    for (let row = 0; row <18 ; row++){
        grid.push([]);
        for(let col = 0; col < 10; col++){
            grid[row].push(<GridSquare ley={`${col}${row}`} color="1"/>)
        }
    }

    return (
        <div className="grid-board">
            {grid}
        </div>
    )
}