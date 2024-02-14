import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import MyWishList from './Pages/MyWishList.js';
import MyShoppingCart from './Pages/MyShoppingCart.js';
import BillingInformation from './Pages/BillingInformation.js';
import Sign_In from "./Component/Sign_In";
import Create_Acct from "./Component/Create_Account";
import Error_Page from "./Component/Error_Page";
import Empty_Cart from "./Component/Empty_Cart";
import User_Settings from "./Component/User_Settings";
import User_Dashboard from "./Component/User_Dashboard";
import Order_Confirm from "./Component/Order_Confirm";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Testing from "./Component/testing";
import Order_Detail from "./Component/Order_Detail";
import OrderHistory from "./Component/OrderHistory";
import Billing_address from "./Pages/Address.js";

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
        <Header />

          <Routes>
            <Route path="" element={<Home />} />
            <Route path="checkout" element={<BillingInformation />} />
            <Route path="wishlist" element={<MyWishList />} />
            <Route path="shoppingcart" element={<MyShoppingCart />} />
            <Route path="sign_in" element={<Sign_In />} />
            <Route path="create_account" element={<Create_Acct />} />
            <Route path="error_404" element={<Error_Page />} />
            <Route path="empty_cart" element={<Empty_Cart />} />
            <Route path="settings" element={<User_Settings />} />
            <Route path="dashboard" element={<User_Dashboard />} />
            <Route path="confirm_order" element={<Order_Confirm />} />
            <Route path="testing" element={<Testing />} />
            <Route path="order-detail/:orderId" element={<Order_Detail />} />
            <Route path="order-history" element={<OrderHistory />} />
            <Route path="billing-address" element={<Billing_address />} />
          </Routes>
        
        <Footer />
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
