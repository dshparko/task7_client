import React, {useContext} from 'react';
import Box from '@mui/material/Box'
import Cell from "./Cell";
import {TurnContext} from "../context/TurnContext";

const Board = ({gameStatus, nextTurn}) => {
    const [board, setBoard] = React.useState(Array(9).fill(null))
    const {socket} = useContext(TurnContext);
    socket.on('refresh-board', (boardNew, turn) => {
        setBoard(boardNew);
    })

    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {
                board.map ((cell, i) => {
                    return (<Cell value={cell} key={i} id={i} nextTurn={nextTurn} gameStatus={gameStatus}/>)
                })
            }

        </Box>
    );
};

export default Board;
