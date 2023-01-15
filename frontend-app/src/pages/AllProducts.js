import { useEffect, useState, useContext } from "react";
import ProductList from "../components/products/ProductList";
import UserContext from "../store/user-context";
import classes from "./Pages.module.css";

function AllProductsPage() {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${userCtx.userId}/filteredProducts`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        console.log(data);
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
      <h1 className={classes.headers}>All Products</h1>
      <ProductList products={allProducts} />
    </section>
  );
}

export default AllProductsPage;
