import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";


const Register = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPasword] = useState();
    const navigate = useNavigate();

const  handleSubmit = (e) =>{
    e.preventDefault ();
    axios.post("http://localhost:3001/register", {name,email,password})
    .then(res=>{
    alert(" User Created successfully") 
    navigate("/")
}).catch(err=>console.log(err))
}
  return (
    <>
 
{/* <!-- Sing in  Form --> */}
<section className="all-content-wrapper signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Sign up</h2>
                        <form class="register-form" onSubmit={handleSubmit}>
                            <div class="form-group">
								<label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
								<input type="text" name="name" id="name" placeholder="Your Name"
                                  onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"
                                  onChange={(e) => setPasword(e.target.value)}
                                />
                            </div>
                            {/* <div class="form-group">
                                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"
                                  onChange={(e) => setName(e.target.value)}
                                />
                            </div> */}
                            <div class="form-group">
                                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term"
                                
                                
                                />
                                <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                            </div>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Register"
                                
                                />
                            </div>
                        </form>
                    </div> 
                    <div class="signup-image">
                        <figure><img src="Topublic/loginimages/signupimage.jpg" alt="sing up image"/></figure>
                        <Link to="/" class="signup-image-link">I am already member</Link>
                    </div>
                </div>
            </div>
        </section>

 
            </>
  )
}
export default Register
