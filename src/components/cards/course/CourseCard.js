import React from 'react'

import { Card, Stack, Typography, Grid, Chip, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';

const CourseCard = ({ title, description, teacher }) => {
    const theme = useTheme()
    return (
        <Card elevation={0} flex sx={{
            border: '1px solid',
            borderRadius: 2,
            borderColor: theme.palette.grey.A800,
            p: 2.25
        }}>
            <Stack sx={{ mb: 1, gap: 1 }}>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography color="secondary" sx={{ lineHeight: 1.2 }}>
                    {description}
                </Typography>
            </Stack>
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <Chip size="small" label="12 aulas" variant="outlined" color="primary" />
                </Grid>
                <Grid item xs={8}>
                    <Chip size="small" label={`Professor(a): ${teacher}`} variant="outlined" color="primary" />
                </Grid>
            </Grid>
            <Grid container xs={12} sx={{ mt: 2 }}>
                <Button xs={6} variant="contained">
                    Assistir
                </Button>
            </Grid>
        </Card>
    )
}

export default CourseCard