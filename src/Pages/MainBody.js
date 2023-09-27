
import React from "react";
import Footer from "../Components/footer/Footer";
import Header from "../Components/header/Header";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Customers from "./Customers";
import { FaUsersLine } from "react-icons/fa";
import MainBodyInner from "./MainBodyInner"

const MainBody = () => {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Header />
      </div>

      <div className="product-new-list-area">
        <div className="container-fluid">
          <div className="section-admin container-fluid">
            <div className="row admin text-center">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="admin-content analysis-progrebar-ctn res-mg-t-15">
                      <h4 className="text-left text-uppercase">
                        <b>Duoe Amount</b>
                      </h4>
                      <div className="row vertical-center-box vertical-center-box-tablet">
                        <div className="col-xs-3 mar-bot-15 text-left">
                          <label className="label bg-green">
                            30%{" "}
                            <i
                              className="fa fa-level-up"
                              aria-hidden="true"
                            ></i>
                          </label>
                        </div>
                        <div className="col-xs-9 cus-gh-hd-pro">
                          <h2 className="text-right no-margin">GH₵10,000</h2>
                        </div>
                      </div>
                      <div className="progress progress-mini">
                        <div
                          style={{ width: "78%;" }}
                          className="progress-bar bg-green"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-3 col-sm-3 col-xs-12"
                    style={{ marginBottom: "1px;" }}
                  >
                    <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                      <h4 className="text-left text-uppercase">
                        <b> Customers</b>
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
                          <h2 className="text-right no-margin">5,000</h2>
                        </div>
                      </div>
                      <div className="progress progress-mini">
                        <div
                          style={{width:"38%;"}}
                          className="progress-bar progress-bar-danger bg-red"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                      <h4 className="text-left text-uppercase">
                        <b>Invoices</b>
                      </h4>
                      <div className="row vertical-center-box vertical-center-box-tablet">
                        <div className="text-left col-xs-3 mar-bot-15">
                          <label className="label bg-blue">
                            50%{""}
                            <i
                              className="fa fa-level-up"
                              aria-hidden="true"
                            ></i>
                          </label>
                        </div>
                        <div className="col-xs-9 cus-gh-hd-pro">
                          <h2 className="text-right no-margin">GH₵70,000</h2>
                        </div>
                      </div>
                      <div className="progress progress-mini">
                        <div
                          style={{width:"60%"}}
                          className="progress-bar bg-blue"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                      <h4 className="text-left text-uppercase">
                        <b>Estemates</b>
                      </h4>
                      <div className="row vertical-center-box vertical-center-box-tablet">
                        <div className="text-left col-xs-3 mar-bot-15">
                          <label className="label bg-purple">
                            80%{" "}
                            <i
                              className="fa fa-level-up"
                              aria-hidden="true"
                            ></i>
                          </label>
                        </div>
                        <div className="col-xs-9 cus-gh-hd-pro">
                          <h2 className="text-right no-margin">GH₵100,000</h2>
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
          <div className="product-sales-area mg-tb-30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                  {/* <Customers /> */}
                  <MainBodyInner />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <div className="white-box analytics-info-cs mg-b-30 res-mg-t-30">
                    <h3 className="box-title">Total Sales</h3>
                    <ul className="list-inline two-part-sp">
                      <li>
                        <div id="sparklinedash"></div>
                      </li>
                      <li className="text-right sp-cn-r">
                        <i className="fa fa-level-up" aria-hidden="true"></i>{" "}
                        <span className="counter sales-sts-ctn">GH₵50,000.00</span>
                      </li>
                    </ul>
                  </div>
                  <div className="white-box analytics-info-cs mg-b-30">
                    <h3 className="box-title">Total Receipts</h3>
                    <ul className="list-inline two-part-sp">
                      <li>
                        <div id="sparklinedash2"></div>
                      </li>
                      <li className="text-right">
                        <i className="fa fa-level-up" aria-hidden="true"></i>{" "}
                        <span className="counter sales-sts-ctn">7469</span>
                      </li>
                    </ul>
                  </div>
                  <div className="white-box analytics-info-cs mg-b-30">
                    <h3 className="box-title">Total Expencess</h3>
                    <ul className="list-inline two-part-sp">
                      <li>
                        <div id="sparklinedash3"></div>
                      </li>
                      <li className="text-right">
                        <i className="fa fa-level-up" aria-hidden="true"></i>{" "}
                        <span className="counter sales-sts-ctn">GH₵300,000.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    //  <FaUsersLine size={20}/>
  );
};

export default MainBody;