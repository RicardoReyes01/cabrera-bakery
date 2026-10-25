import { products } from '../data/products';
import { useInView } from '../hooks/useInViews';

function Products() {
  const [headingRef, headingVisible] = useInView();
  return (
    <section className="container" id="products">
      <h2
        ref={headingRef}
        className={headingVisible ? 'reveal-left visible' : 'reveal-left'}
      >
        What We Bake
      </h2>
      <div className="product-grid">
        {products.map((p) => (
          <article className="product-card" key={p.id}>
            <img src={p.image} alt={p.name} loading="lazy" />
            <h3>• {p.name} •</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;