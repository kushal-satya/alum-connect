import { useState, useEffect, useMemo } from 'react';

// Custom hook for filtering and managing co-op member data
// Because sometimes you need to find that one person who moved to Antarctica
export const useFilteredMembers = (members) => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    country: '',
    yearRange: [2015, 2025],
    role: ''
  });

  const [userLocation, setUserLocation] = useState(null);

  // Get user's location for distance calculations
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Location access denied or unavailable:', error);
        }
      );
    }
  }, []);

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  // Validate member data - drop invalid entries
  const validMembers = useMemo(() => {
    return members.filter(member => {
      const lat = parseFloat(member.lat);
      const lon = parseFloat(member.lon);
      return lat >= -90 && lat <= 90 && lon >= -180 && lon <= 180 && member.fullName;
    });
  }, [members]);

  // Filter members based on current filters
  const filteredMembers = useMemo(() => {
    let filtered = validMembers.filter(member => {
      // Search term filter (fuzzy search on name and city)
      const searchMatch = !filters.searchTerm || 
        member.fullName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        member.currentCity.toLowerCase().includes(filters.searchTerm.toLowerCase());

      // Country filter
      const countryMatch = !filters.country || member.country === filters.country;

      // Role filter
      const roleMatch = !filters.role || member.role === filters.role;

      // Year range filter (check if any house years overlap with filter range)
      const yearMatch = member.houseYears.some(yearRange => {
        const [start, end] = yearRange.split('-').map(year => parseInt(year));
        return (start >= filters.yearRange[0] && start <= filters.yearRange[1]) ||
               (end >= filters.yearRange[0] && end <= filters.yearRange[1]) ||
               (start <= filters.yearRange[0] && end >= filters.yearRange[1]);
      });

      return searchMatch && countryMatch && roleMatch && yearMatch;
    });

    // Add distance from user if location is available
    if (userLocation) {
      filtered = filtered.map(member => ({
        ...member,
        distanceFromUser: calculateDistance(
          userLocation.lat, userLocation.lng,
          member.lat, member.lon
        )
      }));
    }

    return filtered;
  }, [validMembers, filters, userLocation]);

  // Calculate statistics
  const stats = useMemo(() => {
    const countries = [...new Set(validMembers.map(m => m.country))];
    const cities = validMembers.map(m => m.currentCity);
    const cityCount = cities.reduce((acc, city) => {
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {});
    const mostCommonCity = Object.keys(cityCount).reduce((a, b) => 
      cityCount[a] > cityCount[b] ? a : b, '');

    // Calculate maximum distance between any two members
    let maxDistance = 0;
    for (let i = 0; i < validMembers.length; i++) {
      for (let j = i + 1; j < validMembers.length; j++) {
        const distance = calculateDistance(
          validMembers[i].lat, validMembers[i].lon,
          validMembers[j].lat, validMembers[j].lon
        );
        maxDistance = Math.max(maxDistance, distance);
      }
    }

    return {
      totalCountries: countries.length,
      totalMembers: validMembers.length,
      mostCommonCity,
      farthestDistance: Math.round(maxDistance),
      countries
    };
  }, [validMembers]);

  // Sort filtered members
  const sortMembers = (sortBy) => {
    const sorted = [...filteredMembers].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.fullName.localeCompare(b.fullName);
        case 'distance':
          return (a.distanceFromUser || Infinity) - (b.distanceFromUser || Infinity);
        case 'city':
          return a.currentCity.localeCompare(b.currentCity);
        default:
          return 0;
      }
    });
    return sorted;
  };

  return {
    filteredMembers,
    filters,
    setFilters,
    stats,
    sortMembers,
    userLocation
  };
};
