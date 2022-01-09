import React from "react";
import ColorPickerContainer from "./colorPickerContainer";
import '../css/overlay.css'

function ColorPickerOverlay() {
    return(
        <div className="overlay">
            <ColorPickerContainer/>
        </div>
    )
}

export default ColorPickerOverlay