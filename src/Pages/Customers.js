import React, { useState } from 'react'
import image1 from "../Components/img/new-product/download.png"
import { Link } from 'react-router-dom';
const Customers = () => {
  const [customers, setCustomers] = useState([{
        Date:"10-09-2023", Customer:"VISION STAR", AMOUNTDUE:"GH¢750",Status:"Piad"
  }]);
  return (
    <div>
      <div class="product-status mg-b-30">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="product-status-wrap">
                            <h4>Products List</h4>
                            <div class="add-product">
                                <Link to="/createCustomer">Add New Customaer</Link>
                            </div>
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>DUE ON</th>
                                    <th>Customare Name</th>
                                    <th>Amoaut Due</th>
                                    <th>Duration</th>
                                    <th>Stock</th>
                                    <th>Setting</th>
                                </tr>
                                <tr>
                                    <td><img src={image1} alt="" /></td>
                                    <td>27-09-2023</td>
                                   
                                    <td>MELCOM GH</td>
                                    <td>22,000.00</td>
                                    <td>14 days</td>
                                    <td>
                                        <button class="pd-setting">10 Days More</button>
                                    </td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                <td><img src={image1} alt="" /></td>
                                    <td>27-09-2023</td>
                                   
                                   <td>MELCOM GH</td>
                                   <td>22,000.00</td>
                                   <td>20 days</td>
                                    <td>
                                        <button class="ps-setting">5 days almost due</button>
                                    </td>
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>
                                 <tr>
                                 <td><img src={image1} alt="" /></td>
                                    <td>27-09-2023</td>
                                   
                                   <td>MELCOM GH</td>
                                   <td>22,000.00</td>
                                   <td>20 days</td>
                                    <td>
                                        <button class="ds-setting">0 days Due send mail</button>
                                    </td>
                                  
                                    <td>
                                        <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                        <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
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
  
    </div>
  )
}

export default Customers

