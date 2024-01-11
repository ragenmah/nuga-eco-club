import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const MyMap = () => {
  const center = [51.505, -0.09];

  // Example GeoJSON data (replace with your actual district data)
  const districtData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'District A', details: 'Details for District A' },
        geometry: {
          type: 'Polygon',
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
      // Add more features for other districts
    ],
  };

  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleDistrictClick = (feature) => {
    setSelectedDistrict(feature.properties);
  };

  const onEachDistrict = (feature, layer) => {
    const districtName = feature.properties.name;

    // Get the bounds of the district
    const bounds = layer.getBounds();

    // Get the center of the bounds
    const center = bounds.getCenter();

    // Create a custom icon with the district name
    const customIcon = L.divIcon({
      className: 'district-label',
      html: `<div>${districtName}</div>`,
    });

    // Create a marker with the custom icon and add it to the map
    L.marker(center, { icon: customIcon }).addTo(layer);

    layer.on({
      click: () => {
        handleDistrictClick(feature);
      },
      mouseover: () => {
        // Handle mouseover events if needed
      },
      mouseout: () => {
        // Optionally handle mouseout events
      },
    });
  };

  return (
    <MapContainer center={center} zoom={13} style={{ height: '400px', width: '50%', float: 'left' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <GeoJSON data={districtData} onEachFeature={onEachDistrict} />

      {selectedDistrict && (
        <div>
          <h3>{selectedDistrict.name}</h3>
          <p>{selectedDistrict.details}</p>
        </div>
      )}
    </MapContainer>
  );
};

export default MyMap;