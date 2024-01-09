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
// import "./style.css";
import Leaflet from "leaflet";

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
export const OfficeLocation = () => {
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
    height: "100%",
    width: "100%",
    margin: "0 auto",
    // backgroundColor: "var(--bg-color)",
    // zIndex: "-12",
  };

  return (
    <>
      <div className="search-box-container">
        <div className=" order-2 order-lg-1 h-100 d-lg-flex justify-content-space-around ">
          <div className="align-self-center container w-100">
            <div className="intro mx-auto">
              <h1></h1>
              <h6></h6>
              {/* <Link to="/contact">
                      <div id="button_h" className="ac_btn btn mt-5">
                        Join Us
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link> */}
            </div>
          </div>
          <div className="align-self-center w-100 m-2">
            <section className="showcase ">
              <MapContainer
                zoom={6.5}
                scrollWheelZoom={false}
                style={mapStyle}
                center={[28.082, 84.078]}
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
              >
                <FeatureGroup>
                  <GeoJSON
                    data={nepalGeojson}
                    style={style}
                    onEachFeature={onEachFeature}
                  />
                </FeatureGroup>
                <Marker position={[28.082, 84.078]} icon={newicon}>
                  <Popup>
                    <div>
                      <div className="caption">
                        Nuga Office
                        <hr />
                        Patan, Lalitpur
                      </div>
                    </div>
                  </Popup>
                </Marker>
                <TileLayer
                  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                  attribution="NugaMaps"
                />
              </MapContainer>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
