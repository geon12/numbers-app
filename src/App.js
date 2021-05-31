import './App.css';
import Home from './components/Home'
import PrimeNumbers from './components/PrimeNumbers'
import DateFact from './components/DateFact'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  /* 
  How to fetch from numbers api
   
  const number = 47
  can also be random instead of number
  fetch(`http://numbersapi.com/${number}`)
    .then(resp => resp.text())
    .then(resp => console.log(resp)) 

    can also do /type which can be trivia, math, date, or year
    
  */
    
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/prime-numbers'>
            <PrimeNumbers />
          </Route>
          <Route exact path='/todays-date'>
            <DateFact />
          </Route>
          <Route path="*">
            <h1>404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
