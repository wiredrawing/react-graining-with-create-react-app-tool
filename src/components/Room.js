import axios from "axios";
import React, {useEffect} from "react"
import { Route, useHistory } from "react-router-dom";




export const Room = () => {

  const history = useHistory ();


  const [newRoomName, setNewRoomName] = React.useState("ここに､新しいルーム名を入力して下さい｡");


  const [chatRoomList, setChatRoomList] = React.useState([
    {
      room_name: "PHPについて語り合う部屋",
      id: 2342,
    },
    {
      room_name: "React.jsについて語り合う部屋",
      id: 454,
    },
    {
      room_name: "Laravelについて語り合う部屋",
      id: 884,
    },
  ]);


  const makeNewRoom = (e) => {
    let newRoomName = e.target.value;

    setNewRoomName((pre) => {
      let temp = pre;
      temp = newRoomName;
      return temp;
    });
  }



  const registerNewRoomName = (e) => {

    // let nextRoomId = 0;
    // let roomIdList = chatRoomList.map((chat, index) => {
    //   return chat.id
    // });
    // nextRoomId = Math.max.apply(null, roomIdList) + 1;
    axios.post("http://localhost:8000/api/room/", { room_name: newRoomName}).then((data) => {
      console.log(data);
      axios.get("http://localhost:8000/api/room").then((data) => {
        console.log(data);
        setChatRoomList(data.data);
      });
    })



    // setChatRoomList ((pre) => {
    //   let temp = pre.slice();
    //   let t = new Date();
    //   temp.push({
    //     room_name: newRoomName,
    //     id: nextRoomId,
    //   });
    //   return temp;
    // });
  }



  useEffect(() => {
    axios.get("http://localhost:8000/api/room").then((data) => {
      console.log(data);
      setChatRoomList(data.data);
    });
  },[])

  // チャットルームにチェックインする
  const checkInRoom = (roomID) => {

    history.push("/room/" + roomID);
  }

  return (


    <React.StrictMode>

      <div class="row">
        <div class="col-12">
          <p>新しいRoomを作成する</p>
          <input class="form-control" type="text" onInput={makeNewRoom} value={newRoomName}></input>
          <button type="button" onClick={registerNewRoomName}>このRoomを登録する</button>
        </div>
      </div>

        {chatRoomList.map((room, index) => {
          return (
            <div key={room.id} class="row">
              <div class="col-lg-12">
                <div class="title">({room.id}){room.room_name}</div>
              </div>
              <div class="col-lg-12">
                <button onClick={(e) => {checkInRoom(room.id) }} type="button" class="from-control btn btn-outline-info">この部屋に入る</button>
              </div>
            </div>
          );
        })}
    </React.StrictMode>
  );
}