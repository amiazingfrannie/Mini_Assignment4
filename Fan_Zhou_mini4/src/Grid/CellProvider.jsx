import React, { createContext, useState } from 'react';

export const CellContext = createContext();

export default function CellProvider(props) {
    
    const [cellStates, setCellStates] = useState(Array(4).fill(false));

    const toggleCellState = (index) => {
        const updatedStates = [...cellStates];
        updatedStates[index] = !updatedStates[index];
        setCellStates(updatedStates);
    };

    return (
        <CellContext.Provider value={{ cellStates, toggleCellState }}>
            {props.children}
        </CellContext.Provider>
    );
};

