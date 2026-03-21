import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const shipping = cartTotal >= 10000 ? 0 : 499;
  const total = cartTotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <main className="checkout-page" id="checkout-success">
        <div className="container checkout-success">
          <div className="checkout-success__icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>
          <h1 className="checkout-success__title">Royal Order Placed!</h1>
          <p className="checkout-success__subtitle">
            Thank you for choosing Rajvadu. Your order has been confirmed and our 
            artisans have been notified. You'll receive a confirmation email shortly.
          </p>
          <div className="checkout-success__order-id">
            Order ID: <span>RAJ-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
          </div>
          <Link to="/shop" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page" id="checkout-empty">
        <div className="container checkout-success">
          <h1 className="checkout-success__title">Your Cart is Empty</h1>
          <p className="checkout-success__subtitle">
            Add some royal pieces to your cart before checking out.
          </p>
          <Link to="/shop" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Explore Collection
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="checkout-page" id="checkout-page">
      <section className="checkout-header">
        <div className="container">
          <h1 className="checkout-header__title">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Secure Checkout
          </h1>
          <div className="checkout-steps">
            <div className={`checkout-step ${step >= 1 ? 'active' : ''}`}>
              <span className="checkout-step__number">1</span>
              <span className="checkout-step__label">Shipping</span>
            </div>
            <div className="checkout-step__line" />
            <div className={`checkout-step ${step >= 2 ? 'active' : ''}`}>
              <span className="checkout-step__number">2</span>
              <span className="checkout-step__label">Payment</span>
            </div>
            <div className="checkout-step__line" />
            <div className={`checkout-step ${step >= 3 ? 'active' : ''}`}>
              <span className="checkout-step__number">3</span>
              <span className="checkout-step__label">Review</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container checkout-content">
        <div className="checkout-main">
          {step === 1 && (
            <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <h2 className="checkout-form__title">Shipping Details</h2>
              <div className="checkout-form__row">
                <div className="checkout-form__group">
                  <label>First Name *</label>
                  <input type="text" placeholder="First name" required id="checkout-first-name" />
                </div>
                <div className="checkout-form__group">
                  <label>Last Name *</label>
                  <input type="text" placeholder="Last name" required id="checkout-last-name" />
                </div>
              </div>
              <div className="checkout-form__group">
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required id="checkout-email" />
              </div>
              <div className="checkout-form__group">
                <label>Phone *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" required id="checkout-phone" />
              </div>
              <div className="checkout-form__group">
                <label>Address *</label>
                <input type="text" placeholder="Street address" required id="checkout-address" />
              </div>
              <div className="checkout-form__row">
                <div className="checkout-form__group">
                  <label>City *</label>
                  <input type="text" placeholder="City" required />
                </div>
                <div className="checkout-form__group">
                  <label>State *</label>
                  <input type="text" placeholder="State" required />
                </div>
                <div className="checkout-form__group">
                  <label>PIN Code *</label>
                  <input type="text" placeholder="PIN code" required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary checkout-form__next">
                Continue to Payment
              </button>
            </form>
          )}

          {step === 2 && (
            <form className="checkout-form" onSubmit={(e) => { e.preventDefault(); setStep(3); }}>
              <h2 className="checkout-form__title">Payment Method</h2>
              <div className="checkout-payment-methods">
                <label className="checkout-payment-option active">
                  <input type="radio" name="payment" defaultChecked />
                  <div className="checkout-payment-option__content">
                    <span className="checkout-payment-option__name">Credit/Debit Card</span>
                    <span className="checkout-payment-option__desc">Visa, Mastercard, RuPay</span>
                  </div>
                </label>
                <label className="checkout-payment-option">
                  <input type="radio" name="payment" />
                  <div className="checkout-payment-option__content">
                    <span className="checkout-payment-option__name">UPI</span>
                    <span className="checkout-payment-option__desc">Google Pay, PhonePe, Paytm</span>
                  </div>
                </label>
                <label className="checkout-payment-option">
                  <input type="radio" name="payment" />
                  <div className="checkout-payment-option__content">
                    <span className="checkout-payment-option__name">Net Banking</span>
                    <span className="checkout-payment-option__desc">All major banks supported</span>
                  </div>
                </label>
                <label className="checkout-payment-option">
                  <input type="radio" name="payment" />
                  <div className="checkout-payment-option__content">
                    <span className="checkout-payment-option__name">Cash on Delivery</span>
                    <span className="checkout-payment-option__desc">Pay when your order arrives</span>
                  </div>
                </label>
              </div>
              <div className="checkout-form__actions">
                <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>← Back</button>
                <button type="submit" className="btn btn-primary checkout-form__next">
                  Review Order
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form className="checkout-form" onSubmit={handlePlaceOrder}>
              <h2 className="checkout-form__title">Review Your Order</h2>
              <div className="checkout-review-items">
                {cartItems.map(item => (
                  <div className="checkout-review-item" key={`${item.id}-${item.size}`}>
                    <div className="checkout-review-item__image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="checkout-review-item__info">
                      <h4>{item.name}</h4>
                      <p>Size: {item.size} • Qty: {item.quantity}</p>
                    </div>
                    <span className="checkout-review-item__price">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="checkout-form__actions">
                <button type="button" className="btn btn-ghost" onClick={() => setStep(2)}>← Back</button>
                <button type="submit" className="btn btn-primary checkout-form__next">
                  Place Royal Order — {formatPrice(total)}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Order Summary */}
        <div className="checkout-summary">
          <div className="checkout-summary__card">
            <h3 className="checkout-summary__title">Order Summary</h3>
            <div className="checkout-summary__items">
              {cartItems.map(item => (
                <div className="checkout-summary__item" key={`${item.id}-${item.size}`}>
                  <div className="checkout-summary__item-image">
                    <img src={item.image} alt={item.name} />
                    <span className="checkout-summary__item-qty">{item.quantity}</span>
                  </div>
                  <div className="checkout-summary__item-info">
                    <span className="checkout-summary__item-name">{item.name}</span>
                    <span className="checkout-summary__item-size">Size: {item.size}</span>
                  </div>
                  <span className="checkout-summary__item-price">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="checkout-summary__divider" />
            <div className="checkout-summary__row">
              <span>Subtotal</span>
              <span>{formatPrice(cartTotal)}</span>
            </div>
            <div className="checkout-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Complimentary' : formatPrice(shipping)}</span>
            </div>
            <div className="checkout-summary__divider" />
            <div className="checkout-summary__row checkout-summary__total">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            {cartTotal >= 10000 && (
              <p className="checkout-summary__free-shipping">
                🎉 You qualify for free royal shipping!
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
