import axios from "axios";
import React, {useState, useEffect} from "react"
import { useHistory, useLocation, useParams } from "react-router-dom";








export const RoomDetail = () => {


  let wsUrl = "ws://localhost";
  let wsPort = 5001;
  let wsRequestUrl = wsUrl + ":" + wsPort;

  const params = useParams();
  const history = useHistory();

  // トークルームやり取り時のwebソケットの取り回し
  const [websocket, setWebsocket] = useState(null);

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
      message: "ここにメッセージが表示されます",
    },
    {
      id:2,
      user: "きむら",
      message: "ここにメッセージが表示されます",
    },
    {
      id:4,
      user: "たなか",
      message: "ここにメッセージが表示されます",
    },
    {
      id:10,
      user: "たなか",
      message: "ここにメッセージが表示されます",
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
        // setTalkList(data.data);
        setMessage("");
        websocket.send(currentRoomId)
        document.getElementById("chat-block").scrollIntoView({ block: "end" });
      });
    });
  };

  // setInterval(() => {
  //   axios.get("http://localhost:8000/api/room/" + currentRoomId).then((data) => {
  //     setTalkList(data.data);
  //   });
  // }, 10000);


  let ws = null;
  useEffect(() => {
    axios.get("http://localhost:8000/api/room/" + currentRoomId).then((data) => {
      // setTalkList(data.data);
      document.getElementById("chat-block").scrollIntoView({ block: "end" });
    });

    // websocketを指定のURLへリクエスト
    ws = new WebSocket(wsRequestUrl + "/api/room/" + currentRoomId);
    ws.connect();
    setWebsocket(ws);
  }, [
    // 監視対象が空の配列のため､初回のみ実行される
  ]);


  useEffect(() => {
    if (websocket !== null) {
      websocket.addEventListener("open", (e) => {
        console.log("executed websocket open event. => ", e);
        // web socketサーバーへのデータ送信
        let seed = {
          auth_info: "クライアント識別用情報",
          room_id: currentRoomId,
        };
        websocket.send(currentRoomId)
      });

      websocket.addEventListener("message", (e) => {
        console.log("==> サーバーから取得した内容", e);
        console.log(JSON.parse(e.data));
        setTalkList(JSON.parse(e.data));
        document.getElementById("chat-block").scrollIntoView({ block: "end" });
      });
    }
  }, [websocket]);



  const backRoomListPage = (e) => {
    history.push("/room");
  }

  return (
    <React.StrictMode>
      <div className="container">
        <div className="row">
          <div className="chat-block" id="chat-block">
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
          </div>
          <div className="row">
            <button type="button" onClick={backRoomListPage} className="form-control btn btn-outline-primary">Room一覧へ戻る</button>
          </div>
        </div>
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
      </div>
    </React.StrictMode>
  )

}