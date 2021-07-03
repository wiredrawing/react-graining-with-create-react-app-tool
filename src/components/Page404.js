import React from "react";
import {Link,useHistory } from "react-router-dom"


export const Page404 = () => {

  const history = useHistory();

  const currentUrl = history.location.pathname;

  console.log(history.location);
  const back = () => {
    history.goBack();
  }
    return (
      <React.Fragment>
        <p>ページがみつかりません</p>
        <p>現在アクセス中URL {currentUrl}</p>
        <Link to="/"></Link>
      </React.Fragment>
    )

}

