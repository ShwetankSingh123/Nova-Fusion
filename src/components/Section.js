import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
// import '../index.css'

const Section = ({ title, bgColor, productItems }) => {

  return (
    <div >
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItems.map((productItem) => {
            return (
              <ProductCard
                key={productItem.id}
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Row>
      </Container>
      
    </section>
    </div>
  );
};

export default Section;
