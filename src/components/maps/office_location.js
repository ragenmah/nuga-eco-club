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
import { useState, useRef,useEffect } from "react";
import "./style.css";
import Leaflet from "leaflet";
import { Container, Row, Col } from "react-bootstrap";
import L from "leaflet";
import MyMap from "./example";

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
  // { position: [27.658773, 85.273429], name: "kirtipur" },
  { position: [27.692065, 85.321151], name: "Kathmandu" },
  // Add more locations as needed
];

export const OfficeLocation = () => {
  const [onselect, setOnselect] = useState({});
  const [districtDetails, setDistrictDetails] = useState({
    district: "Kathmandu",
    details: "Details for District A",
  });

  const [markerCoordinates, setMarkerCoordinates] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

  /* function determining what should happen onmouseover, this function updates our state*/
  const highlightFeature = (e) => {
    var layer = e.target;
    // const { County, Total, Male, Female, Intersex, Desnity, district } =
    //   e.target.feature.properties;
    // setOnselect({
    //   county: County,
    //   total: Total,
    //   male: Male,
    //   female: Female,
    //   intersex: Intersex,
    //   density: Desnity,
    // });
    setDistrictDetails(e.target.feature.properties);
    layer.setStyle({
      weight: 1,
      color: "red",
      // fillOpacity: 1,
      weight: 5,
    });
  };

  /*resets our state i.e no properties should be displayed when a feature is not clicked or hovered over */
  const resetHighlight = (e) => {
    var layer = e.target;
    setDistrictDetails({
      district: "Kathmandu",
      details: "Details for District A",
    });
    layer.setStyle({
      weight: 1,
      color: "yellow",
    });
    e.target.setStyle(style(e.target.feature));
  };
  /* this function is called when a feature in the map is hovered over or when a mouse moves out of it, the function calls two functions
 highlightFeature and resetHighlight*/
  const onEachFeature = (feature, layer) => {
    const center = layer.getBounds().getCenter();
    const districtName = feature.properties.district;
    // layer.marker(center, {
    //   icon: L.divIcon({
    //     className: 'district-label',
    //     html: `<div>${feature.properties.district}</div>`,
    //   }),
    // });

    layer.setStyle({
      weight: 1, // Set the border weight
      fillColor:"red",
      // opacity: 1,         // Set the border opacity
      color: "red", // Set the border color
      // fillOpacity: 0.7,   // Set the fill opacity
    });
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
    // layer.bindPopup(`<p> ${feature.properties.district}</p>`);
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
      // fillColor: mapPolygonColorToDensity(feature.properties.Desnity),
      weight: 1,
      opacity: 1,
      color: "black",
      // dashArray: "1",
      // fillOpacity: 0.5,
      weight: "1",
      border: "2px solid yellow",
    };
  };
  const mapStyle = {
    height: "100%",
    width: "100%",
    margin: "0 auto",
    border: "2px solid black",fillColor:'red',
    // backgroundColor: "var(--bg-color)",
    // zIndex: "-12",
  };

  const handleDistrictClick = (e) => {
    var layer = e.target;
    setSelectedDistrict(layer.properties);
    // Set marker coordinates to a different location (replace with your desired coordinates)
    setMarkerCoordinates([27.658773, 85.273429]); // Access the map instance using useMap
    // const map = L.map('map');

    // // // Fly to the marker's coordinates with a smooth animation
    // map.flyTo(markerCoordinates, 16);
  };

  const handleMapClick = (event) => {
    // // Access the map instance using the leaflet object in the event
    const map = event.target;

    if (markerCoordinates) {
      // Fly to the marker's coordinates with a smooth animation
      map.flyTo(markerCoordinates, 16);
    }

    // const map = mapRef.current;

    // if (markerCoordinates) {
    //   // Fly to the marker's coordinates with a smooth animation
    //   map.flyTo(markerCoordinates, 16);
    // }
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
                  zoom={isMobile?2: 7.5}
                  style={mapStyle}
                  center={[28.3949, 84.124]}
                  minZoom={7.5}
                  zoomSnap={0.5}
                  zoomDelta={0.5}
                  wheelPxPerZoomLevel={120}
                  maxBoundsViscosity={0.5}
                  attributionControl={false}
                  zoomControl={true}
                  scrollWheelZoom={true}
                  doubleClickZoom={true}
                  touchZoom={false}
                  boxZoom={true}
                  dragging={isMobile? true:true}
                >
                  <FeatureGroup>
                    <GeoJSON
                      data={nepalGeojson}
                      style={style}
                      onEachFeature={onEachFeature}
                    >
                      {/* <Popup>
                        {(layer) =>( <div>
              <p>District: {layer.feature.properties.district}</p>
            </div>)}
                        
                      </Popup> */}
                      {selectedDistrict && (
                        <Popup
                          position={selectedDistrict.geometry.coordinates[0][0]}
                        >
                          <div>
                            <h3>{selectedDistrict.properties.district}</h3>
                            <p>{selectedDistrict.properties.details}</p>
                          </div>
                        </Popup>
                      )}
                    </GeoJSON>
                  </FeatureGroup>

                  {/* <Marker position={[27.692065, 85.321151]}  onClick={handleMapClick} icon={newicon}>
                   
                  </Marker>
                  {markerCoordinates&&<Marker position={markerCoordinates} onClick={handleMapClick} icon={newicon}>
                   
                  </Marker>}
                  {locations.map((location, index) => (
                    <Marker
                      key={index}
                      position={location.position}
                      icon={newicon}
                    >
                      <Popup>{location.name}</Popup>
                    </Marker>
                  ))} */}
                  {/* <TileLayer
                    // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="NugaMaps"
                  /> */}
                </MapContainer>
              </section>{" "}
              {districtDetails && (
                <div className="rounded shadow stats___container ">
                  <h5>{districtDetails.district}</h5>
                  <br />
                  Total sites: 120
                  <br />
                  Total scanned : 12300
                  <br />
                  Total read : 200
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
