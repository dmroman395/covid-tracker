import React from 'react'
import DarkMode from './darkMode'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { selectDarkMode } from '../redux/darkModeSlice';
import { useSelector } from 'react-redux';
import '../css/header.css'

function Header() {
    const darkMode = useSelector(selectDarkMode)
    
    return (
            <div className='header'>
                <Typography variant='h6'>COVID-19 Tracker</Typography>
                <div className='search'>
                    <TextField 
                    label="Search..." 
                    variant="outlined" 
                    type='search' 
                    size='small'
                    sx={{
                        width: 400,
                        bgcolor: darkMode ? null : 'white',
                        borderRadius: 15
                    }}
                    />
                    <IconButton color='primary'>
                        <SearchIcon/>
                    </IconButton> 
                </div>
                <DarkMode/>
            </div>

    )
}

export default Header