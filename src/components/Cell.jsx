import React from 'react';
import Button from '@mui/material/Button';
import {useContext} from 'react';
import {TurnContext} from "../context/TurnContext.js";

const Cell = (props) => {
    const {item, socket} = useContext(TurnContext)
    let handlerClick = () => {
        if ((props.nextTurn && props.nextTurn !== item) || props.gameStatus.startsWith('Waiting')) return
        socket.emit('turn', props.id, item)
        console.log(item)
    }
    return (
        <Button
            onClick={handlerClick}
            disabled={Boolean(props.value)}
            sx={{
                width: 100,
                height: 100,
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 2,
                borderRadius: 1,
                borderColor: '#dfb8ec',
                backgroundColor: '#f1edf6',
                fontSize: 90,
                color: '#263238',
            }}
        >
            {props.value}
        </Button>
    );
};

export default Cell;
