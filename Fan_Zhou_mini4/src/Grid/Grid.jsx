import React, { useContext } from 'react';
import Cell from './Cell.jsx';
import { CellContext } from './CellProvider.jsx';
import './grid.css';

export default function Grid() {
    
    const { cellStates } = useContext(CellContext);
    const onCount = cellStates.filter(Boolean).length;

    return (
        <div>
            <div className="counter">Count: {onCount}</div>
            <div className="grid-container">
                {cellStates.map((_, index) => (
                    <Cell key={index} index={index} />
                ))}
            </div>
        </div>
    );
};
