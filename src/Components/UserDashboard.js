import React from 'react'

import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (

<div>
      {/* <div className="left-sidebar-pro">
             <UserSidebar/>
      </div>
   
      <div className="all-content-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="logo-pro">
                <a href="index.html">
                  <img className="main-logo" src="" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-advance-area">
          <div className="header-top-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="header-top-wraper">
                    <div className="row">
                      <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                        <div className="menu-switcher-pro">
                          <button
                            type="button"
                            id="sidebarCollapse"
                            className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn"
                          >
                            <i className="icon nalika-menu-task"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                        <div className="header-top-menu tabl-d-n hd-search-rp">
                          <div className="breadcome-heading">
                            <form role="search" className="">
                              <input
                                type="text"
                                placeholder="Search..."
                                className="form-control"
                              />
                              <a href="">
                                <i className="fa fa-search"></i>
                              </a>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div className="header-right-info">
                          <ul className="nav navbar-nav mai-top-nav header-right-menu">
                            <li className="nav-item">
                              <a
                                href="#"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                <i className="icon nalika-user"></i>
                                <span className="admin-name">
                                  Nicholas Boadi Ofori
                                </span>
                                <i className="icon nalika-down-arrow nalika-angle-dw"></i>
                              </a>
                              <ul
                                role="menu"
                                className="dropdown-header-top author-log dropdown-menu animated zoomIn"
                              >
                                <li>
                                  <a href="register.html">
                                    <span className="icon nalika-home author-log-ic"></span>{" "}
                                    Register
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="icon nalika-user author-log-ic"></span>{" "}
                                    My Profile
                                  </a>
                                </li>
                                <li>
                                  <a href="lock.html">
                                    <span className="icon nalika-diamond author-log-ic"></span>{" "}
                                    Lock
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span className="icon nalika-settings author-log-ic"></span>{" "}
                                    Settings
                                  </a>
                                </li>
                                <li>
                                  <Link to="/">
                                    <span className="icon nalika-unlocked author-log-ic"></span>{" "}
                                    Log Out
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="nav-item nav-setting-open">
                              <a
                                href="#"
                                data-toggle="dropdown"
                                role="button"
                                aria-expanded="false"
                                className="nav-link dropdown-toggle"
                              >
                                <i className="icon nalika-menu-task"></i>
                              </a>

                              <div
                                role="menu"
                                className="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn"
                              >
                                <ul className="nav nav-tabs custon-set-tab">
                                  <li className="active">
                                    <a data-toggle="tab" href="#Notes">
                                      News
                                    </a>
                                  </li>
                                  <li>
                                    <a data-toggle="tab" href="#Projects">
                                      Activity
                                    </a>
                                  </li>
                                  <li>
                                    <a data-toggle="tab" href="#Settings">
                                      Settings
                                    </a>
                                  </li>
                                </ul>

                                <div className="tab-content custom-bdr-nt">
                                  <div id="Settings" className="tab-pane fade">
                                    <div className="setting-panel-area">
                                      <div className="note-heading-indicate">
                                        <h2>
                                          <i className="icon nalika-gear"></i>{" "}
                                          Settings Panel
                                        </h2>
                                        <p>
                                          {" "}
                                          You have 20 Settings. 5 not completed.
                                        </p>
                                      </div>
                                      <ul className="setting-panel-list">
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Show notifications</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    className="onoffswitch-checkbox"
                                                    id="example"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Disable Chat</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    className="onoffswitch-checkbox"
                                                    id="example3"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example3"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Enable history</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    className="onoffswitch-checkbox"
                                                    id="example4"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example4"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Show charts</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    className="onoffswitch-checkbox"
                                                    id="example7"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example7"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Update everyday</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    checked=""
                                                    className="onoffswitch-checkbox"
                                                    id="example2"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example2"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Global search</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    checked=""
                                                    className="onoffswitch-checkbox"
                                                    id="example6"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example6"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                        <li>
                                          <div className="checkbox-setting-pro">
                                            <div className="checkbox-title-pro">
                                              <h2>Offline users</h2>
                                              <div className="ts-custom-check">
                                                <div className="onoffswitch">
                                                  <input
                                                    type="checkbox"
                                                    name="collapsemenu"
                                                    checked=""
                                                    className="onoffswitch-checkbox"
                                                    id="example5"
                                                  />
                                                  <label
                                                    className="onoffswitch-label"
                                                    for="example5"
                                                  >
                                                    <span className="onoffswitch-inner"></span>
                                                    <span className="onoffswitch-switch"></span>
                                                  </label>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="breadcome-area">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="breadcome-list">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="breadcomb-wp">
                          <div className="breadcomb-icon">
                            <i className="icon nalika-home"></i>
                          </div>
                          <div className="breadcomb-ctn">
                            <h2>User Dashboard</h2>
                            <p>
                              Welcome to {""}
                              <span className="bread-ntd">Payment Tracker</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="breadcomb-report">
                          <button
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Download Report"
                            className="btn"
                          >
                            <i className="icon nalika-download"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-admin container-fluid">
          <div className="row admin text-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="admin-content analysis-progrebar-ctn res-mg-t-15">
                    <h4 className="text-left text-uppercase">
                      <b>Total Amount Due</b>
                    </h4>
                    <div className="row vertical-center-box vertical-center-box-tablet">
                      <div className="col-xs-3 mar-bot-15 text-left">
                        <label className="label bg-green">
                          30%{" "}
                          <i className="fa fa-level-up" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div className="col-xs-9 cus-gh-hd-pro">
                        <h2 className="text-right no-margin">GH₵10,000</h2>
                      </div>
                    </div>
                    <div className="progress progress-mini">
                      <div
                        style={{ width: " 78%;" }}
                        className="progress-bar bg-green"
                      ></div>
                    </div>
                  </div>
                </div> */}
                {/* <div
                  className="col-lg-3 col-md-3 col-sm-3 col-xs-12"
                  style={{ marginBottom: "1px;" }}
                >
                  <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                    <h4 className="text-left text-uppercase">
                      <b>Customers</b>
                    </h4>
                    <div className="row vertical-center-box vertical-center-box-tablet">
                      <div className="text-left col-xs-3 mar-bot-15">
                        <label className="label bg-red">
                          15%{" "}
                          <i
                            className="fa fa-level-down"
                            aria-hidden="true"
                          ></i>
                        </label>
                      </div>
                      <div className="col-xs-9 cus-gh-hd-pro">
                        <h2 className="text-right no-margin">501</h2>
                      </div>
                    </div>
                    <div className="progress progress-mini">
                      <div
                        style={{ width: "38%;" }}
                        className="progress-bar progress-bar-danger bg-red"
                      ></div>
                    </div>
                  </div> 
                </div>*/}
                {/* <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                    <h4 className="text-left text-uppercase">
                      <b>Invoices</b>
                    </h4>
                    <div className="row vertical-center-box vertical-center-box-tablet">
                      <div className="text-left col-xs-3 mar-bot-15">
                        <label className="label bg-blue">
                          50%{" "}
                          <i className="fa fa-level-up" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div className="col-xs-9 cus-gh-hd-pro">
                        <h2 className="text-right no-margin">43</h2>
                      </div>
                    </div>
                    <div className="progress progress-mini">
                      <div
                        style={{ width: " 60%;" }}
                        className="progress-bar bg-blue"
                      ></div>
                    </div>
                  </div>
                </div> *
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                    <h4 className="text-left text-uppercase">
                      <b>Estemates</b>
                    </h4>
                    <div className="row vertical-center-box vertical-center-box-tablet">
                      <div className="text-left col-xs-3 mar-bot-15">
                        <label className="label bg-purple">
                          80%{" "}
                          <i className="fa fa-level-up" aria-hidden="true"></i>
                        </label>
                      </div>
                      <div className="col-xs-9 cus-gh-hd-pro">
                        <h2 className="text-right no-margin">34</h2>
                      </div>
                    </div>
                    <div className="progress progress-mini">
                      <div
                        style={{ width: " 60%;" }}
                        className="progress-bar bg-purple"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-sales-area mg-tb-30">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="product-sales-area mg-tb-30">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="product-status mg-b-30">
                        <div class="container-fluid">
                          <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <div class="product-status-wrap">
                                <h4>Total Amount Due List</h4>
                                <div class="add-product">
                                  <a href="product-edit.html">Add Payment</a>
                                </div>
                                <table>
                                  <tr>
                                    <th>DUE ON</th>
                                    <th>CUSTOMER</th>
                                    <th>AMOUNT DUE</th>
                                    <th>STATUS</th>
                                  </tr>
                                  <tr>
                                    <td>03-09-2023</td>
                                    <td>VISION STAR</td>
                                    <button class="ps-setting">GH¢750</button>
                                    {/* <td>
                                      <button
                                        data-toggle="tooltip"
                                        title="Edit"
                                        class="pd-setting-ed"
                                      >
                                        <i
                                          class="fa fa-pencil-square-o"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                      <button
                                        data-toggle="tooltip"
                                        title="Trash"
                                        class="pd-setting-ed"
                                      >
                                        <i
                                          class="fa fa-trash-o"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </td> 
                                     <td>
                                        <button class="pd-setting">Paid</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>03-09-2023</td>
                                    <td>NEAT FOOD</td>
                                    <button class="ps-setting">GH¢750</button>
                                    {/* <td>
                                      <button
                                        data-toggle="tooltip"
                                        title="Edit"
                                        class="pd-setting-ed"
                                      >
                                        <i
                                          class="fa fa-pencil-square-o"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                      <button
                                        data-toggle="tooltip"
                                        title="Trash"
                                        class="pd-setting-ed"
                                      >
                                        <i
                                          class="fa fa-trash-o"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </td> 
                                     <td>
                                        <button class="ps-setting">About to Due</button>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>03-09-2023</td>
                                    <td>BEE'S FOOD</td>
                                    <button class="ps-setting">GH¢750</button>
                                    {/* <td>
                                      <button
                                        data-toggle="tooltip"
                                        title="Edit"
                                        class="pd-setting-ed"
                                      >
                                        <i
                                          class="fa fa-pencil-square-o"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                      <button
                                        data-toggle="tooltip"
                                        title="Trash"
                                        class="pd-setting-ed"
                                      >
                                        <i
                                          class="fa fa-trash-o"
                                          aria-hidden="true"
                                        ></i>
                                      </button>
                                    </td> 
                                      <td>
                                        <button class="ds-setting">Over Due</button>
                                    </td>
                                  </tr>
                                </table>
                                <div class="custom-pagination">
                                  <ul class="pagination">
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        Previous
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        1
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        2
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        3
                                      </a>
                                    </li>
                                    <li class="page-item">
                                      <a class="page-link" href="#">
                                        Next
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright-area">
          <Footer />
                                  </div>*/}
      </div>

  );
};

export default Home
