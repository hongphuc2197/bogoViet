import React from "react"
import { Route, Switch } from "react-router-dom"
import Layout from "./hoc/Layout/Layout"
import HomePage from "./container/HomePage/Homepage"
import ProductPage from "./container/ProductPage/Productpage"
import Franchise from "./components/Franchise/Franchise";
const app = props => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/franchise" exact component={Franchise} />
      </Switch>
    </Layout>
  )
}

export default app
