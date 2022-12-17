
import { Map } from "../components/Map"
import {Card, CardBody, Grid, GridItem} from '@chakra-ui/react'
import { useCreateMap } from "../hooks/useCreateMap"
import { useRef } from "react"
import districts from '../assets/districts.json'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const keys = [
"Stadtteil",
"Meldungen",
"Einwohnerzahl",
"Meldung pro Einwohner"
]


export const DistrictViewer = ({source}) => {
    const mapRef = useRef(null)
    useCreateMap(mapRef, source.url, {timeSlider: null, geoJsonLayer: { url: process.env.PUBLIC_URL + '/assets/konstanz_districts.geojson'}})

    return (
            <Card w='full' overflow='hidden'>
                <CardBody p={0}>
                    <Grid templateColumns={'1fr 1fr 1fr'}>
                        <GridItem colSpan={2}>
                            <div className="map-view" ref={mapRef} />
                        </GridItem>
                        <GridItem>
                            <TableContainer >
                                <Table size='sm'>
                                    <TableCaption>Stadteile</TableCaption>
                                    <Thead>
                                        <Tr>
                                        {keys.map(k => <Td key={k}>{k}</Td>)}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {districts.map(district => <Tr key={district.Stadtteil}>
                                            {keys.map(k => <Td isNumeric={typeof district[k] == 'number'} key={district[k]}>{district[k]}</Td>)}
                                        </Tr>)}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </GridItem>
                    </Grid>
                    
                </CardBody>
            </Card>
            )
}
  



  