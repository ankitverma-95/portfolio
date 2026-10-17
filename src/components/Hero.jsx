import React from 'react';
import { Download, Mail, ArrowRight, Sparkles, MapPin, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Aurora from './reactbits/Aurora';
import Particles from './reactbits/Particles';
import ShinyText from './reactbits/ShinyText';
import BlurText from './reactbits/BlurText';
import DecryptedText from './reactbits/DecryptedText';
import Magnet from './reactbits/Magnet';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Aurora Background Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <Aurora
          colorStops={['#6366f1', '#a855f7', '#ec4899', '#3b82f6']}
          amplitude={1.2}
          blend={0.6}
          speed={0.6}
        />
      </div>

      {/* Floating Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Particles
          particleCount={60}
          particleSpread={8}
          speed={0.12}
          particleColors={['#818cf8', '#c084fc', '#f472b6']}
          particleBaseSize={100}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <ShinyText
              text="Available for Software Engineering Roles"
              color="#9ca3af"
              shineColor="#ffffff"
              speed={3}
              className="text-xs font-medium"
            />
          </div>

          {/* Heading with BlurText */}
          <div className="mb-3">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-display">
              Hi, I'm <span className="gradient-text">Ankit Verma</span>
            </h1>
          </div>

          {/* Dynamic Subtitle with DecryptedText */}
          <div className="flex items-center gap-2 text-xl sm:text-2xl font-semibold text-indigo-300 font-display mb-4">
            <Terminal className="w-5 h-5 text-indigo-400 inline" />
            <DecryptedText
              text="Full Stack Developer & Java Specialist"
              speed={35}
              maxIterations={15}
              animateOn="view"
              revealDirection="start"
              className="font-medium tracking-tight"
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed mb-8">
            Specializing in scalable microservices, high-performance backends with{' '}
            <span className="text-white font-semibold">Java Spring Boot</span> &{' '}
            <span className="text-white font-semibold">Node.js</span>, and fluid, responsive interfaces with{' '}
            <span className="text-white font-semibold">React, Next.js</span> &{' '}
            <span className="text-white font-semibold">Flutter</span>.
          </p>

          {/* Action CTAs with Magnet */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <Magnet padding={45} activeIntensity={0.25}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 text-sm"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>
            </Magnet>

            <Magnet padding={45} activeIntensity={0.25}>
              <a
                href={personalInfo.resumeUrl}
                download="AnkitVerma_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md shadow-sm transition-all transform hover:-translate-y-0.5 text-sm"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                Download CV
              </a>
            </Magnet>

            <Magnet padding={35} activeIntensity={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-gray-300 hover:text-white bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-sm"
              >
                <Mail className="w-4 h-4 text-pink-400" />
                Contact Me
              </a>
            </Magnet>
          </div>

          {/* Social Links & Meta */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <span className="h-4 w-[1px] bg-white/10"></span>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Floating Interactive Badges */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
            {/* Glowing Accent Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/30 blur-2xl animate-pulse-slow"></div>
            
            {/* Outer Border Ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl shadow-indigo-500/30">
              <div className="w-64 h-64 sm:w-76 sm:h-76 rounded-full bg-[#090c15] p-2 overflow-hidden flex items-center justify-center relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full filter contrast-105 transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/img/user.svg';
                  }}
                />
              </div>
            </div>

            {/* Floating Mini Badges */}
            <div className="absolute -top-2 -right-2 bg-[#0f1322]/90 border border-indigo-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-float">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-xs">
                ☕
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-medium">Core Stack</p>
                <p className="text-xs text-white font-semibold">Java & Spring Boot</p>
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 bg-[#0f1322]/90 border border-pink-500/30 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-2.5 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold text-xs">
                ⚛️
              </div>
              <div className="text-left">
                <p className="text-[11px] text-gray-400 font-medium">Frontend</p>
                <p className="text-xs text-white font-semibold">React & Next.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
