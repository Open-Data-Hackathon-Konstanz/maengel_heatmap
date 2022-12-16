import { Map } from "../components/Map"
import {Link} from "react-router-dom"
import { dataSources } from "../router"

export const MapView = ({source}) => {

    return (<div>
        <nav>
            {dataSources.map(source => <li key={source.id}><Link to={source.id}>{source.name}</Link></li>)}
        </nav>
        
        <Map url={source.url} />
    </div>)
}