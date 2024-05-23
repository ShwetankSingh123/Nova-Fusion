import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

const navigate =useNavigate();


  return (
    <div>
      <section
        className="w-100 px-4 py-5"
        style={{ backgroundColor: "#9de2ff", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOZW0_OyKI0zr82enQQ5DTMRyANYOW41bNQ&s"
                      alt=""
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Register Now</h5>
                    <p className="mb-2 pb-1">As a Artist</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                    <p className="mb-2 pb-1">Welcome to Nova-Fusion</p>
                    </div>
                    <div className="d-flex pt-1">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary me-1 flex-grow-1"
                        onClick={()=>navigate("/artist")}
                      >
                        Sign Up
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary flex-grow-1"
                        onClick={()=>navigate("/login")}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-100 px-4 py-5"
        style={{ backgroundColor: "#e9e5ee", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5m2iAQs8GsRUYQaRMql0Oc9gneec0jze5Q&s"
                      width="100px"
                      alt=""
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Register Now</h5>
                    <p className="mb-2 pb-1">As a Buyer</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                    <p className="mb-2 pb-1">Welcome to Nova-Fusion</p>
                    </div>
                    <div className="d-flex pt-1">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary me-1 flex-grow-1"
                        onClick={()=>navigate("/buyer")}
                      >
                        Sign Up
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary flex-grow-1"
                        onClick={()=>navigate("/login")}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="w-100 px-4 py-5"
        style={{ backgroundColor: "#9de2ff", borderRadius: ".5rem .5rem 0 0" }}
      >
        <div className="row d-flex justify-content-center">
          <div className="col col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-4">
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZxJRzN4-7Vc_cyrHayuKb7ghnp_9DWRcqbQ&ss"
                      alt="Generic placeholder"
                      className="img-fluid"
                      style={{ width: 180, borderRadius: 10 }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">Register Now</h5>
                    <p className="mb-2 pb-1">As a User</p>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                    <p className="mb-2 pb-1">Welcome to Nova-Fusion</p>
                    </div>
                    <div className="d-flex pt-1">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary me-1 flex-grow-1"
                        onClick={()=>navigate("/user")}
                      >
                        Sign Up
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary flex-grow-1"
                        onClick={()=>navigate("/login")}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
