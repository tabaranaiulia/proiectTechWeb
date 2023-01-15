import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Card from "../userInterface/Card";
import classes from "./UserItem.module.css";
import UserContext from "../../store/user-context";

function UserItem(props) {
  const history = useHistory();
  const userCtx = useContext(UserContext);

  const userIsSelected = userCtx.isCurrentUser(props.id);

  function selectUser() {
    userCtx.selectCurrentUser({
      id: props.id,
      username: props.username,
      category: props.category,
      image: props.image,
    });
    history.push("/AllProductsPage");
  }

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
          <button onClick={selectUser}>
            {userIsSelected ? "User Selected" : "Select User"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default UserItem;
