import React from "react"
import Demo2 from "../components/Demo2"
import Layout from "../components/Layout"
import { NextPageWithLayout } from "./_app"

const Demo2Page: NextPageWithLayout = () => {
    return (
        <Layout>
            <Demo2 />
        </Layout>
    )
}
export default Demo2Page
