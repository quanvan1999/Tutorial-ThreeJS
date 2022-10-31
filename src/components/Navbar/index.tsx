import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { useRouter } from "next/router"
import React from "react"

type Props = {}

const pageData = [
  {
    name: "Demo 1",
    path: "/",
  },
  {
    name: "Demo 2",
    path: "/demo2",
  },
  {
    name: "Demo 3",
    path: "/demo3",
  },
  {
    name: "Demo 4",
    path: "/demo4",
  },
]

const Navbar = (props: Props) => {
  const router = useRouter()
  const pathName = router.asPath.split("/")[1]

  return (
    <Box pos="fixed" top={0} left={0} zIndex="popover" p={4}>
      <HStack spacing={8} justify="center">
        {pageData.map((item) => (
          <Box
            cursor="pointer"
            onClick={() => router.push(item.path)}
            key={item.name}
          >
            <Text
              color={
                pathName === item.path.split("/")[1] ? "blue.400" : "gray.400"
              }
              fontWeight={600}
              fontSize="lg"
            >
              {item.name}
            </Text>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export default Navbar
