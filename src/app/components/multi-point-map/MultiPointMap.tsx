import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px"
};

const center = { lat: 40.7128, lng: -74.0060 }; // Center map anywhere

const locations = [
  { lat: 40.7128, lng: -74.0060 },  // Point 1 - New York
  { lat: 34.0522, lng: -118.2437 }, // Point 2 - Los Angeles
  { lat: 51.5074, lng: -0.1278 }    // Point 3 - London
];

export default function MultiPointMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_API_KEY"
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
    >
      {locations.map((pos, i) => (
        <Marker key={i} position={pos} />
      ))}
    </GoogleMap>
  );
}
