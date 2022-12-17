import { Map } from "../components/Map"
import {Card, CardBody} from '@chakra-ui/react'
import { useCreateMap } from "../hooks/useCreateMap"
import { useRef } from "react"
import { useTimeSlider } from "../hooks/useTimeSlider"

export const TimeSliderView = ({source}) => {
    const mapRef = useRef(null)
    const timesliderRef = useRef(null)

    const [view, layer] = useCreateMap(mapRef, source.url)
    useTimeSlider(view, layer, "time-slider")
    return (
            <Card w='full' overflow='hidden'>
                <CardBody p={0}>
                    <div className="map-view" ref={mapRef} />
                    <div id="time-slider" ref={timesliderRef} />
                </CardBody>
            </Card>
            )
}