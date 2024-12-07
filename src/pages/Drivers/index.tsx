import React from 'react';
import { Plus } from 'lucide-react';
import { DriverList } from './DriverList';

export function Drivers() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Driver Management</h1>
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          <Plus className="h-5 w-5 mr-2" />
          Add Driver
        </button>
      </div>
      <DriverList />
    </div>
  );
}