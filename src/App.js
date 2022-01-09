import './css/app.css';
import React, { useState } from "react";
import Header from './components/header';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import StatsCard from './components/statsCard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { selectDarkMode } from './redux/darkModeSlice';
import { updateTheme } from './redux/themeSlice'
import { selectTheme } from './redux/themeSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const darkMode = useSelector(selectDarkMode)
  const customTheme = useSelector(selectTheme)

  const [userTheme, setUserTheme] = useState(customTheme)

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

  function updateUserTheme(e) {
    const val = e.target.value

    setUserTheme(val)
  }

  function handleChange() {
    dispatch(updateTheme(userTheme))
  }

  return (
    <ThemeProvider theme={theme}>
          <Box 
            className="App"
            sx={{
              backgroundColor: theme.palette.background.default
            }}
          >
            <Header/>
            <input type='color' onChange={e => updateUserTheme(e)}></input>
            <Button variant='contained' onClick={handleChange}>Confirm</Button>
            <div className='main-content'>
              <StatsCard/>
              <div className='globe-container'>Globe</div>
            </div>
        </Box>
    </ThemeProvider>

  );
}

export default App;
