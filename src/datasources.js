import { DistrictViewer } from "./views/DistrictViewer";
import { MapView } from "./views/MapView";
import { TimeSliderView } from "./views/TimeSliderView";

/**
 * Add other Sources
 * id: unique value representing the dataset
 * name: Displayname
 * url: the url to a csv containing the data
 * element: A View element type to use
 * props.template an option with title and content can use {nameOfField} to parse data
 */
export const dataSources = [{
    id: 'all',
    name: 'Alle',
    url: 'https://raw.githubusercontent.com/Open-Data-Hackathon-Konstanz/maengelanalyse_python/main/data/final.csv',
    element: DistrictViewer
},{
    id: 'all-time',
    name: 'Alle (Zeitliche)',
    url: 'https://raw.githubusercontent.com/Open-Data-Hackathon-Konstanz/maengelanalyse_python/main/data/final.csv',
    element: TimeSliderView
},{
    id: 'gullideckel21',
    name: 'Gullideckel 2021',
    url: 'https://raw.githubusercontent.com/Open-Data-Hackathon-Konstanz/maengelanalyse_python/main/data/Gullideckel-2021.csv',
    element: MapView,
    props: {
        template: {
            title: "{district}//{Kategorie}",
            content: "\"{Text}\" <br/> Eingestellt am {Gemeldet.am}, <br/> Geprüft am {Geprueft.am} <br/>"
          }
    }
}]