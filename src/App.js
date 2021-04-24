import Home from './pages/Home';
import Episodes from './pages/Episodes';
import CharacterDetail from './pages/CharacterDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <Episodes />
        </Route>
        <Route exact path="/character/detail/:id">
          <CharacterDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
