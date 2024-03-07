import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../components/context/UserAuthContext";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [rePasswordError, setRePasswordError] = useState(''); 
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError('')
    setPasswordError('')
    setRePasswordError('')

    if(''=== email && '' === password){
      setEmailError('Please enter your email')
      setPasswordError('Please enter your password')
      return
    }

    if(''=== email ){
      setEmailError('Please enter your email')
      return
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }
    if (password !== rePassword) {
      setRePasswordError("Passwords do not match");
      return; // Stop submission if passwords don't match
    }
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    
      <div className={'mainContainer'}>
      
      <div className={'titleContainer'}>
        <div>Signup</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
        type="password"
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
          <input
            type="password" // Use type="password" for masking the input
            value={rePassword}
            placeholder="Re-enter your password here"
            onChange={(ev) => setRePassword(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{rePasswordError}</label>
        </div>

      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={handleSubmit} value={'Sign Up'} />
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Login</Link>
      </div>
    </div>
    
    </>
  );
};

export default Signup;