import {
  MapContainer,
  TileLayer,
  GeoJSON,
  FeatureGroup,
  Marker,
  Popup,
} from "react-leaflet";
// import "../../_mock/nepal/nepal.json";
import nepalGeojson from "../../_mock/nepal/nepal.json";
import kathmanduGeojson from "../../_mock/nepal/kathmandu.json";
import { useState, useRef } from "react";
import "./style.css";
import Leaflet from "leaflet";
import { Container, Row, Col } from "react-bootstrap";

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
const markerImg =
  "https://ragenmah.github.io/nuga-eco-club/static/markers/marker.svg";

export const newicon = new Leaflet.Icon({
  iconUrl: markerImg,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 55],
});
export const LocationMarker = (props) => {
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
      // color: "black",
      fillOpacity: 1,
    });
  };

  /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
  const resetHighlight = (e) => {
    // setOnselect({});
    // e.target.setStyle(style(e.target.feature));
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
    // return density > 3023
    //   ? "#a50f15"
    //   : density > 676
    //   ? "#de2d26"
    //   : density > 428
    //   ? "#fb6a4a"
    //   : density > 236
    //   ? "#fc9272"
    //   : density > 23
    //   ? "#fcbba1"
    //   :'#fcbba1'
    // : "red";
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
    height: "100%",
    width: "100%",
    margin: "0 auto",
    // backgroundColor: "var(--bg-color)",
    // zIndex: "-12",
  };

  return (
    <>
      <Col className=" pt-1 w-100 mb-5">
        <section className="location_marker_container">
          <MapContainer
            zoom={15}
            scrollWheelZoom={true}
            style={mapStyle}
            center={props.location}
            minZoom={4}
            maxZoom={18}
            zoomSnap={0.5}
            zoomDelta={0.5}
            wheelPxPerZoomLevel={120}
            maxBoundsViscosity={0.5}
            attributionControl={false}
            zoomControl={true}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
          >
            <FeatureGroup>
              <GeoJSON
                data={nepalGeojson}
                style={style}
                // onEachFeature={onEachFeature}
              />
            </FeatureGroup>
            <Marker position={props.location} icon={newicon}>
              <Popup>
                <div>
                  <div className="caption">
                    {props.locationName}
                    <hr />
                    {props.locationAddress}
                  </div>
                </div>
              </Popup>
            </Marker>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="NugaMaps"
            />
          </MapContainer>
        </section>
      </Col>
    </>
  );
};
