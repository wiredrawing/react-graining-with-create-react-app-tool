import React from "react";
import {useHistory } from "react-router-dom"


export const Page1DetailA = () => {

  const history = useHistory();

  const back = () => {
    history.goBack();
  }
    return (
      <React.Fragment>
        ああああああああああああああああああああああああ
        <h1>Page1:DetailA</h1>


        <br></br>
        <button onClick={back}>戻る</button>
      </React.Fragment>
    )

}

