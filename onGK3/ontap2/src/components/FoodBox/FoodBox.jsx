import React from "react";
import "./FoodBox.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/CartContext";
export default function FoodBox(props) {
  const { product } = props;
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const viewDetais = (produc) => {
    navigate(`/product/${product.id}`, { state: { produc } });
  };

  return (
    <div
      className="card shadow-sm border-0 rounded-4"
      style={{ width: "100%" }}
    >
      <img
        src={product.hinhAnh}
        alt={product.hinhAnh}
        className="card-img-top rounded-top-4 object-fit-cover"
      ></img>
      <div className="card-body">
        <div className="text-center">
          <h5>{product.tieuDe}</h5>
        </div>
        <div className="d-flex justify-content-around mt-2">
          <span>{product.tacGia}</span>
          <span className="text-danger fw-bold">{product.gia}d</span>
        </div>
        <div className="d-flex justify-content-around mt-4">
          <Button variant="secondary" onClick={() => viewDetais(product)}>
            xem chi tiet
          </Button>
          <Button variant="primary" onClick={() => addToCart(product)}>
            add
          </Button>
        </div>
      </div>
    </div>
  );
}
