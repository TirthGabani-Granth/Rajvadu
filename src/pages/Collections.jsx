import { Link } from 'react-router-dom';
import { categories, products } from '../data/products';
import './Collections.css';

export default function Collections() {
  return (
    <main className="collections-page" id="collections-page">
      <section className="collections-header">
        <div className="collections-header__bg" />
        <div className="container collections-header__content">
          <span className="section-subtitle">Royal Heritage</span>
          <h1 className="collections-header__title">Our <em>Collections</em></h1>
          <p className="collections-header__desc">
            Each collection tells a unique story of India's rich heritage — from the grand 
            wedding mandaps to the everyday elegance of royal courts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {categories.map((cat, index) => {
            const catProducts = products.filter(p => p.category === cat.id).slice(0, 3);
            return (
              <div className={`collection-showcase ${index % 2 !== 0 ? 'reverse' : ''}`} key={cat.id}>
                <div className="collection-showcase__image">
                  <img src={cat.image} alt={cat.name} />
                  <div className="collection-showcase__overlay" />
                  <span className="collection-showcase__count">{cat.count} Pieces</span>
                </div>
                <div className="collection-showcase__content">
                  <span className="section-subtitle">{cat.id === 'wedding' ? 'Grand Celebrations' : cat.id === 'festive' ? 'Festival Splendor' : cat.id === 'casual' ? 'Daily Grace' : 'Supreme Elegance'}</span>
                  <h2 className="collection-showcase__name">{cat.name}</h2>
                  <div className="section-divider" style={{ margin: '1rem 0' }} />
                  <p className="collection-showcase__desc">{cat.description}</p>
                  <p className="collection-showcase__details">
                    {cat.id === 'wedding' 
                      ? 'Crafted for the most auspicious moments of your life. Our wedding collection features hand-embroidered gold zari work on the finest Banarasi silk, designed to make you the center of every celebration.'
                      : cat.id === 'festive'
                      ? 'From Diwali to Navratri, our festive collection brings the vibrancy of Indian celebrations to life. Rich fabrics adorned with zardozi and threadwork that shimmer under festival lights.'
                      : cat.id === 'casual'
                      ? 'Heritage elegance meets everyday comfort. Premium cotton and linen kurtas with subtle embroidery that let you carry your royal heritage gracefully through every day.'
                      : 'The ultimate expression of Indian menswear. Our sherwanis draw from Mughal courts and Rajput durbar traditions, crafted in velvet and silk with meticulous gold embroidery.'
                    }
                  </p>

                  <div className="collection-showcase__mini-products">
                    {catProducts.map(p => (
                      <Link to={`/product/${p.slug}`} className="collection-mini-product" key={p.id}>
                        <img src={p.image} alt={p.name} />
                      </Link>
                    ))}
                  </div>

                  <Link to={`/shop?category=${cat.id}`} className="btn btn-outline">
                    Explore {cat.name}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
