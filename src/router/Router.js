import {
  Route,
  Switch
}  from "react-router-dom"

// 各種ページ要素をimport
import {H} from "../components/H"
import {P1} from "../components/P1"
import {P2} from "../components/P2"
// P1詳細ページ
import {Pd1} from "../components/Pd1"
import {Pd2} from "../components/Pd2"

// 404ページの表示
import {P404} from "../components/P404";
import {page1Routes} from "./Page1Routes"
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <H></H>
      </Route>

      <Route path="/p1" render={ (props) => {
        return (
          <Switch>
            {page1Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={props.match.url + route.path}>
                  {route.children}
                </Route>
              )
            })}
          </Switch>
        )
      }}>
      </Route>

      <Route path="/p2">
        <P2></P2>
      </Route>

      <Route path="*">
        <P404></P404>
      </Route>

    </Switch>
  )
};