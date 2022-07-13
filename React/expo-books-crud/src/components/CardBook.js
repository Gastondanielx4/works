import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const CustomizedButton = styled(Button)`
  background-color: #3a51b0;
  margin-right: 1rem;
`;
function CardBook({ name, description, image }) {
  return (
    <Card style={{ width: "20rem", borderRadius: "0" }}>
      <Card.Img variant="top" src={image} style={{ borderRadius: "0" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <CustomizedButton> See More</CustomizedButton>
      </Card.Body>
    </Card>
  );
}

export default CardBook;
