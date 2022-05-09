import {PaymentElement} from '@stripe/react-stripe-js';


export default function CheckoutForm() {
  return (
    <form>
      <PaymentElement />
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" />
      <button>Submit</button>
    </form>
  );
};
