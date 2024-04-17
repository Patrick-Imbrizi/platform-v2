import React from 'react';
import { Grid, Typography } from '@mui/material';
import MaterialCard from './MaterialCard';



const Materials = () => {
    return (
        <Grid container rowSpacing={1.5} columnSpacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5">Materiais e livros</Typography>
            </Grid>
            {/* materiais.map bla bla bla */}
            <Grid item xs={12} sm={12} md={6} lg={5}>
                <MaterialCard />
            </Grid>
        </Grid>
    );
}

export default Materials;
