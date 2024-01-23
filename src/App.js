import logo from './logo.svg';
import './App.css';

export function App(){
  const [user, setUser] = useState(null);

  if (user !== null) {
    return <WelcomePage currentUser={user} setUser={setUser}/>
  } else {
    return <LoginPage setUser={setUser} />
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
