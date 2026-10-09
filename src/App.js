import logo from './logo.svg';
import './App.css';
import Router from './components/Router';

function App() {
  return (
    <div>
      <header>
        <nav>
          <a href='/'>Home</a> <br></br>
          <a href='/doctores'>Doctores</a>
        </nav>
      </header>

      <Router/>
    </div>
  );
}

export default App;
