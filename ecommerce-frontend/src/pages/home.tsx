import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asdfasd"
          name="Macbook"
          price={5432}
          stock={435}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/61L5QgPvgqL._AC_SX385_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
