import React, { useContext } from 'react';
import { CellContext } from './CellProvider.jsx';
import './cell.css';

export default function Cell({index}) {
    const { cellStates, toggleCellState } = useContext(CellContext);
    const isActive = cellStates[index];

    return (
        <div className={`cell ${isActive ? 'cell-on' : 'cell-off'}`} onClick={() => toggleCellState(index)}>
        </div>
    );
};

