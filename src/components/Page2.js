import React from "react";
import {Link} from "react-router-dom"


export const Page2 = () => {

  const [query, setQuery] = React.useState("");

  const updateQuery = ( e) => {
    const param = e.target.value;
    setQuery(param);
  };
  return (
      <div>

      <p>ここにパラメータを入力</p>
      <input onInput={updateQuery} type="text" value={query}></input>
        <Link to="/page2/100">
          URL Parameter
          </Link><br></br>
          <Link to={'/page2/' + query}>
          URL Parameter
          </Link>
      </div>
    )

}

