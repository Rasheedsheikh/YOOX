import React from "react";

import { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { isAuthAction } from "../../Redux/action";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar3 from "../../Components/Navbar3";
export const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const responseSuccessGoogle = (response) => {
    console.log(response);
    axios.get("http://localhost:3005/users").then(function (res) {
      console.log(res);
      var nw = res.data.filter((e) => {
        if (
          e.first_name == response.Lu.iY &&
          e.last_name == response.Lu.wW &&
          e.email == response.Lu.Bv
        ) {
          return true;
        }
      });
      console.log("nw", nw[0].email);
      if (nw[0].email === response.Lu.Bv) {
        alert(`Succesfully logged in ${response.Lu.iY}`);
      }
    });
  };
  const responseErrorGoogle = (respone) => {
    console.log("err", respone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    axios
      .post("http://localhost:3005/users", user)
      .then((res) => {
        console.log(res.data.email);
        //alert(res.data.message);
        localStorage.setItem("userEmailyoox", JSON.stringify(res.data.email));
        localStorage.setItem("userIdyoox", JSON.stringify(res.data.id));
        let userid = localStorage.getItem("userIdyoox");
        console.log(userid)
        dispatch(isAuthAction(userid));
        navigate("/cart");
      });
    
  };
  return (
    <>
    <Navbar3/>
    <div style={{ textAlign: "center", padding: "10px" }}>
      {console.log("user", user)}
      <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Its great to see you again</h3>
      <div className="firstSpan">
        <h2>Log in here</h2>
        <div className="ggg">
         
        </div>
        <p> with your e-mail address</p>
        <input style={{font:"larger"}}
          className="input"
          type="email"
          name="email"
          value={user.email}
          placeholder="E-MAIL"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          className="input"
          type="password"
          name="password"
          value={user.password}
          placeholder="PASSWORD"
          onChange={handleChange}
        />
        <br />
        <button className="btn" onClick={login}>
          LOG IN
        </button>

        <p>IF YOU HAVEN'T SIGN UP </p>
        <Link to="/signup">REGISTER</Link>
      </div>
    </div>

    <Footer/>
    </>
  );
};
