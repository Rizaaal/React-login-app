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

export function WelcomePage({ currentUser, setUser }){
  const message = 'welcome';

  function logOut(){
    setUser(null);
}

  return (
    <section id="welcome">
      <button onClick={logOut}>Logout</button>
      <h1>{message}, {currentUser}</h1>
    </section>
  );
}

export default App;
