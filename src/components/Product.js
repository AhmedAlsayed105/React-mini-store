import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../rtk/prodcut_slice";
import { addToCard } from "../rtk/card_slice";

function AppProducts() {
  const products = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <Container>
      <Row  className="py-5">
        {products.map((product) => (
          <Col key={product.id}  className="py-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text >
                 .{product.description}
                </Card.Text>
                <Card.Text >
                 Price :{product.price}$
                </Card.Text>
                <Button variant="primary" onClick={()=> dispatch(addToCard(product))}>Add to Card</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AppProducts;
