import React from "react";
import '../css/darkMode.css'
import Switch from '@mui/material/Switch';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function DarkMode() {
    return (
        <div className="darkMode">
            <LightModeIcon color='primary'/>
            <Switch/>
            <DarkModeIcon color ='primary'/>
        </div>
    )
}

export default DarkMode;