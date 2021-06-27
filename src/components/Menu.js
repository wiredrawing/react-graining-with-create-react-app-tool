import React from "react";



const Menu = (props) => {


  const [uniqueKey, setUniqueKey] = React.useState(0);
  const [menuList, setMenuList] = React.useState([]);

  const updateMenu= (index, e) => {
    setMenuList ((previous) => {
      // get new object copied using previous object.
      const temp = previous.slice();
      temp[index][e.target.name] = e.target.value;
      return temp;
    });
  }

  const addMenu = () => {
    setUniqueKey((previous) => {
      let temp = previous;
      temp = temp + 1;
      return temp;
    });

    setMenuList ((previous) => {
      const temp = previous.slice();
      temp.push({
        name: "",
        price: "",
        id: uniqueKey,
      });
      return temp;
    });
  }

  const deleteMenu = (index) => {
    const currentNumber = index + 1;
    if (window.confirm(currentNumber + "番目のメニューを削除しますか?")) {
      setMenuList ((previous) => {
        const temp = previous.slice();
        temp.splice(index, 1);
        return temp;
      })
    } else {
      alert("削除をキャンセルしました｡");
    }
  }

  React.useEffect(() => {
    console.log(menuList);
    props.delegateMenuData(props.index, menuList)
  }, [menuList]);

  React.useEffect(() => {
    addMenu();
  }, [])


  return (
    <React.Fragment>
      <div className="row">
        <h4>メニュー情報</h4>
      </div>
      <div className="row">
        {menuList.map((data, index) => {
          return (
            <React.Fragment key={data.id}>
              <div className="col-md-3 pm-6">
                <p>
                  <label>メニュー名</label>
                  <input className="form-control" onInput={(e) => updateMenu(index, e)} type="text" name="name" defaultValue={data.shop_name}></input>
                </p>
                <p>
                  <label>価格</label>
                  <input className="form-control" onInput={(e) => updateMenu(index, e)} type="text" name="price" defaultValue={data.shop_name_sort}></input>
                </p>
                <p onClick={(e) => deleteMenu(index, e)}>このメニューを削除する</p>
              </div>
            </React.Fragment>
          )
        })}
      </div>
      <div className="row">
        <div className="col-6">
          <p className="btn btn-warning" onClick={addMenu}>メニューを追加する</p>
        </div>
      </div>
    </React.Fragment>
  );
}



export default Menu;