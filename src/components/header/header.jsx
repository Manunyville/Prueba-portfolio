import { Box, Center, Flex } from '@chakra-ui/react'
import './header.css'

import { BsFillTelephoneFill, BsFillShareFill } from "react-icons/bs";

const Header = () => {


    return (
        <>
            <Flex justify={'space-between'} marginTop={5} textAlign={'center'}>
                <Flex ml={120}>
                    <Box fontSize={30}><b>MN</b></Box>

                </Flex>
                <Flex gap={20}>
                    <Box>Home</Box>
                    <Box>About Me</Box>
                    <Box>Showcase</Box>
                </Flex>
                <Flex gap={20} mr={10}>
                    <Box>ENG</Box>
                    <Box><BsFillTelephoneFill /> </Box>
                    <Box><BsFillShareFill /></Box>
                </Flex>

            </Flex>

        </>

    )
}

export default Header