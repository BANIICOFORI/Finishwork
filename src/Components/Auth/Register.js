import React, { useState } from "react";
import styles from "./auth.module.scss";
import { TiUserAddOutline } from "react-icons/ti";
import loginImg from "../../assets/signupimage.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
  const navigate = useNavigate();

 const  handleSubmit = (e) =>{
  e.preventDefault ();
  axios.post("http://127.0.0.1:3001/register",{name,email,password})
  .then(res=>{
  alert(" User Created successfully") 
  navigate("/")
}).catch(err=>console.log(err))
}
  return (
    <section className={`container ${styles.auth}
    
    `}>
    {/* <div className={styles.img}>
       <img src={loginImg} alt="Login"width="300" />
    </div> */}

      {/* <Card> */}
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value,
                console.log(name)
                )}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value,
                console.log(email)
                )}
            />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              value={password}
              onChange={(e) => setPasword(e.target.value
               
                )}
             
            />
            {/* <input
              type="password"
              placeholder="Confirm Password"
              required
              name="cPassword"
              value={cPassword}
              onChange={handleInputChange}
            /> */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>

          <span className={styles.register}>
            {/* <Link to="/home">Home</Link> */}
            <p> &nbsp; Already have an account? &nbsp;</p>
            <Link to="/">Login</Link>
          </span>
        </div>
      {/* </Card> */}
      </section>
  );
};

export default Register;
