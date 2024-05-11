import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useFirebase } from "../context/Firebase";

const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login in a user...");
    const result = await firebase.singinUserWithEmailAndPass(email, password);
    console.log("Successfull", result);
  };

  return (
    // <div className="container mt-5">
    //   <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setEmail(e.target.value)}
    //         value={email}
    //         type="email"
    //         placeholder="Enter email"
    //       />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         onChange={(e) => setPassword(e.target.value)}
    //         value={password}
    //         type="password"
    //         placeholder="Password"
    //       />
    //     </Form.Group>

    //     <Button variant="primary" type="submit">
    //       Login
    //     </Button>
    //   </Form>
    //   <h1 className="mt-5 mb-5">OR</h1>
    //   <Button onClick={firebase.signinWithGoogle} variant="danger">
    //     Signin with Google
    //   </Button>
    // </div>


    <section
    className="h-100 gradient-form"
    style={{ backgroundColor: "#eee" }}
  >
    <div className="container pb-4 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-xl-10">
          <div className="card rounded-3 text-black">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="card-body p-md-5 mx-md-4">
                  <div className="text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style={{ width: 185 }}
                      alt="logo"
                    />
                    <h4 className="mt-1 mb-5 pb-1">Welcome to Nova-Fusion</h4>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <p>Please login to your account</p>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      LogIn
                    </Button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




    );
};

export default LoginPage;