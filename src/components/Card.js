import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/cart/cartSlice";
import "../index.css";

const BookCard = ({ productItem, imageURL, name, price, id }) => {
  const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };

  const firebase = useFirebase();
  // const navigate = useNavigate();

  const [url, setURL] = useState(null);

  useEffect(() => {
    firebase.getImageURL(imageURL).then((url) => setURL(url));
  }, []);

  return (
    <div>
      <Col md={3} sm={5} xs={10} className="product mtop">
        <div class="row">
          <div class="col-sm-6">
            <div className="card" style={{ width: "18rem" }}>
              <img onClick={() => handelClick()} src={url} alt="" />
              <div className="card-body">
                <h5 className="card-title">{id}</h5>
                <div className="product-like">
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="product-details">
                  <h3 onClick={() => handelClick()}>{name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${price}</h4>
                    <button
                      aria-label="Add"
                      type="submit"
                      className="add"
                      onClick={() => handelAdd(BookCard)}
                    >
                      <ion-icon name="add"></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default BookCard;
