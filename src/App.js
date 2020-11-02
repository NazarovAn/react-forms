import './App.css';
import Registration from './Components/Registration/Registration';
import Authorization from './Components/Authorization/Authorization';
import Navigation from './Components/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Route path="/registration" component={Registration} />
        <Route path="/authorization" component={Authorization}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
