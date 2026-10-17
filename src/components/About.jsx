import React from 'react';
import { Globe, Server, Smartphone, Database, Award, CheckCircle, Sparkles } from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';
import ShinyText from './reactbits/ShinyText';
import { personalInfo, stats, services } from '../data/portfolioData';

const iconMap = {
  Globe: Globe,
  Server: Server,
  Smartphone: Smartphone,
  Database: Database,
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <ShinyText text="About Me" color="#a5b4fc" shineColor="#ffffff" speed={2.5} className="text-xs font-semibold uppercase tracking-wider" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Engineering robust software with <span className="gradient-text">precision</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f1322]/60 border border-white/5 text-center backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300"
            >
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 mb-1">
                {stat.value}
              </p>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Services & What I Do */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-8 text-center sm:text-left flex items-center gap-2">
            <Award className="w-6 h-6 text-indigo-400" />
            What I Bring To The Table
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Globe;
              return (
                <SpotlightCard
                  key={index}
                  className="rounded-2xl p-7 bg-[#0f1322]/80 border border-white/10 backdrop-blur-md transition-all duration-300"
                  hsl="240 100% 70%"
                  intensity={0.65}
                  size={320}
                  borderGlow={1.4}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border border-white/10 text-indigo-400 flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white font-display mb-2">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
