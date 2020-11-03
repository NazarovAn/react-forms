import './App.css';
import Registration from './Components/Registration/Registration';
import Authorization from './Components/Authorization/Authorization';
import Navigation from './Components/Navigation/Navigation';
import GameStart from './Components/GameStart/GameStart';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation />
        <Route path="/registration" component={Registration} />
        <Route path="/authorization" component={Authorization}/>
        <Route path="/game-start" component={GameStart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
