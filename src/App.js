import './App.css';
import { useRef, useState } from 'react';

export function App(){
  const [user, setUser] = useState(localStorage.getItem("currentUser"));
  console.log('App() re-rendered.');
  
  if (user === null) {
    return <LoginPage setUser={setUser} user={user} />
  } else {
    return <WelcomePage currentUser={user} setUser={setUser}/>
  }
}

export function LoginPage({ setUser }){
  const [btn, setBtn] = useState(true);
  console.log('LoginPage() re-rendered.');

  const inputRef = useRef(null);
  const buttonRef = useRef();
  
  function logUser(){
    const currentUser = inputRef.current.value;
    const users = JSON.parse(localStorage.getItem("users")) || {};

    localStorage.setItem("currentUser", currentUser);
    localStorage.setItem("users", JSON.stringify({
      ...users,
      [currentUser]: {
        lastLogin: new Date(), 
        visits: users[currentUser] ? ++users[currentUser].visits : 1
      }
    }));

    setUser(currentUser);
  }

  function validate(){
    const pattern = /[\w-]+@[\w-]+\.[\w]{2,}/;
    setBtn(!pattern.exec(inputRef.current.value));
  }

  return (
    // 1. utilizzare un form controllato
    //    ovvero mettere l'attributo value dentro il tag input
    //    il valore dell'attributo deve essere uguale a una variabile state
    //    la funzione validate deve chiamare la funzione che cambia lo stato del value
    //    in questo modo il form è controllato 
    //    (in realtà facciamo tutto questo per avere un modo per inserire
    //    il value dentro una variabile state. Questo si puo fare anche con il
    //    modo corrente, ovvero useRef().
    <section id="login">
      <h1>Login</h1>
      <input 
        ref={inputRef}
        onChange={validate} 
        type="text" 
        placeholder="type a valid e-mail" 
      />
      <button 
        onClick={logUser} 
        disabled={btn}
        ref={buttonRef}>
        enter
      </button>
    </section>
  );
}

export function WelcomePage({ currentUser, setUser }){
  const user = JSON.parse(localStorage.getItem("users"))[currentUser];
  const isOldUser = user.visits > 1;

  const message = isOldUser ? 'Welcome back' : 'Welcome';
  //JSON porta indietro di 1 ora la data, quindi dobbiamo fare questo:
  const date = new Date(user.lastLogin).toLocaleString();

  function logOut(){
    setUser(null);
    localStorage.removeItem("currentUser");
  }

  return (
    <section id="welcome">
      <nav>
        <ul>
          <li><button onClick={logOut}>Logout</button></li>
          { isOldUser ? ( 
            <>
              <li id='lastLogin'>last Login: {date}</li>
              <li id='visits'>{user.visits}</li>
            </> 
          ) : null}
        </ul>
      </nav>
      <h1>{message}, {currentUser}</h1>
    </section>
  );
}

export default App;