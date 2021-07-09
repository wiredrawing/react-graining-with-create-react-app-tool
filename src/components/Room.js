import React from "react"
import { Route, useHistory } from "react-router-dom";




export const Room = () => {

  const history = useHistory ();

  const [chartRoomList, setChatRoomList] = React.useState([
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


  // チャットルームにチェックインする
  const checkInRoom = (roomID) => {

    history.push("/room/" + roomID);
  }

  return (


    <React.StrictMode>
        {chartRoomList.map((room, index) => {
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