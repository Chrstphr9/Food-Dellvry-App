import React, { useState } from 'react';
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";  // import the firebase config

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Reset error state before trying auth

        if (currState === "Login") {
            // Sign in user
            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login successful!");
                setShowLogin(false);  // Close popup on successful login
            } catch (err) {
                setError(err.message);
            }
        } else {
            // Sign up user
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Account created successfully!");
                setCurrState("Login");  // Switch to login after signup
            } catch (err) {
                setError(err.message);
            }
        }
    };

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className='login-popup-inputs'>
                    {currState === "Sign Up" && <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />}
                    <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
                
                {error && <p className="error-message">{error}</p>}

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy</p>
                </div>
                {currState === "Login"
                    ? <p>Create A New Account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                    : <p>Already Have An Account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;

// import React, { useState } from 'react'
// import "./LoginPopup.css"
// import { assets} from "../../assets/assets"

// const LoginPopup = ({setShowLogin}) => {

//     const [currState, setCurrState] = useState("Login")

//   return (
//     <div className='login-popup'>
//         <form className="login-popup-container">
//             <div className="login-popup-title">
//                 <h2>{currState}</h2>
//                 <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
//             </div>
//             <div className='login-popup-inputs'>
//                 {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
//                 <input type="email" placeholder='Your Email' required />
//                 <input type="password" placeholder='Password' required />
//                 </div>
//                 <button> {currState=== "Sign Up"? "Create account":"Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required/>
//                     <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy</p>
//                 </div>
//                 {currState=== "Login"
//                 ?<p>Create A New Account? <span onClick={()=>setCurrState("Sign up1")}>Click Here</span></p>
//                 :<p>Already HAve An Account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
//                 }   
//         </form>
//     </div>
//   )
// }

// export default LoginPopup