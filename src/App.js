import './App.css';

import CenteredCard from './components/CenteredCards';

function App() {
  const userName = [
    {name: "Geralt", age: "Unkown", country: "Rivia"},
    {name: "Vesemir", age: 75, country: "Kaer Morhen"},
    {name: "Yennefer", age: 100, country: "Vengerberg"} 
  ]

  return (
    <div className="App">
      <header className="App-header">
        {userName.map((item) => {
          return (
            <CenteredCard>
              <h1>{item.name}</h1>
              <h3>{item.age}</h3>
              <h3>{item.country}</h3>
            </CenteredCard>
          )
        })}
      </header>
    </div>
  );
}

export default App;
