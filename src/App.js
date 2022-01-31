import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom'
import Display from './components/Display';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Product Manager</h1>
      <Switch>
      <Display/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
