import React, { useState } from 'react';

const AdminPanel = ({ onAddMember }) => {
  const [member, setMember] = useState({
    fullName: '',
    lat: '',
    lon: '',
    currentCity: '',
    country: '',
    houseYears: '',
    cornellYears: '',
    role: 'Alum'
  });

  const [generatedJSON, setGeneratedJSON] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMember = {
      fullName: member.fullName,
      lat: parseFloat(member.lat),
      lon: parseFloat(member.lon),
      currentCity: member.currentCity,
      country: member.country,
      houseYears: [member.houseYears],
      cornellYears: [member.cornellYears],
      role: member.role
    };

    const json = JSON.stringify(newMember, null, 2);
    setGeneratedJSON(json);
  };

  const handleGeocodeCity = async () => {
    if (!member.currentCity) return;
    
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(member.currentCity)}`
      );
      const data = await response.json();
      
      if (data && data[0]) {
        setMember(prev => ({
          ...prev,
          lat: parseFloat(data[0].lat).toFixed(4),
          lon: parseFloat(data[0].lon).toFixed(4)
        }));
      }
    } catch (error) {
      alert('Error geocoding city. Please enter coordinates manually.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        🔧 Add New Member
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={member.fullName}
            onChange={(e) => setMember(prev => ({ ...prev, fullName: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Current City *
            </label>
            <div className="flex">
              <input
                type="text"
                required
                value={member.currentCity}
                onChange={(e) => setMember(prev => ({ ...prev, currentCity: e.target.value }))}
                className="mt-1 block w-full rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., Boston, MA"
              />
              <button
                type="button"
                onClick={handleGeocodeCity}
                className="mt-1 px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 text-sm"
              >
                📍
              </button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Country *
            </label>
            <input
              type="text"
              required
              value={member.country}
              onChange={(e) => setMember(prev => ({ ...prev, country: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., USA"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Latitude *
            </label>
            <input
              type="number"
              step="any"
              required
              value={member.lat}
              onChange={(e) => setMember(prev => ({ ...prev, lat: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Longitude *
            </label>
            <input
              type="number"
              step="any"
              required
              value={member.lon}
              onChange={(e) => setMember(prev => ({ ...prev, lon: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              House Years *
            </label>
            <input
              type="text"
              required
              value={member.houseYears}
              onChange={(e) => setMember(prev => ({ ...prev, houseYears: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., 2020-2022"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Cornell Years *
            </label>
            <input
              type="text"
              required
              value={member.cornellYears}
              onChange={(e) => setMember(prev => ({ ...prev, cornellYears: e.target.value }))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., 2018-2022"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Role *
          </label>
          <select
            value={member.role}
            onChange={(e) => setMember(prev => ({ ...prev, role: e.target.value }))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="Alum">Alum</option>
            <option value="Current Resident">Current Resident</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Generate JSON
        </button>
      </form>

      {generatedJSON && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Generated JSON (copy this):
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm overflow-x-auto">
            {generatedJSON}
          </pre>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            💡 Copy this JSON and add it to the coop_members.json file, then commit to GitHub
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
