import { Alert, Link } from "@mui/material";
import React, { useContext, useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CrudContext from "../context/CrudContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  let navigate = useNavigate();
  const { alertOk } = useContext(CrudContext);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { authLogin } = useAuth();

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    authLogin(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <div>
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
            <Form onSubmit={handlerSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  /*   name="email" */
                  type="email"
                  ref={emailRef}
                  required
                  /*   onChange={handleChange}
                  value={user.email} */
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  /* name="password" */
                  type="password"
                  ref={passwordRef}
                  required
                  /*  onChange={handleChange}
                  value={user.password} */
                ></Form.Control>
              </Form.Group>
              <Button
                type="submit"
                className="w-100 mt-2" /* disabled={waiting} */
              >
                Sign In
              </Button>
            </Form>
            <Button
              onClick={() => navigate(`/`)}
              type="submit"
              style={{ backgroundColor: "#3a51b0" }} /* disabled={waiting} */
            >
              {<ArrowBackIcon></ArrowBackIcon>} Back to Books
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
