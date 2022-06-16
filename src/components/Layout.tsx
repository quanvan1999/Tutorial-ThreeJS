import { Flex } from "@chakra-ui/react"
import React from "react"
import Navbar from "./Navbar"

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <Flex
            pos="relative"
            h="100vh"
            w="full"
            direction="column"
            color="whiteAlpha.900"
        >
            <Navbar />
            <Flex flexDir="column" zIndex={2} flex={1}>
                {children}
            </Flex>
        </Flex>
    )
}

export default Layout
