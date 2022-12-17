import { loadModules } from 'esri-loader';
import { useEffect, useState } from "react";
import {useColorMode} from '@chakra-ui/react'
import { geoJsonrenderer } from './geojsonrenderer';

const renderer = {
    type: "heatmap",
    colorStops: [
      { color: "rgba(63, 40, 102, 0)", ratio: 0 },
      { color: "#472b77", ratio: 0.083 },
      { color: "#4e2d87", ratio: 0.166 },
      { color: "#7139d4", ratio: 0.498 },
      { color: "#7b3ce9", ratio: 0.581 },
      { color: "#853fff", ratio: 0.664 },
      { color: "#a46fbf", ratio: 0.747 },
      { color: "#c29f80", ratio: 0.83 },
      { color: "#e0cf40", ratio: 0.913 },
      { color: "#ffff00", ratio: 1 }
    ],
    maxDensity: 0.1,
    minDensity: 0,
    radius: 4
  };


  const cardStyle = {
    "light": 'gray-vector',
    "dark": {
      portalItem: {
        id: "466f3f43c231453c938c6776777b89e2"
      }
    }
  }

export const useCreateMap = (mapRef, url, option) => {
  const geoJsonLayer = option?.geoJsonLayer || null

  const template =  option?.template || {
    title: "{district}//{main_cat}/{sub_cat}",
    content: "\"{description}\" <br/> Eingestellt am {reported}, <br/> Geprüft am {checked} <br/>"
  };

  const [viewState, setView] = useState(null)
  const [layerState, setLayer] = useState(null)
  const { colorMode } = useColorMode()

    useEffect(() => {
        let view;

        const initMap =async (ref) => {
            const modules = [
              "esri/WebMap", 
              "esri/views/MapView", 
              "esri/layers/CSVLayer", 
              "esri/layers/GeoJSONLayer", 
              "esri/widgets/Legend", 
              "esri/renderers/SimpleRenderer",
              "esri/symbols/SimpleFillSymbol"
            ];
        


            const [WebMap, MapView, CSVLayer, GeoJSONLayer, Legend, SimpleRenderer,
              SimpleFillSymbol] = await loadModules(modules);

            let geoLayer
            if(geoJsonLayer && geoJsonLayer.url) {
              geoLayer= new GeoJSONLayer({url: geoJsonLayer.url, title: 'Stadtteile', geometryType: "ploygon"})
              geoLayer.renderer = new SimpleRenderer({
                symbol: new SimpleFillSymbol({
                  color: [129, 230, 217],
                  outline: {  // autocasts as new SimpleLineSymbol()
                    color: [0,0,0, 1],
                    width: "0.5px"
                  }
                })
              })
            }

            const csvLayer = new CSVLayer({
                url,
                title: "Mängel",
                longitudeField: "lon",
                latitudeField: "lat",
                delimiter: ',',
                popupTemplate: template,
                objectIdField: 'id',
                timeInfo: {
                  startField: "reported", // name of the date field
                  interval: {
                    // set time interval to one day
                    unit: "hours",
                    value: 1
                  }
                }
            })

            csvLayer.renderer = renderer

            const map = new WebMap({
              basemap: cardStyle[colorMode], 
              layers: [geoLayer, csvLayer].filter(Boolean)
            })
            view = new MapView({
                map,
                zoom: 12,
                container: ref.current,
                center: [9.172, 47.68],
                highlightOptions: {
                  color: "orange"
                }
            })
            
            view.ui.add(new Legend({
                view
            }), "top-right")

            setView(view)
            setLayer(csvLayer)
        }

        initMap(mapRef)

        return () => view?.destroy()
    }, [mapRef, url, colorMode])

    return [viewState, layerState];
}