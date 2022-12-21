import {Link as CLink} from '@chakra-ui/react'
import {Link as RLink} from 'react-router-dom'

export const Link = (props) => {
    return <CLink as={RLink} {...props} pt={4} pb={4} size='lg' />
}