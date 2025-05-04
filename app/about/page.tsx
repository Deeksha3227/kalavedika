"use client";
import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen w-full font-sans flex flex-col overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/about.jpg')] bg-cover bg-center -z-10"></div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-md px-4 md:px-8 py-4 flex justify-between items-center z-10">
        <img src="/ajiet-logo.svg" alt="AJIET Logo" className="h-15 w-auto" />
        <nav className="hidden md:flex space-x-6 md:space-x-8">
          <a href="/" className="text-gray-800 hover:text-gray-600 transition">Home</a>
          <a href="/about" className="text-gray-800 hover:text-gray-600 transition">About</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 text-center">
        <div className="bg-white/80 p-8 rounded-lg shadow-md max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">About Kalavedika</h1>
          <p className="text-gray-700 text-lg">
            Kalavedika is a cultural platform created to encourage creativity, collaboration,
            and celebration of art and talent at AJIET. Our goal is to bring students together through
            meaningful experiences and cultural expressions.
          </p>
        </div>
      </main>
       {/* Footer always at the bottom */}
       <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Your Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
