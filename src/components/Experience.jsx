import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import ShinyText from './reactbits/ShinyText';
import { experiences, education } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#090c15]/60">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <ShinyText text="Career Pathway" color="#c084fc" shineColor="#ffffff" speed={2.5} className="text-xs font-semibold uppercase tracking-wider" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Work Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="mt-4 text-base text-gray-400">
            A track record of engineering backend microservices and modern frontend products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Work Experience Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Experience</h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <SpotlightCard
                  key={index}
                  className="rounded-2xl p-7 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md transition-all duration-300"
                  hsl="270 95% 70%"
                  intensity={0.6}
                  size={360}
                  borderGlow={1.3}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="text-lg font-bold text-white font-display">
                      {exp.role}
                    </h4>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-pink-500/15 border border-pink-500/30 text-pink-300">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-indigo-400 font-semibold text-sm mb-3">
                    {exp.company}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      {exp.location}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-300">
                      {exp.type}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Education Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <SpotlightCard
                  key={index}
                  className="rounded-2xl p-6 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md transition-all duration-300"
                  hsl="320 90% 70%"
                  intensity={0.55}
                  size={320}
                  borderGlow={1.2}
                >
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3 inline-block">
                    {edu.grade}
                  </span>
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-indigo-300 font-medium mb-3">
                    {edu.field}
                  </p>
                  <p className="text-xs text-gray-400 mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-white/5">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                  </div>
                </SpotlightCard>
              ))}

              {/* Core Competencies Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-pink-950/30 border border-white/10">
                <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  Architecture Principles
                </h5>
                <div className="flex flex-wrap gap-2">
                  {['Microservices', 'Event-Driven (Kafka)', 'RESTful APIs', 'MVC Design', 'Database Migrations', 'CI/CD Automation'].map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
