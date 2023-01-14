import { useEffect, useState } from "react";
import ProductList from "../components/products/ProductList";

function AllProductsPage() {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products/allProducts", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setAllProducts(data);
      });
  }, []);

  if (loading) {
    return (
      <section>
        <p>The data is loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Products</h1>
      <ProductList products={allProducts} />
    </section>
  );
}

export default AllProductsPage;
