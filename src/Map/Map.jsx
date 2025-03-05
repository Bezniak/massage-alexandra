import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useTranslation } from "react-i18next";
import { Preloader } from "../components/Preloader/Preloader.jsx";

// Настраиваем иконку маркера
const defaultIcon = new L.Icon({
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow,
    iconAnchor: [12, 41],
    popupAnchor: [0, -41]
});

L.Marker.prototype.options.icon = defaultIcon;

const Map = () => {
    const { t } = useTranslation();
    const coordinateString = '53.695212, 23.822594'; // Координаты Гродно, ул. Максима Горького 65
    const [coordinate, setCoordinate] = useState(null);

    useEffect(() => {
        if (coordinateString) {
            const [lat, lng] = coordinateString.split(',').map(parseFloat);
            setCoordinate([lat, lng]);
        }
    }, [coordinateString]);

    return (
        <div className="filter grayscale">
            {coordinate ? (
                <MapContainer
                    center={coordinate}
                    zoom={15}
                    className="h-[600px] w-full"
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
                    />
                    <Marker position={coordinate}>
                        <Popup className="text-center">
                            {t("address")}: г. Гродно, ул. Максима Горького 65
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <Preloader />
            )}
        </div>
    );
};

export default Map;
