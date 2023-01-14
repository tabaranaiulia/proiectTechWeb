import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Alex</div>
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
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
