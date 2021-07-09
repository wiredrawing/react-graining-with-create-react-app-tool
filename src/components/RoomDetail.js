import React, {useState} from "react"
import { useHistory } from "react-router-dom";








export const RoomDetail = () => {

  const [talkList, setTalkList] = useState([
    {
      id:1,
      user: "やまだ",
      message: "ああああああああああああああああ",
    },
    {
      id:2,
      user: "きむら",
      message: "いいいいいいいいいいいいいいいい",
    },
    {
      id:4,
      user: "たなか",
      message: "うううううううううううううううう",
    },
    {
      id:10,
      user: "たなか",
      message: "ええええええええええええええええ",
    },
  ]);


  return (
    <React.StrictMode>
      <div class="container">
        {talkList.map((talk) => {
          return (
            <div class="row" key={talk.id}>
              <div class="col-lg-3 col-xl-3 col-xxl-3">
                <p>({talk.id}){talk.user}</p>
              </div>
              <div class="col-lg-9 col-xl-9 col-xxl-9">
                <p>{talk.message}</p>
              </div>
            </div>
          )
        })}

      </div>
    </React.StrictMode>
  )

}