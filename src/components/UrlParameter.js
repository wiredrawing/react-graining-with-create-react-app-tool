import React from "react";
import { useParams, useLocation} from "react-router-dom";
import axios from "axios";

export const UrlParameter = () => {


  // URLに渡されたURLパラメータ
  const {id} = useParams();

  const {search} = useLocation();
  const query = new URLSearchParams(search);

  const [response, setResponse] = React.useState("デフォルト値");
  console.log(search);
  console.log(query);

  React.useEffect(() => {
    // let url = "http://localhost:3000";
    let url = "https://fukuoka.nasse.com";
    axios.get(url).then((data) => {
      console.log(data.data);
      let res = data.data;
      alert(response);
      setResponse((pre) => {
        let temp = res;
        return "<iframe\">" + temp + "</iframe>";
      });
    }).catch((error) => {
      alert(error);
    })
  }, [])


  return (

    <React.Fragment>
      <h2>UrlParameterページです</h2>
      <p>parameter is {id}.</p>
      <p>query parameter is {query.get('name')}</p>

      <div id="response">
        以下,axiosリクエストによるレスポンス
        ここから<div dangerouslySetInnerHTML={{__html: response}}></div>ここまで
      </div>
    </React.Fragment>
  )
}

