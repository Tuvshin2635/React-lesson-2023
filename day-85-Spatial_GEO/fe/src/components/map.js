import { useContext } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { RestaurantContext } from "../context/restaurants.context";

export default function Map() {
  const restaurants = useContext(RestaurantContext);
  console.log(restaurants[0]?.address.coord.reverse());

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {restaurants.map((r) => {
        return (
          <Marker position={[r?.address.coord[1], r?.address.coord[0]]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
