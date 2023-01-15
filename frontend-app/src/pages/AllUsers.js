import UserList from "../components/users/UserList";
import { useEffect, useState } from "react";
import classes from "./Pages.module.css";

function AllUsersPage() {
  const [loading, setLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users/allUsers", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setAllUsers(data);
        console.log(data);
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
      <h1 className={classes.headers}>All Users</h1>
      <UserList users={allUsers} />
    </section>
  );
}

export default AllUsersPage;
