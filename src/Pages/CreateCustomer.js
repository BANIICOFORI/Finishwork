import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Components/header/Header';
import Footer from '../Components/Footer';

const CreateCustomer = () => {
  return (
    
    <div>
       <div style={{marginBottom:"2px"}}>
                <Header/>
                </div>
      <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="cardheader"><h3 className="text-center font-weight-light my-4"style={{color:"#ffff"}}>Basic Info</h3></div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                        <label for="inputFirstName">Customer Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                        <label for="inputLastName">Contact Person</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                        <label for="inputFirstName">Ghana Card Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                        <label for="inputLastName">Email Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                           


                                            {/* <div className="form-floating mb-">
                                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                            </div> */}
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" type="text" placeholder="Create a password" />
                                                        <label for="inputPassword">Phone Number</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Website Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                

                                         <div className="card-body">
                                         <div className="cardheader"><h3 className="text-center font-weight-light my-4"style={{color:"#ffff"}}>Billing Address</h3></div>
                                         </div>
                                        
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                        <label for="inputFirstName">Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm" type="text" placeholder="Confirm password" />
                                                        <label for="inputPasswordConfirm">Phone Number</label>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                <select class="form-control">
																	<option>Select Country</option>
																	<option value="16">Ghana</option>
																	<option value="17">USA</option>
																	<option value="18">India</option>
																	<option value="19">Nigeria</option>
																	<option value="20">Sudan</option>
																	<option value="21">Canada</option>
																</select>
                                                </div>
                                                <div className="col-md-6">
                                                <select class="form-control mg-b-15">
																	<option>Select State</option>
																	<option value="01">Accra</option>
																	<option value="02">Kumasi </option>
																	<option value="03">New York</option>
																	<option value="04">HO</option>
																	<option value="05">Delih</option>
																	<option value="06">Nioda</option>
																	<option value="07">WA</option>
																	<option value="08">Tamale</option>
																	<option value="09">Koforidua</option>
																	<option value="10">Takwa</option>
																	<option value="11">Dambia</option>
																	<option value="12">Goso</option>
																</select>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                <select class="form-control mg-b-15">
																	<option>Select City</option>
																	<option value="01">Accra</option>
																	<option value="02">Kumasi </option>
																	<option value="03">New York</option>
																	<option value="04">HO</option>
																	<option value="05">Delih</option>
																	<option value="06">Nioda</option>
																	<option value="07">WA</option>
																	<option value="08">Tamale</option>
																	<option value="09">Koforidua</option>
																	<option value="10">Takwa</option>
																	<option value="11">Dambia</option>
																	<option value="12">Goso</option>
																</select>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" type="text" placeholder="Create a password" />
                                                        <label for="inputPassword">Digital Address</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" type="text" placeholder="Create a password" />
                                                        <label for="inputPassword">Postal Address</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" type="text" placeholder="Create a password" />
                                                        <label for="inputPassword">Postal Address</label>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="mt-4 mb-0">
                                                <div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Submit</a></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="card-footer text-center py-3">
                                        <div className="small"><Link to="/customersList">Go back to List</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <Footer/>
        </div>
  )
}

export default CreateCustomer
