import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Container from '@mui/material/Container';
import BtnGitHub from '@/components/btnGitHub';
import { Divider, Stack } from '@mui/material';
import { getSession, signIn } from 'next-auth/react';
import Googlesvg from '../../assets/img/svg/google-svg';
import GitHubsvg from '../../assets/img/svg/github-solid';
import { GetServerSideProps } from 'next';
import { tokens } from '@/theme';
import { Box, Typography, useTheme } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={8}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: `${colors.primary[400]} !important`,
          padding: '20px'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Acesse sua conta
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="email"
            label="Endereço de email"
            name="email"
            autoComplete="email"
            autoFocus
            variant={"outlined"}
          />
          <FormControl sx={{ width: '100%' }} variant="outlined">
            <InputLabel color="secondary" htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              color="secondary"
              fullWidth
              required
              autoFocus
              autoComplete="current-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Lembrar-me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: `${colors.primary[400]} !important`, }}
          >
            <Typography>
              Entrar
            </Typography>
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color={`${colors.greenAccent[400]} !important`}>
                <Typography>
                  Esqueceu a senha ?
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color={`${colors.greenAccent[400]} !important`}>
                <Typography>
                  Não tem conta ? Inscreva-se
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Stack marginTop={"1rem"} direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
          <BtnGitHub buttonName='Github' startIcon={<GitHubsvg />} onclick={() => signIn('github')} />
          <BtnGitHub buttonName='Google' startIcon={<Googlesvg />} onclick={() => signIn('google')} />
        </Stack>
      </Paper>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  console.log('page login', session);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}