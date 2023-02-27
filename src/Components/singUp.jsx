import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  let [name, setName] = useState("");
  let [mob_number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setPassword2] = useState("");


  let navigate = useNavigate()

  let handleSubmit=(e)=>{
    e.preventDefault()
    let data = {name,mob_number,email,password,confirmPassword}
    if (name && email && (password === confirmPassword) && mob_number) {
        axios.post('http://localhost:2023/signup',data)
        .then((res)=>{
            alert(res.data.message)
            navigate('/')
        })
    } else {
        alert('Invalid Credentials')
    }
  }


  return (
    <div className="signup">
      <h1>Sign Up Page</h1>
      <div className="signUp_form">
        <form action="" className="card m-5" onSubmit={handleSubmit}>
          <div className=" card-body Name">
            <input
              type="text"
              className="form-control"
              placeholder="enter name"
              name="name"
              onChange={(e)=>{setName(e.target.value)}} value={name}
            />
          </div>
          <div className="mobile_number card-body">
            <input
              type="tel"
              maxLength="10"
              minLength="10"
              className="form-control"
              placeholder="enter number"
              name="mob_number"
              onChange={(e)=>{setNumber(e.target.value)}} value={mob_number}
            />
          </div>
          <div className="email card-body">
            <input
              type="email"
              className="form-control"
              placeholder="enter email address"
              name="email"
              onChange={(e)=>{setEmail(e.target.value)}} value={email}
            />
          </div>
          <div className="password card-body">
            <input
              type="password"
              className="form-control"
              placeholder="enter password"
              name="password"
              onChange={(e)=>{setPassword(e.target.value)}} value={password}
            />
          </div>
          <div className="confirm_password card-body">
            <input
              type="password"
              className="form-control"
              placeholder="confirm password"
              name="confirmPassword"
              onChange={(e)=>{setPassword2(e.target.value)}} value={confirmPassword}
            />
          </div>
          <div className="signUp_button my-20">
            <button className="btn btn-primary">Sign Up</button>
          </div>
          <div className="login_button">
            <p>Already a user ?</p>
            <Link to="/" className="btn btn-outline-primary">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
