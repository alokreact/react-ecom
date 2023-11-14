import 'font-awesome/css/font-awesome.min.css';
import Nav from "./Components/Header/nav";
import Login from "./Pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Product from "./Pages/Product";
import AddProduct from "./Pages/Admin/Product/AddProduct";
import ProductListing from "./Pages/ProductListing";
import SearchProduct from "./Pages/SearchProduct";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import MobileLogin from "./Pages/MobileLogin";
import ProductDetails from "./Components/ProductDetails";

const App =()=>{
    return(
      <>
      <Nav/>
      <BrowserRouter>
          <Routes>
            <Route path='/login'  element ={<Login/>}/>
            <Route path='/'  element ={<Landing/>}/>
            <Route path='/product'  element ={<Product/>}/>

            <Route path='/add-product' element={
              <ProtectedRoute>
                <AddProduct/>
              </ProtectedRoute>
            }
            />            
            <Route path='/profile' element ={
              <ProtectedRoute>
                <Profile/>
              </ProtectedRoute>
            }
            />
            
            <Route path='/product-list'  element ={<ProductListing/>}/>
            <Route path='/product-details'  element ={<ProductDetails/>}/>
            <Route path='/search'  element ={<SearchProduct/>}/>
            <Route path='/register'  element ={<Register/>}/>
            <Route path='/cart'  element ={<Cart/>}/>
            <Route path='/mobilelogin'  element ={<MobileLogin/>}/>
        
          </Routes>
      </BrowserRouter>
      </>
    )
 }

 export default App;