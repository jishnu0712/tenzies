import React from "react"
import Dice from "./Dice"

export default function App() {
    return (
        <>
            <div className="active">
                <h1 className="game-name">Tenzies</h1>
                <p className="game-desc">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
                <div className="dice-container">
                    <Dice number="1" />
                    <Dice number="1" />
                    <Dice number="1" />
                    <Dice number="1" />
                    <Dice number="1" />
                    <Dice number="1" />
                    <Dice number="1" />
                    <Dice number="1"/>
                    <Dice number="1"/>
                    <Dice number="1"/>
                </div>

                <button>Roll</button>
            </div>
        </>
    )
}