import React from 'react';
import { Code, Layers, Database, Wrench, Sparkles } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import ShinyText from './reactbits/ShinyText';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <ShinyText text="Technical Arsenal" color="#f472b6" shineColor="#ffffff" speed={2.5} className="text-xs font-semibold uppercase tracking-wider" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A comprehensive overview of my programming proficiencies, frameworks, and developer tooling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Languages */}
          <SpotlightCard
            className="rounded-2xl p-6 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md"
            hsl="220 90% 70%"
            intensity={0.6}
            size={320}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Languages</h3>
            </div>
            <div className="space-y-4">
              {skillsData.languages.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Frameworks & Tech */}
          <SpotlightCard
            className="rounded-2xl p-6 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md"
            hsl="270 90% 70%"
            intensity={0.6}
            size={320}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Frameworks</h3>
            </div>
            <div className="space-y-4">
              {skillsData.frameworks.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* Databases & Storage */}
          <SpotlightCard
            className="rounded-2xl p-6 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md"
            hsl="320 90% 70%"
            intensity={0.6}
            size={320}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">Databases</h3>
            </div>
            <div className="space-y-4">
              {skillsData.databases.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-pink-400">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        {/* Tools & DevOps Chips */}
        <div className="p-8 rounded-2xl bg-[#0f1322]/50 border border-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-5 h-5 text-indigo-400" />
            <h4 className="text-base font-bold text-white font-display">Tools, DevOps & Cloud Ecosystem</h4>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {skillsData.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white/5 hover:bg-indigo-500/15 border border-white/10 hover:border-indigo-500/40 text-gray-300 hover:text-white transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
