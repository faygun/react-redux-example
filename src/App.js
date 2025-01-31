import logo from './logo.svg';
import './App.css';
import { Counter } from './features/counter/counter';
import {useSelector} from "react-redux"
import { Color } from './features/counter/color';
function App() {

  const color = useSelector((state)=> state.bgColor.color);

  return (
    <div className="App">
      <header className={"App-header " + color}>
        <img src={logo} className="App-logo" alt="logo" />
        <Counter/>
        <Color/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
