import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function UserList(props) {
  console.log("UserList");
  return (
    <ul className={classes.list}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          username={user.username}
          category={user.category}
          image={user.image}
        />
      ))}
    </ul>
  );
}

export default UserList;
