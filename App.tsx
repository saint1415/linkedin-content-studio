
import React, { useState } from 'react';
import ArtworkGenerator from './components/ArtworkGenerator';
import PostGenerator from './components/PostGenerator';
import { Tabs, Tab } from './components/ui/Tabs';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <header className="py-6 px-4 sm:px-8 bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <svg className="w-10 h-10 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.1-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 012.8-1.55C16.4 9.75 19 11.9 19 15.5z"></path>
                </svg>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  LinkedIn Content Studio
                </h1>
            </div>
        </div>
      </header>
      <main className="py-8 sm:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Create stunning, copyright-safe visuals and engaging text posts for your LinkedIn presence. Select a tool below to get started.
          </p>
          <Tabs>
            <Tab label="Artwork Generator">
              <ArtworkGenerator />
            </Tab>
            <Tab label="Post Generator">
              <PostGenerator />
            </Tab>
          </Tabs>
        </div>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        <p>Powered by AI. Generated content should be reviewed for accuracy.</p>
      </footer>
    </div>
  );
};

export default App;
