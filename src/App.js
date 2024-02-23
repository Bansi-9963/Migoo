import logo from './logo.svg'
import React , { createContext, useState , useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import MyWishList from './Pages/MyWishList.js'
import MyShoppingCart from './Pages/MyShoppingCart.js'
import BillingInformation from './Pages/BillingInformation.js'
import Sign_In from './Component/Sign_In'
import Create_Acct from './Component/Create_Account'
import Error_Page from './Component/Error_Page'
import Empty_Cart from './Component/Empty_Cart'
import User_Settings from './Component/User_Settings'
import User_Dashboard from './Component/User_Dashboard'
import Order_Confirm from './Component/Order_Confirm'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Testing from './Component/testing'
import Order_Detail from './Component/Order_Detail'
import OrderHistory from './Component/OrderHistory'
import Billing_address from './Pages/Address.js'
import Product_Category from './Component/Product_Category'
import Product_List from './Component/Product_List'
import ProductDetails from './Pages/ProductDetails.js'
import PrivateRoute from './Component/PrivateRoute'

// Create a context for user data
export const UserContext = createContext();

function App () {
  const [user_data, setUser_data] = useState(null);

  useEffect(() => {
    const userDataFromLocalStorage = JSON.parse(localStorage.getItem('credentials'));
    setUser_data(userDataFromLocalStorage);
  }, []);

  return (
    <UserContext.Provider value={user_data}>
      <Router>
        <Header />
        <Routes>
          //sign_in_route
          <Route path='sign_in' element={<Sign_In />} />
          // unprotected routes
          <Route path='/' element={<Home />} />
          <Route path='category' element={<Product_Category />} />
          <Route path='product_list' element={<Product_List />} />
          <Route path='/product_details/:text' element={<ProductDetails />} />
          {/* <Route path='/product_details' element={<ProductDetails />} /> */}
          //protected routes
          <Route
            path='checkout'
            element={<PrivateRoute Component={BillingInformation} />}
          />
          <Route
            path='wishlist'
            element={<PrivateRoute Component={MyWishList} />}
          />
          <Route
            path='cart'
            element={<PrivateRoute Component={MyShoppingCart} />}
          />
          <Route
            path='create_account'
            element={<PrivateRoute Component={Create_Acct} />}
          />
          <Route
            path='error_404'
            element={<PrivateRoute Component={Error_Page} />}
          />
          <Route
            path='empty_cart'
            element={<PrivateRoute Component={Empty_Cart} />}
          />
          <Route
            path='settings'
            element={<PrivateRoute Component={User_Settings} />}
          />
          <Route
            path='dashboard'
            element={<PrivateRoute Component={User_Dashboard} />}
          />
          <Route
            path='confirm_order'
            element={<PrivateRoute Component={Order_Confirm} />}
          />
          <Route
            path='testing'
            element={<PrivateRoute Component={Testing} />}
          />
          <Route
            path='order-detail/:orderId'
            element={<PrivateRoute Component={Order_Detail} />}
          />
          <Route
            path='order-history'
            element={<PrivateRoute Component={OrderHistory} />}
          />
          <Route
            path='billing-address'
            element={<PrivateRoute Component={Billing_address} />}
          />
          <Route
            path='testing'
            element={<PrivateRoute Component={Testing} />}
          />
        </Routes>
        <Footer />
      </Router>
      </UserContext.Provider>
  )
}

export default App
