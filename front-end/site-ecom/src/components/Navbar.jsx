import React, { useContext } from 'react';
import { CartContext } from "../Context.js";
import classe from '../assets/css/nav.module.css';
import hero from '../assets/images/hero.jpeg'
import { FaCartPlus } from "react-icons/fa";

export default function Nav({ user, logout }) {

  const [cartContext] = useContext(CartContext);



  const LogButton = () => {

    if (user) {
      return (
        <>
          <span onClick={logout} className="">Logout</span>
        </>
      )
    } else {
      return (
        <>
          <a href="/login"><button className="">Login/register</button></a>
        </>
      )
    }
  }


  return (
    <>
      <nav className={classe.navMenu}>
        <ul className={classe.menu}>
          <li><a href="/">Home</a></li>
          <li>
            {
              user && user.niveau === 1
                ? <a href="/admin" >Dashboard</a>
                : ""
            }

          </li>
          <li className={classe.userNavItem}>
            {user ? <p className='userLogged'>{user.nom} {user.prenom}</p> : ""} ..
            <a href={"/users/cart/"}className=""><FaCartPlus />({cartContext})</a>..

            <LogButton />
          </li>
        </ul>
      </nav>
      <img src={hero} class="hero_img" alt="hero" className="hero"/>
      
    </>
  );
}