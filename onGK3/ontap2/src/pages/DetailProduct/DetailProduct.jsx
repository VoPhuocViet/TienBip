import React from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";
export default function DetailProduct() {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              src={product.hinhAnh}
              alt={product.hinhAnh}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.tieuDe}</h1>
            <p>{product.tacGia}</p>
            <p>{product.moTa}</p>
            <h3 className="text-danger">{product.gia}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
