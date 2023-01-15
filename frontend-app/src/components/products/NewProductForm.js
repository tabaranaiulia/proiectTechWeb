import { useRef, useContext } from "react";
import Card from "../userInterface/Card";
import classes from "./NewProductForm.module.css";
import UserContext from "../../store/user-context";

function NewProductForm(props) {
  const userCtx = useContext(UserContext);

  const nameInputRef = useRef();
  const categoryInputRef = useRef();
  const priceInputRef = useRef();
  const quantityTypeInputRef = useRef();
  const quantityInputRef = useRef();
  const expireDateInputRef = useRef();
  const imageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCategory = categoryInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredQuantityType = quantityTypeInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredExpireDate = expireDateInputRef.current.value;
    let enteredImage = imageInputRef.current.value;
    if (!enteredImage) {
      enteredImage =
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg";
    }

    const productData = {
      name: enteredName,
      category: enteredCategory,
      price: enteredPrice,
      quantityType: enteredQuantityType,
      quantity: enteredQuantity,
      expireDate: enteredExpireDate,
      image: enteredImage,
      available: "false",
    };
    console.log(enteredImage);
    props.onAddProduct(productData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <p>Add Product for {userCtx.currentUser.username}</p>
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Product Name</label>
          <input type="text" required id="name" ref={nameInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="category">Product Category</label>
          <input
            type="text"
            required
            id="category"
            ref={categoryInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="price">Product Price</label>
          <input type="number" required id="price" ref={priceInputRef}></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="quantityType">Product Quantity Type</label>
          <select id="quantityType" ref={quantityTypeInputRef}>
            <option>Kg</option>
            <option>Unit</option>
          </select>
        </div>

        <div className={classes.control}>
          <label htmlFor="quantity">Product Quantity</label>
          <input
            type="number"
            required
            id="quantity"
            ref={quantityInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="expireDate">Product Date of Expire</label>
          <input
            type="date"
            required
            id="expireDate"
            ref={expireDateInputRef}
          ></input>
        </div>

        <div className={classes.control}>
          <label htmlFor="image">Product Image</label>
          <input type="url" id="image" ref={imageInputRef}></input>
        </div>

        <div className={classes.actions}>
          <button>Add Product</button>
        </div>
      </form>
    </Card>
  );
}

export default NewProductForm;
