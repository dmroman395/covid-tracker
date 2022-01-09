import './css/app.css';
import React from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StatsCard from './components/statsCard';
import ColorPickerContainer from './components/colorPickerContainer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from './redux/darkModeSlice';
import { selectTheme} from './redux/themeSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: customTheme
      },
      background: {
        default: darkMode ? '#303030' : '#fafafa',
        paper: darkMode ? '#424242' : 'fff'
      },
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
              <ColorPickerContainer/>
              <div className='globe-container'>Globe</div>
            </div>
        </Box>
    </ThemeProvider>

  );
}

export default App;
