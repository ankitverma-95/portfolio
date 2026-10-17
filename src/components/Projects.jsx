import React, { useState } from 'react';
import { ExternalLink, FolderGit2, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from './Icons';
import SpotlightCard from './reactbits/SpotlightCard';
import ShinyText from './reactbits/ShinyText';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-Stack', 'AI & Full-Stack', 'Mobile', 'Backend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#090c15]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <ShinyText text="Featured Work" color="#818cf8" shineColor="#ffffff" speed={2.5} className="text-xs font-semibold uppercase tracking-wider" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Crafted with Code & <span className="gradient-text">Architecture</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            Selected full-stack web applications, AI integrations, and mobile engineering projects.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-indigo-600 to-pink-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-[#0f1322] border border-white/5 text-gray-400 hover:text-white hover:border-white/15'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              className="rounded-2xl p-6 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]"
              hsl="250 90% 70%"
              intensity={0.65}
              size={340}
              borderGlow={1.3}
            >
              <div>
                {/* Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/15 border border-indigo-500/30 text-indigo-300">
                        Featured
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Category */}
                <h3 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-[11px] font-medium text-pink-400 uppercase tracking-wider block mb-3">
                  {project.category}
                </span>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tags & Action Footer */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View Source Code
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
