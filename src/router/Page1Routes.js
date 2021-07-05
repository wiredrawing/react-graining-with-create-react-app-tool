import {
  P1
} from "../components/P1"

import {
  Pd1
} from "../components/Pd1"

import {
  Pd2
} from "../components/Pd2"

import {
  UrlParameter
} from "../components/UrlParameter"

import {
  P404
} from "../components/P404";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <P1></P1>
  },
  {
    path: "/detail1",
    exact: false,
    children: <Pd1></Pd1>
  },
  {
    path: "/detail2",
    exact: false,
    children: <Pd2></Pd2>
  },
  // 動的なURLパラメータを取得する
  {
    path: "/urlParameter/:id",
    exact: false,
    children: <UrlParameter></UrlParameter>
  },
  // 特定のURL配下で存在しないページを設置
  {
    path: "*",
    exact: false,
    children: <P404/>
  },
]