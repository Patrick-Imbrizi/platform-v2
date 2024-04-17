import React from 'react'
import { Chip } from '@mui/material/index'

const TemperamentTag = ({ title }) => {
    let color = '';

    switch (title) {
        case 'Sanguíneo':
            color = "warning";
            break;
        case "Colérico":
            color = "error";
            break;
        case "Fleumático":
            color = "success";
            break;
        case "Melancólico":
            color = "primary";
            break;
        default:
            color = "secondary"
    }

    return (
        <Chip
            size="small"
            variant="combined"
            color={color}
            label={title}
        />
    )
}

export default TemperamentTag