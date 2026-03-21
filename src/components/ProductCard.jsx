import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const wishlisted = isInWishlist(product.id);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);

  return (
    <div 
      className="product-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
      id={`product-card-${product.id}`}
    >
      <div className="product-card__image-wrapper">
        <Link to={`/product/${product.slug}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-card__image"
            loading="lazy"
          />
          <div className="product-card__image-overlay" />
        </Link>

        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}

        <button
          className={`product-card__wishlist ${wishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        <div className="product-card__quick-actions">
          <button 
            className="product-card__add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
          <Link to={`/product/${product.slug}`} className="product-card__view-btn">
            View Details
          </Link>
        </div>
      </div>

      <div className="product-card__info">
        <span className="product-card__category">{product.fabric}</span>
        <Link to={`/product/${product.slug}`}>
          <h3 className="product-card__name">{product.name}</h3>
        </Link>
        <div className="product-card__rating">
          <div className="product-card__stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? '#c9a96e' : 'none'} stroke="#c9a96e" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            ))}
          </div>
          <span className="product-card__review-count">({product.reviews})</span>
        </div>
        <div className="product-card__pricing">
          <span className="product-card__price">{formatPrice(product.price)}</span>
          <span className="product-card__original-price">{formatPrice(product.originalPrice)}</span>
          <span className="product-card__discount">{discount}% off</span>
        </div>
      </div>
    </div>
  );
}
