import React, { useState, useEffect } from 'react';
import Nav from "./components/Navbar";
import Routes from "./route";
import { callLoginApi } from "./utils/apiCalls"

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const logout = () => {
    localStorage.removeItem('user')
    setUser()
    localStorage.removeItem('cart')
  }

  const login = async ({ email, pass }) => {
    
    try {
      const data = await callLoginApi({ email, pass })

      if (data.mess) {
        return { error: data.mess }
      }
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user)
      return { user: data.user }
    }catch(err){
      console.log(err.message)
    };
  }
  return (
    <>
      <Nav user={user} logout={logout} login={login} />
      <Routes login={login} />
    </>
  )
}

export default App;