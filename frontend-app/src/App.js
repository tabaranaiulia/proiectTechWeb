import { Route, Switch } from "react-router-dom";
import AllProductsPage from "./pages/AllProducts";
import NewProductsPage from "./pages/NewProduct";
import AllUsersPage from "./pages/AllUsers";
import Layout from "./components/layout/Layout";
import MyProducts from "./pages/MyProducts";
import ClaimedProducts from "./pages/ClaimedProducts";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllUsersPage />
        </Route>
        <Route path="/AllProductsPage">
          <AllProductsPage />
        </Route>
        <Route path="/NewProductsPage">
          <NewProductsPage />
        </Route>
        <Route path="/MyProducts">
          <MyProducts />
        </Route>
        <Route path="/MyClaimedProducts">
          <ClaimedProducts />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
