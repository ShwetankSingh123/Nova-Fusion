import { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogOut from "./pages/LogOut";




const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const RegisterPage=lazy(()=>import("./pages/Register"))
const LoginPage = lazy(() => import("./pages/Login"))
const ListingPage= lazy(() => import("./pages/List"))
const BookDetailPage = lazy(() => import("./pages/Detail"));
const Scrapyard = lazy(() => import("./pages/Scrapyard"));



const  App=()=>{
  

  return (
    <>
   
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/book/list" element={<ListingPage />} />
          <Route path="/book/view/:bookId" element={<BookDetailPage />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/scrapyard" element={<Scrapyard />} />
        </Routes>
        <Footer />
      </Router>
    </Suspense>
   
    </>
  );
}

export default App;
