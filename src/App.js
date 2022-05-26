import React from "react"
import Dice from "./components/Dice"
import { nanoid } from 'nanoid'

export default function App() {
    const [diceArr, setDiceArr] = React.useState(() => allNewDice());
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(() => {
        const allDiceHeld = diceArr.every(die => die.isHeld);
        const firstDieValue = diceArr[0].value;
        const allDiceSameValue = diceArr.every(die => die.value === firstDieValue)
        if (allDiceHeld && allDiceSameValue) {
            setTenzies(true);
        }
    }, [diceArr])

    const diceElements = diceArr.map(die => (
        <Dice
            key={die.id}
            number={die.value}
            isHeld={die.isHeld}
            onClick={() => dieClick(die.id)}
        />)
    );

    function getADie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    }

    function allNewDice() { //create 10 random die
        const numArr = []; 
        for (let i = 0; i < 10; i++) {
            numArr.push(getADie());
        }
        return numArr;
    }

    function dieClick(id) {
        setDiceArr(prev => prev.map(ele => (ele.id === id) ?
            {
                ...ele,
                isHeld: !ele.isHeld
            } :
            ele
        ))
    }

    function rollAgain() { 
        if (!tenzies) {
            setDiceArr(prev => prev.map(die => die.isHeld ?
                die :
                getADie()))
        }
        else {
            setTenzies(false);
            setDiceArr(allNewDice());
        }
    }

    return (
        <main>
            <h1 className="title">{ tenzies? "Victoy!" : "Tenzies"}</h1>
            <p className="instruction">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollAgain}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}