import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import Home from './views/Home';
import Characters from './views/Characters';
import CharacterDetail from './views/CharacterDetail'
import './App.css'



export default function App() {
  return (
    <Router>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/characters'>Characters</NavLink>
      </header>
      <Switch>
        <Route exact path='/characters'>
          <Characters />
        </Route>
        <Route exact path='/characters/:id'>
          <CharacterDetail />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
