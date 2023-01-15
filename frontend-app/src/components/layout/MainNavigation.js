import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import UserContext from "../../store/user-context";

function MainNavigation() {
  const userCtx = useContext(UserContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h2>{userCtx.currentUser.username}</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Users</Link>
          </li>
          <li>
            <Link to="/AllProductsPage">All Products</Link>
          </li>
          <li>
            <Link to="/NewProductsPage">New Product</Link>
          </li>
          <li>
            <Link to="/MyProducts">My Products</Link>
          </li>
          <li>
            <Link to="/MyClaimedProducts">Claimed Items</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
