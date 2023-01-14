import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import HeaderNav from './components/HeaderNav';
import Home from './components/Home';
import Login from './components/Login';
import Payment from './components/Payment';
import { useStateValue } from './context/StateProvider';
import { auth } from './firebase';
// import { loadStripe } from '@stripe/stripe-js';

// Stripe API Key
// const promise = loadStripe('your stripe api key here')

function App() {

  const [{cart}, dispatch] = useStateValue();

  // run only once when the app component loads
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      // console.log("USER FROM FIREBASE >>>", authUser);
      if(authUser){
        // The user is just logged in / the user was loggged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      }
      else{
        // The user is just logged out / the user was loggged out
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    })

  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<><Header/> <HeaderNav/> <Home/></>}/>
          <Route exact path='login' element={<Login/>}/>
          <Route exact path='checkout' element={<><Header/> <HeaderNav/> <Checkout/></>}/>
          <Route exact path='payment' element={<><Header/> <Payment/></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
