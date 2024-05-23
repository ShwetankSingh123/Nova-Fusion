import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../index.css";
const ScrapCard = ({title,price,image}) => {

    const handelAdd = () => {
        toast.success("Product has been added to cart!");
      };
    

  return (
   <div className="card product">
      <img src={image} alt="" />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
      <h3>{title}</h3>
        <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="price">
        <h4>${price}</h4>
          <button aria-label="Add" type="submit" className="add" onClick={handelAdd}>
            <ion-icon name="add"></ion-icon>
          </button>
          <button
            aria-label="Add"
            type="submit"
            className="add"
           
          >
            <Link to="/scrapyard">
              <i class="bi bi-controller"></i>
            </Link>
          </button>
        </div>
      </div>
      </div>

   
  );
};

export default ScrapCard;
