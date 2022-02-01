import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Form from './components/Form';
import AllProducts from './components/AllProducts';
import DisplayOne from './components/DisplayOne';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
        <h1>Product Manager</h1>
        <Switch>
          <Route exact path="/">
            <Form/>
            <hr/>
            <AllProducts/>
          </Route>
          <Route exact path='/products/:id'>
            <DisplayOne/>
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
