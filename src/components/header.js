import React from 'react'
import DarkMode from './darkMode'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import '../css/header.css'





function Header() {
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
                        width: 350,
                        color: 'success.main',
                        bgcolor: 'white',
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