import React from "react"
import Demo3 from "../components/Demo3"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "./_app"

const Demo3Page: NextPageWithLayout = () => {
    return (
        <Layout>
            <Demo3 />
        </Layout>
    )
}
export default Demo3Page
