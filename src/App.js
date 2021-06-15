import './App.css';
import Main from './Main';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Fooditems from './Fooditem';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/menu' component={Fooditems} />
          <Route path='/login' component={Login} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
