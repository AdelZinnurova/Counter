import './App.css'
import {Counter} from "./Counter/Counter.tsx";
import {Settings} from "./Settings/Settings.tsx";

function App() {

    return (
        <div className="App">
            <Settings/>
            <Counter/>
        </div>
    )
}

export default App
