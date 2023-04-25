// import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';



function App() {
  return (
    <div className="App">
      <Greet />                     
      {/* This is a self closing tag: <Greet /> */}
      <Welcome />
    </div>
  );
}

export default App;
