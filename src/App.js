import { lazy, Suspense, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogOut from "./pages/LogOut";
import { firebaseAuth } from "./context/Firebase";
import Login from './pages/Login'
import Checkout from "./pages/Checkout";
import Artist from "./pages/Artist";
// import { User } from "@auth0/auth0-react";
import Buyer from "./pages/Buyer";
import User from "./pages/User";
import Scrapyard from "./pages/Scrapyard";
import Game from "./pages/Games";




const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Product = lazy(() => import("./pages/Product"));
const RegisterPage=lazy(()=>import("./pages/Register"))
const LoginPage = lazy(() => import("./pages/Login"))
const ListingPage= lazy(() => import("./pages/List"))
const BookDetailPage = lazy(() => import("./pages/Detail"));




const  App=()=>{
  const[user,setUser]=useState()

  useEffect(()=>{
    firebaseAuth.onAuthStateChanged((user)=>{
      setUser(user);
    });
  });
  

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
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/artist" element={<Artist/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/buyer" element={<Buyer/>}/>
          <Route path="/scrapyard" element={<Scrapyard/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
        <Footer />
      </Router>
    </Suspense>
   
    </>
  );
}

export default App;
