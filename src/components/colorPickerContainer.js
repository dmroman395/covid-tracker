import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from "@mui/material/CardActions";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Wheel from '@uiw/react-color-wheel';
import { selectDarkMode } from '../redux/darkModeSlice';
import { selectTheme, updateTheme } from '../redux/themeSlice'
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import '../css/colorPickerContainer.css'

const useStyles = makeStyles({
    root: {
        "&:focus": {
          border: "1px solid black"
        },
        "&:hover": {
            backgroundColor: 'transparent'
        }
      },
  });

const colors = ['#ff1744','#f50057','#d500f9','#651fff','#3d5afe','#2979ff','#00b0ff','#00e5ff','#1de9b6','#00e676','#76ff03','#c6ff00','#ffea00','#ffc400','#ff9100','#ff3d00']

function ColorPickerContainer() {
    const dispatch = useDispatch()
    const darkMode = useSelector(selectDarkMode)
    const currentTheme = useSelector(selectTheme)
    const classes = useStyles()

    const [customColor, setCustomColor] = useState(false)
    const [hex, setHex] = useState(currentTheme)
    

    function toggleColorSelector() {
        setCustomColor(!customColor)
    }

    function setNewTheme() {
        dispatch(updateTheme(hex))
    }

    

    const gridItems = colors.map(color => {
        function setPresetColor() {
            setHex(color)
        }

        return (
            <Grid item xs={3}
                sx={{
                    bgcolor: color,
                    height: 65
                }}
            >
                <Button
                    className={classes.root}
                    variant='plain'
                    elevation={0}
                    disableRipple	
                    square
                    sx={{
                        bgcolor: 'transparent',
                    }}
                    onClick={setPresetColor}
                >
                </Button>
            </Grid>
        )
    })

    return (
        <Card
            sx={{
                width: 285,
                bgcolor: darkMode ? '#424242' : '#E7EBF0'  
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {
                    customColor
                    ?
                    <Wheel color={hex} onChange={color => setHex(color.hex)}/>
                    :
                    <Grid container spacing={0}>
                        {gridItems}
                    </Grid>
                }
            </CardContent>
            <CardActions
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div className="color-buttons">
                    <Button variant='contained' onClick={toggleColorSelector}>{customColor ? 'Preset Color' : 'Custom Color'}</Button>
                    <Button variant='contained' onClick={setNewTheme}>Confirm</Button>
                </div>
                <Button 
                    variant='outlined'
                    sx={{
                        width: '100%'
                    }}
                >
                    Close
                </Button>
            </CardActions>
        </Card>
    )
}

export default ColorPickerContainer;