import './App.css';

function Heading() {
  return <div class="App-header"><h1>Sextant Network Information App</h1></div>
}

function Panel() {
  return (
    <div class="App-exhibit">
      <div class="App-exhibit-header"><h2>Components</h2></div>
      <div class="App-exhibit-components"></div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Heading />
      <Panel />
    </div>
  );
}

export default App;
