import Card from "../userInterface/Card";
import classes from "./ProductItem.module.css";
import UserContext from "../../store/user-context";
import { useContext, useEffect, useState } from "react";

function ProductItem(props) {
  const userCtx = useContext(UserContext);
  const [isClaimed, setIsClaimed] = useState(
    props.claimedUserId ? true : false
  );

  const [isAvailable, setIsAvailable] = useState(
    props.available ? true : false
  );

  function claimItem() {
    if (!isClaimed) {
      if (isAvailable) {
        fetch(`http://localhost:8080/products/${props.id}/`, {
          method: "PUT",
          body: JSON.stringify({ claimedUserId: userCtx.userId }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          setIsClaimed(() => {
            return true;
          });
        });
      }
    } else {
      if (props.claimedUserId == userCtx.userId) {
        fetch(`http://localhost:8080/products/${props.id}/`, {
          method: "PUT",
          body: JSON.stringify({ claimedUserId: null }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => {
          setIsClaimed(() => {
            return false;
          });
        });
      }
    }
  }

  function makeAvailable() {
    if (!isAvailable) {
      fetch(`http://localhost:8080/products/${props.id}/`, {
        method: "PUT",
        body: JSON.stringify({ available: "true" }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setIsAvailable(() => {
          return true;
        });
      });
    } else {
      fetch(`http://localhost:8080/products/${props.id}/`, {
        method: "PUT",
        body: JSON.stringify({ available: "false" }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        setIsAvailable(() => {
          return false;
        });
      });
    }
  }

  function deleteProduct() {
    fetch(`http://localhost:8080/products/delete/${props.id}/`, {
      method: "DELETE",
    });
  }

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
          <h3 className={classes.content}>{props.name}</h3>

          <p className={classes.para}>Valid through: {props.expireDate}</p>
          <p className={classes.para}>
            Product{" "}
            {isAvailable && !isClaimed ? "available to Claim" : "Not Available"}
          </p>
          <p className={classes.para}>
            Quantity: {props.quantity} {props.quantityType}(s)
          </p>
          <p className={classes.para}>
            {props.price}$ / {props.quantityType}
          </p>
        </div>
        <div className={classes.actions}>
          {props.userId !== userCtx.userId ? (
            <button onClick={claimItem}>
              {isClaimed
                ? props.claimedUserId == userCtx.userId
                  ? "Unclaim Product"
                  : "Product Already Claimed"
                : isAvailable
                ? "Claim Product"
                : "Product not Available to Claim"}
            </button>
          ) : (
            <div>
              <p className={classes.para}>Your Product is Claimed</p>
              <button onClick={deleteProduct}>Delete</button>
              <button onClick={makeAvailable}>
                {isAvailable ? "Make Unavailable" : "Make Available"}
              </button>
            </div>
          )}
        </div>
      </Card>
    </li>
  );
}

export default ProductItem;
