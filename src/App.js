import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <Login/>
    </div>
  );
}

function Login(){
  const [error,setError]=useState("");
  const obj={
    userName:"gogul",
    password:"123",
  }

function handleSubmit(e){
  e.preventDefault();
const username=e.target.Username;
const password=e.target.Password;
if(username.value===obj.userName && password.value===obj.password){
  username.value=""
  password.value=""
setError(false);
}else{
  setError(true);
  username.value=""
  password.value=""
}
}
  return <div>
    <h1>Login Page</h1>
    {error===true&& <h2>Invalid username or password</h2>}
    {error===false&& <h2>Welcome, user</h2>}
   {error===true ||error==="" ? <form onSubmit={(e)=>handleSubmit(e)}>
   <div>
     <label htmlFor='Username'>Username:</label>
     <input placeholder='username' type='text' id='Username' required/>
   </div>
   <div>
     <label htmlFor='Password'>Password:</label>
     <input placeholder='password' type="password" id='Password' required/>
   </div>
   <button type='submit'>Submit</button>
 </form>:null
  }
  </div>
}
export default App;
