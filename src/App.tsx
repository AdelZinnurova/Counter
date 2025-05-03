import './App.css'
import {Display} from "./Display.tsx";
import {Buttons} from "./Buttons.tsx";
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const resetCount = () => {
        setCount(0)
    }

    const incCount = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    return (
        <div className="App">
            <div className="card">
                <Display value={count}/>
                <Buttons
                    resetCount={resetCount}
                    incCount={incCount}
                    count={count}
                />
            </div>
        </div>
    )
}

export default App
