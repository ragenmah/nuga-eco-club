import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

const districts = [
  { id: 0, name: "District", value: "District" },
  { id: 1, name: "Sinduli", value: "Sinduli" },
  { id: 2, name: "Ramechhap", value: "Ramechhap" },
  { id: 3, name: "Dolakha", value: "Dolakha" },
  { id: 4, name: "Bhaktapur", value: "Bhaktapur" },
  { id: 5, name: "Dhading", value: "Dhading" },
  { id: 6, name: "Kathmandu", value: "Kathmandu" },
  { id: 7, name: "Kavrepalanchok", value: "Kavrepalanchok" },
];
const municipalities = [
  { id: 0, name: "Municipality", district: "District" },
  {
    id: 1,
    name: "Kathmandu Metropolitian",
    value: "Kathmandu Metropolitian",
    district: "Kathmandu",
  },
  {
    id: 2,
    name: "Budhanilkantha",
    value: "Budhanilkantha",
    district: "Kathmandu",
  },
  { id: 3, name: "Tarakeshwar", value: "Tarakeshwar", district: "Kathmandu" },
  { id: 4, name: "Gokarneshwar", value: "Gokarneshwar", district: "Kathmandu" },
  { id: 5, name: "Chandragiri", value: "Chandragiri", district: "Kathmandu" },
  { id: 6, name: "Tokha", value: "Tokha", district: "Kathmandu" },
  {
    id: 7,
    name: "Kageshwari-Manohara",
    value: "Kageshwari-Manohara",
    district: "earth",
  },
  { id: 8, name: "Nagarjun", value: "Nagarjun", district: "Kathmandu" },
  { id: 9, name: "Kirtipur", value: "Kirtipur", district: "Kathmandu" },
  //   { id: 4, name: "Kirtipur", value: "Kirtipur", planet: "earth" },
];
const wards = [
  { id: 100, name: "ward", value: "ward", municipality: "Municipality" },
  { id: 1, name: "1", value: "1", municipality: "Kirtipur" },
  { id: 2, name: "2", value: "2", municipality: "Kirtipur" },
  { id: 3, name: "3", value: "3", municipality: "Kirtipur" },
  { id: 4, name: "4", value: "4", municipality: "Kirtipur" },
  { id: 5, name: "5", value: "5", municipality: "Kirtipur" },
  { id: 6, name: "6", value: "6", municipality: "Kirtipur" },
  { id: 7, name: "7", value: "7", municipality: "Kirtipur" },
  { id: 8, name: "8", value: "8", municipality: "Kirtipur" },
  { id: 9, name: "10", value: "10", municipality: "Kirtipur" },
  { id: 10, name: "11", value: "11", municipality: "Kathmandu Metropolitian" },
  { id: 11, name: "1", value: "1", municipality: "Nagarjun" },
];

export default function Selectors() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0].name);
  const [selectedMunicipality, setMunicipality] = useState();
  const [selectedWard, setSelectedWard] = useState();

  const [municipalityItems, setMunicipalities] = useState([]);
  const [wardItems, setWardItems] = useState([]);

  useEffect(() => {
    setMunicipalities([]); // reset select
    setWardItems([]); // reset select
    setMunicipality(""); // reset select
    setSelectedWard(""); // reset select

    selectedDistrict &&
      setMunicipalities(
        municipalities.filter((c) => c.district === selectedDistrict)
      );
  }, [selectedDistrict]);

  useEffect(() => {
    setWardItems([]); // reset select
    setSelectedWard(""); // reset select

    selectedMunicipality &&
      setWardItems(
        wards.filter((c) => c.municipality === selectedMunicipality)
      );
  }, [selectedMunicipality]);

  return (
    <div className="d-flex pflex-row w-100">
      <Col className="select-dropdown m-1">
        <select
          value={selectedDistrict.id}
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          {districts.map((p) => (
            <option key={p.id} value={p.name} name={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </Col>
      <Col className="select-dropdown m-1">
        <select
          value={selectedMunicipality?.id}
          onChange={(e) => setMunicipality(e.target.value)}
        >
          {municipalityItems.map((c) => (
            <option key={c.id} value={c.name} name={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </Col>

      <Col className="select-dropdown m-1">
        <select
          value={selectedWard?.id}
          onChange={(e) => setSelectedWard(e.target.value)}
        >
          {wardItems.map((c) => (
            <option key={c.id} value={c.name} name={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </Col>
    </div>
  );
}
