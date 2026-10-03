import {  useState } from "react";

function ColorPicker() {
    const [color,setColor]=useState("#f41212");
    
    const handelColor=(event)=>{
        setColor(event.target.value)
    }
    return(
        <>
        <div className="color-picker-contanier">
        <h1>Color Picker</h1>
            <div className="color-display" style={{background:color}}>
                

            </div>
            <div className="select-section">
            <label>Select a Color :</label>
            <input className="select-color" type="color" value={color} onChange={handelColor}></input>
            </div>
        </div>
        </>
    )

}
export default ColorPicker;