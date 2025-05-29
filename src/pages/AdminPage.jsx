import React from 'react';
import AdminPanel from '../components/AdminPanel';

const AdminPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Add New Member
        </h1>
        
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Instructions:</strong> Fill out the form below to generate JSON for a new member. 
            Copy the generated JSON and add it to the <code>coop_members.json</code> file, 
            then submit a pull request to update the live site.
          </p>
        </div>

        <AdminPanel />
      </div>
    </div>
  );
};

export default AdminPage;
