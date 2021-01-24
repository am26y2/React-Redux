import React from "react";
import { Card } from "react-bootstrap";
const Product = ({ product }) => {
  console.log(product);
  return (
    <Card className="my-3 p-3 rounded">
        <Card.Img src={product.provider.logoUrl} variant="top" />
      <Card.Body>
          <Card.Title as="div">
            <strong>{product.provider.shortName}</strong>
          </Card.Title>
        <Card.Text as="h3">{`${product.price.total}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
