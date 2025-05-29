import React, { useState, useEffect } from 'react';
import MapView from '../components/MapView';
import FilterPanel from '../components/FilterPanel';
import MemberCard from '../components/MemberCard';
import StatsBar from '../components/StatsBar';
import { useFilteredMembers } from '../hooks/useFilteredMembers';
import membersData from '../data/coop_members.json';

const Home = () => {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [sortBy, setSortBy] = useState('name');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load member data
  useEffect(() => {
    try {
      setMembers(membersData);
      setLoading(false);
    } catch (err) {
      console.error('Failed to load member data:', err);
      setError('Failed to load member data');
      setLoading(false);
    }
  }, []);

  const {
    filteredMembers: _filteredMembers,
    filters,
    setFilters,
    stats,
    sortMembers
  } = useFilteredMembers(members);

  const sortedMembers = sortMembers(sortBy);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading co-op constellation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">{error}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            No data yet - time to add some co-op members! 🌍
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Co-op Constellations ✨
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cornell Co-op Alumni Dashboard
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {sortedMembers.length} of {stats.totalMembers} members shown
            </div>
          </div>
        </div>
      </header>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <StatsBar stats={stats} filteredCount={sortedMembers.length} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters */}
          <div className="lg:col-span-1">
            <FilterPanel 
              filters={filters} 
              setFilters={setFilters} 
              stats={stats} 
            />
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
              <div className="h-96">
                <MapView 
                  members={sortedMembers} 
                  onMemberSelect={setSelectedMember}
                  selectedMember={selectedMember}
                />
              </div>
            </div>
          </div>

          {/* Member Details */}
          <div className="lg:col-span-1">
            <MemberCard 
              member={selectedMember} 
              isSelected={true}
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Member List */}
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Member List
                </h2>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="name">Sort by Name</option>
                  <option value="city">Sort by City</option>
                  <option value="distance">Sort by Distance</option>
                </select>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {sortedMembers.map((member, index) => (
                  <MemberCard
                    key={`${member.fullName}-${index}`}
                    member={member}
                    isSelected={selectedMember?.fullName === member.fullName}
                    onClick={() => setSelectedMember(member)}
                  />
                ))}
              </div>
              {sortedMembers.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">
                    No members match your filters. Try adjusting them! 🔍
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
