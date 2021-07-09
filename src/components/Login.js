import React from "react"
import axios from "axios"


export const Login = () => {



  const [loginInfo, setLoginInfo] = React.useState({
    login_id: "",
    password: "",
  });


  const login = () => {

    if (loginInfo.login_id == "admin" && loginInfo.password == "10574318") {
      alert("ログイン完了");
    } else {
      alert("ログインできません");
    }
  }

  const updateLoginInfo = (e) => {
    let currentName = e.target.name;
    console.log(e);
    setLoginInfo((pre) => {
      let temp = {...pre};
      console.log(temp);
      temp[currentName] = e.target.value;
      return temp;
    });
  }
  return (

    <React.Fragment>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <input onInput={updateLoginInfo} type="form-control" name="login_id" value={loginInfo.login_id}></input>
          </div>
          <div class="col-lg-12">
            <input onInput={updateLoginInfo} type="form-control" name="password" value={loginInfo.password}></input>
          </div>
        </div>
        <div class="row">
          <input onClick={login} type="button" name="loginButton" id="loginButton" value="ログインする"></input>
        </div>
      </div>
    </React.Fragment>
  )
}