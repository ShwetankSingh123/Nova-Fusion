import React from "react";
import { Button } from "react-bootstrap";

const Checkout = () => {
  return (
    <div>
      <div className="container-checkout">
        <form action="#">
          <div className="row">
            <div className="col">
              <h3 className="title">Billing Address</h3>
              <div className="inputBox">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter address"
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div className="flex">
                <div className="inputBox">
                  <label htmlFor="zip">Zip Code:</label>
                  <input
                    type="number"
                    id="zip"
                    placeholder="123 456"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <h3 className="title">Payment</h3>
              <div className="inputBox">
                <label htmlFor="name">Card Accepted:</label>
                 <div className="card-payment">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwZGS06LQiYrucl4l1fkLG6QIPHVMJktWbA&s" width="150px" alt="" />
                 <img src="https://t3.ftcdn.net/jpg/06/16/18/18/240_F_616181843_l404nbV07vMiXDZ1IhWiqZRDpetpuigu.jpg" width="80px" alt="master_logo" />
                 <img src="https://t3.ftcdn.net/jpg/05/60/50/16/360_F_560501607_x7crxqBWbmbgK2k8zOL0gICbIbK9hP6y.webp" alt="credit/debit card" />
                 </div>
              </div>
              <div className="inputBox">
                <label htmlFor="cardName">Name On Card:</label>
                <input
                  type="text"
                  id="cardName"
                  placeholder="Enter card name"
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor="cardNum">Credit Card Number:</label>
                <input
                  type="text"
                  id="cardNum"
                  placeholder="1111-2222-3333-4444"
                  maxLength={19}
                  required
                />
              </div>
              <div className="inputBox">
                <label htmlFor>Exp Month:</label>
                <select name id>
                  <option value>Choose month</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <div className="flex">
                <div className="inputBox">
                  <label htmlFor>Exp Year:</label>
                  <select name id>
                    <option value>Choose Year</option>
                    <option value={2023}>2023</option>
                    <option value={2024}>2024</option>
                    <option value={2025}>2025</option>
                    <option value={2026}>2026</option>
                    <option value={2027}>2027</option>
                  </select>
                </div>
                <div className="inputBox">
                  <label htmlFor="cvv">CVV</label>
                  <input type="number" id="cvv" placeholder={1234} required />
                </div>
              </div>
            </div>
          </div>
          <input
            type="submit"
            defaultValue="Proceed to Checkout"
            className="submit_btn"
            value="Proceed to Checkout"
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
