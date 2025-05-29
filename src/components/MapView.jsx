import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';

// Fix for default Leaflet marker icons in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapView = ({ members, onMemberSelect, selectedMember }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Calculate center based on median coordinates
    const lats = members.map(m => m.lat).sort((a, b) => a - b);
    const lons = members.map(m => m.lon).sort((a, b) => a - b);
    const centerLat = lats[Math.floor(lats.length / 2)] || 42.4534; // Default to Ithaca
    const centerLon = lons[Math.floor(lons.length / 2)] || -76.4735;

    mapInstanceRef.current = L.map(mapRef.current).setView([centerLat, centerLon], 4);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstanceRef.current);

    // Initialize marker cluster group
    markersRef.current = L.markerClusterGroup({
      chunkedLoading: true,
      maxClusterRadius: 50
    });

    mapInstanceRef.current.addLayer(markersRef.current);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [members]);

  // Update markers when members change
  useEffect(() => {
    if (!markersRef.current || !members.length) return;

    // Clear existing markers
    markersRef.current.clearLayers();

    // Add markers for each member
    members.forEach(member => {
      const marker = L.marker([member.lat, member.lon])
        .bindTooltip(member.fullName, { 
          permanent: false, 
          direction: 'top',
          offset: [0, -20]
        });

      // Create popup content
      const popupContent = `
        <div class="p-2 min-w-48">
          <h3 class="font-bold text-lg">${member.fullName}</h3>
          <p class="text-sm text-gray-600">${member.currentCity}</p>
          <p class="text-xs text-gray-500">${member.role}</p>
          <p class="text-xs text-gray-500">House: ${member.houseYears.join(', ')}</p>
        </div>
      `;

      marker.bindPopup(popupContent);

      // Handle marker click
      marker.on('click', () => {
        onMemberSelect(member);
      });

      // Highlight selected member
      if (selectedMember && selectedMember.fullName === member.fullName) {
        marker.setIcon(L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        }));
      }

      markersRef.current.addLayer(marker);
    });

    // Fit map to show all markers if there are any
    if (members.length > 0) {
      const group = new L.featureGroup(markersRef.current.getLayers());
      mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
    }
  }, [members, selectedMember, onMemberSelect]);

  return (
    <div className="w-full h-full">
      <div 
        ref={mapRef} 
        className="map-container h-full w-full rounded-lg"
        style={{ minHeight: '400px' }}
      />
      {/* TODO: Add heatmap density layer toggle */}
      {/* TODO: Add timeline animation controls */}
    </div>
  );
};

export default MapView;
