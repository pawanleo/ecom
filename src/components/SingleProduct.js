import React from "react";
import "../css/singleproduct.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function SingleProduct({ image, title, price, id, description }) {
  const navigate = useNavigate();

  return (
    <>
      <Card
        className="card"
        style={{ width: "18rem" }}
        onClick={() =>
          navigate("/productsDetails", {
            state: { id, title, image, price, description },
          })
        }
      >
        <Card.Img variant="top" src={image} height="290px" width="290px" />
        <Card.Body>
          <Card.Title className="cardtitle">{title}</Card.Title>
          <Card.Text>$ {price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleProduct;
