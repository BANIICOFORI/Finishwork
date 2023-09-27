import React, { useState } from "react";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
//import loginImg from "../../assets/nisigninimage.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  const navigate = useNavigate();

      const  handleSubmit = (e) =>{
      e.preventDefault ();
      axios.post("http://localhost:3001/login", {email,password})
      .then(res =>{
      if(res.data.Status === "Success"){
          if(res.data.role === "admin"){
              navigate("/dashboard")
          }else{
              navigate("/home")
          }
      }
         
        }).catch(err => console.log(err)) 
      }
  

  return (
    <section className={`container ${styles.auth}`}>
    {/* <div className={styles.img}>
       <img src={loginImg} alt="Login"width="300" />
    </div> */}

       {/* <Card> */}
         <div className={styles.form}>
          <div className="--flex-center">
             <BiLogIn size={35} color="#999" />
           </div>
          <h2>Login</h2>

           <form onSubmit={handleSubmit }>
             <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={(e) => setPasword(e.target.value)}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
          <Link to="/forgot">Forgot Password</Link>

          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Don't have an account? &nbsp;</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      {/* </Card> */}
    </section>
  );
};

export default Login;
