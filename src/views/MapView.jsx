import { Map } from "../components/Map"
import {Card, CardBody} from '@chakra-ui/react'
import { useCreateMap } from "../hooks/useCreateMap"
import { useRef } from "react"

export const MapView = ({source}) => {
    const mapRef = useRef(null)
    useCreateMap(mapRef, source.url, {template: source.props.template})

    return (
            <Card w='full' overflow='hidden'>
                <CardBody p={0}>
                    <div className="map-view" ref={mapRef} />
                </CardBody>
            </Card>
            )
}