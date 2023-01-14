import Card from "../userInterface/Card";
import classes from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.image}
            src={props.image}
            alt={props.category}
          ></img>
        </div>
        <div>
          <h3>{props.name}</h3>
          <p className={classes.para}>{props.category}</p>
          <p className={classes.para}>Valid through: {props.expireDate}</p>
          <p className={classes.para}>
            Product {props.available ? "available to Claim" : "Not Available"}
          </p>
          <p className={classes.para}>
            Quantity: {props.quantity} {props.quantityType}(s)
          </p>
          <p className={classes.para}>
            {props.price}$ / {props.quantityType}
          </p>
        </div>
        <div className={classes.actions}>
          <button>Claim Item</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
