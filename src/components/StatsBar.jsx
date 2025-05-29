import React from 'react';

const StatsBar = ({ stats, filteredCount }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Members */}
        <div className="text-center">
          <div className="text-2xl font-bold">{filteredCount}</div>
          <div className="text-sm opacity-90">
            {filteredCount === stats.totalMembers ? 'Total Members' : 'Filtered Members'}
          </div>
          {filteredCount !== stats.totalMembers && (
            <div className="text-xs opacity-75">of {stats.totalMembers}</div>
          )}
        </div>

        {/* Countries */}
        <div className="text-center">
          <div className="text-2xl font-bold">{stats.totalCountries}</div>
          <div className="text-sm opacity-90">Countries</div>
          <div className="text-xs opacity-75">represented</div>
        </div>

        {/* Most Common City */}
        <div className="text-center">
          <div className="text-lg font-bold truncate" title={stats.mostCommonCity}>
            {stats.mostCommonCity}
          </div>
          <div className="text-sm opacity-90">Most Common</div>
          <div className="text-xs opacity-75">city</div>
        </div>

        {/* Farthest Distance */}
        <div className="text-center">
          <div className="text-2xl font-bold">
            {stats.farthestDistance.toLocaleString()}
          </div>
          <div className="text-sm opacity-90">Farthest Apart</div>
          <div className="text-xs opacity-75">km</div>
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mt-3 pt-3 border-t border-white/20">
        <div className="text-xs text-center opacity-90">
          🌍 Our co-op family spans {stats.totalCountries} countries! 
          {stats.farthestDistance > 15000 && " That's almost halfway around Earth! 🌏"}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
