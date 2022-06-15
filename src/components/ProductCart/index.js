import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Index = (props) => {
  const data = props.data;

  const navigate = useNavigate();

  const ProductDetail = () => {
    navigate(`/productdetail/${data.id}`);
  };

  return (
    <>
      <div onClick={() => ProductDetail()} className="product-all">
        <p class="product-details">{data.product}</p>
        <p class="price">IDR {data.price}</p>
      </div>
    </>
  );
};

export default Index;
