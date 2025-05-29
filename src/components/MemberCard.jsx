import React from 'react';

const MemberCard = ({ member, isSelected, onClick }) => {
  if (!member) {
    return (
      <div className="member-card text-center text-gray-500 dark:text-gray-400">
        <p>Select a member from the map or list to view details</p>
      </div>
    );
  }

  return (
    <div 
      className={`member-card cursor-pointer transition-all duration-200 ${
        isSelected ? 'ring-2 ring-blue-500 shadow-lg' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {member.fullName}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            📍 {member.currentCity}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            🌍 {member.country}
          </p>
        </div>
        <div className="text-right">
          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
            member.role === 'Current Resident' 
              ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
              : 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
          }`}>
            {member.role}
          </span>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">House Years:</span>
          <span className="text-gray-900 dark:text-white">
            {member.houseYears.join(', ')}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Cornell Years:</span>
          <span className="text-gray-900 dark:text-white">
            {member.cornellYears.join(', ')}
          </span>
        </div>
        {member.distanceFromUser && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">Distance from you:</span>
            <span className="text-gray-900 dark:text-white">
              {Math.round(member.distanceFromUser)} km
            </span>
          </div>
        )}
      </div>

      {/* Coordinates for debugging */}
      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {member.lat.toFixed(4)}, {member.lon.toFixed(4)}
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
