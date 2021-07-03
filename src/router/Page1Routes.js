import {
  P1
} from "../components/P1"

import {
  Pd1
} from "../components/Pd1"

import {
  Pd2
} from "../components/Pd2"


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
]