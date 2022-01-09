import './css/app.css';
import React from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StatsCard from './components/statsCard';
import ColorPickerOverlay from './components/colorPickerOverlay';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from './redux/darkModeSlice';
import { selectTheme, selectSelecting } from './redux/themeSlice'
import { useSelector} from 'react-redux';

function App() {
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)
  const isSelecting = useSelector(selectSelecting)  

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
    },
    components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'plain' },
          style: {
            height: 65,
            width: 'inherit',
            borderRadius: 0
          },
        },
      ],
    },
  },
  })

  return (
    <ThemeProvider theme={theme}>
      {isSelecting ? <ColorPickerOverlay/> : null}
      <Box 
        className="App"
        sx={{
          backgroundColor: theme.palette.background.default
        }}
      >
        <Header/>
        <div className='main-content'>
          <div className='globe-container'>Globe</div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
