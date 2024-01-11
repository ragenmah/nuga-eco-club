import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const MyMap = () => {
  const center = [51.505, -0.09];

  // Example GeoJSON data for provinces (replace with your actual data)
  const provinceData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { name: "Province A" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-0.1, 51.5],
              [-0.1, 51.52],
              [-0.08, 51.52],
              [-0.08, 51.5],
              [-0.1, 51.5],
            ],
          ],
        },
      },
      // Add more features for other provinces
    ],
  };

  const [selectedProvince, setSelectedProvince] = useState(null);

  const handleProvinceClick = (feature) => {
    setSelectedProvince(feature.properties);
  };

  return (
    <div>
      <div style={{ height: "400px", width: "50%", float: "left" }}>
        <MapContainer
          center={center}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* GeoJSON layer for provinces */}
          <GeoJSON
            data={provinceData}
            style={() => ({
              color: "blue",
              weight: 2,
              fillColor: "blue",
              fillOpacity: 0.2,
            })}
            onEachFeature={(feature, layer) => {
              const provinceName = feature.properties.name;

              layer.on({
                click: () => {
                  handleProvinceClick(feature);
                },
              });
            }}
          />
        </MapContainer>
      </div>

      <div style={{ float: "left", marginLeft: "20px" }}>
        <h2>Province Names</h2>
        {provinceData.features.map((feature) => (
          <div key={feature.properties.name}>{feature.properties.name}</div>
        ))}
      </div>

      <div style={{ clear: "both" }}></div>
    </div>
  );
};

export default MyMap;
