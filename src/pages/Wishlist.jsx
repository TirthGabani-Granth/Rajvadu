import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Wishlist.css';

export default function Wishlist() {
  const { wishlist } = useCart();
  
  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <main className="wishlist-page" id="wishlist-page">
      <section className="wishlist-header">
        <div className="wishlist-header__bg" />
        <div className="container wishlist-header__content">
          <span className="section-subtitle">Your Royal Selection</span>
          <h1 className="wishlist-header__title">Royal <em>Wishlist</em></h1>
          <p className="wishlist-header__desc">
            The pieces you've selected for your royal wardrobe.
            Ready when you are.
          </p>
        </div>
      </section>

      <div className="container wishlist-content">
        {wishlistedProducts.length > 0 ? (
          <div className="wishlist-grid">
            {wishlistedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="wishlist-empty">
            <div className="wishlist-empty__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <h3>Your Wishlist is Empty</h3>
            <p>You haven't added any pieces to your royal wishlist yet.</p>
            <Link to="/shop" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Explore Royal Collection
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
