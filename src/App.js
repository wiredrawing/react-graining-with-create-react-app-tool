
import React from 'react';
import Shop  from "./components/Shop"
import Modal from "./components/Modal";
import axios from "axios";
function App() {

  const [isDisplayed, setIsDisplayed] = React.useState(false);
  const [ shopList , setShopList] = React.useState([]);

  const checkButtonStyle = {
    position: "fixed",
    bottom: "1%",
    left: "1%",
  }

  const delegateShopData = (shopList) => {
    setShopList((previous) => {
      return shopList;
    });
  }

  const switchModal = () => {
    setIsDisplayed((pre) => {
      return !pre;
    });

    // 確認ボタンを押す度に､サーバにpostリクエスト
    axios.post("http://localhost:8888", shopList).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
