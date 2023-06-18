import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import './Popup.css'; // Import custom CSS for the component

const WaterQualityPopup = ({ features }) => {
    console.log(features)
  return (
    <Popup>
      <div className="water-quality-popup">
        <h3 className="street-name"> {features.address}</h3>
        <div className="quality-info">
          <div className="quality-item">
            <span className="label">Color:</span>
            <span className="value">{features.color}</span>
            <span className="limit">{` / ${features.color_limit} ${features.color_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Turbidity:</span>
            <span className="value">{features.turbidity_value}</span>
            <span className="limit">{` / ${features.turbidity_limit} ${features.turbidity_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Iron:</span>
            <span className="value">{features.iron_value}</span>
            <span className="limit">{` / ${features.iron_limit} ${features.iron_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">pH:</span>
            <span className="value">{features.ph_value}</span>
            <span className="limit">{` / ${features.ph_limit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Ammonium Ions:</span>
            <span className="value">{features.ammonium_ions_value}</span>
            <span className="limit">{` / ${features.ammonium_ions_limit} ${features.ammonium_ions_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Nitrates:</span>
            <span className="value">{features.nitrates_value}</span>
            <span className="limit">{` / ${features.nitrates_limit} ${features.nitrates_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Nitrite:</span>
            <span className="value">{features.nitrite}</span>
            <span className="limit">{` / ${features.nitrite_limit} ${features.nitrite_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Chlorides:</span>
            <span className="value">{features.chlorides_value}</span>
            <span className="limit">{` / ${features.chlorides_limit} ${features.chlorides_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Total Organic Carbon:</span>
            <span className="value">{features.total_organic_carbon_value}</span>
            <span className="limit">{` / ${features.total_organic_carbon_limit} ${features.total_organic_carbon_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Free Chlorine:</span>
            <span className="value">{features.free_chlorine_value}</span>
            <span className="limit">{` / ${features.free_chlorine_limit} ${features.free_chlorine_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Coliform Bacteria:</span>
            <span className="value">{features.coliform_bacteria_value}</span>
            <span className="limit">{` / ${features.coliform_bacteria_limit} ${features.coliform_bacteria_unit}`}</span>
          </div>
          <div className="quality-item">
            <span className="label">Escherichia Coli:</span>
            <span className="value">{features.escherichia_coli_value}</span>
            <span className="limit">{` / ${features.escherichia_coli_limit} ${features.escherichia_coli_unit}`}</span>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default WaterQualityPopup;
