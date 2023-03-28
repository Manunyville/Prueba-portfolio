import { Flex, Heading , Button} from '@chakra-ui/react'
import './hero.css'
import foto from '../../assets/img/foto.jpg'
const hero =() =>{
    
    return(
        <>
            <Flex justify={'center'}  flexWrap={'wrap'}>
                <Flex>
                    <Heading>Hi,</Heading>
                    <Heading> I am Manuel Nyville</Heading>
                    <text>Junior Front end developer, centrado en buenas practicas y desarrollo de codigos claros.</text>
                    <box><Button colorScheme='blue'>Get in touch</Button>
                        <Button colorScheme='teal' variant='outline'>
                            Download cv
                        </Button>                       
                    </box>

        
                    <img src={foto} alt="Foto mia" height={400} width={400}/>
                </Flex>
                <Flex>
                </Flex>
            </Flex>
        </>
    )
}
export default hero