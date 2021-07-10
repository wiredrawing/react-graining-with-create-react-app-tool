import axios from "axios";
import React, {useState, useEffect} from "react"
import { useHistory, useLocation, useParams } from "react-router-dom";








export const RoomDetail = () => {

  const params = useParams();
  const history = useHistory();

  const currentRoomId = params.id;
  let location  = useLocation();
  console.log(location);


  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const registerUserName = (e) => {
    setUserName(e.target.value);
  }

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


  const newMessage = (e) => {
    setMessage (e.target.value);
  }

  const talkNewMessage = (e) => {
    let post = {
      message: message,
      room_id: currentRoomId,
      user_name: userName,
    }
    axios.post("http://localhost:8000/api/room/" + currentRoomId + "/message", post).then((data) => {
      axios.get("http://localhost:8000/api/room/" + currentRoomId).then((data) => {
        setTalkList(data.data);
        setMessage("");
      });
    });
  };

  // setInterval(() => {
  //   axios.get("http://localhost:8000/api/room/" + currentRoomId).then((data) => {
  //     setTalkList(data.data);
  //   });
  // }, 10000);

  useEffect(() => {
    axios.get("http://localhost:8000/api/room/" + currentRoomId).then((data) => {
      setTalkList(data.data);
    });
  }, []);

  const backRoomListPage = (e) => {
    history.push("/room");
  }

  return (
    <React.StrictMode>
      <div className="container">

        <div className="row">
        <div className="col-12">
            <input type="text" onChange={registerUserName} value={userName}></input>
          </div>
          <div className="col-12">
            <input type="text" onChange={newMessage} value={message}></input>
          </div>
          <div className="col-12">
            <button type="button" onClick={talkNewMessage}>発言</button>
          </div>
        </div>
        {talkList.map((talk) => {
          return (
            <div className="row" key={talk.id}>
              <div className="col-lg-3 col-xl-3 col-xxl-3">
                <p>({talk.id}){talk.user}</p>
              </div>
              <div className="col-lg-9 col-xl-9 col-xxl-9">
                <p>{talk.message} from {talk.user_name}</p>
              </div>
            </div>
          )
        })}
        <div className="row">
          <button type="button" onClick={backRoomListPage} className="form-control btn btn-outline-primary">Room一覧へ戻る</button>
        </div>
      </div>
    </React.StrictMode>
  )

}