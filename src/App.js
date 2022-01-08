import './css/app.css';
import React from "react";
import Header from './components/header';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StatsCard from './components/statsCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from './redux/darkModeSlice';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector(selectDarkMode)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#303030' : '#fafafa',
        paper: darkMode ? '#424242' : 'fff'
      },
      text: {
        primary: darkMode ? '#fff' : 'rgba(0,0,0,.87)'
      }
    },
    typography: {
      fontFamily: 'Quicksand'
    }
  })

  return (
    <ThemeProvider theme={theme}>
          <Box 
            className="App"
            sx={{
              backgroundColor: theme.palette.background.default
            }}
          >
            <Header/>
            <div className='main-content'>
              <StatsCard/>
              <div className='globe-container'>Globe</div>
            </div>
        </Box>
    </ThemeProvider>

  );
}

export default App;
