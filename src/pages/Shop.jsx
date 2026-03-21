import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Shop.css';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categoryOptions = [
    { value: 'all', label: 'All Collections' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'festive', label: 'Festive' },
    { value: 'casual', label: 'Everyday' },
  ];

  const fabricOptions = ['Pure Silk', 'Silk Blend', 'Raw Silk', 'Premium Cotton', 'Brocade Silk', 'Velvet', 'Organic Cotton', 'Gold Brocade'];

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy, priceRange, searchQuery]);

  return (
    <main className="shop-page" id="shop-page">
      {/* Header */}
      <section className="shop-header">
        <div className="shop-header__bg" />
        <div className="container shop-header__content">
          <span className="section-subtitle">Our Collections</span>
          <h1 className="shop-header__title">Royal <em>Wardrobe</em></h1>
          <p className="shop-header__desc">
            Discover handcrafted kurta pajamas, sherwanis, and heritage wear 
            fit for modern-day royalty.
          </p>
        </div>
      </section>

      <div className="container shop-content">
        {/* Filter Bar */}
        <div className="shop-filter-bar">
          <div className="shop-filter-bar__left">
            <div className="shop-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search royal collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="shop-search__input"
                id="shop-search-input"
              />
            </div>
            <span className="shop-results-count">
              {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>

          <div className="shop-filter-bar__right">
            <div className="shop-categories">
              {categoryOptions.map(cat => (
                <button
                  key={cat.value}
                  className={`shop-category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <select 
              value={sortBy} 
              onChange={e => setSortBy(e.target.value)}
              className="shop-sort-select"
              id="shop-sort"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest First</option>
            </select>

            <button 
              className="shop-mobile-filter-btn"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
                <circle cx="8" cy="6" r="2" fill="currentColor"/><circle cx="16" cy="12" r="2" fill="currentColor"/><circle cx="10" cy="18" r="2" fill="currentColor"/>
              </svg>
              Filters
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="shop-products-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <div className="shop-empty__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <h3>No pieces found</h3>
            <p>Try adjusting your filters to find the perfect royal attire.</p>
            <button className="btn btn-outline" onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setPriceRange([0, 50000]);
            }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
