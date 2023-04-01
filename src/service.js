import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const ServicePage = ({ service }) => {
  return (
    <Container className="my-1">
      <h1 className="text-center">Our Services</h1>
      <Row className="mt-2 mb-1">
        {service.length > 0 &&
          service.slice(0, 4).map((el) => (
            <Col md={3} className="my-2">
              <Card style={{ border: "2px solid #fff" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "180px" }}
                  src={el.img}
                />
                <Card.Body>
                  <Card.Title>{el.title}</Card.Title>
                  <Card.Text>{el.des}</Card.Text>
                  <Button className="text-center w-50" variant="primary">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        <Button className="mx-auto w-50 mt-4" variant="success">
          Learn More
        </Button>
      </Row>
    </Container>
  );
};

export default ServicePage;
