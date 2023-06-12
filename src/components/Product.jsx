import { useState } from "react";
import Button from "./Button";
import "./Product.css";

export default function Product(props) {
  const [detail, setDetail] = useState(true);
  const [like, setLike] = useState(true);

  return (
    <>
      <div className="card-product">
        <div
          className="product-img"
          style={{ backgroundImage: `url(${props.gambarProduk})` }}
        ></div>
        <div className="content">
          {detail && <h5>{props.namaProduk}</h5>}
          {detail && <p>{props.hargaProduk}</p>}
        </div>
        <div className="cont-btn">
          <Button onClick={() => setDetail(!detail)}>
            {detail ? "Hide" : "Detail"}
          </Button>
          <Button onClick={() => setLike(!like)} warna={like ? "" : "red"}>
            {like ? "Suka" : "Batal Suka"}
          </Button>
        </div>
      </div>
    </>
  );
}
