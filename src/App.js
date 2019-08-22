import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./hoc/Layout/Layout"
import HomePage from "./container/HomePage/Homepage"
import ProductPage from "./container/ProductPage/Productpage"
import Franchise from "./components/Franchise/Franchise"
import ProductVoBanhPage from "./container/ProductVoBanhPage/ProductVoBanhPage"
const app = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/franchise" component={Franchise} />
        <Route path="/product/vobanh" component={ProductVoBanhPage} />
      </Switch>
    </Layout>
  )
}

export default app
