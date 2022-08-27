import { Alert, Link } from "@mui/material";
import React, { useContext } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CrudContext from "../context/CrudContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const LoginPage = () => {
  let navigate = useNavigate();
  const { alertOk } = useContext(CrudContext);

  const CustomizedButton = styled(Button)`
    background-color: #3a51b0;
    margin: 2rem 0 0 10rem;
  `;

  return (
    <div>
      <CustomizedButton onClick={() => navigate(`/`)}>
        {<ArrowBackIcon></ArrowBackIcon>} Back to Books
      </CustomizedButton>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "40vw", height: "50vh", marginTop: "3rem" }}>
          <Card.Body
            style={{
              height: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h3 className="text-center mb-2">Sign In</h3>
            {/*  {error && <Alert variant="danger">{error}</Alert>} */}
            <Form /* onSubmit={submitHandler} */>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  /* ref={emailRef} */ required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  /*  ref={passwordRef} */
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                className="w-100 mt-2" /* disabled={waiting} */
              >
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
