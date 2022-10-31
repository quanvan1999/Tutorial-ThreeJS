import React from "react"
import Demo4 from "../components/Demo4"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "./_app"

const Demo3Page: NextPageWithLayout = () => {
  return (
    <Layout>
      <Demo4 />
    </Layout>
  )
}
export default Demo3Page
