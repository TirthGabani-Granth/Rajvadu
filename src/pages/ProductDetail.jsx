import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <main className="product-detail-page">
        <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--color-gold-primary)' }}>
            Product Not Found
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem' }}>
            The royal piece you're looking for seems to have been claimed.
          </p>
          <Link to="/shop" className="btn btn-outline" style={{ marginTop: '2rem' }}>
            Return to Shop
          </Link>
        </div>
      </main>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const discount = Math.round((1 - product.price / product.originalPrice) * 100);
  const wishlisted = isInWishlist(product.id);
  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length < 4) {
    const more = products.filter(p => p.id !== product.id && !relatedProducts.find(r => r.id === p.id)).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...more);
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize, quantity);
  };

  return (
    <main className="product-detail-page" id="product-detail-page">
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span className="product-breadcrumb__sep">◆</span>
          <Link to="/shop">Shop</Link>
          <span className="product-breadcrumb__sep">◆</span>
          <span className="product-breadcrumb__current">{product.name}</span>
        </div>
      </div>

      {/* Product Section */}
      <section className="product-detail container">
        <div className="product-detail__gallery">
          <div className="product-detail__main-image">
            <img src={product.images[activeImage]} alt={product.name} />
            {product.badge && (
              <span className="product-detail__badge">{product.badge}</span>
            )}
          </div>
          <div className="product-detail__thumbnails">
            {product.images.map((img, index) => (
              <button
                key={index}
                className={`product-detail__thumb ${index === activeImage ? 'active' : ''}`}
                onClick={() => setActiveImage(index)}
              >
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail__info">
          <div className="product-detail__meta-top">
            <span className="product-detail__fabric">{product.fabric}</span>
            <div className="product-detail__rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? '#c9a96e' : 'none'} stroke="#c9a96e" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>

          <h1 className="product-detail__name">{product.name}</h1>
          
          <div className="product-detail__pricing">
            <span className="product-detail__price">{formatPrice(product.price)}</span>
            <span className="product-detail__original-price">{formatPrice(product.originalPrice)}</span>
            <span className="product-detail__discount">Save {discount}%</span>
          </div>

          <div className="product-detail__divider" />

          <p className="product-detail__description">{product.description}</p>

          {/* Color */}
          <div className="product-detail__option">
            <label className="product-detail__label">Color</label>
            <span className="product-detail__color-name">{product.color}</span>
          </div>

          {/* Size */}
          <div className="product-detail__option">
            <label className="product-detail__label">
              Size
              <a href="#" className="product-detail__size-guide">Size Guide</a>
            </label>
            <div className="product-detail__sizes">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={`product-detail__size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="product-detail__option">
            <label className="product-detail__label">Quantity</label>
            <div className="product-detail__quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* Actions */}
          <div className="product-detail__actions">
            <button 
              className="btn btn-primary product-detail__add-btn"
              onClick={handleAddToCart}
              id="add-to-cart-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              Add to Royal Cart
            </button>
            <button
              className={`product-detail__wishlist-btn ${wishlisted ? 'active' : ''}`}
              onClick={() => toggleWishlist(product.id)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="product-detail__trust">
            <div className="product-detail__trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v5h-3M6 21a2 2 0 100-4 2 2 0 000 4zM18 21a2 2 0 100-4 2 2 0 000 4z"/>
              </svg>
              <span>Free Royal Shipping</span>
            </div>
            <div className="product-detail__trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
              <span>7-Day Returns</span>
            </div>
            <div className="product-detail__trust-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Authenticity Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="product-tabs-section container">
        <div className="product-tabs__nav">
          <button 
            className={`product-tabs__tab ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Details
          </button>
          <button 
            className={`product-tabs__tab ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`product-tabs__tab ${activeTab === 'care' ? 'active' : ''}`}
            onClick={() => setActiveTab('care')}
          >
            Care Instructions
          </button>
        </div>

        <div className="product-tabs__content">
          {activeTab === 'description' && (
            <div className="product-tab-panel">
              <p>{product.description}</p>
              <p style={{ marginTop: '1rem' }}>
                Every Rajvadu creation is a testament to centuries-old artisan traditions. 
                Our master craftsmen work with the finest materials to create pieces that 
                honor India's royal heritage while embracing contemporary elegance.
              </p>
            </div>
          )}
          {activeTab === 'features' && (
            <div className="product-tab-panel">
              <ul className="product-features-list">
                {product.details.map((detail, i) => (
                  <li key={i}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'care' && (
            <div className="product-tab-panel">
              <ul className="product-features-list">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Dry clean recommended for best results
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Store on padded hangers in a cool, dry place
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Avoid direct sunlight during storage
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  Iron on reverse side at low temperature
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Related Products */}
      <section className="section related-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">You May Also Like</span>
            <h2 className="section-title">Royal <span>Recommendations</span></h2>
            <div className="section-divider" />
          </div>
          <div className="products-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', display: 'grid' }}>
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
