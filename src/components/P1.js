import {
  Link
} from "react-router-dom"

export const P1 = () => {



  return (
    <div>
      <h1>ここはPage1です 以下リンクをクリックして詳細へ</h1>
      <Link to="/p1/detail1">Detail1へ</Link><br/>
      <Link to="/p1/detail2">Detail2へ</Link>
      <Link to="/p1/urlParameter/100">Urlパラメータを取得する</Link>
    </div>
  )
}