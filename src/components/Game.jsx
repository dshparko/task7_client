import React, {useContext, useEffect, useState} from 'react';
import Box from '@mui/material/Box'
import './Game.css';
import Board from "./Board";
import {TurnContext} from "../context/TurnContext.js";


const Game = () => {
    const {item, socket, itemRef} = useContext(TurnContext)
    const [gameStatus, setGameStatus] = useState('Waiting for the opponent')
    const [nextTurn, setNextTurn] = React.useState('')
    socket.on('refresh-board', (boardNew, turn) => {
        setNextTurn(turn);
    })


    useEffect(()=> {
        socket.once('start-game', (status)=> setGameStatus(status))
    },[socket])
     useEffect(()=> {
        socket.once('result', (winner) => {
            winner === itemRef.current ?
                setGameStatus('You won') :
                setGameStatus('You lost')

        })
    },[socket, itemRef, gameStatus])



    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor: '#ffffff'
            }}
        >
           <Box
                m={0}
                sx={{
                width: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 0.5,
                fontSize: 14,
                color: 'rgba(0,0,0,0.82)'
            }}>
                <h2>Player:{item === 'X' ? 'Darya' : 'Anna'} ({item})</h2>
                <h2>Opponent: {item === 'X' ? 'Anna' : 'Darya'} ({item === 'X' ? 'O' : 'X'})</h2>
            </Box>
            <Board gameStatus={gameStatus} nextTurn={nextTurn}/>
            <h2 className="game-text">{gameStatus}</h2>
        </Box>
    );
};

export default Game;
