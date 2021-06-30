
import {Route, BrowserRouter, Link, Switch} from "react-router-dom";
import React, {useState} from 'react';
import Shop  from "./components/Shop"
import Modal from "./components/Modal";
import axios from "axios";
import {Home } from "./components/Home";
import {Page1} from "./components/Page1";
import {Page2} from "./components/Page2";
import {Page1DetailA} from "./components/Page1DetailA";
import {Page1DetailB} from "./components/Page1DetailB";
function App() {


  // const [count, setCount] = useState(0)
  // const [quotient, setQuotient] = useState (0);

  // const countUp = () => {
  //   // setCount((pre) => {
  //   //   let temp = pre + 1;
  //   //   return temp;
  //   // });
  //   setCount (count + 1);
  //   if (count % 3 === 0) {
  //     setQuotient(count / 3);
  //   } else {
  //     setQuotient(0);
  //   }
  // }

  // const countDown = () => {
  //   setCount(count - 1);
  //   if (count % 3 === 0) {
  //     setQuotient(count / 3);
  //   } else {
  //     setQuotient(0);
  //   }
  // };

  // const resetButton = () => {
  //   setCount(0);
  // }
  // const doubleUp = () => {
  //   setCount(count * 2);
  //   if (count % 3 === 0) {
  //     setQuotient(count / 3);
  //   } else {
  //     setQuotient(0);
  //   }
  // }

  // const [isDisplayed, setIsDisplayed] = React.useState(false);
  // const [ shopList , setShopList] = React.useState([]);

  // const checkButtonStyle = {
  //   position: "fixed",
  //   bottom: "1%",
  //   left: "1%",
  // }

  // const delegateShopData = (shopList) => {
  //   setShopList((previous) => {
  //     return shopList;
  //   });
  // }

  // const switchModal = () => {
  //   setIsDisplayed((pre) => {
  //     return !pre;
  //   });

  //   // 確認ボタンを押す度に､サーバにpostリクエスト
  //   const apiUri ="http://localhost:8888";
  //   axios.post(apiUri, shopList).then((data) => {
  //     console.log(data);
  //   }).catch((error) => {
  //     console.log(error);
  //   });
  // }

  return (
    <BrowserRouter>
        <Link to="/">Home</Link><br/>
        <Link to="/page1">Page1</Link><br/>
        <Link to="/page2">Page2</Link><br/>


        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route
            path="/page1"
            render={() => (
                <Switch>
                  <Route exact path="/page1">
                    <Page1/>
                  </Route>
                  <Route exact path="/page1/detailA">
                    <Page1DetailA/>
                  </Route>
                  <Route exact path="/page1/detailB">
                    <Page1DetailB/>
                  </Route>
                </Switch>
              )
            }>
          </Route>
          <Route path="/page2">
            <Page2></Page2>
          </Route>
        </Switch>
        {/* <div>
          <p> count => {count}</p>
          <p onClick={countUp}>カウントアップ</p>
          <p onClick={countDown}>カウントダウン</p>
          <p onClick={resetButton}>リセット</p>
          <p onClick={doubleUp}>2倍</p>
          <p>商 => {quotient}</p>
        </div>

        <Shop delegateShopData={delegateShopData} />
        <hr/>
        <p>以下は､Appコンポーネント内処理です｡</p>
        <div className="row">
          <div className="col-6">
            <p className="btn btn-danger" style={checkButtonStyle} onClick={switchModal}>確認画面を表示</p>
          </div>
        </div>
        <div className="row">
          <Modal isDisplayed={isDisplayed} shopList={shopList}></Modal>
        </div>
 */}


    </BrowserRouter>
  );
}

export default App;
