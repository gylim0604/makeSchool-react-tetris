import './styles.css';
import { useSelector } from 'react-redux';

export default function MessagePopup(props){
    const isRunning = useSelector((state)=> state.game.isRunning);
    const gameOver = useSelector((state)=>state.game.gameOver);
    let msg = ""
    let isHidden = "hidden"
    if(gameOver){
        msg= "Game Over"
        isHidden = ""
    }
    else if (!isRunning){
        msg = "Paused"
        isHidden = ""
    }
    

    return(
        <div className= {`message-popup ${isHidden}`}>
            <h1>Message Title</h1>
            <p>{msg}</p>
        </div>
    )
}