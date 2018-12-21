import React, {Component} from 'react'
import StripeCheckout from 'react-stripe-checkout'

class CheckoutForm extends Component {
  onToken = (token) => {
  fetch('http://localhost:5000/pay', {
    method: 'POST',
    body: JSON.stringify(token),
  }).then(response => {
    response.json().then(data => {
      alert(`We are in business, ${data.email}`);
    });
  });
}

// ...

render() {
  return (
    // ...
    <StripeCheckout
      token={this.onToken}
      stripeKey="pk_test_I9ectyQoAkIXDobN6NBmtAZy"
    />
  )
}
}


export default CheckoutForm
