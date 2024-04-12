// material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <MainCard sx={{ bgcolor: 'grey.50', m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
      <Stack alignItems="center">
        <Typography variant="h5">Seja aluno do Alma!</Typography>
        <Typography variant="h6" color="secondary">
          Por menos de R$2 por dia.
        </Typography>
      </Stack>
      <AnimateButton>
        <Button component={Link} target="_blank" href="https://pay.hotmart.com/M57791921E?sck=HOTMART_PRODUCT_PAGE&bid=1671304048453" variant="contained" color="success" size="small">
          Assinar
        </Button>
      </AnimateButton>
    </Stack>
  </MainCard>
);

export default NavCard;
