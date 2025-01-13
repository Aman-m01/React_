import React, { useState, useContext } from "react";
import userContext from "../Context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

const {setUser} = useContext(userContext)


  const handleSubmit = (e) => {
  e.preventDefault()
  setUser({userName, password})

  };
  return (
    <div>
      <h2 className="text-2xl bg-red-300 mt-7">Login</h2>
      <input className=" border-solid rounded m-1 p-2"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="userName"
      />
      <br/>
      <input className=" border-solid rounded m-1 p-2" type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" />
      <br/>
      <button className="rounded-xl p-3 m-4 bg-amber-200" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;


