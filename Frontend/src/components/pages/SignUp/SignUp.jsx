import React, { useContext, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
 import { auth } from "../../../firebase";  // import the firebase config
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';



const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    
    const handleLogin = (e)=> {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        // Signed up 
        const user = userCredential.user;  
        dispatch({type:"LOGIN", payload:user})
        navigate("/")
        // ...
      })
      .catch((error) => {
        setError(true)
        // ..
      });
    }

  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">cinematic gems at your fingertips! Our app crafts personalized movie suggestions for an immersive and tailored entertainment experience. Elevate your film journey with us</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required onChange={e=> setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter Your Password" className="input input-bordered" required onChange={e=> setPassword(e.target.value)} />
          <label className="label">
            <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Sign Up</button>
          {error && <p className="text-red-500">Something went wrong</p>}
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account? <Link to="/login" className="link link-hover">Login here</Link>.
          </p>
        </div>
      </form>
    </div>
  </div> 
</div>
  )
}

export default Login
// import React, { useState } from 'react';
// import "./LoginPopup.css";
// import { assets } from "../../../assets/assets";
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../firebase";  // import the firebase config
// import { Link } from 'react-router-dom';

// const LoginPopup = ({ setShowLogin }) => {
//     const [currState, setCurrState] = useState("Login");
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [error, setError] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');  // Reset error state before trying auth

//         if (currState === "Login") {
//             // Sign in user
//             try {
//                 await signInWithEmailAndPassword(auth, email, password);
//                 alert("Login successful!");
//                 setShowLogin(false);  // Close popup on successful login
//             } catch (err) {
//                 setError(err.message);
//             }
//         } else {
//             // Sign up user
//             try {
//                 await createUserWithEmailAndPassword(auth, email, password);
//                 alert("Account created successfully!");
//                 setCurrState("Login");  // Switch to login after signup
//             } catch (err) {
//                 setError(err.message);
//             }
//         }
//     };

//     return (
//         <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <h1 className="text-5xl font-bold">Sign Up now!</h1>
//             <p className="py-6">cinematic gems at your fingertips! Our app crafts personalized movie suggestions for an immersive and tailored entertainment experience. Elevate your film journey with us</p>
//           </div>
//           <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form className="card-body" onSubmit={handleLogin}>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input type="email" placeholder="Enter Your Email" className="input input-bordered" required onChange={e=> setEmail(e.target.value)}/>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input type="password" placeholder="Enter Your Password" className="input input-bordered" required onChange={e=> setPassword(e.target.value)} />
//                 <label className="label">
//                   <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-primary">Sign Up</button>
//                 {error && <p className="text-red-500">Something went wrong</p>}
//               </div>
//               <div className="text-center mt-4">
//                 <p className="text-sm">
//                   Already have an account? <Link to="/login" className="link link-hover">Login here</Link>.
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div> 
//       </div>
//     );
// };

// export default LoginPopup;

// // import React, { useState } from 'react'
// // import "./LoginPopup.css"
// // import { assets} from "../../assets/assets"

// // const LoginPopup = ({setShowLogin}) => {

// //     const [currState, setCurrState] = useState("Login")

// //   return (
// //     <div className='login-popup'>
// //         <form className="login-popup-container">
// //             <div className="login-popup-title">
// //                 <h2>{currState}</h2>
// //                 <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
// //             </div>
// //             <div className='login-popup-inputs'>
// //                 {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
// //                 <input type="email" placeholder='Your Email' required />
// //                 <input type="password" placeholder='Password' required />
// //                 </div>
// //                 <button> {currState=== "Sign Up"? "Create account":"Login"}</button>
// //                 <div className="login-popup-condition">
// //                     <input type="checkbox" required/>
// //                     <p>By Continuing, I Agree To The Terms Of Use & Privacy Policy</p>
// //                 </div>
// //                 {currState=== "Login"
// //                 ?<p>Create A New Account? <span onClick={()=>setCurrState("Sign up1")}>Click Here</span></p>
// //                 :<p>Already HAve An Account? <span onClick={()=>setCurrState("Login")}>Login Here</span></p>
// //                 }   
// //         </form>
// //     </div>
// //   )
// // }

// // export default LoginPopup