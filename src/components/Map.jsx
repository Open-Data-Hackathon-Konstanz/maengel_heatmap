import { useRef } from "react"
import { useCreateMap } from "../hooks/useCreateMap"

export const Map = ({url}) => {
    const mapRef = useRef(null)
    useCreateMap(mapRef, url)
    return <div className="map-view" ref={mapRef} />
}