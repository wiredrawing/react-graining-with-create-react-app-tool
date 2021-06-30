import React from "react";
import {Link, BrowserRouter} from "react-router-dom"
import ReactDom from "react-dom"



export const Page1 = () => {

    return (
      <div>
          <h1>Page1:ページです｡</h1>
          <Link to="/page1/detailA">DetailAへ</Link><br/>
          <Link to="/page1/detailB">DetailBへ</Link><br/>
      </div>

    )

}

