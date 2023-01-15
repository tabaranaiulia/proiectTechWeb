import { useState, useContext, useEffect } from "react";
import UserContext from "../store/user-context";
import ProductList from "../components/products/ProductList";
import classes from "./Pages.module.css";

function ClaimedProducts() {
  const [loading, setLoading] = useState(true);
  const [allProducts, setAllProducts] = useState([]);
  const userCtx = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:8080/products/${userCtx.userId}/claimedProducts`, {
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
      <h1 className={classes.headers}>My Claimed Products</h1>
      <ProductList products={allProducts} />
    </section>
  );
}

export default ClaimedProducts;
