import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import mapdata from "./mapdata";
import { gsap } from "gsap";

const MapChart = ({ setDestination, destination }) => {
  const [seeDestination, setSeeDestination] = useState("");

  return (
    <div>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 900,
          center: [20, 48.5],
        }}
        className="whole-map"
        stroke="black"
        strokeWidth={0.8}
      >
        <Geographies geography={mapdata.data}>
          {geographies => {
            return (
              <>
                {geographies.geographies.map(geo => {
                  const stateName = geo.properties.NAME;
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      className={`geography ${stateName.toLowerCase() === destination.toLowerCase() ? 'active' : ""}`}
                      onMouseEnter={() => {
                        setSeeDestination(stateName);
                      }}
                      onMouseLeave={() => {
                        setSeeDestination("");
                      }}
                      onClick={() => {
                        setDestination(stateName);
                      }}
                    />
                  );
                })}

                {geographies.geographies.map(geo => {
                  const provinceCenter = geoCentroid(geo);
                  return (
                    <Marker
                      key={geo.rsmKey}
                      coordinates={provinceCenter}
                    >
                      <text
                        className={`marker-text`}
                        textAnchor="middle"
                      >
                        {geo.properties.NAME === seeDestination ? geo.properties.NAME : null}
                        {geo.properties.NAME.toLowerCase() === destination.toLowerCase() && destination.toLowerCase() !== seeDestination.toLowerCase() ? geo.properties.NAME : null}
                      </text>
                    </Marker>
                  );
                })}
              </>
            );
          }}
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
