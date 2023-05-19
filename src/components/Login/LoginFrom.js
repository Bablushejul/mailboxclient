import React, { useRef, useState } from "react";

const LoginFrom = () => {

  const [isLogin,setIsLogin]=useState(true)

  const emailInputRef=useRef()

  const passwordInputRef=useRef()

  

const submitHandler=()=>{

  const enteredEmail=emailInputRef.current.value;

  const enteredPassword=passwordInputRef.current.value;

  localStorage.setItem("email",enteredEmail)
  

  let url;
  if (isLogin) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVolZfGhV4B7RviO8NQOjLMUj0J6iWezA";
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVolZfGhV4B7RviO8NQOjLMUj0J6iWezA";
  }
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },})
  // .then((res)=>{console.log(res+"every")})
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let erroMessage = "Authentication failed!";
          if (data && data.error && data.error.message) {
            erroMessage = data.error.message;
          }
          throw new Error(erroMessage);
        });
      }
    })
    .then((data) => {
      // console.log(data.idToken+"heeeloo")
      // console.log(data+"good")
      // console.log(authCtx.onLogin)
      // authCtx.onLogin(data.idToken);
      //history.push("../components//Hero/Hero.js");
    })
    .catch((err) => {
      alert(err.message);
    });
};

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
          <h1>signup</h1>
          </div>
          <label>
            email
            <div>
              <input type="email" />
            </div>
          </label>
          <label>
            password
            <div>
              <input type="password" />
            </div>
          </label>
          <label>
            confirm password
            <div>
              <input type="password" />
            </div>
          </label>
          <label>
            <div>
              <button>signup</button>
            </div>
          </label>
        </div>

        <div>
          <label>
            <div>
              <button>have a account login</button>
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginFrom;
