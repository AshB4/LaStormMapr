// src/UI/MapMarker.jsx
import { Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const MapMarker = ({ position, popupText, onClick }) => {
  const markerRef = useRef();

  useEffect(() => {
    const marker = markerRef.current;
    if (marker && marker._icon) {
      const el = marker._icon;
      el.classList.add("marker-hover-effect");
    }
  }, []);

  return (
    <Marker
      ref={markerRef}
      position={position}
      eventHandlers={{ click: onClick }}
    >
      {popupText && <Popup>{popupText}</Popup>}
    </Marker>
  );
};

MapMarker.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  popupText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
};

MapMarker.defaultProps = {
  popupText: '',
  onClick: () => {},
};

export default MapMarker;
