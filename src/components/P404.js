

import {useParams, useLocation} from 'react-router-dom'





export const  P404 = () => {

  const location = useLocation();
  console.log(location);
  const query = new URLSearchParams(location.search);
  alert(query.get("name"));
  console.log(query);
    return (
      <div>{query.get("name")}指定されたページは存在しないようです.</div>
    )
}