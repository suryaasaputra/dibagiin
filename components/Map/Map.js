import { useEffect } from 'react';
import L from 'leaflet';
import * as ReactLeaflet from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import styles from './Map.module.css';

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, ...rest }) => {
    let mapClassName = styles.map;

    if (className) {
        mapClassName = `${mapClassName} ${className}`;
    }
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/images/marker-icon-2x.png'",
        iconUrl: '/images/marker-icon.png',
        shadowUrl: '/images/marker - shadow.png',
    });
    return (
        <MapContainer className={mapClassName} {...rest}>
            {children(ReactLeaflet)}
        </MapContainer>
    )
}

export default Map;