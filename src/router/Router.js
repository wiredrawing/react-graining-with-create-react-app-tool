import React from "react"
import {Switch , Route } from "react-router-dom"
import {Home} from "../components/Home"
import {page1Routes} from "./Page1Routes"
import { page2Routes } from "./Page2Routes"
export const Router = () => {
  return (
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route
      path="/page1"
      render={({match : {url}}) => (
          <Switch>
            {page1Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={url + route.path}>
                  {route.children}
                </Route>
              )
            })}
          </Switch>
        )
      }>
    </Route>
    <Route
      path="/page2"
      render={({match: {url}}) => {
        return (
          <Switch>
            {page2Routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={url + route.path}>
                  {route.children}
                </Route>
              )
            })}
          </Switch>
        )
      }}
      >
    </Route>
  </Switch>
  )
}