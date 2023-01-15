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
          expireDate={product.expireDate}
          available={product.available}
          price={product.price}
          quantity={product.quantity}
          quantityType={product.quantityType}
          userId={product.UserId}
          claimedUserId={product.claimedUserId}
        />
      ))}
    </ul>
  );
}

export default ProductList;
