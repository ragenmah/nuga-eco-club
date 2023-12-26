import Choropleth from "react-leaflet-choropleth";
import { MapContainer, TileLayer, GeoJSON, FeatureGroup } from "react-leaflet";
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
  const [onselect, setOnselect] = useState({});
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
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
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
    };
  };
  const mapStyle = {
    height: "55vh",
    width: "100%",
    margin: "0 auto",
  };
  //   const feature = features.map((feature) => {
  //     return feature;
  //   });

  return (
    <MapContainer
      zoom={6.5}
      scrollWheelZoom={true}
      style={mapStyle}
      center={[28.082, 84.078]}
      minZoom={2}
      zoomSnap={0.5}
      zoomDelta={0.5}
      wheelPxPerZoomLevel={120}
      maxBoundsViscosity={0.5}
      attributionControl={false}
      zoomControl={false}
      doubleClickZoom={true}
      touchZoom={true}
      boxZoom={true}
      className="leaflet-container rounded"
    >
      <FeatureGroup>
        <GeoJSON
          data={nepalGeojson}
          style={style}
          onEachFeature={onEachFeature}
        />
      </FeatureGroup>

      {/* <Choropleth
        data={nepalGeojson}
        valueProperty={(feature) => feature}
        //   visible={(feature) => feature.id !== active.id}
        scale={[
          "#333333",
          "#252525",
          "#525252",
          "#737373",
          "#969696",
          "#bdbdbd",
          "#d9d9d9",
          "#f0f0f0",
          "#f1f1f1",
        ]}
        steps={7}
        mode="e"
        style={style}
        onEachFeature={onEachFeature}

        //   onEachFeature={(feature, layer) =>
        //     layer.bindPopup(feature.properties.label)
        //   }
        //   ref={(el) => (this.choropleth = el.leafletElement)}
      /> */}
      {/* <TileLayer

        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
      /> */}
    </MapContainer>
  );
};
