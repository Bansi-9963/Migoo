import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import MyWishList from './Pages/MyWishList.js';
import MyShoppingCart from './Pages/MyShoppingCart.js';
import BillingInformation from './Pages/BillingInformation.js';
import ProductDetail from './Pages/ProductDetail.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
  
    <BrowserRouter>
    <Routes>
       <Route path="" element={<Home/>} />
        <Route path="checkout" element={<BillingInformation />} />
        <Route path="wishlist" element={<MyWishList/>} />
        <Route path="shoppingcart" element={<MyShoppingCart/>} />
        <Route path="productdetail" element={<ProductDetail/>} />

    </Routes>
  </BrowserRouter>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
