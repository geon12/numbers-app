import './App.css';
import Header from './components/Header'
import NumberContainer from './components/NumberContainer'

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
      <Header />
      <NumberContainer />
    </div>
  );
}

export default App;
