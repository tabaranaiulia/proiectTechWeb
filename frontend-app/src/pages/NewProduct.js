import NewProductForm from "../components/products/NewProductForm";
import { useHistory } from "react-router-dom";

function NewProductsPage() {
  const history = useHistory();

  function addProductHandler(productData) {
    fetch("http://localhost:8080/products/1/addProduct", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // history.replace("/")
    });
  }

  return (
    <section>
      <h1>Add New Product</h1>
      <NewProductForm onAddProduct={addProductHandler} />
    </section>
  );
}

export default NewProductsPage;
