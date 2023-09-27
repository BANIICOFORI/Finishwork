
import React from "react";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Customers from "./Customers";
import { FaUsersLine } from "react-icons/fa";

const MainBody = () => {
  return (
    <>
          <div class="product-status mg-b-30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <h4>Customers</h4>
                            <div class="add-product">
                                {/* <a href="product-edit.html"></a> */}
                            </div>
                            <table>
                                <tr>
                                    {/* <th>Image</th> */}
                                    <th>DUE ON</th>
                                    <th>Customare Name</th>
                                    <th>Amoaut Due</th>
                                    <th>Duration</th>
                                    <th>Stock</th>
                                 
                                  
                                </tr>
                                <tr>
                                  
                                    <td>27-09-2023</td>
                                   
                                    <td>MELCOM GH</td>
                                    <td>22,000.00</td>
                                    <td>14 days</td>
                                    <td>
                                        <button class="pd-setting">10 Days More</button>
                                    </td>
                                  
                                </tr>
                                <tr>
                                <td>27-09-2023</td>
                                   
                                   <td>MELCOM GH</td>
                                   <td>22,000.00</td>
                                   <td>20 days</td>
                                    <td>
                                        <button class="ps-setting">5 days almost due</button>
                                    </td>
                                </tr>
                                 <tr>
                                 <td>27-09-2023</td>
                                   
                                   <td>MELCOM GH</td>
                                   <td>22,000.00</td>
                                   <td>20 days</td>
                                    <td>
                                        <button class="ds-setting">0 days Due send mail</button>
                                    </td>
                                  
                                 
                                </tr>
                              
                            </table>
                            <div style={{marginBottom:"85px"}}>

                            </div>
                            <div class="custom-pagination">
								<ul class="pagination">
									<li class="page-item"><a class="page-link" href="#">Previous</a></li>
									<li class="page-item"><a class="page-link" href="#">1</a></li>
									<li class="page-item"><a class="page-link" href="#">2</a></li>
									<li class="page-item"><a class="page-link" href="#">3</a></li>
									<li class="page-item"><a class="page-link" href="#">Next</a></li>
								</ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>
  );
};

export default MainBody;