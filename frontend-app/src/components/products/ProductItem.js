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
          <p>{props.category}</p>
        </div>
        <div className={classes.actions}>
          <button>Claim Item</button>
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
