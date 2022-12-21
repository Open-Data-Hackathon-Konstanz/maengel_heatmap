import {Container, Heading} from '@chakra-ui/react'

export const Main = () => {
    return <Container className='main' display='flex' h='full' size='xl'>
        <Heading as='h1' size='xl'>Wilkommen im Mängel Explorer</Heading>
    </Container>
}