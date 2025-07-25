
import React from 'react';
import TopNav from '@/components/TopNav';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <div className="flex bg-slate-900 text-white min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 p-6 space-y-12 max-w-5xl">
        <TopNav />
        <section id="about"><h2 className="text-2xl font-bold mb-2">About Me</h2><p>I build infrastructure & DevOps platforms across Azure, AWS, and Terraform.</p></section>
      </main>
    </div>
  );
}
