import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useMap } from "react-leaflet";

import { Icon } from 'leaflet';
import myIcon from './icon-location.svg'

function SetViewOnChange({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
}

function MapComponent({ position, search }) {

    const icon = new Icon({
        iconUrl: myIcon,
        iconSize: [25, 25]
    })
    return (<div className=''>
        <MapContainer zoomControl={false} key={search.ip} center={position} zoom={12} scrollWheelZoom={false} className="mapContainer">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker

                position={position}

                icon={icon}
            />
            <SetViewOnChange coords={position} />

        </MapContainer>

    </div>
    );
}
export default MapComponent;