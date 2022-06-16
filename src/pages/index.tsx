import React from "react"
import Demo1 from "../components/Demo1"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "./_app"

const Demo1Page: NextPageWithLayout = () => {
    return (
        <Layout>
            <Demo1 />
        </Layout>
    )
}
export default Demo1Page
