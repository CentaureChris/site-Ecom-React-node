import React from 'react';
import '../assets/css/nav.css';

export default function Nav({ user, logout }) {


  const styles = {
    main: {
      textAlign: 'right'
    },
    cartButton: {
      marginRight: '25px'
    },
    userLogedIn: {
      textAlign: 'right',
      marginRight: '25px'
    }
  }

  const LogButton = () => {

    if (user) {
      return (
        <>
          <button onClick={logout}>Logout</button>
        </>
      )
    } else {
      return (
        <>
          <a href="/login">Login/register</a>
        </>
      )
    }
  }


  return (
    <>
      {user ? <p style={styles.userLogedIn}>{user.nom} {user.prenom}</p>:""}
      <ul className='navList'>
        <li><a href="/">Home</a></li>
        <li>
          {
            user && user.niveau === 1  
            ? <a href="/admin" style={styles.cartButton}>Admin View</a> 
            :""
          }
          <a href={"/users/cart/"}>
            <button style={styles.cartButton}>Panier</button>
          </a>
          <LogButton />
        </li>
      </ul>
    </>
  );
}