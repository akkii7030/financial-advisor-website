"use client"

import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 19.2183, // Latitude for Borivali West, Mumbai
  lng: 72.8567, // Longitude for Borivali West, Mumbai
}

const GOOGLE_MAPS_API_KEY = "AIzaSyDmzDIeYZ2uxW1L317vDrWJ3zxEP8WB5ps"

const GoogleMapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent
