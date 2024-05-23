// import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useFirebase } from "../context/Firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { firebaseAuth, db } from "../context/Firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Artist = () => {


 // const firebase = useFirebase();
 const navigate = useNavigate();
 // const [email, setEmail] = useState("");
 // const [password, setPassword] = useState("");

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [fname, setFname] = useState("");
 const [lname, setLname] = useState("");

 const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const user = firebaseAuth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
        });
      }
      alert("User Registered Successfully!!");
      navigate("/");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };


  return (
    <div>
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
                    <form onSubmit={handleRegister}>
                      <h3>Sign Up As Artist</h3>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          // value={email}
                          onChange={(e) => setFname(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          // value={}
                          onChange={(e) => setLname(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Please Enter Valid Email address
                        </Form.Label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email......"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>

                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter password........."
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                        <Form.Text className="text-muted">
                          Password must be 8 characters
                        </Form.Text>
                      </Form.Group>
                      <div className="form-check d-flex justify-content-start mb-4 pb-3">
                        <input
                          className="form-check-input me-3"
                          type="checkbox"
                          defaultValue
                          id="form2Example3c"
                        />
                        <label
                          className="form-check-label text-blue"
                          htmlFor="form2Example3"
                          aria-required
                        >
                          I do accept the{" "}
                          <a href="#!" className="text-red">
                            <u>Terms and Conditions</u>
                          </a>{" "}
                          of your site.
                        </label>
                      </div>

                      <Button
                        variant="primary"
                        type="submit"
                        // onClick={onSubmit}
                      >
                        Sign Up
                      </Button>
                      <p className="forgot-password text-right">
                        Already registered <a href="/login">Login</a>
                      </p>
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
    </div>
  )
}

export default Artist;