import { MapContainer, TileLayer, GeoJSON, FeatureGroup, Popup, } from "react-leaflet";
// import "../../_mock/nepal/nepal.json";
import nepalGeojson from "../../_mock/nepal/nepal.json";
import { useState } from "react";
import "./style.css";

const style = {
  fillColor: "#FEFDF9",
  weight: 1,
  opacity: 1,
  color: "#0c0c0c",
  dashArray: "1",
  fillOpacity: 0.5,
};
// const mapStyle = {
//   height: "70vh",
//   width: "100%",
//   //   margin: "0 auto",
// };

export const MapNepal = () => {
  const [onselect, setOnselect] = useState({}); const [districtDetails, setDistrictDetails] = useState({
    district: "Kathmandu",
    details: "Details for District A",
  });

  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const handleDistrictClick = (e) => {
    var layer = e.target;
    setSelectedDistrict(layer.properties);
    // Set marker coordinates to a different location (replace with your desired coordinates)
    setMarkerCoordinates([27.658773, 85.273429]); // Access the map instance using useMap
    // const map = L.map('map');

    // // // Fly to the marker's coordinates with a smooth animation
    // map.flyTo(markerCoordinates, 16);
  };
  /* function determining what should happen onmouseover, this function updates our state*/
  const highlightFeature = (e) => {
    var layer = e.target;
    const { County, Total, Male, Female, Intersex, Desnity } =
      e.target.feature.properties;
    setOnselect({
      county: County,
      total: Total,
      male: Male,
      female: Female,
      intersex: Intersex,
      density: Desnity,
    });
    layer.setStyle({
      weight: 1,
      color: "black",
      fillOpacity: 1,
    });
  };

  /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
  const resetHighlight = (e) => {
    setOnselect({});
    e.target.setStyle(style(e.target.feature));
  };
  /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
 highlightFeature and resetHighlight*/
  const onEachFeature = (feature, layer) => {
    // layer.on({
    //   mouseover: highlightFeature,
    //   mouseout: resetHighlight,
    // });
    const districtName = feature.properties.district;

    layer.on({
      mouseover: (e) => {
        layer.setStyle({ fillColor: "orange" });
        setDistrictDetails(e.target.feature.properties);
        layer.openTooltip();
      },
      mouseout: () => {
        setDistrictDetails({
          district: "Kathmandu",
          details: "Details for District A",
        });
        layer.setStyle({ fillColor: "green" });
        layer.closeTooltip();
      },
      // resetHighlight,
      click: handleDistrictClick,
    });
    layer.bindTooltip(districtName, {
      permanent: false,
      direction: "center",
      offset: [0, -10],
    });
  };

  const mapPolygonColorToDensity = (density) => {
    return density > 3023
      ? "#a50f15"
      : density > 676
      ? "#de2d26"
      : density > 428
      ? "#fb6a4a"
      : density > 236
      ? "#fc9272"
      : density > 23
      ? "#fcbba1"
      : "red";
  };
  const style = (feature) => {
    return {
      fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "1",
      fillOpacity: 0.5,
      cursor: "pointer",
    };
  };
  const mapStyle = {
    height: "100vh",
    width: "100%",
    margin: "0 auto",
    backgroundColor: "var(--bg-color)",
    cursor: "ponter",
    // filter:" filter: var(--map-tiles-filter, none);"
    // zIndex: "-12",
  };

  return (


    <MapContainer
      zoom={6.5}
      scrollWheelZoom={false}
      style={mapStyle}
      center={[29.082, 79.1025]}
      minZoom={2}
      zoomSnap={0.5}
      zoomDelta={0.5}
      wheelPxPerZoomLevel={120}
      maxBoundsViscosity={0.5}
      attributionControl={false}
      zoomControl={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false} 
      dragging={ false }
      // className=" leaflet-container rounded"
    >
      <FeatureGroup>
        <GeoJSON
          data={nepalGeojson}
          style={style}
          onEachFeature={onEachFeature}
        > {selectedDistrict && (
          <Popup
            position={selectedDistrict.geometry.coordinates[0][0]}
          >
            <div>
              <h3>{selectedDistrict.properties.district}</h3>
              <p>{selectedDistrict.properties.details}</p>
            </div>
          </Popup>
        )}</GeoJSON>
      </FeatureGroup>

      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        className="map-bg-color"
      />
    </MapContainer>
   
  );
};
