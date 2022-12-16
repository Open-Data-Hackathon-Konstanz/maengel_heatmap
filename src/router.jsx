import {createBrowserRouter} from 'react-router-dom'
import { MapView } from './views/MapView'

export const dataSources = [{
    id: 'all',
    name: 'Alle',
    url: 'https://raw.githubusercontent.com/Open-Data-Hackathon-Konstanz/maengelanalyse_python/main/data/heatmap.csv'
}]


export const Router = createBrowserRouter(dataSources.map(source => {
    return {
        path: source.id,
        element: <MapView source={source} />
    }
}))