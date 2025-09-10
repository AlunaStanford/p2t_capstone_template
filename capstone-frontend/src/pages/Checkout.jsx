import React from 'react';
import { useCartStore } from '../store/CartStore';

const Checkout = () => {
  const { items, removeItem } = useCartStore();
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} width="80" />
              <div>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="checkout-btn">Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Checkout;