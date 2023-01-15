import NewProductForm from "../components/products/NewProductForm";
import { useHistory } from "react-router-dom";
import UserContext from "../store/user-context";
import { useContext } from "react";
import classes from "./Pages.module.css";

function NewProductsPage() {
  const history = useHistory();
  const userCtx = useContext(UserContext);

  function addProductHandler(productData) {
    fetch(`http://localhost:8080/products/${userCtx.userId}/addProduct`, {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/MyProducts");
    });
  }

  return (
    <section>
      <h1 className={classes.headers}>Add New Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
}

export default NewProductsPage;
