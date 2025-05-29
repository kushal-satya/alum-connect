import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Co-op Constellations
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            Connecting our Cornell co-op family across the globe 🌍
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mission */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Co-op Constellations is an interactive dashboard that helps current and former 
            residents of our Cornell cooperative visualize where everyone has ended up around 
            the world. Whether you're looking to reconnect with old housemates, planning a 
            trip, or just curious about our global reach, this tool makes it easy to explore 
            our community's geographic footprint.
          </p>
        </div>

        {/* How to Add Yourself */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Add Yourself to the Map 📍
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to appear on the constellation? It's easy! Just submit a pull request with 
            your information.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Quick Steps:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Fork the repository on GitHub</li>
              <li>Edit <code className="bg-gray-200 dark:bg-gray-600 px-1 rounded">src/data/coop_members.json</code></li>
              <li>Add your entry using the format below</li>
              <li>Submit a pull request</li>
              <li>Celebrate being part of the constellation! ✨</li>
            </ol>
          </div>

          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
            JSON Format:
          </h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "fullName": "Your Name",
  "lat": 40.7128,
  "lon": -74.0060,
  "currentCity": "New York, NY",
  "country": "USA", 
  "houseYears": ["2019-2021"],
  "cornellYears": ["2017-2021"],
  "role": "Alum"
}`}
          </pre>

          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              💡 Pro Tips:
            </h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-300">
              <li>Use <a href="https://www.latlong.net/" className="underline">latlong.net</a> to find your coordinates</li>
              <li>Role can be "Current Resident" or "Alum"</li>
              <li>Years format: ["2019-2021"] for multi-year ranges</li>
              <li>Double-check your lat/lon values (-90 to 90 for lat, -180 to 180 for lon)</li>
            </ul>
          </div>

          <div className="mt-4">
            <a 
              href="https://github.com/kushal-satya/alum-connect" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 transition-colors duration-200"
            >
              🚀 Add Yourself on GitHub
            </a>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technical Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Built With:
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>⚛️ React + Vite</li>
                <li>🗺️ Leaflet + OpenStreetMap</li>
                <li>🎨 Tailwind CSS</li>
                <li>📱 Mobile-first design</li>
                <li>🌙 Dark mode support</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Features:
              </h3>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>🔍 Smart filtering & search</li>
                <li>📊 Real-time statistics</li>
                <li>🎯 Marker clustering</li>
                <li>📏 Distance calculations</li>
                <li>🔄 Auto-deployment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Questions or Issues?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            If you're having trouble adding yourself or notice any bugs, please:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Open an issue on GitHub</li>
            <li>Reach out to current house tech folks</li>
            <li>Ask in the house Slack/Discord</li>
          </ul>
          
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <p className="text-green-800 dark:text-green-300 text-sm">
              🏡 <strong>Remember:</strong> This project is maintained by volunteers from our co-op community. 
              Thanks for helping keep our constellation bright! ⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
