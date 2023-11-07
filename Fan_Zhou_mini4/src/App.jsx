import React from 'react';
import CellProvider from './Grid/CellProvider.jsx';
import Grid from '../src/Grid/Grid.jsx';

export default function App() {

    return (
        <CellProvider>
            <Grid />
        </CellProvider>
    );
};


