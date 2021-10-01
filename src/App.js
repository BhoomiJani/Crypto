import './App.css';
import { BrowserRouter as Router, Switch , Route} from "react-router-dom";
import Dashboard from './screens/dashboard';
import Header from './common/header';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
              <Route path='/' exact component={Dashboard}>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
