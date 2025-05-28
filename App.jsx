import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Mock data
  const artists = [
    { id: 1, name: 'The Neon Waves', genre: 'Electronic', image: 'https://placehold.co/400x400?text=Neon+Waves ' },
    { id: 2, name: 'Velvet Mirage', genre: 'Indie Rock', image: 'https://placehold.co/400x400?text=Velvet+Mirage ' },
    { id: 3, name: 'Solar Drift', genre: 'Synthwave', image: 'https://placehold.co/400x400?text=Solar+Drift ' },
  ];

  const releases = [
    { id: 1, title: 'Echoes in Static', artist: 'The Neon Waves', cover: 'https://placehold.co/300x300?text=Echoes+in+Static ' },
    { id: 2, title: 'Dreams Beneath Neon Lights', artist: 'Velvet Mirage', cover: 'https://placehold.co/300x300?text=Dreams+Beneath+Neon ' },
    { id: 3, title: 'Retrograde', artist: 'Solar Drift', cover: 'https://placehold.co/300x300?text=Retrograde ' },
  ];

  const events = [
    { id: 1, name: 'Festival of Lights', location: 'Los Angeles, CA', date: 'July 20, 2025' },
    { id: 2, name: 'Neon Nights Festival', location: 'Berlin, Germany', date: 'August 5, 2025' },
    { id: 3, name: 'Summer Synth Bash', location: 'Tokyo, Japan', date: 'September 12, 2025' },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">SonicVerse</h1>
          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
            <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
              Home
            </button>
            <button onClick={() => setActiveTab('artists')} className={activeTab === 'artists' ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
              Artists
            </button>
            <button onClick={() => setActiveTab('releases')} className={activeTab === 'releases' ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
              Releases
            </button>
            <button onClick={() => setActiveTab('events')} className={activeTab === 'events' ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
              Events
            </button>
            <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? 'text-white' : 'text-gray-400 hover:text-white transition'}>
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeTab === 'home' && (
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Where Sound Meets Vision.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover groundbreaking artists, immersive releases, and unforgettable live experiences curated by SonicVerse Records.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#!" className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
              Explore Artists
            </a>
            <a href="#!" className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-black transition">
              View Upcoming Events
            </a>
          </div>
        </section>
      )}

      {/* Artists Section */}
      {activeTab === 'artists' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Featured Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div key={artist.id} className="bg-gray-900 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 shadow-lg">
                <img src={artist.image} alt={artist.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{artist.name}</h3>
                  <p className="text-gray-400">{artist.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Releases Section */}
      {activeTab === 'releases' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Latest Releases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {releases.map((release) => (
              <div key={release.id} className="flex flex-col items-center text-center">
                <img src={release.cover} alt={release.title} className="w-40 h-40 md:w-48 md:h-48 rounded-lg shadow-md object-cover" />
                <h3 className="mt-4 text-lg font-semibold">{release.title}</h3>
                <p className="text-gray-400">{release.artist}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Events Section */}
      {activeTab === 'events' && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Upcoming Events</h2>
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-gray-900 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-lg hover:bg-gray-800 transition">
                <div>
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <p className="text-gray-400">{event.location}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{event.date}</p>
                  <a href="#!" className="text-sm mt-2 inline-block text-white underline hover:no-underline">Get Tickets</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeTab === 'contact' && (
        <section className="py-20 px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-left text-sm text-gray-400 mb-1">Name</label>
              <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-left text-sm text-gray-400 mb-1">Email</label>
              <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-left text-sm text-gray-400 mb-1">Message</label>
              <textarea rows="5" className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
              Send Message
            </button>
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SonicVerse Records. All rights reserved.
      </footer>
    </div>
  );
}
