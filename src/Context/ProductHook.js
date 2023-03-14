import axios from "axios";
import { useState, useEffect } from "react";

const ProductHook = () => {
  const [products, setProducts] = useState([]);
  const api = "https://api.pujakaitem.com/api/products";
  // fetching product data with the help of axios

  const getProduct = async (url) => {
    const response = await axios.get(url);
    const data = await response.data;
    setProducts(data);
  };
  useEffect(() => {
    getProduct(api);
  }, []);
  return products;
};

export default ProductHook;
