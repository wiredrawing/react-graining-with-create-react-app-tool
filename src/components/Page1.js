import React from "react";
import {Link, BrowserRouter, useHistory} from "react-router-dom"
import ReactDom from "react-dom"



export const Page1 = () => {

  const history = useHistory();

  const onClickDetailA = () => {
    history.push ("/page1/DetailA");
  }
  return (
      <div>
          <h1>Page1:ページです｡</h1>
          <Link to="/page1/detailA">DetailAへ</Link><br/>
          <Link to="/page1/detailB">DetailBへ</Link><br/>

          <br>
          </br>

          <button onClick={onClickDetailA}>DetailA </button>
      </div>

    )

}

