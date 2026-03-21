import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './CartDrawer.css';

export default function CartDrawer() {
  const { 
    cartItems, cartTotal, isCartOpen, setIsCartOpen, 
    updateQuantity, removeFromCart 
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'active' : ''}`} 
        onClick={() => setIsCartOpen(false)} 
        id="cart-overlay"
      />
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} id="cart-drawer">
        <div className="cart-drawer__header">
          <div>
            <h3 className="cart-drawer__title">Your Royal Selection</h3>
            <p className="cart-drawer__count">{cartItems.length} item{cartItems.length !== 1 ? 's' : ''}</p>
          </div>
          <button 
            className="cart-drawer__close" 
            onClick={() => setIsCartOpen(false)}
            id="cart-close-btn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-drawer__content">
          {cartItems.length === 0 ? (
            <div className="cart-drawer__empty">
              <div className="cart-drawer__empty-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
              </div>
              <p>Your cart awaits royal selections</p>
              <Link to="/shop" className="btn btn-outline" onClick={() => setIsCartOpen(false)}>
                Explore Collection
              </Link>
            </div>
          ) : (
            <div className="cart-drawer__items">
              {cartItems.map((item) => (
                <div className="cart-item" key={`${item.id}-${item.size}`}>
                  <div className="cart-item__image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item__info">
                    <h4 className="cart-item__name">{item.name}</h4>
                    <p className="cart-item__meta">Size: {item.size} • {item.color}</p>
                    <div className="cart-item__bottom">
                      <div className="cart-item__quantity">
                        <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}>+</button>
                      </div>
                      <span className="cart-item__price">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                  <button 
                    className="cart-item__remove" 
                    onClick={() => removeFromCart(item.id, item.size)}
                    aria-label="Remove item"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span>Subtotal</span>
              <span className="cart-drawer__total-price">{formatPrice(cartTotal)}</span>
            </div>
            <p className="cart-drawer__shipping">Complimentary shipping on orders above ₹10,000</p>
            <Link 
              to="/checkout" 
              className="btn btn-primary cart-drawer__checkout-btn"
              onClick={() => setIsCartOpen(false)}
            >
              Proceed to Checkout
            </Link>
            <button 
              className="btn btn-ghost cart-drawer__continue"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
