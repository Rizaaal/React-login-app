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

export function LoginPage({ setUser }){
  const inputRef = useRef(null);

  function logUser(event){
    setUser(inputRef.current.value);
  }

  function validate(event){
    //console.log(event.target.value)
  }

  return (
    <section id="login">
      <h1>Login</h1>
      <input 
        ref={inputRef}
        onChange={validate} 
        type="text" 
        placeholder="type a valid e-mail" 
      />
      <button onClick={logUser}>enter</button>
    </section>
  );
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
