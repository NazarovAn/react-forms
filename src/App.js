import './App.css';
import Registration from './Components/Registration/Registration';
import Authorization from './Components/Authorization/Authorization';
import Navigation from './Components/Navigation/Navigation';
import Game from './Components/Game/Game';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/authorization" component={Authorization}/>
            <Route path="/game" component={Game} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
