import React, { useState, useEffect } from 'react';
import { CartContext } from './Context.js';
import Nav from "./components/Navbar";
import Routes from "./route";
import { callLoginApi, callDeleteArtApi, callAddUserApi } from "./utils/apiCalls"

import './App.css'

const App = () => {

  const [cartContext, setCartContext] = useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const token = localStorage.getItem('token')

  // const [cartCount, setCartCount] = useState()

  useEffect(() => {
    setCartContext(getTotalCart())
  }, [])


  const getTotalCart = () => {
    if(localStorage.getItem('cart')){
      const cart = JSON.parse(localStorage.getItem('cart'))
      let totalCart = 0
      if (localStorage.getItem('cart')) {
        cart.forEach(item => {
          totalCart += item.qty
        });
      }
      return totalCart
    }
  }

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
      <CartContext.Provider value={[cartContext, setCartContext]}>
        <Nav
          user={user}
          logout={logout}
          login={login}
          // cartCount={cartCount}
        />

        <Routes
          login={login}
          deleteArt={deleteArt}
          register={register}
          user={user}
        />
      </CartContext.Provider>
    </>
  )
}

export default App;