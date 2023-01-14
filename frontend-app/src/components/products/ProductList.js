import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

function ProductList(props) {
  return (
    <ul className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          category={product.category}
          image={product.image}
        />
      ))}
    </ul>
  );
}

export default ProductList;
