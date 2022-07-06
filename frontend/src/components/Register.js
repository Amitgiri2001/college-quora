import React, { useState } from 'react'
import "./css/Register.css"
import axios from 'axios';
import QuoraHeader from './QuoraHeader';
function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (userName !== "" && password !== "") {
      const config = {
        "Content-Type": "application/json"
      }
      const body = {
        userName: userName,
        password: password,
      }
      await axios.post("/api/register", body, config).then((res) => {
        console.log(res.data);
        alert("Register Successfully.");
        window.location.href = "/"
      }).catch((e) => {
        console.log(e);
      });
    }
  }

  // hide and show password---
  // Show/hide password onClick of button using Javascript only

  // https://stackoverflow.com/questions/31224651/show-hide-password-onclick-of-button-using-javascript-only

  function show() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'text');
  }

  function hide() {
    var p = document.getElementById('pwd');
    p.setAttribute('type', 'password');
  }

  var pwShown = 0;

  const Shown = () => {

    if (pwShown === 0) {
      pwShown = 1;
      show();
    } else {
      pwShown = 0;
      hide();
    }

  }



  return (
    <div class="overlay">
      <QuoraHeader />
      <form method='post' action='/register'>

        <div class="con">

          <header class="head-form">
            <h2>Sign Up</h2>

            {/* <p>login here using your username and password</p> */}
          </header>

          <br />
          <div class="field-set">


            <span class="input-item">
              <i class="fa fa-user-circle"></i>
            </span>

            <input class="form-input" id="txt-input" type="text" placeholder="@UserName" name='userName' value={userName} onChange={(e) => setUserName(e.target.value)} required />

            <br />



            <span class="input-item">
              <i class="fa fa-key"></i>
            </span>

            <input class="form-input" type="password" placeholder="Password" id="pwd" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />


            <span>
              <i class="fa fa-eye" aria-hidden="true" type="button" id="eye" onClick={Shown}></i>
            </span>


            <br />

            <button class="log-in buttons" type='submit' onClick={handleSubmit}> Register </button>
          </div>


          <div class="other">

            <button class="btn submits buttons sign-up" >Sign Up

              <i class="fa fa-user-plus" aria-hidden="true"></i>
            </button>

          </div>


        </div>

      </form>
    </div>
  )
}

export default Register