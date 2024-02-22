import "./product.scss";
import Single from "../../src/components/single/Single";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const [singleProduct, setSingleProduct] = useState({
    id: 0,
    title: "",
    info: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get("https://dilfoods.onrender.com/singleProduct")
        .then((response) => {
          setSingleProduct(response.data);
        })
        .catch((error) => {
          console.log({ error });
        });
      setLoading(false);
    } catch (error) {
      console.log({ error });
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
