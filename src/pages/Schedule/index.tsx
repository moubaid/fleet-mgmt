import React from 'react';
import { Calendar as CalendarIcon } from 'lucide-react';

export function Schedule() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Schedule</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center justify-center h-64">
          <div className="text-center text-gray-500">
            <CalendarIcon className="mx-auto h-12 w-12 mb-4" />
            <p>Calendar view coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
}