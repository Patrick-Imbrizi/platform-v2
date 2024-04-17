// material-ui
import { Grid, Typography } from '@mui/material';

import CourseCard from 'components/cards/course/CourseCard';

// project import
// import TemperamentTag from 'components/TemperamentTag';

// ==============================|| SAMPLE PAGE ||============================== //

const Courses = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12}>
                <Typography variant="h5">Categorias</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Cursos</Typography>
            </Grid>
            {/* cursos.map bla bla bla */}
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CourseCard title="Curso Brabo" description="Aqui temos um curso realmente brabo" teacher="Mirella" />
            </Grid>
        </Grid >
    )
};

export default Courses;
