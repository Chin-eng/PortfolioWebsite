
import './App.css';
import Home from './PortfolioContainer/Home/Home';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm.js'
const stripePromise = loadStripe('pk_test_51KvsPiJ5HFVnlXP8t2ICOKSH4LrBf7IbYpbEjmYD8JhX06enmnsfOEpemvoSBa503ZZ3xR66rxxIzOhaA5pdWWuw002tJFETb0');


function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{sk_test_51KvsPiJ5HFVnlXP8AXSk6nZYRxuoe4IVeBmNgw16TGY7mf6xF4eFH7tO5BO5ewQ9Uf8DCPXoyVTpHVMGsIlGNl2A00QHkIdemo}}',
  };

  return (
    <div className="App">
      <Home/>

    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
    </div>
  );
}

export default App;
