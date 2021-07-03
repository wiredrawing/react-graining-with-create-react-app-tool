import {Page1} from "../components/Page1"
import {Page1DetailA} from "../components/Page1DetailA"
import {Page1DetailB} from "../components/Page1DetailB"
import {Page404} from "../components/Page404"
export const page1Routes = [



  {
    path:"/",
    exact: true,
    children: <Page1></Page1>
  },
  {
    path:"/detailA",
    exact: true,
    children: <Page1DetailA></Page1DetailA>
  },
  {
    path:"/detailB",
    exact: false,
    children: <Page1DetailB></Page1DetailB>
  },
  {
    path:"*",
    exact: false,
    children: <Page404/>
  },
]