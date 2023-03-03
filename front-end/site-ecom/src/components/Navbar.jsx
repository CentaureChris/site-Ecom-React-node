import React from 'react';
import '../assets/css/nav.css';

export default function Nav({user,logout}) {

  const styles = {
    main:{
      textAlign: 'right'
    },
    cartButton:{
      marginRight:'25px'
    }
  }

  const LogButton = ()=> {
    if(user){
        return (
        <>
          <button onClick={logout}>Logout</button>
        </>
      )
    }else{
      return (
        <>
          <a href="/login">Login/register</a>
        </>
      )
    }
  }
  
  return (
    <>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href={"/users/cart/"}><button style={styles.cartButton}>Panier</button></a><LogButton/></li>
      </ul>
      <div >
       
      </div>
    </>
  );
}