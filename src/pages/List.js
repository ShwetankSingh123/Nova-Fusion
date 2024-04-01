import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useFirebase } from "../context/Firebase";

const ListingPage = () => {
  const firebase = useFirebase();

  const [name, setName] = useState("");
  const [isbnNumber, setIsbnNumber] = useState("");
  const [price, setPrice] = useState("");
  const [coverPic, setCoverPic] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase.handleCreateNewListing(name, isbnNumber, price, coverPic);
  };

  return (
 
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
                      <p>Please Enter Valid Email</p>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Art Name</Form.Label>
                        <Form.Control
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                          type="text"
                          placeholder="Art name"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Enter Art Id</Form.Label>
                        <Form.Control
                          onChange={(e) => setIsbnNumber(e.target.value)}
                          value={isbnNumber}
                          type="text"
                          placeholder="Art ID"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Enter Art Price</Form.Label>
                        <Form.Control
                          onChange={(e) => setPrice(e.target.value)}
                          value={price}
                          type="text"
                          placeholder="Enter Price"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Upload Art</Form.Label>
                        <Form.Control
                          onChange={(e) => setCoverPic(e.target.files[0])}
                          type="file"
                        />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Post
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

export default ListingPage;
