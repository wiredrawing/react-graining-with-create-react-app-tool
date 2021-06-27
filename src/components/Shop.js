import React from "react"
import Menu from "./Menu";


// Shop component with function component
const Shop = (props) => {

  const [uniqueKey, setUniqueKey] = React.useState(0);

  const [shopList, setShopList] = React.useState([]);

  const updateShop = (index, event) => {
    setShopList(( pre ) => {
      const temp = [...pre];
      temp[index][event.target.name] = event.target.value;
      return temp;
    });
  }

  const addShop = () => {
    setUniqueKey((pre) => {
      let _uniqueKey = pre;
      _uniqueKey = _uniqueKey + 1;
      return _uniqueKey;
    });
    setShopList((previous) => {
      const temp = previous.slice();
      temp.push({
        shop_name: "",
        shop_name_sort: "",
        address: "",
        phone_number: "",
        email: "",
        memo: "",
        menus: [],
        id: uniqueKey,
      });
      console.log(temp);
      return temp;
    });
  };

  const deleteShop = (index) => {
    if (window.confirm("指定した店舗情報を削除しますか?")) {
      setShopList((pre) => {
        const temp = [...pre];
        temp.splice(index, 1);
        return temp;
      });
    } else {
      alert("削除をキャンセルしました.");
    }
  }

  // initializer addShop();
  React.useEffect(() => {
    console.log(shopList);
    addShop();
  }, []);

  // Below process will execute when object named shop was update by user.
  React.useEffect(() => {
    props.delegateShopData (shopList);
  }, [shopList]);


  const delegateMenuData = (index, menuList) => {
    setShopList((previous) => {
      const temp = previous.slice();
      temp[index].menus = [...menuList];
      return temp;
    });
  }

  // return value written in jsx.
  return (
    <React.Fragment>
      {shopList.map((data, index) => {
        return(
          <div key={data.id} className="row mt-5 mb-5">
            <div className="col-6">
              <p>
                <label>店舗名</label>
                <input className="form-control" onInput={(e) => updateShop(index, e)} type="text" name="shop_name" defaultValue={data.shop_name}></input>
              </p>
              <p>
                <label>店舗名(ひらがな)</label>
                <input className="form-control" onInput={(e) => updateShop(index, e)} type="text" name="shop_name_sort" defaultValue={data.shop_name_sort}></input>
              </p>
              <p>
                <label>住所</label>
                <input className="form-control" onInput={(e) => updateShop(index, e)} type="text" name="address" defaultValue={data.address}></input>
              </p>
              <p>
                <label>電話番号</label>
                <input className="form-control" onInput={(e) => updateShop(index, e)} type="text" name="phone_number" defaultValue={data.phone_number}></input>
              </p>
              <p>
                <label>メールアドレス</label>
                <input className="form-control" onInput={(e) => updateShop(index, e)} type="text" name="email" defaultValue={data.email}></input>
              </p>
            </div>
            <div className="col-6">
              <Menu index={index} delegateMenuData={delegateMenuData} />
            </div>
            {/* <hr/>
            <h3>現在､以下内容を入力しています｡</h3>
            <p>{data.shop_name}</p>
            <p>{data.shop_name_sort}</p>
            <p>{data.address}</p>
            <p>{data.phone_number}</p>
            <p>{data.email}</p>
            <h3>以下は､現在入力中のメニュー情報です｡</h3>
            {data.menus.map((menuData, menuIndex) => {
              return(
                <React.Fragment key={menuIndex}>
                <p>{menuData.name}</p>
                <p>{menuData.price}</p>
              </React.Fragment>
              )
            })} */}
            <div className="row">
              <div className="col-6">
                <p className="btn btn-primary" onClick={() => deleteShop (index)}>この店舗を削除する</p>
              </div>
            </div>
            <hr></hr>
          </div>
        )
      })}
      <div className="row">
        <div className="col-6">
          <p className="btn btn-info" onClick={addShop}>店舗情報を追加する</p>
        </div>
      </div>
    </React.Fragment>
  );
}



export default Shop;