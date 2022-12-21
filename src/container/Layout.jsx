import {Grid, GridItem, List, ListItem, Box, Container, Heading, Button, useColorMode, Switch} from '@chakra-ui/react'
import { Link } from '../components/Link'
import { dataSources } from '../datasources'
import {useLocation} from 'react-router-dom'


export const Layout = ({children}) => {
    const location = useLocation()
    const { colorMode, toggleColorMode } = useColorMode()

    return <Container maxW='full' p={0}>
        <Grid templateColumns={'repeat(12, 1fr)'} >
            <GridItem colSpan={12} p={2}  borderBottomColor='gray.400' borderBottomWidth={1} mb={3}>
                <Box centerContent>
                    <Heading as='h1' size='xl'>Mängel Explorer</Heading>
                    <Switch float={'right'} isChecked={colorMode === 'dark'} colorScheme={colorMode === 'dark' ? 'purple': 'gray'} onChange={toggleColorMode} size='lg' />
                </Box>
            </GridItem>
            <GridItem colSpan={3} p={2} h='full'>
                <List spacing={3} h='full'>
                    {dataSources.map(source => (
                    <ListItem key={source.id}>
                        <Button as={Link} to={`/maengel_heatmap/${source.id}`} width='full' bgColor={location.pathname.endsWith(source.id) ? 'green.400' : 'gray.400'} centerContent>{source.name}</Button>
                    </ListItem>
                    ))}
                    
                </List>
            </GridItem>
            <GridItem colSpan={9} p={2}>
                {children}
            </GridItem>
        </Grid>
    </Container>
}