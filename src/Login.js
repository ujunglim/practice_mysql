import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLoggedIn(true);
    }, 2000);
  }, [])

  const onChange = (evt) => {
    console.log(evt.target.value)
  }
  const onSubmit = (evt) => {
    evt.preventDefault();
    setName("");
    setPassword("");
  }

  const onFileChange = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();  // create reader

    // add event listener 
    reader.onloadend = (finishedEvt) => {
      console.log(finishedEvt)
      console.log(finishedEvt.target.result);
    }

    reader.readAsDataURL(file);
  
  }

  return(
    <Router>
      <Switch>
        <Route exact path="/">
          {isLoggedIn && <h1>this is log in</h1>}
          <form onSubmit={onSubmit}>
            <input 
              type="text"
              placeholder="Name"
              value={name}
              required
              onChange={onChange}
             />

             <input 
               type="password"
               placeholder="Password"
               value={password}
               required
               onChange={onChange}
             />

             <input type="file" accept="image/*" onChange={onFileChange}/>

             <input type="submit" value="Yuweet" />


          </form>
        </Route>
      </Switch>
    </Router>
  );
}

export default Login;