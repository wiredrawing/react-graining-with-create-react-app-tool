
import React, {useState} from 'react';
import Shop  from "./components/Shop"
import Modal from "./components/Modal";
import axios from "axios";
function App() {


  const [count, setCount] = useState(0)
  const [quotient, setQuotient] = useState (0);

  const countUp = () => {
    // setCount((pre) => {
    //   let temp = pre + 1;
    //   return temp;
    // });
    setCount (count + 1);
    if (count % 3 === 0) {
      setQuotient(count / 3);
    } else {
      setQuotient(0);
    }
  }

  const countDown = () => {
    setCount(count - 1);
    if (count % 3 === 0) {
      setQuotient(count / 3);
    } else {
      setQuotient(0);
    }
  };

  const resetButton = () => {
    setCount(0);
  }
  const doubleUp = () => {
    setCount(count * 2);
    if (count % 3 === 0) {
      setQuotient(count / 3);
    } else {
      setQuotient(0);
    }
  }

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
    const apiUri ="http://localhost:8888";
    axios.post(apiUri, shopList).then((data) => {
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <React.Fragment>
      <div>
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
    </React.Fragment>
  );
}

export default App;
