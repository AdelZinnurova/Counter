import './App.css'
import {Counter} from "../common/components/Counter/Counter.tsx";
import {Settings} from "../common/components/Settings/Settings.tsx";

function App() {

    return (
        <div className="App">
            <Settings/>
            <Counter />
        </div>
    )
}

export default App
