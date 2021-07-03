// react-router-domがルーティングを担う
import {
  Route,
  // ルーティングを適用する範囲を決定する
  BrowserRouter,
  // Aタグの代替
  Link,
  // URLごとに表示するコンポーネントを切り替えるツール
  Switch
} from "react-router-dom";

// React Hooks
import React, {useState} from 'react';


import {
  Router
} from "./router/Router"


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">HOMEへ</Link><br></br>
        <Link to="/p1">Page1へ</Link><br></br>
        <Link to="/p2">Page2へ</Link><br></br>
      </div>
      <Router/>
    </BrowserRouter>
  );
}
export default App;
