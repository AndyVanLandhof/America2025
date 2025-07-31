"use client"

import { useState } from "react"

export default function HolidayItinerary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">🇺🇸 American Tour 2025</h1>
        <p className="text-xl text-gray-600 mb-8">July 31 - August 25, 2025 • Multi-Destination Journey</p>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Trip Overview</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Beverly Hills Hotel (6 nights)</li>
            <li>• Beach House, Hermosa Beach (1 night)</li>
            <li>• Rosewood Kona (5 nights)</li>
            <li>• Four Seasons Lanai (5 nights)</li>
            <li>• Ritz Carlton Santa Barbara (3 nights)</li>
            <li>• Yosemite National Park (3 nights)</li>
            <li>• Ritz Carlton San Francisco (2 nights)</li>
          </ul>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">Your luxury American adventure awaits!</p>
        </div>
      </div>
    </div>
  )
}
