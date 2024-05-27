import { useRef, useEffect } from "react";
import {
   YMaps,
   Placemark,
   Map,
   ZoomControl,
   FullscreenControl,
} from "@pbe/react-yandex-maps";
import styles from "./YandexMap.module.sass";

const api = "b6e06a27-e5d4-4a70-bb30-b438880eae96";

const YandexMap = () => {
   const mapRef = useRef(null);

   useEffect(() => {
      if (mapRef.current && mapRef.current.events) {
         mapRef.current.events.add("boundschange", () => {
            //FIX ME писать значения комментариев const newCoords = e.originalEvent.newCenter;
         });
      }
   }, []);

   return (
      <YMaps query={{ apikey: api }}>
         <div className={styles.mapContainer}>
            <Map
               instanceRef={mapRef}
               defaultState={{ center: [42.880957, 74.602838], zoom: 17 }}
               options={{
                  yandexMapDisablePoiInteractivity: true,
                  suppressMapOpenBlock: true,
               }}
               className={styles.map}
            >
               <ZoomControl options={{ float: "right" }} />
               <FullscreenControl options={{ float: "right" }} />
               <Placemark
                  geometry={[42.880958, 74.602839]}
                  options={{
                     iconLayout: "default#image",
                     iconImageHref:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Yandex_Maps_icon.svg/2048px-Yandex_Maps_icon.svg.png",
                     iconImageSize: [30, 30],
                     iconImageOffset: [-15, -15],
                     draggable: false,
                  }}
               />
            </Map>
         </div>
      </YMaps>
   );
};

export default YandexMap;
