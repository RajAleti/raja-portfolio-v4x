
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 bg-slate-950 text-white p-6 sticky top-0 h-screen shadow-md">
      <div className="text-xl font-bold mb-8">Raja Aleti</div>
      <nav className="space-y-4 text-sm">
        <a href="#about" className="block hover:underline">About</a>
        <a href="#skills" className="block hover:underline">Skills</a>
        <a href="#projects" className="block hover:underline">Projects</a>
        <a href="#experience" className="block hover:underline">Experience</a>
        <a href="#contact" className="block hover:underline">Contact</a>
      </nav>
    </aside>
  );
}
