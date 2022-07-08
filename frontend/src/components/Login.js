import React, { useEffect, useState } from 'react'
// import "./css/Login2.css"
import axios from 'axios';

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { Modal } from "react-responsive-modal";
const Close = <CloseIcon />;



function Login() {
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


//   create an array of user name and password
const [users,setUsers]=useState([]);
  useEffect(() => {
    axios.get("/api/registers").then((res) => {
      console.log(res)
      setUsers(res.data);

    }).catch((e) => {
      console.log(e);;
    });


  }, [])
 

  const handleLogSubmit = async () => {
    console.log(userName);
    console.log(password);
    
    // const findResult = await registers.find({
    //     userName:userName,
    //     password:password ,
    //   });
    //   console.log(findResult)

    
    
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

      {/* Create Login model */}

      <Button onClick={() => setIsLogModalOpen(true)} style={{backgroundColor:"black", color:"white",marginLeft:"20px"}} >Login</Button>
      <Modal
        open={isLogModalOpen}
        closeIcon={Close}
        onClose={() => setIsLogModalOpen(false)}
        closeOnEsc
        center
        closeOnOverlayClick={false}
        styles={{
          overlay: {
            height: "auto",
          },
        }}
      >
        

        <div className="modal__Field">

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div class="con">
              <header class="head-form">
                <h2>Log In</h2>
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
              </div>
            </div>
          </div>
        </div>
        <div className="modal__buttons">
          <button className="cancle" onClick={() => setIsLogModalOpen(false)}>
            Cancel
          </button>
          <button type="submit" onClick={handleLogSubmit} className="add">
            Login
          </button>
        </div>
      </Modal>
    </div>
  )
}

export default Login