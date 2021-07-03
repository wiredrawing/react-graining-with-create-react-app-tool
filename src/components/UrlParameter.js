import React from "react";
import { useParams, useLocation} from "react-router-dom";


export const UrlParameter = () => {


  const {id} = useParams();

  const {search} = useLocation();
  const query = new URLSearchParams(search);
  console.log(search);
  console.log(query);
  return (

    <React.Fragment>
      <h2>UrlParameterページです</h2>
      <p>parameter is {id}.</p>
      <p>query parameter is {query.get('name')}</p>
    </React.Fragment>
  )

}

