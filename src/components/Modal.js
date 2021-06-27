import React from "react";



const Modal = (props) => {

  const displayed = {
    width: "80%",
    display: "none",
    position: "fixed",
    top: "10%",
    left: "5%",
    backgroundColor: "#FEFEFE",
    margin: "5%",
    border: "1px solid #AAA",
    height: "50%",
    overflow: "auto",
  }

  if (props.isDisplayed === true) {
    displayed.display = "block";
  } else {
    displayed.display = "none";
  }

  console.log(props.shopList)

  return (
    <React.Fragment>
      <div className="container"  style={displayed}>
        <div className="row">
          <div className="col">
            <p>以下､入力内容です｡</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {props.shopList.map((data, index) => {
              return (
                <div className="row" key={index}>
                  <h5>入力済み店舗情報</h5>
                  <div className="col-3 mb-5">
                    <input type="text" className="form-control" readOnly="readonly" value={data.shop_name}></input>
                  </div>
                  <div className="col-3 mb-5">
                    <input type="text" className="form-control" readOnly="readonly" value={data.shop_name_sort}></input>
                  </div>
                  <div className="col-3 mb-5">
                    <input type="text" className="form-control" readOnly="readonly" value={data.address}></input>
                  </div>
                  <div className="col-3 mb-5">
                    <input type="text" className="form-control" readOnly="readonly" value={data.phone_number}></input>
                  </div>
                  <div className="col-3 mb-5">
                    <input type="text" className="form-control" readOnly="readonly" value={data.email}></input>
                  </div>
                  <div className="row">
                    <h5>入力済みメニュー情報</h5>
                    {data.menus.map((menu, menuIndex) => {
                      return (
                        <React.Fragment key={menuIndex}>
                          <div className="col-3 mb-5">
                            <input type="text" className="form-control" readOnly="readonly" value={menu.name}></input>
                          </div>
                          <div className="col-3 mb-5">
                            <input type="text" className="form-control" readOnly="readonly" value={menu.price}></input>
                          </div>
                        </React.Fragment>
                        )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default Modal;