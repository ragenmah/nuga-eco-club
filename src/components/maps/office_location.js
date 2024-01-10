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

const locations = [
  { position: [27.708936, 85.264331], name: "Syuchatar" },
  { position: [27.658773, 85.273429], name: "kirtipur" },
  { position: [27.692065, 85.321151], name: "Kathmandu" },
  // Add more locations as needed
];

export const OfficeLocation = () => {
  const [onselect, setOnselect] = useState({});
  /* function determining what should happen onmouseover, this function updates our state*/
  const highlightFeature = (e) => {
    var layer = e.target;
    const { County, Total, Male, Female, Intersex, Desnity, district } =
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
      <Container className="interaction_map_container mb-5">
        <Row className=" justify-content-between align-items-center mb-5">
          <Col className="mb-5  mt-3 ">
            <Col lg="7">
              <h1 className="teams_title mb-2">Interaction Map</h1>
            </Col>
            <Col lg="2">
              <hr className="t_border my-3 ml-0 text-left" />{" "}
            </Col>
          </Col>
          <Col lg={6} className=" map___container rounded shadow pt-3 w-100">
            <div className="">
              <section className="showcase">
                <MapContainer
                  zoom={7.6}
                  style={mapStyle}
                  center={[27.692065, 85.321151]}
                  minZoom={2}
                  zoomSnap={0.5}
                  zoomDelta={0.5}
                  wheelPxPerZoomLevel={120}
                  maxBoundsViscosity={0.5}
                  attributionControl={false}
                  zoomControl={false}
                  scrollWheelZoom={true}
                  doubleClickZoom={true}
                  touchZoom={false}
                  boxZoom={true}
                >
                  <FeatureGroup>
                    <GeoJSON
                      data={nepalGeojson}
                      style={style}
                      onEachFeature={onEachFeature}
                    >
                      <Popup>
                        {(layer) => layer.features.properties.district}
                      </Popup>
                    </GeoJSON>
                  </FeatureGroup>
                  <Marker position={[27.692065, 85.321151]} icon={newicon}>
                    {/* <Popup>
                      <div>
                        <div className="caption">
                          Nuga Office
                          <hr />
                          Patan, Lalitpur
                        </div>
                      </div>
                    </Popup> */}
                  </Marker>
                  {locations.map((location, index) => (
                    <Marker
                      key={index}
                      position={location.position}
                      icon={newicon}
                    >
                      <Popup>{location.name}</Popup>
                    </Marker>
                  ))}
                  {/* <TileLayer
                    // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="NugaMaps"
                  /> */}
                </MapContainer>
              </section>{" "}
              <div className="rounded shadow stats___container ">
                <h5>Kathmandu</h5>
                <br />
                Total sites: 120
                <br />
                Total scanned : 12300
                <br />
                Total read : 200
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
