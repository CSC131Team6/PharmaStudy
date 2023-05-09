import React from "react";
import { Link } from "react-router-dom";
import "./nav.modules.css"
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function HomePage() {
    return ( 
    <body className = "body">
        <nav className = "nav">
        <ul>
            <titles><CustomLink to= "/Bavaria"> Bavaria</CustomLink></titles>
        </ul> <ul>
            <titles><CustomLink to= "/FDA"> FDA</CustomLink></titles>
        </ul> <ul>
            <titles><CustomLink to= "/JaneHopkins"> Jane Hopkins</CustomLink></titles>
        </ul>
        </nav>
        <ToggleColorMode />
        <MissionState />
    </body>
    )
}

function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

function MissionStatementNOT() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

function MissionState() {
    return (
        <React.Fragment>
            <CssBaseline />
                <ms className = "ms">
                <header>Welcome!</header>
                </ms>
                <text> Quality patient care is our priority. Providing excellent clinical and service quality, </text>
                <div/>
                <text> offering compassionate care, and supporting research and medical education are essential to our mission. </text>
                <div/>
                <text> This mission is founded in the ethical and cultural precepts of the Judaic tradition, </text>
                <div/>
                <text>which inspire devotion to the art and science of healing and to the care we give our patients and staff. </text>
            <CssBaseline />
        </React.Fragment>
    )
}

function DarkMode() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
        sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            borderRadius: 1,
            p: 3,
        }}
        >
        {theme.palette.mode} mode
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </Box>
  );
}

function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const theme = React.useMemo(
      () =>
        createTheme({
          palette: {
            mode,
          },
        }),
      [mode],
    );
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <DarkMode />
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}
