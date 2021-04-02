import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Ibf2sHeCH3o6LJzos3u6ZOFjJ73CLNedUVLAMBKmbLdlPBCQMdbEjqWp7h0QtEarFiuz02MFhbV5Tb9try2U1iz00g91qtGWY');



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  }, [])

  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
