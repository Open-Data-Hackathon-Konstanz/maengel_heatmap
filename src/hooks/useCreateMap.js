import { loadModules } from 'esri-loader';
import { useEffect, useState } from "react";


const renderer = {
    type: "heatmap",
    colorStops: [
      { color: "rgba(63, 40, 102, 0)", ratio: 0 },
      { color: "#472b77", ratio: 0.083 },
      { color: "#4e2d87", ratio: 0.166 },
      { color: "#563098", ratio: 0.249 },
      { color: "#5d32a8", ratio: 0.332 },
      { color: "#6735be", ratio: 0.415 },
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
    radius: 2
  };

export const useCreateMap = (mapRef, url) => {

  const [viewState, setView] = useState(null)

    useEffect(() => {
        let view;

        const initMap =async (ref) => {
            const modules = ["esri/WebMap", "esri/views/MapView", "esri/layers/CSVLayer", "esri/widgets/Legend"];
        
            const template = {
              title: "{id}",
              content: "Eingestellt am {reported}, <br/> Behoben am {checked}"
            };

            const [WebMap, MapView, CSVLayer, Legend] = await loadModules(modules);

            const csvLayer = new CSVLayer({
                url,
                title: "Konstanz",
                longitudeField: "lon",
                latitudeField: "lat",
                delimiter: ',',
                popupTemplate: template,
                objectIdField: 'id'
            })

            csvLayer.renderer = renderer

            const map = new WebMap({
              basemap: {
                portalItem: {
                  id: "466f3f43c231453c938c6776777b89e2"
                }
              }, 
              layers: [csvLayer]
            })
            view = new MapView({
                map,
                zoom: 13,
                container: ref.current,
                center: [9.172, 47.68]
            })

            view.ui.add(new Legend({
                view
            }), "top-right")

            setView(view)
        }

        initMap(mapRef)

        return () => view?.destroy()
    }, [mapRef, url])

    return viewState;
}