import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "abcdefghijkl";

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt="{name}" />
      // `${server}/${photo}`<p>{name}</p>
      <span>PKR{price}</span>
      <div>
        <button>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
