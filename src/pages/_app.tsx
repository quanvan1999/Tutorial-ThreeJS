import React, { Fragment } from "react"
import { NextPage } from "next"
import type { AppProps } from "next/app"

import "../style.css"
import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: React.ReactNode) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout || ((page) => page)

    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <title>Tutorial Three JS</title>
            </Head>
            <ChakraProvider>
                {getLayout(<Component {...pageProps} />)}
            </ChakraProvider>
        </Fragment>
    )
}

export default MyApp
