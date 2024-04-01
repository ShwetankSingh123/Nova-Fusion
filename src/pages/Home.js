import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import "../index.css";

import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import BookCard from "../components/Card";
import { useFirebase } from "../context/Firebase";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "fressco" || item.category === "fressco"
  );
  const bestSales = products.filter((item) => item.category === "acrylic");
  useWindowScrollToTop();

  const firebase = useFirebase();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    firebase.listAllBooks().then((books) => setBooks(books.docs));
  }, []);

  return (
    <div className="home-section">
      <Fragment>
        <SliderHome />
        <Wrapper />
        <Section
          title="Big Discount"
          bgColor="#f6f9fc"
          productItems={discoutProducts}
        />
        <Section
          title="New Arrivals"
          bgColor="white"
          productItems={newArrivalData}
        />
        <Section
          title="Best Sales"
          bgColor="#f6f9fc"
          productItems={bestSales}
        />

       
      </Fragment>

      <CardGroup>
          {books &&
            books.map((book) => (
              <BookCard
                link={`/book/view/${book.id}`}
                key={book.id}
                id={book.id}
                {...book.data()}
              />
            ))}
        </CardGroup>
    </div>
  );
};

export default Home;
