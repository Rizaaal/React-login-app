import { render } from '@testing-library/react';
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
