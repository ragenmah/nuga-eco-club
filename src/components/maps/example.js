import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const MyMap = () => {
  const center = [51.505, -0.09];

  // Example initial GeoJSON data for polygons (replace with your actual data)
  const initialPolygonData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: { name: 'Polygon 1' },
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
      // Add more features for other polygons
    ],
  };

  const [polygonData, setPolygonData] = useState(initialPolygonData);

  // Function to handle dynamic updates to polygons
  const updatePolygons = () => {
    // Example: Update the GeoJSON data based on some external logic
    const updatedData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: { name: 'Polygon 1 (Updated)' },
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-0.1, 51.5],
                [-0.1, 51.51],
                [-0.09, 51.51],
                [-0.09, 51.5],
                [-0.1, 51.5],
              ],
            ],
          },
        },
        // Add more features for other updated polygons
      ],
    };

    setPolygonData(updatedData);
  };

  return (
    <div>
      <MapContainer center={center} zoom={13} style={{ height: '400px', width: '50%', float: 'left' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* GeoJSON layer for polygons */}
        <GeoJSON
          data={polygonData}
          style={() => ({
            color: 'green',
            weight: 2,
            fillColor: 'green',
            fillOpacity: 0.2,
          })}
        />
      </MapContainer>

      <button onClick={updatePolygons}>Update Polygons</button>
    </div>
  );
};

export default MyMap;