import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Pages/Homepage.css";
//import Footer from '../components/Footer/Footer'
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Homepage() {
  return (
    <>
      <div style={{ marginBottom: "10px" }}>
        <Header />
      </div>

      <div
        style={{ backgroundColor: "#7cd69d", height: "550px" }}
        className="row"
      >
        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          <p
            style={{
              fontSize: "80px",
              fontFamily: "Roboto",
              alignItems: "center",
              marginBottom: "3p",
            }}
          >
            B <span style={{ color: "#eb4034" }}>&</span> B
          </p>
        </div>

        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          <p
            style={{
              fontSize: "20px",
              fontFamily: "sans-serif",
              alignItems: "center",
              color: "white",
            }}
          >
            <span style={{ color: "#a1165c", fontSize: "30px" }}>
              {" "}
              GET ALL YOUR BUSINESS{" "}
            </span>{" "}
            <i>in one place</i>
          </p>
        </div>
        <div className="row" style={{ marginBottom: "35px" }}>
          <div className="col-md-4">
            <img
              src="assets/6963.jpg"
              alt=""
              style={{ width: "350px", height: "300px", borderRadius: "7px" }}
              className="zoom plogo"
            />
            {/* <div > */}
            <button
              style={{
                backgroundColor: "#f26113",
                color: "white",
                width: "200px",
                height: "35px",
                marginTop: "10px",
                borderRadius: "7px",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: "12px",
              }}
            >
              WORK EVERYWHERE
            </button>
            {/* </div> */}
          </div>
          <div className="col-md-4">
            <img
              src="assets/5482.jpg"
              alt=""
              style={{ width: "400px", height: "300px", borderRadius: "7px" }}
              className="zoom plogo"
            />

            <button
              style={{
                backgroundColor: "#e6cf25",
                color: "white",
                width: "200px",
                height: "35px",
                marginTop: "10px",
                borderRadius: "7px",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: "12px",
              }}
            >
              CUSTOMER CARE
            </button>
          </div>
          <div className="col-md-4">
            <img
              src="assets/6155818.jpg"
              alt=""
              style={{ width: "350px", height: "300px", borderRadius: "7px" }}
              className="zoom plogo"
            />

            <button
              style={{
                backgroundColor: "#0000ff",
                color: "white",
                width: "200px",
                height: "35px",
                marginTop: "10px",
                borderRadius: "7px",
                textAlign: "center",
                fontFamily: "sans-serif",
                fontSize: "12px",
              }}
            >
              TRACK PAYMENTS
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
