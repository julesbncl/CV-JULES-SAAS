import React, { useEffect, useRef, useState } from 'react';
import { 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Terminal, 
  Cpu, 
  Database, 
  Send,
  ExternalLink,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Code2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Données personnalisées de Jules
const PROFILE = {
  name: "Jules",
  title: "Développeur Full Stack & UI/UX Designer",
  status: "DISPONIBLE POUR NOUVEAUX DÉFIS",
  city: "Paris & International (Remote)",
  experienceYears: "8+",
  projectsCount: "45+",
  bio: "Ingénieur logiciel senior orienté architecture, scalabilité et expérience utilisateur premium avec une vision produit globale. Passionné par l'alliance entre rigueur technique, performance logicielle et raffinement visuel.",
  email: "contact@jules-dev.io",
  phone: "+33 6 12 34 56 78",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
};

const EXPERIENCES = [
  {
    period: "2022 — PRÉSENT",
    role: "Tech Lead & Architecte",
    company: "CloudScale Systems",
    location: "Paris / Remote",
    description: "Direction technique d'une équipe de 8 ingénieurs. Conception d'architectures cloud résilientes et hautement disponibles, migration vers micro-services et refonte complète des plateformes web pour 500k+ utilisateurs actifs quotidiens.",
    tags: ["React", "TypeScript", "Node.js", "Kubernetes", "AWS"]
  },
  {
    period: "2020 — 2022",
    role: "Senior Fullstack Engineer",
    company: "DevCorp Innovation",
    location: "Paris",
    description: "Développement d'applications web temps réel et dashboards analytiques à forte charge. Optimisation des temps de réponse API de 45% et industrialisation des pipelines CI/CD.",
    tags: ["React", "Python", "Go", "PostgreSQL", "Docker", "GraphQL"]
  },
  {
    period: "2018 — 2020",
    role: "Software Developer",
    company: "StartupLab Studio",
    location: "Lyon",
    description: "Création de solutions web modernes de bout en bout, implémentation des interfaces utilisateurs réactives et intégration des pipelines de données événementielles.",
    tags: ["Vue.js", "JavaScript", "REST APIs", "PostgreSQL", "TailwindCSS"]
  }
];

const SKILLS = [
  {
    name: "React / Vue & Next.js",
    level: 96,
    icon: Code2,
    description: "Architectures frontend modernes, SSR/SSG, gestion d'état complexe et animations GSAP 60fps.",
    subtags: ["React 19", "Next.js", "Vue 3", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "Python & Go Backend",
    level: 92,
    icon: Terminal,
    description: "Micro-services haute concurrence, APIs REST & gRPC, sécurité et algorithmes distribués.",
    subtags: ["Python (FastAPI)", "Go", "AsyncIO", "gRPC", "Authentication"]
  },
  {
    name: "System Design & Cloud Architecture",
    level: 94,
    icon: Cpu,
    description: "Conception de systèmes scalables, haute disponibilité, tolérance aux pannes et scalabilité horizontale.",
    subtags: ["AWS", "Micro-services", "Serverless", "Event-Driven", "Caching"]
  },
  {
    name: "PostgreSQL & Distributed DB",
    level: 90,
    icon: Database,
    description: "Modélisation relationnelle avancée, optimisation de requêtes SQL, Redis et bases distribuées.",
    subtags: ["PostgreSQL", "Redis", "ElasticSearch", "Query Optimization"]
  },
  {
    name: "DevOps & CI/CD Pipelines",
    level: 88,
    icon: Layers,
    description: "Automatisation de déploiement, conteneurisation Docker, orchestration Kubernetes et observabilité.",
    subtags: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Monitoring"]
  }
];

const EDUCATION = [
  {
    year: "2018",
    degree: "Master en Ingénierie Logicielle & Systèmes Distribués",
    school: "École Supérieure d'Informatique & Télécoms",
    mention: "Mention Très Bien — Félicitations du jury",
    details: "Spécialisation architecture logicielle, algorithmes distribués et sécurité applicative."
  },
  {
    year: "2016",
    degree: "Licence en Informatique & Mathématiques Appliquées",
    school: "Faculté des Sciences et Technologies",
    mention: "Mention Bien",
    details: "Fondations solides en structures de données, calcul scientifique et programmation système."
  },
  {
    year: "2021",
    degree: "Certification Cloud Solutions Architect & DevOps",
    school: "AWS & CNCF Professional Program",
    mention: "Certifié niveau Professionnel",
    details: "Architectures haute résilience, conteneurisation et sécurité des infrastructures critiques."
  }
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const aboutRef = useRef(null);
  const expSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const eduSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Navbar morphing on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Animations with context cleanup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Stagger entrance
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .fromTo(photoRef.current, { opacity: 0, scale: 0.85, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.1, delay: 0.2 })
        .fromTo(nameRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.0 }, "-=0.8")
        .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.7")
        .fromTo(statsRef.current, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

      // 2. About section reveal
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          }
        }
      );

      // 3. Experience Cards Slide-in
      const expCards = gsap.utils.toArray('.experience-card');
      expCards.forEach((card, index) => {
        const isEven = index % 2 === 0;
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            x: isEven ? -60 : 60,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // 4. Skills Circular Gauges & Counters
      const skillCards = gsap.utils.toArray('.skill-item');
      skillCards.forEach((card) => {
        const targetPercent = parseInt(card.getAttribute('data-percent') || '0', 10);
        const circle = card.querySelector('.skill-circle-progress');
        const counter = card.querySelector('.skill-counter-text');

        if (circle) {
          const radius = 34;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (targetPercent / 100) * circumference;

          gsap.fromTo(
            circle,
            { strokeDashoffset: circumference },
            {
              strokeDashoffset: offset,
              duration: 1.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
        }

        if (counter) {
          const countObj = { val: 0 };
          gsap.to(countObj, {
            val: targetPercent,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            onUpdate: () => {
              counter.textContent = `${Math.round(countObj.val)}%`;
            }
          });
        }
      });

      // 5. Education Stagger
      gsap.fromTo(
        ".edu-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eduSectionRef.current,
            start: "top 80%",
          }
        }
      );

      // 6. Contact reveal
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactSectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  // PDF Download handler
  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvContent = `CV PROFESSIONNEL — ${PROFILE.name.toUpperCase()}
${PROFILE.title}
Email: ${PROFILE.email} | Tel: ${PROFILE.phone} | Ville: ${PROFILE.city}

PROFIL:
${PROFILE.bio}

EXPÉRIENCES:
${EXPERIENCES.map(exp => `• [${exp.period}] ${exp.role} @ ${exp.company} (${exp.location})\n  ${exp.description}\n  Technologies: ${exp.tags.join(', ')}`).join('\n\n')}

COMPÉTENCES CLÉS:
${SKILLS.map(s => `• ${s.name} : ${s.level}% — ${s.description}`).join('\n')}

FORMATIONS:
${EDUCATION.map(edu => `• ${edu.year} : ${edu.degree} - ${edu.school} (${edu.mention})`).join('\n')}
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV_${PROFILE.name.replace(/\s+/g, '_')}_Senior_FullStack.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSent(false), 6000);
    }, 900);
  };

  return (
    <div ref={mainRef} className="relative min-h-screen bg-charbon text-creme overflow-hidden selection:bg-or selection:text-charbon">
      
      {/* =========================================================
          A. NAVBAR — "La Signature Flottante"
      ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
        <nav 
          className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-3.5 rounded-full transition-all duration-500 border ${
            scrolled 
              ? 'bg-charbon/80 backdrop-blur-xl border-or/25 shadow-2xl shadow-black/80 py-3' 
              : 'bg-transparent border-transparent'
          }`}
          style={{ maxWidth: '980px', width: '100%' }}
        >
          {/* Brand Initials / Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-ardoise border border-or/40 flex items-center justify-center font-serif italic text-or font-bold text-base group-hover:scale-105 transition-transform">
              J
            </span>
            <span className="font-mono text-xs tracking-widest text-creme-muted group-hover:text-or transition-colors uppercase font-medium">
              JULES.IO
            </span>
          </a>

          {/* Navigation Anchors */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm text-creme-muted font-normal tracking-wide">
            <a href="#about" className="hover:text-or link-underline transition-colors">À propos</a>
            <a href="#experience" className="hover:text-or link-underline transition-colors">Expérience</a>
            <a href="#skills" className="hover:text-or link-underline transition-colors">Compétences</a>
            <a href="#education" className="hover:text-or link-underline transition-colors">Formation</a>
            <a href="#contact" className="hover:text-or link-underline transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleDownloadCV}
            className="btn-magnetic flex items-center gap-2 bg-gradient-to-r from-or to-or-light text-charbon font-sans font-semibold text-xs md:text-sm px-5 py-2 rounded-full shadow-lg shadow-or/20 hover:shadow-or/40 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV PDF</span>
          </button>
        </nav>
      </header>

      {/* =========================================================
          B. SECTION HERO — "La Première Impression"
      ========================================================= */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 ambient-hero-mesh overflow-hidden"
      >
        {/* Background ambient light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-or/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Profile Photo Placeholder with luxury border */}
          <div ref={photoRef} className="relative mb-8 group cursor-pointer">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-tr from-or/80 via-or-light/40 to-transparent shadow-2xl shadow-or/20">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-ardoise-light to-charbon flex flex-col items-center justify-center relative overflow-hidden border border-ardoise-border">
                {/* Visual Initials Avatar */}
                <span className="font-serif italic font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-creme via-or-light to-or">
                  J
                </span>
                <span className="absolute bottom-2 font-mono text-[9px] text-or/80 tracking-widest uppercase">
                  ARCHITECT
                </span>
              </div>
            </div>
            {/* Live pulsating badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-charbon/90 backdrop-blur-md px-3 py-1 rounded-full border border-or/30 text-[10px] font-mono text-or shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
              <span className="pl-1">DISPONIBLE</span>
            </div>
          </div>

          {/* Massive Name */}
          <h1 
            ref={nameRef} 
            className="font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tightest text-creme uppercase drop-shadow-2xl"
          >
            {PROFILE.name}
          </h1>

          {/* Professional Title in Italic Playfair Display */}
          <p 
            ref={titleRef} 
            className="mt-3 md:mt-4 font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-normal tracking-wide max-w-2xl"
          >
            {PROFILE.title}
          </p>

          {/* Monospace 3 Indicators */}
          <div 
            ref={statsRef} 
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6 font-mono text-xs md:text-sm text-creme-muted/90 bg-ardoise/40 backdrop-blur-md px-6 py-3 rounded-full border border-ardoise-border"
          >
            <span className="text-or font-semibold">{PROFILE.experienceYears} ANS D'EXPÉRIENCE</span>
            <span className="text-or/40">•</span>
            <span>{PROFILE.projectsCount} PROJETS LIVRÉS</span>
            <span className="text-or/40">•</span>
            <span>{PROFILE.city}</span>
          </div>

          {/* Hero CTAs */}
          <div 
            ref={ctaRef} 
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button 
              onClick={handleDownloadCV}
              className="btn-magnetic flex items-center gap-2.5 bg-gradient-to-r from-or via-or-light to-or text-charbon font-sans font-bold text-sm px-8 py-4 rounded-full shadow-xl shadow-or/20 hover:shadow-or/40 cursor-pointer"
            >
              <Download className="w-4 h-4 text-charbon" />
              <span>Télécharger mon CV</span>
            </button>
            <a 
              href="#contact"
              className="btn-magnetic flex items-center gap-2 bg-ardoise/60 hover:bg-ardoise text-creme font-sans font-medium text-sm px-8 py-4 rounded-full border border-ardoise-border hover:border-or/50 transition-all cursor-pointer"
            >
              <span>Me contacter</span>
              <ArrowUpRight className="w-4 h-4 text-or" />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <a href="#about" className="mt-16 text-creme-muted/60 hover:text-or transition-colors animate-bounce">
            <ChevronDown className="w-6 h-6" />
          </a>

        </div>
      </section>

      {/* =========================================================
          C. A PROPOS — "Le Manifeste Personnel" (Fond Clair Noble)
      ========================================================= */}
      <section 
        id="about" 
        ref={aboutRef}
        className="relative py-28 md:py-36 bg-creme text-charbon rounded-t-[3rem] md:rounded-t-[4rem] rounded-b-[3rem] md:rounded-b-[4rem] shadow-2xl z-20 overflow-hidden"
      >
        {/* Subtle texture in about */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-or/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Dramatic Title */}
            <div className="lg:col-span-5 about-reveal flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-or-dark font-bold">
                  01. MANIFESTE & VISION
                </span>
                <h2 className="mt-4 font-serif italic text-4xl sm:text-5xl md:text-6xl text-charbon leading-[1.1] font-bold">
                  L'excellence à la frontière du code et du design.
                </h2>
              </div>
              <div className="mt-8 pt-8 border-t border-charbon/15 hidden lg:block">
                <p className="font-mono text-xs text-charbon/70 leading-relaxed">
                  // APPROCHE : ZERO COMPROMIS<br />
                  // PERFORMANCE, ACCESSIBILITÉ & ÉLÉGANCE
                </p>
              </div>
            </div>

            {/* Vertical Accent Line (Desktop) */}
            <div className="hidden lg:block lg:col-span-1 flex justify-center self-stretch">
              <div className="w-[2px] h-full bg-gradient-to-b from-or via-or-dark to-charbon/10 rounded-full" />
            </div>

            {/* Right Column: Bio & Core Philosophy */}
            <div className="lg:col-span-6 about-reveal flex flex-col gap-6">
              <p className="font-sans text-xl md:text-2xl text-charbon/90 leading-relaxed font-light">
                {PROFILE.bio}
              </p>
              <p className="font-sans text-base md:text-lg text-charbon/75 leading-relaxed font-normal">
                Depuis plus de 8 ans, j'accompagne startups ambitieuses et grands groupes dans la concrétisation de plateformes logicielles pérennes. Mon travail s'articule autour de trois piliers fondamentaux : <strong>la clarté architecturale</strong>, <strong>la fluidité de l'interaction</strong> et <strong>la robustesse industrielle</strong>.
              </p>
              
              {/* Highlight metrics */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-charbon/15">
                <div className="p-4 rounded-2xl bg-charbon/5 border border-charbon/10">
                  <span className="font-mono text-2xl font-bold text-charbon block">99.9%</span>
                  <span className="font-sans text-xs text-charbon/60 uppercase">Uptime & Rigueur</span>
                </div>
                <div className="p-4 rounded-2xl bg-charbon/5 border border-charbon/10">
                  <span className="font-mono text-2xl font-bold text-charbon block">&lt; 100ms</span>
                  <span className="font-sans text-xs text-charbon/60 uppercase">Latence Cible</span>
                </div>
                <div className="p-4 rounded-2xl bg-charbon/5 border border-charbon/10 col-span-2 sm:col-span-1">
                  <span className="font-mono text-2xl font-bold text-charbon block">60 FPS</span>
                  <span className="font-sans text-xs text-charbon/60 uppercase">Fluidité UI/UX</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          D. EXPERIENCE — "La Timeline Vivante"
      ========================================================= */}
      <section 
        id="experience" 
        ref={expSectionRef}
        className="relative py-28 md:py-36 px-6 max-w-6xl mx-auto z-10"
      >
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-or font-bold">
            02. CARRIÈRE & IMPACT
          </span>
          <h2 className="mt-3 font-serif italic text-4xl sm:text-5xl text-creme font-bold">
            Expériences & Réalisations
          </h2>
          <p className="mt-4 font-sans text-creme-muted text-sm md:text-base">
            Un parcours jalonné de défis techniques majeurs, de leadership d'équipe et d'architectures livrées en production.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative">
          
          {/* Center Vertical Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-or via-or/40 to-ardoise-border" />

          {/* Experience items */}
          <div className="flex flex-col gap-12 md:gap-16">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`experience-card relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Pulse Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-charbon border-2 border-or shadow-lg shadow-or/50 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-or animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop alternating */}
                  <div className="hidden md:block w-1/2" />

                  {/* Experience Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-ardoise/90 backdrop-blur-md p-8 rounded-[2rem] border border-ardoise-border shadow-prestige hover:border-or/40 hover:shadow-prestige-hover card-prestige">
                      
                      {/* Period Header */}
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <span className="font-mono text-xs text-or font-semibold px-3 py-1 rounded-full bg-charbon border border-or/20">
                          {exp.period}
                        </span>
                        <span className="font-mono text-xs text-creme-muted/70">
                          {exp.location}
                        </span>
                      </div>

                      {/* Job Role */}
                      <h3 className="font-sans font-bold text-2xl text-creme tracking-tight">
                        {exp.role}
                      </h3>

                      {/* Company Name */}
                      <p className="font-sans text-base text-or font-medium mt-1">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="font-sans text-sm text-creme-muted/90 leading-relaxed mt-4">
                        {exp.description}
                      </p>

                      {/* Technology Badges */}
                      <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-ardoise-border/60">
                        {exp.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="font-mono text-[11px] text-creme-muted bg-charbon/70 px-2.5 py-1 rounded-md border border-ardoise-border hover:text-or transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          E. COMPETENCES — "Le Tableau de Bord"
      ========================================================= */}
      <section 
        id="skills" 
        ref={skillsSectionRef}
        className="relative py-28 md:py-36 px-6 bg-charbon-light rounded-[3rem] md:rounded-[4rem] border-y border-ardoise-border max-w-7xl mx-auto z-10 my-8 shadow-2xl"
      >
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-or font-bold">
              03. STACK TECHNIQUE & MAÎTRISE
            </span>
            <h2 className="mt-3 font-serif italic text-4xl sm:text-5xl text-creme font-bold">
              Tableau de Bord des Compétences
            </h2>
            <p className="mt-4 font-sans text-creme-muted text-sm md:text-base">
              Mesures d'expertise approfondies, des architectures distribuées aux interfaces haute-fidélité.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  data-percent={skill.level}
                  className="skill-item bg-ardoise/80 p-8 rounded-[2rem] border border-ardoise-border hover:border-or/40 shadow-prestige hover:shadow-prestige-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Header with Circular SVG Gauge & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-charbon border border-or/30 flex items-center justify-center text-or group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      {/* Animated Circular Progress */}
                      <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            className="stroke-charbon fill-none"
                            strokeWidth="6"
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r="34"
                            className="skill-circle-progress stroke-or fill-none transition-all"
                            strokeWidth="6"
                            strokeDasharray={2 * Math.PI * 34}
                            strokeDashoffset={2 * Math.PI * 34}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="skill-counter-text absolute font-mono font-bold text-sm text-creme">
                          0%
                        </span>
                      </div>
                    </div>

                    {/* Skill Title */}
                    <h3 className="font-sans font-bold text-xl text-creme group-hover:text-or transition-colors">
                      {skill.name}
                    </h3>

                    {/* Skill Description */}
                    <p className="font-sans text-xs text-creme-muted leading-relaxed mt-3">
                      {skill.description}
                    </p>
                  </div>

                  {/* Subtags */}
                  <div className="mt-6 pt-4 border-t border-ardoise-border/60 flex flex-wrap gap-1.5">
                    {skill.subtags.map((sub, i) => (
                      <span key={i} className="font-mono text-[10px] text-creme-muted/80 bg-charbon px-2 py-0.5 rounded border border-ardoise-border">
                        {sub}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          F. FORMATION — "Les Fondations"
      ========================================================= */}
      <section 
        id="education" 
        ref={eduSectionRef}
        className="relative py-28 md:py-36 px-6 max-w-5xl mx-auto z-10"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-or font-bold">
            04. DIPLÔMES & CERTIFICATIONS
          </span>
          <h2 className="mt-3 font-serif italic text-4xl sm:text-5xl text-creme font-bold">
            Les Fondations Académiques
          </h2>
          <p className="mt-4 font-sans text-creme-muted text-sm md:text-base">
            Une base théorique rigoureuse couplée à un apprentissage continu de pointe.
          </p>
        </div>

        {/* Stacked Education Cards */}
        <div className="flex flex-col gap-6">
          {EDUCATION.map((edu, index) => (
            <div 
              key={index}
              className="edu-card bg-ardoise/70 p-8 rounded-[2rem] border border-ardoise-border hover:border-or/30 shadow-prestige transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-charbon border border-or/30 flex items-center justify-center text-or shrink-0 mt-1">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-xs text-or font-semibold block mb-1">
                    PROMOTION {edu.year}
                  </span>
                  <h3 className="font-sans font-bold text-xl text-creme">
                    {edu.degree}
                  </h3>
                  <p className="font-sans text-sm text-creme-muted mt-1">
                    {edu.school}
                  </p>
                  <p className="font-sans text-xs text-creme-muted/70 mt-2">
                    {edu.details}
                  </p>
                </div>
              </div>

              <div className="md:text-right shrink-0">
                <span className="inline-block font-mono text-xs text-or bg-charbon px-3.5 py-1.5 rounded-full border border-or/20">
                  {edu.mention}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          G. CONTACT — "Le Pont"
      ========================================================= */}
      <section 
        id="contact" 
        ref={contactSectionRef}
        className="relative py-28 md:py-36 px-6 max-w-6xl mx-auto z-10"
      >
        <div className="bg-gradient-to-b from-ardoise via-charbon-surface to-charbon p-8 md:p-16 rounded-[3rem] border border-or/30 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Gold glow inside box */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-or/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Contact Info */}
            <div className="lg:col-span-6 contact-reveal">
              <span className="font-mono text-xs uppercase tracking-widest text-or font-bold">
                05. CONTACT & DISPONIBILITÉ
              </span>
              <h2 className="mt-3 font-serif italic text-4xl sm:text-5xl text-creme font-bold leading-tight">
                Travaillons ensemble sur votre prochain projet.
              </h2>
              <p className="mt-4 font-sans text-creme-muted text-sm md:text-base leading-relaxed">
                Vous recherchez une expertise de premier ordre pour concevoir, structurer ou accélérer une plateforme web d'envergure ? Discutons-en dès aujourd'hui.
              </p>

              {/* Direct Links */}
              <div className="mt-8 flex flex-col gap-4">
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="hover-lift flex items-center gap-3 text-creme hover:text-or group"
                >
                  <div className="w-10 h-10 rounded-full bg-charbon border border-ardoise-border flex items-center justify-center text-or group-hover:border-or transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">{PROFILE.email}</span>
                </a>

                <a 
                  href={`tel:${PROFILE.phone}`}
                  className="hover-lift flex items-center gap-3 text-creme hover:text-or group"
                >
                  <div className="w-10 h-10 rounded-full bg-charbon border border-ardoise-border flex items-center justify-center text-or group-hover:border-or transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-sm">{PROFILE.phone}</span>
                </a>

                <div className="flex items-center gap-4 mt-2">
                  <a 
                    href={PROFILE.linkedin} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-magnetic flex items-center gap-2 bg-charbon px-4 py-2 rounded-full border border-ardoise-border text-xs font-mono text-creme hover:text-or hover:border-or transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={PROFILE.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="btn-magnetic flex items-center gap-2 bg-charbon px-4 py-2 rounded-full border border-ardoise-border text-xs font-mono text-creme hover:text-or hover:border-or transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-6 contact-reveal">
              <div className="bg-charbon/80 p-8 rounded-[2rem] border border-ardoise-border shadow-xl">
                
                {formSent ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-or/20 border border-or flex items-center justify-center text-or mb-4 animate-bounce">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif italic text-2xl text-creme font-bold">
                      Message envoyé avec succès !
                    </h3>
                    <p className="font-sans text-xs text-creme-muted mt-2 max-w-sm">
                      Merci pour votre prise de contact. Jules vous répondra dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="flex flex-col gap-4">
                    <div>
                      <label className="block font-mono text-xs text-creme-muted uppercase mb-1">
                        Nom complet / Entreprise
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="Ex: Alexandre de TechCorp"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-ardoise/90 border border-ardoise-border focus:border-or rounded-xl px-4 py-3 text-sm text-creme placeholder-creme-muted/40 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-creme-muted uppercase mb-1">
                        Adresse Email
                      </label>
                      <input 
                        type="email" 
                        required
                        placeholder="votre.email@domaine.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-ardoise/90 border border-ardoise-border focus:border-or rounded-xl px-4 py-3 text-sm text-creme placeholder-creme-muted/40 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-creme-muted uppercase mb-1">
                        Votre Message / Projet
                      </label>
                      <textarea 
                        rows="3"
                        required
                        placeholder="Décrivez votre vision ou vos besoins techniques..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-ardoise/90 border border-ardoise-border focus:border-or rounded-xl px-4 py-3 text-sm text-creme placeholder-creme-muted/40 focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="btn-magnetic mt-2 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-or via-or-light to-or text-charbon font-sans font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-or/20 hover:shadow-or/40 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Envoi en cours...</span>
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          H. PIED DE PAGE — Minimaliste & Sombre
      ========================================================= */}
      <footer className="relative bg-charbon-deep text-creme-muted py-14 px-6 rounded-t-[4rem] border-t border-ardoise-border z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div>
            <p className="font-sans font-bold text-creme text-sm">
              {PROFILE.name} — {PROFILE.title}
            </p>
            <p className="font-mono text-xs text-creme-muted/70 mt-1">
              Fait avec le vibe coding • Tous droits réservés © 2026
            </p>
          </div>

          {/* Live Status indicator */}
          <div className="flex items-center gap-2 bg-charbon px-4 py-2 rounded-full border border-ardoise-border">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-mono text-xs text-emerald-400">
              SYSTÈMES OPÉRATIONNELS • EN LIGNE
            </span>
          </div>

        </div>
      </footer>

    </div>
  );
}
