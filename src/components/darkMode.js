import React from "react";
import '../css/darkMode.css'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { toggle } from '../redux/darkModeSlice'
import { useDispatch } from 'react-redux';

function DarkMode() {
    const dispatch = useDispatch()
 
    function toggleDarkMode() {
        dispatch(toggle())
    }

    return (
        <div className="darkMode">
            <LightModeIcon color='primary'/>
            <Switch onClick={toggleDarkMode}/>
            <DarkModeIcon color ='primary'/>
        </div>
    )
}

export default DarkMode;