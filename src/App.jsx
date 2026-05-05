import { useState } from 'react'
import profileImage from './assets/myimg.jpg'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const coreSkills = [
  'Retrieval-Augmented Generation (RAG)',
  'Large Language Models (LLMs)',
  'LLM Fine-Tuning (LoRA, QLoRA)',
  'Prompt Engineering',
  'Multi-Agent Systems',
  'AI Agent Development',
  'Conversational AI',
  'On-Premise AI Deployment',
  'Workflow Automation (n8n)',
  'MCP Server Architecture',
  'Python',
  'JavaScript',
  'API Development and Integration',
  'CI/CD (Jenkins, GitLab CI)',
  'Docker and Virtualization',
  'Cybersecurity and Data Governance',
  'Selenium, Appium, Playwright',
  'RestAssured, Postman, JMeter',
]

const experience = [
  {
    role: 'Development Expert / Automation AI Architect',
    company: 'Government Center - Riyadh',
    period: 'Dec 2016 - Present',
    points: [
      'Designed and implemented enterprise automation frameworks for web, mobile, and API platforms.',
      'Architected and deployed RAG-based AI knowledge systems for internal enterprise use.',
      'Built multi-agent AI systems to automate operational and business processes.',
      'Implemented LLM customization techniques including LoRA and parameter-efficient fine-tuning.',
      'Deployed secure on-premise LLM environments aligned with data sovereignty requirements.',
      'Integrated AI workflows into CI/CD pipelines and enterprise DevOps environments.',
      'Led QA automation initiatives using Selenium, Appium, and Playwright.',
    ],
  },
  {
    role: 'Technical Support Engineer',
    company: 'First Information Technology - Riyadh',
    period: 'Apr 2014 - Dec 2016',
    points: [
      'Supported and optimized high-traffic enterprise web platforms.',
      'Conducted functional, integration, and performance testing.',
      'Contributed to automation framework enhancements.',
    ],
  },
  {
    role: 'Technical Support Specialist',
    company: 'Al-Rawdah Limited Company - Jeddah',
    period: 'Jan 2014 - Apr 2014',
    points: ['Delivered hardware and software technical support and troubleshooting.'],
  },
]

const nvidiaSpecialization = [
  'Building RAG Agents with LLMs',
  'Efficient Large Language Model Customization',
  'Building LLM Applications with Prompt Engineering',
  'Rapid Application Development with Large Language Models',
  'Building Conversational AI Applications',
  'Generative AI with Diffusion Models',
  'Getting Started with Deep Learning',
  'Accelerating End-to-End Data Science Workflows',
]

const certifications = [
  'CompTIA Security+',
  'Google IT Automation with Python',
  'Website Development Bootcamp using Python',
  'Python Programming - Fundamental to Advanced',
  'Security Intelligence - IBM / King Saud University',
  'Certified Social Media Manager',
  'Certified Digital Marketing Manager',
  'Data Leakage and Personal Data Protection System',
  'Big Data',
  'Machine Learning Algorithms',
]

const education = [
  { title: "Master's Degree in Cyber Security", year: '2024' },
  { title: "Bachelor's Degree in Computer Engineering", year: '2014' },
  { title: 'Diploma in Technical Support', year: '2010' },
]

const agentCapabilities = [
  {
    title: 'Autonomous AI Workflows',
    metric: '24/7',
    text: 'Designing intelligent agents that execute, monitor, and improve enterprise processes.',
  },
  {
    title: 'Secure RAG Intelligence',
    metric: 'RAG',
    text: 'Building trusted knowledge systems with retrieval, governance, and enterprise controls.',
  },
  {
    title: 'LLM Customization',
    metric: 'LoRA',
    text: 'Adapting models with parameter-efficient fine-tuning for domain-specific outcomes.',
  },
  {
    title: 'Multi-Agent Operations',
    metric: 'MCP',
    text: 'Connecting tools, APIs, and agents into coordinated digital operating systems.',
  },
]

const commandSignals = ['RAG ONLINE', 'LLM READY', 'AGENTS SYNCED', 'SECURE DEPLOYMENT']

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveSection(id)
    setMenuOpen(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="agent-orb left-[-12rem] top-24 h-96 w-96 bg-cyan-400/20" />
        <div className="agent-orb right-[-10rem] top-48 h-[30rem] w-[30rem] bg-blue-500/20" />
        <div className="agent-orb bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] bg-teal-300/14" />
        <div className="neural-grid absolute inset-0" />
        <div className="scan-lines absolute inset-0" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to top"
          >
            <img
              src={profileImage}
              alt="Saud Alghamdi"
              className="h-11 w-11 rounded-full border border-cyan-300/40 object-cover shadow-lg shadow-cyan-950/40"
            />
            <span>
              <span className="block text-sm font-black uppercase tracking-[0.26em] text-white">
                Saud
              </span>
              <span className="block text-xs font-semibold text-cyan-300 transition group-hover:text-cyan-200">
                Global AI Agent
              </span>
            </span>
          </button>

          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                  activeSection === item.id
                    ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <a
            href="mailto:saudallosh@gmail.com"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-black text-slate-950 shadow-xl shadow-cyan-950/20 transition hover:-translate-y-0.5 hover:bg-cyan-200 md:inline-flex"
          >
            Hire Me
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-black text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-bold text-slate-200 transition hover:bg-white/10 hover:text-cyan-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="about" className="scroll-mt-28 px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="section-label mb-5">Global AI Agent Architect</p>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl xl:text-8xl">
                Saud Alghamdi
              </h1>
              <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-cyan-100">
                <span className="live-dot" />
                Enterprise AI Agent Command Center
              </div>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Automation AI Engineer with over 10 years of experience in automation architecture,
                AI-powered systems, and digital transformation within enterprise and government
                environments.
              </p>

              <div className="agent-console mt-8 rounded-[2rem] border border-cyan-300/20 bg-slate-950/60 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                    agent.runtime
                  </span>
                </div>
                <div className="grid gap-3 text-sm font-bold text-slate-300 sm:grid-cols-2">
                  {commandSignals.map((signal) => (
                    <div key={signal} className="console-line rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <span className="text-cyan-300">$</span> {signal}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:saudallosh@gmail.com"
                  className="rounded-full bg-cyan-300 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-2xl shadow-cyan-950/40 transition hover:-translate-y-1 hover:bg-cyan-200"
                >
                  Contact Me
                </a>
                <a
                  href="tel:+966541428731"
                  className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:border-cyan-200/60 hover:bg-white/10"
                >
                  Call Now
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ['10+', 'Years Experience'],
                  ['Riyadh', 'Saudi Arabia'],
                  ['AI + Cyber', 'Engineering Focus'],
                ].map(([value, label]) => (
                  <div key={label} className="glass-panel rounded-3xl p-5">
                    <p className="text-3xl font-black text-white">{value}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md animate-fade-up lg:max-w-lg">
              <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" />
              <div className="orbit-ring absolute left-1/2 top-1/2 hidden h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 lg:block" />
              <div className="glass-panel animate-pulse-border relative rounded-[2.5rem] p-4">
                <img
                  src={profileImage}
                  alt="Portrait of Saud Alghamdi"
                  className="h-[34rem] w-full rounded-[2rem] object-cover object-top shadow-2xl"
                />
                <div className="image-scan absolute inset-4 rounded-[2rem]" />
                <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                    Specialized In
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">RAG, LLMs, Multi-Agent Systems</p>
                </div>
              </div>
              <div className="animate-float-soft absolute -right-5 top-10 hidden rounded-3xl border border-cyan-300/30 bg-cyan-300 px-5 py-4 text-slate-950 shadow-2xl lg:block">
                <p className="text-xs font-black uppercase tracking-[0.2em]">NVIDIA AI</p>
                <p className="text-2xl font-black">2025</p>
              </div>
              <div className="animate-float-soft absolute -left-7 bottom-24 hidden rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-white shadow-2xl backdrop-blur-xl lg:block">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">Agent Status</p>
                <p className="mt-1 text-2xl font-black">Operational</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-10 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              ['AI Systems', 'RAG knowledge platforms, LLM customization, AI agents, and conversational AI.'],
              ['Secure Deployment', 'On-premise LLM environments aligned with data sovereignty and governance.'],
              ['Automation Leadership', 'Enterprise automation frameworks, CI/CD integration, and QA excellence.'],
            ].map(([title, text]) => (
              <article key={title} className="glass-panel rounded-[2rem] p-7 transition hover:-translate-y-2 hover:border-cyan-300/40">
                <p className="text-lg font-black text-white">{title}</p>
                <p className="mt-4 leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="section-label">Global Agent Layer</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
                  A professional AI agent operating layer for modern enterprises.
                </h2>
              </div>
              <p className="max-w-2xl leading-8 text-slate-300 lg:ml-auto">
                The portfolio now presents Saud as a global AI agent architect: combining secure
                data access, LLM orchestration, workflow automation, and multi-agent execution into
                reliable enterprise systems.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {agentCapabilities.map((item, index) => (
                <article
                  key={item.title}
                  className="agent-card glass-panel rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-cyan-300/50"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="mb-8 flex items-center justify-between">
                    <span className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
                      {item.metric}
                    </span>
                    <span className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.75)]" />
                  </div>
                  <h3 className="text-xl font-black text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="section-label">Core Skills</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Enterprise AI, automation, and cybersecurity expertise.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300 hover:text-slate-950"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="section-label">Professional Experience</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Building secure automation and AI platforms since 2014.
              </h2>
              <div className="space-y-5">
                {experience.map((job) => (
                  <article key={job.role} className="glass-panel rounded-[2rem] p-7">
                    <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-white">{job.role}</h3>
                        <p className="mt-2 font-bold text-cyan-200">{job.company}</p>
                      </div>
                      <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-slate-300">
                        {job.period}
                      </span>
                    </div>
                    <div className="mt-5 grid gap-3">
                      {job.points.map((point) => (
                        <p key={point} className="leading-7 text-slate-300">
                          <span className="mr-3 text-cyan-300">/</span>
                          {point}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300 p-8 text-slate-950 md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em]">NVIDIA AI Engineering Specialization - 2025</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {nvidiaSpecialization.map((item) => (
                <div key={item} className="rounded-3xl bg-slate-950/90 p-5 text-sm font-bold leading-6 text-cyan-50">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="scroll-mt-28 px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div>
              <p className="section-label">Education</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                Computer engineering foundation with cybersecurity depth.
              </h2>
              <div className="mt-8 space-y-4">
                {education.map((item) => (
                  <div key={item.title} className="glass-panel flex items-center justify-between rounded-3xl p-6">
                    <p className="font-black text-white">{item.title}</p>
                    <span className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="section-label">Certifications</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div key={cert} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 font-bold text-slate-200">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl md:p-14">
            <p className="section-label">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
              Let's build secure, intelligent automation.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              Available for AI architecture, automation strategy, RAG systems, secure LLM deployment,
              and enterprise digital transformation initiatives.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="mailto:saudallosh@gmail.com"
                className="rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-200"
              >
                saudallosh@gmail.com
              </a>
              <a
                href="tel:+966541428731"
                className="rounded-full border border-white/15 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                +966 54 142 8731
              </a>
            </div>
            <div className="mt-8 flex justify-center gap-4 text-sm font-bold text-slate-400">
              <span>Arabic - Native</span>
              <span>|</span>
              <span>English - Advanced</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm font-semibold text-slate-500">
        <p>Copyright 2026 Saud Alghamdi. Professional AI Engineering Portfolio.</p>
      </footer>
    </div>
  )
}

export default App
