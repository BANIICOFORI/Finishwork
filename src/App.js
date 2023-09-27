
import './App.css';
import UserDashboard from './Components/UserDashboard';
import Home from './Components/Home';
//import Login from './Pages/Login';
//import Register from './Pages/Register';

import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Customers from './Pages/Customers';
import CustomersList from './Pages/CustomersList';
//import  UpdateCustomers from "./Pages/CreateCustomers"
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateCustomer from './Pages/CreateCustomer';
import Create from "./Components/Create"
import MainBody from './Pages/MainBody';
import Estemates from './Pages/Estemates';





function App() {
  return (
 <>
 {/* <Header/> */}
   <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Login/>}></Route> */}
      <Route path="/" element={<Login/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
        {/* <Route path="/home" element={<UserDashboard/>}></Route> */}
        {/* <Route path="/dashboard" element={<Customers />}></Route> */}
        <Route path="/dashboard" element={<MainBody/>}></Route>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/customersList" element={<CustomersList />}></Route>
       <Route path="/createCustomer" element={<CreateCustomer/>}></Route>
        {/*  <Route path="/updatecustomers" element={<UpdateCustomers/>}></Route>  */}
      </Routes>
   </BrowserRouter>
   </>
  );
}


export default App;
