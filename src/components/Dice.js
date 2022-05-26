import React from "react"

const Dice = (props) => {
    const style = {
        backgroundColor: props.isHeld? "#59E391" : "white"
    }
    return (
        <div className="die-face"
         onClick={props.onClick}
         style={style}>
            <h2 className="die-num">{props.number}</h2>
        </div>
    )
}
export default Dice;