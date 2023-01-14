import Card from "../userInterface/Card";
import classes from "./UserItem.module.css";

function UserItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div>
          <img
            className={classes.image}
            src={props.image}
            alt={props.username}
          ></img>
        </div>
        <div>
          <h3>{props.username}</h3>
          <p>{props.category}</p>
        </div>
        <div className={classes.actions}>
          <button>Select User</button>
        </div>
      </Card>
    </li>
  );
}

export default UserItem;
