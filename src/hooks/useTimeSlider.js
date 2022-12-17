import { loadModules } from "esri-loader";
import { useEffect } from "react";



export const useTimeSlider = (view, layer, container) => {

    useEffect(() => {
        const init = async () => {
            const modules = [ "esri/widgets/TimeSlider"];
          
              const [ TimeSlider] = await loadModules(modules);
    
                const timeSliderPlugin = new TimeSlider({
                    container,
                    mode: "time-window",
                    view: view
                  });
                  
                  view.ui.add(timeSliderPlugin, "bottom-left")
                  
                  const start = new Date(2020, 1, 1);
                  
                  view.whenLayerView(layer).then((lv) => {
                    // start time of the time slider - 5/25/2019
                    
                    // set time slider's full extent to
                    // 5/25/5019 - until end date of layer's fullTimeExtent
                    timeSliderPlugin.fullTimeExtent = {
                      start: start,
                      end: layer.timeInfo.fullTimeExtent.end
                    };
            
                    // We will be showing earthquakes with one day interval
                    // when the app is loaded we will show earthquakes that
                    // happened between 5/25 - 5/26.
                    let end = new Date(start);
                    // end of current time extent for time slider
                    // showing earthquakes with one day interval
                    end.setDate(end.getDate() + 1);
            
                    // timeExtent property is set so that timeslider
                    // widget show the first day. We are setting
                    // the thumbs positions.
                    timeSliderPlugin.timeExtent = {start, end};
                  });
        }

        if(view && layer) {
            init()
        }

    }, [view, layer, container])


    
}