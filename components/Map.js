import * as React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styleFooter from '../styles/Footer.module.scss';

const MAPBOX_TOKEN =
	'pk.eyJ1IjoiZmlsaXAtZGVzb3BoeSIsImEiOiJja2s4Nmd6Z3cwam95MnBudnQ1ZnN1YWNlIn0.mMFM4HzV93O7Pl-01-gV-w';

const HKSMap = () => {
	return (
		<Map
			initialViewState={{
				longitude: -73.9926903949378,
				latitude: 40.74107953675329,
				zoom: 14,
			}}
			style={{ height: 400 }}
			className={styleFooter.map}
			mapStyle="mapbox://styles/mapbox/light-v10"
			mapboxAccessToken={MAPBOX_TOKEN}
			scrollZoom={false}
		>
			<Marker
				longitude={-73.9926903949378}
				latitude={40.74107953675329}
				color="#152348"
			/>
		</Map>
	);
};

export default HKSMap;
