import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import Home from './components/Home';
import {CreateDog} from './components/CreateDog.js';
import {Details} from './components/Details.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/dogs/:id' component={Details}></Route>
        <Route path='/dog' component={CreateDog}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
