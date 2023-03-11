import React, { useState } from 'react';
import Nav from "./components/Navbar";
import Routes from "./route";
import { callLoginApi, callDeleteArtApi, callAddUserApi } from "./utils/apiCalls"
import './App.css'

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const token = localStorage.getItem('token')

  const logout = () => {
    localStorage.removeItem('user')
    setUser()
    localStorage.removeItem('cart')
    localStorage.removeItem('token')
    window.location.href = '/';
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
    } catch (err) {
      console.log(err.message)
    };
  }

  const register = async ({ email, pass, nom, prenom, adresse, code_postal, ville }) => {

    try {
      const data = await callAddUserApi({ email, pass, nom, prenom, adresse, code_postal, ville })
      console.log(data)

    } catch (err) {
      console.log(err.message)
    };
  }

  const deleteArt = async ({ id }) => {

    try {
      const data = await callDeleteArtApi({ id, token })
      return data.mess
    } catch (err) {
      console.log(err.message)
    };
  }

  return (
    <>
      <Nav user={user} logout={logout} login={login} />
      <Routes
        login={login}
        deleteArt={deleteArt}
        register={register}
      />
    </>
  )
}

export default App;