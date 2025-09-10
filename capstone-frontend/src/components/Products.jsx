import React from "react";
import { Link } from 'react-router-dom';

// Component to display a list of products with images, names, prices, and a link to view details
const Products = ({ products }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`} className="view-btn">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

// const Products = ({ products = [] }) => {
//   return (
//     <section>
//       {products?.map((product) => (
//         <section key={product.id}>
//           <h3>{product.name}</h3>
//           <p>Price: ${product.price}</p>
//         </section>
//       ))}
//     </section>
//   );
// };

export default Products;
