        import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
        import ReactDOM from 'react-dom/client';
        import {
            ArrowRight, Globe, Cpu, Zap, Github, Linkedin, Mail, Twitter, Instagram, Facebook,
            Menu, X, Aperture, ChevronRight, ShieldCheck, Search,
            CheckCircle, AlertCircle, Clock, Briefcase, Lock, Terminal,
            Database, Fingerprint, Bot, Rocket, Layers, Code, Hash, Smartphone,
            Circle, Box, ExternalLink, ArrowUpRight, BookOpen, FileText
        } from 'lucide-react';

        /** State Configuration Fallback Array */
        const DEFAULT_CONFIG = {
            brand: { name: "nodedCode Studio", tagline: "", email: "contact@nodedcode.studio", logoUrl: "", faviconUrl: "./favicon.ico" },
            text: {
                hero_h1_top: "BUILD WITH", hero_h1_bot: "INTELLIGENCE.", hero_desc: "Tailored code. Enterprise quality. Modern web solutions.", hero_btn: "FREE CONSULTATION",
                expertise_h2: "THINGS WE OFFER", process_h2_top: "WHY", process_h2_bot: "CHOOSE US", process_btn: "DISCUSS YOUR NEEDS",
                contact_h2_top: "READY TO", contact_h2_bot: "SCALE?", contact_desc: "Secure your slot in our production queue.",
                verify_h2: "AUTHENTICITY CHECK", verify_desc: "Verify authenticity against our public database. Verifiable: Email Address, Employee ID, Document ID and Project ID. We won't take responsibility for interacting with anything that is inactive/expired or not available in our database.",
                terms_title: "Terms & Conditions", terms_content: "Welcome to the official website of nodedCode Studio. General access to and browsing of this website are governed by standard digital communication guidelines, applicable laws, and general online usability standards. By accessing our platform and exploring our directory of tools and development services, you acknowledge and agree to observe these standard digital policies.\n\nPlease note that client engagements and custom software development projects are not governed solely by the general terms of this website. Instead, each specific development project engaged with our studio will be governed by its own distinct, customized Terms & Conditions. These project-specific legal agreements depend heavily on the exact task, technical scope, timeline, and situational requirements of the assignment. All deliverables, responsibilities, payment structures, and operational boundaries will be clearly and legally established in a formal contract signed by both parties prior to the commencement of any engineering work.\n\nFurthermore, specific Terms and Conditions may apply to each individual tool, web app, or extension offered in our products directory. Please refer directly to the corresponding product website, application interface, or product description for the specific rules and policies applicable to that item.",
                privacy_title: "Privacy Policy", privacy_content: "At nodedCode Studio, we respect your personal privacy and are fully committed to protecting any information you share with us. We maintain a strict policy against the sale, rental, or unauthorized distribution of personal data to third parties. Our fundamental operational philosophy is built on confidentiality and trust.\n\nWhen you submit project inquiries, contact forms, or communication requests through our platform, any email address, name, or technical details you provide are kept strictly confidential. This submitted information is securely maintained and is utilized solely for the professional purpose of responding to your inquiry, evaluating your project requirements, and facilitating direct communication between you and our development team.\n\nIn addition, specific privacy rules, data handling practices, and terms of use may apply to each individual tool or digital product available within our products ecosystem. We encourage all users to review the corresponding product website or individual documentation for applicable privacy policies before utilizing specific tools.",
                refund_title: "Refund Policy", refund_content: "At nodedCode Studio, we dedicate significant engineering hours and technical resources to every project from the moment an agreement is initiated. Because software engineering and digital product development involve irreversible investments of time, labor, and custom architecture, we do not offer refunds once the agreed-upon development work has been completed.\n\nWe understand that project requirements and business circumstances can change. If you wish to request a project cancellation, you must provide early written notification to our team as soon as possible. Depending on the timing of your cancellation notice, your project may be eligible for a partial refund. The exact refund amount depends heavily on the billable hours, developer allocation, and technical resources that have already been expended on your project prior to the receipt of your cancellation notice.\n\nAdditionally, specific refund policies and terms of service may apply to each individual digital product, subscription, or standalone tool in our directory. Please refer to the corresponding website or product documentation for the specific refund rules governing each individual product.",
                career_h2: "ACCESS DENIED", career_desc: "Capacity full.",
                products_h2: "OUR PRODUCTS", products_desc: "Explore our directory of free and premium tools, web apps, and extensions.",
                case_studies_h2: "CASE STUDIES", case_studies_desc: "Explore our verified engineering case studies, architecture overviews, and client stories.",
                read_h2: "READ", read_desc: "Explore our articles, engineering case studies, and insights.",
                about_title: "About Us", about_content: "We are a forward-thinking digital studio specializing in high-performance web engineering and advanced technical architectures for the modern digital space and the Web3 ecosystem. Our dedicated team focuses on delivering clean, enterprise-quality code that adheres to industry best practices and modern development standards.\n\nOur core mission is to design and deploy robust, scalable digital platforms that empower businesses and individuals to thrive in an increasingly competitive online environment. Whether developing custom web applications, decentralized blockchain solutions, or responsive digital interfaces, we prioritize speed, security, and long-term reliability in every project we undertake.\n\nIn addition to our bespoke client services, we actively develop and maintain a suite of powerful, accessible digital tools designed to simplify complex daily workflows and bring ease to everyday technical operations. By combining practical engineering with user-centric design, nodedCode Studio remains committed to advancing the standards of modern web solutions."
            },
            remote: { verificationUrl: "https://opensheet.elk.sh/1jYnJfPR7sZ1P5sFwpQWwMnFKIJt2FNWqcUFPLmVZM2E/Sheet1", careersUrl: "https://opensheet.elk.sh/13bakIus6wLbEOgKCvk9KihG41QosPp6ZdwwF8rxZoFM/Sheet1", productsUrl: "https://opensheet.elk.sh/1ItO6dBrgWN7Areip47q5Tx4hlTphHQj2N9wQCPVA4wA/Sheet1", servicesUrl: "https://opensheet.elk.sh/1zkuPDt7iKH2lwRKOsF37UcYgGLXgqGT-gb8Z6UUJ7wg/Sheet1", caseStudiesUrl: "https://opensheet.elk.sh/17Iw0kcAYRZ8Xxg_hgdMOIHn7ah0Xv-kZDCMGzS4iORc/Sheet1", readUrl: "https://opensheet.elk.sh/17Iw0kcAYRZ8Xxg_hgdMOIHn7ah0Xv-kZDCMGzS4iORc/Sheet1" },
            nav: [
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "products", label: "Products" },
                { id: "read", label: "Read" },
                { id: "process", label: "Why Us" },
                { id: "contact", label: "Contact" }
            ],
            footerLinks: [
                { id: "about", label: "About Us" },
                { id: "terms", label: "Terms & Conditions" },
                { id: "privacy", label: "Privacy Policy" },
                { id: "refund", label: "Refund Policy" },
                { id: "verify", label: "Verify Authenticity" },
                { id: "careers", label: "Careers" }
            ],
            socials: [
                { icon: "Linkedin", link: "https://www.linkedin.com/company/nodedCode" },
                { icon: "Instagram", link: "https://www.instagram.com/nodedCode/" },
                { icon: "Github", link: "https://github.com/nodedCode" },
                { icon: "Mail", link: "mailto:contact@nodedcode.studio" }
            ],
            services: [],
            processSteps: [],
            verification_fallback: [],
            careers_fallback: [],
            products_fallback: [],
            case_studies_fallback: [
                {
                    title: "Article / Case Study Template",
                    author: "nodedCode Team",
                    date: "July 2026",
                    link: "./articles/template.html"
                }
            ],
            read_fallback: [
                {
                    title: "Article / Case Study Template",
                    author: "nodedCode Team",
                    date: "July 2026",
                    link: "./articles/template.html"
                }
            ]
        };

        const ICON_MAP = { Globe, Cpu, Zap, Clock, Briefcase, Terminal, Database, Fingerprint, ShieldCheck, Bot, Rocket, Layers, Code, Hash, Smartphone, Github, Linkedin, Mail, Twitter, Instagram, Facebook, Circle, Box, BookOpen, FileText };
        const ConfigContext = createContext(DEFAULT_CONFIG);

        /** Brand Logo Component */
        const BrandLogo = () => (
            <span className="font-display text-2xl tracking-tight text-navy whitespace-nowrap">
                <span className="text-brand font-medium">&lt;</span> <span className="font-bold">nodedCode</span> <span className="text-brand font-light mx-1">|</span> <span className="font-bold">studio</span> <span className="text-brand font-medium">&gt;</span>
            </span>
        );

        /** Typographic Decryption Component */
        const ScrambleText = ({ text, className = "", hoverTrigger = false }) => {
            const [display, setDisplay] = useState(text || "");
            const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&<>";
            useEffect(() => {
                let iteration = 0;
                const interval = setInterval(() => {
                    setDisplay((text || "").split("").map((l, i) => i < iteration ? text[i] : chars[Math.floor(Math.random() * chars.length)]).join(""));
                    if (iteration >= (text || "").length) clearInterval(interval);
                    iteration += 1 / 2;
                }, 30);
                return () => clearInterval(interval);
            }, [text]);
            return <span className={className}>{display}</span>;
        };

        /** Hardware-Accelerated Minimal Card */
        const SpotlightCard = ({ children, className = "", borderOpacity = 0.1 }) => {
            const divRef = useRef(null);
            const [position, setPosition] = useState({ x: 0, y: 0 });
            const [opacity, setOpacity] = useState(0);

            const handleMouseMove = (e) => {
                if (!divRef.current) return;
                const rect = divRef.current.getBoundingClientRect();
                setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                setOpacity(1);
            };

            const handleMouseLeave = () => setOpacity(0);

            return (
                <div
                    ref={divRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`relative transform-gpu transition-all duration-500 ease-out group bg-black/5 border border-black/5 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,98,87,0.15)] hover:border-brand/30 ${className}`}
                >
                    <div
                        className="pointer-events-none absolute -inset-px transition duration-500 z-30"
                        style={{
                            opacity,
                            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(232, 98, 87, ${borderOpacity}), transparent 40%)`
                        }}
                    />
                    <div className="relative h-full z-10 flex flex-col">{children}</div>
                </div>
            );
        };

        /** Ambient & Interactive Background */
        const PremiumBackground = () => {
            const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

            useEffect(() => {
                const onMouseMove = (e) => {
                    setMouse({ x: e.clientX, y: e.clientY });
                };
                window.addEventListener('mousemove', onMouseMove);
                return () => window.removeEventListener('mousemove', onMouseMove);
            }, []);

            return (
                <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-light">
                    {/* Animated Minimal Dot Grid */}
                    <div 
                        className="absolute inset-0 z-0 opacity-10"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #182335 1.5px, transparent 0)',
                            backgroundSize: '48px 48px',
                            animation: 'moveGrid 15s linear infinite'
                        }}
                    />
                    
                    <div className="absolute inset-0 bg-[url('./noise.svg')] opacity-[0.15] mix-blend-overlay z-10" />
                    
                    {/* Floating Static Blobs */}
                    <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] mix-blend-multiply animate-[float_10s_ease-in-out_infinite] z-0" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-navy/5 rounded-full blur-[120px] mix-blend-multiply animate-[float_8s_ease-in-out_infinite_reverse] z-0" />

                    {/* Interactive Cursor Tracking Glow */}
                    <div 
                        className="absolute w-[600px] h-[600px] bg-brand/10 rounded-full blur-[100px] transition-transform duration-[1500ms] ease-out mix-blend-multiply z-10"
                        style={{ transform: `translate(${mouse.x - 300}px, ${mouse.y - 300}px)` }}
                    />
                </div>
            );
        };

        /** Viewport Cursor Tracking */
        const CustomCursor = () => {
            const [pos, setPos] = useState({ x: 0, y: 0 });
            const [trailing, setTrailing] = useState({ x: 0, y: 0 });

            useEffect(() => {
                const move = (e) => setPos({ x: e.clientX, y: e.clientY });
                window.addEventListener('mousemove', move);
                return () => window.removeEventListener('mousemove', move);
            }, []);

            useEffect(() => {
                let frame;
                const loop = () => {
                    setTrailing(p => ({ x: p.x + (pos.x - p.x) * 0.15, y: p.y + (pos.y - p.y) * 0.15 }));
                    frame = requestAnimationFrame(loop);
                };
                loop();
                return () => cancelAnimationFrame(frame);
            }, [pos]);

            return (
                <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block mix-blend-exclusion">
                    <div className="absolute w-8 h-8 border border-brand/30 rounded-full transition-transform duration-75" style={{ transform: `translate(${trailing.x - 16}px, ${trailing.y - 16}px)` }} />
                    <div className="absolute w-1 h-1 bg-brand/70 rounded-full" style={{ transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)` }} />
                </div>
            );
        };

        /** State-Driven Navigation Controller */
        const DesktopMenu = ({ config, activeView, handleNav }) => {
            const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
            const navRef = useRef(null);

            const isMainNav = config.nav.some(item => item.id === activeView);

            const calculatePill = () => {
                const activeEl = document.getElementById(`nav-item-${activeView}`);
                const navEl = navRef.current;

                if (activeEl && navEl && isMainNav) {
                    const navRect = navEl.getBoundingClientRect();
                    const activeRect = activeEl.getBoundingClientRect();
                    if (activeRect.width > 0 && navRect.width > 0) {
                        setPillStyle({ left: activeRect.left - navRect.left, width: activeRect.width, opacity: 1 });
                    }
                } else if (!isMainNav) {
                    setPillStyle(prev => ({ ...prev, opacity: 0 }));
                }
            };

            useEffect(() => {
                calculatePill();
                const t1 = setTimeout(calculatePill, 50);
                const t2 = setTimeout(calculatePill, 200);
                window.addEventListener('resize', calculatePill);
                return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener('resize', calculatePill); };
            }, [activeView, config.nav]);

            return (
                <div className="hidden lg:flex relative items-center p-1 bg-transparent" ref={navRef}>
                    <div
                        className="absolute bg-brand rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_10px_rgba(241,239,231,0.2)]"
                        style={{ left: pillStyle.left, width: pillStyle.width, height: 'calc(100% - 8px)', top: '4px', opacity: pillStyle.opacity }}
                    />

                    {config.nav.map(item => (
                        <a
                            key={item.id} id={`nav-item-${item.id}`} href={`#${item.id}`} onClick={() => handleNav(item.id)}
                            className={`relative z-10 px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 block text-center ${isMainNav && activeView === item.id ? 'text-white' : 'text-gray-600 hover:text-brand'}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            );
        };

        /** Universal Virtual Card Overlay Component */
        const VirtualCard = ({ isOpen, onClose, title, desc, actionText, onAction }) => {
            if (!isOpen) return null;
            return (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
                    <div className="absolute inset-0 bg-light/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]" onClick={onClose} />
                    <div className="relative w-full max-w-lg z-10 animate-[slideUp_0.3s_ease-out]">
                        <SpotlightCard>
                            <div className="p-6 sm:p-10 relative">
                                <button onClick={onClose} className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-500 hover:text-brand transition-colors"><X size={24} /></button>
                                <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy mb-4 pr-8">{title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light mb-8 text-sm sm:text-base">{desc}</p>
                                <button onClick={() => { onAction(); onClose(); }} className="w-full py-3.5 sm:py-4 bg-brand text-light font-display font-bold tracking-wide rounded-xl hover:-translate-y-1 transition-transform shadow-[0_10px_20px_-10px_rgba(232,98,87,0.5)]">
                                    {actionText}
                                </button>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            );
        };

        /** Domain Views */
        const HomeView = ({ navigate }) => {
            const config = useContext(ConfigContext);
            return (
                <section className="min-h-[85vh] flex items-center justify-center relative px-4 sm:px-6 pt-28 pb-20 md:py-32 z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="mb-12 overflow-hidden mt-10">
                            <h1 className="font-display text-[50px] max-[380px]:text-[42px] sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.92] tracking-tighter text-navy animate-[slideUp_0.8s_ease-out]">
                                <ScrambleText text={config.text.hero_h1_top} className="block" hoverTrigger={true} />
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand via-brand/30 to-brand bg-[length:200%_auto] animate-[shimmerWave_6s_linear_infinite] pl-0 sm:pl-6 md:pl-20">
                                    <ScrambleText text={config.text.hero_h1_bot} />
                                </span>
                            </h1>
                        </div>
                        <div className="flex flex-col md:pl-20 animate-[fadeIn_1s_ease-out_0.5s_both]">
                            <p className="max-w-xl text-gray-600 text-lg md:text-xl leading-relaxed font-light border-l-2 border-brand/30 pl-6 mb-10">{config.text.hero_desc}</p>
                            
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                <button onClick={() => navigate('services')} className="w-full sm:w-auto group px-8 py-4 rounded-full border border-navy/10 text-navy font-display text-base font-bold tracking-wider hover:border-brand/50 hover:bg-brand/5 hover:-translate-y-1 transition-all flex items-center justify-center shadow-sm">
                                    OUR SERVICES
                                </button>

                                <button onClick={() => navigate('products')} className="w-full sm:w-auto group px-8 py-4 rounded-full border border-navy/10 text-navy font-display text-base font-bold tracking-wider hover:border-brand/50 hover:bg-brand/5 hover:-translate-y-1 transition-all flex items-center justify-center shadow-sm">
                                    OUR PRODUCTS
                                </button>

                                <button onClick={() => navigate('contact')} className="w-full sm:w-auto group relative px-8 py-4 overflow-hidden rounded-full bg-brand text-light font-display text-base font-bold tracking-wider hover:-translate-y-1 transition-transform shadow-[0_10px_30px_-10px_rgba(232,98,87,0.5)]">
                                    <div className="absolute inset-0 w-full h-full bg-white/20 transform translate-y-full transition-transform group-hover:translate-y-0 duration-300 origin-bottom" />
                                    <span className="relative z-10 flex items-center justify-center gap-2">{config.text.hero_btn} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };

        const ExpertiseView = ({ navigate }) => {
            const config = useContext(ConfigContext);
            const [services, setServices] = useState(config.services || []);
            const [activeService, setActiveService] = useState(null);
            const [isLoading, setIsLoading] = useState(!!(config.remote?.servicesUrl && config.remote.servicesUrl.trim() !== ""));

            useEffect(() => {
                if (config.remote?.servicesUrl && config.remote.servicesUrl.trim() !== "") {
                    setIsLoading(true);
                    fetch(config.remote.servicesUrl)
                        .then(res => res.json())
                        .then(data => {
                            const cleanData = Array.isArray(data) ? data : (data.data || []);
                            if (cleanData.length > 0) setServices(cleanData);
                            else setServices(config.services || []);
                        })
                        .catch(err => { setServices(config.services || []); })
                        .finally(() => setIsLoading(false));
                } else {
                    setServices(config.services || []);
                    setIsLoading(false);
                }
            }, [config.remote, config.services]);

            return (
                <section className="pt-32 pb-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-24 animate-[fadeIn_0.8s_ease-out]">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
                                {config.text.expertise_h2_top || "THINGS"} <span className="text-brand">{config.text.expertise_h2_bot || "WE OFFER"}</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full" />
                        </div>
                        {isLoading ? (
                            <div className="text-center py-16 bg-black/5 rounded-3xl border border-black/10 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
                                <div className="w-10 h-10 border-4 border-black/10 border-t-brand rounded-full animate-spin mx-auto mb-4" />
                                <h3 className="font-display text-xl font-bold text-navy mb-1 tracking-widest">SYNCING DATA</h3>
                                <p className="text-gray-500 text-sm font-light">Retrieving latest records...</p>
                            </div>
                        ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, i) => {
                                return (
                                    <div key={i} className={`animate-[slideUp_0.6s_ease-out_${(i%3) * 0.1}s_both] cursor-pointer h-full flex`} onClick={() => setActiveService(service)}>
                                        <SpotlightCard className="w-full h-full flex flex-col">
                                            <div className="p-8 md:p-10 h-full flex flex-col justify-between bg-transparent">
                                                <div>
                                                    <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-navy group-hover:text-brand transition-colors">{service.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed font-light text-base sm:text-lg line-clamp-3 mb-6">{service.desc || "We provide robust, lightspeed architectures for this domain."}</p>
                                                </div>
                                                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between text-xs sm:text-sm font-bold tracking-widest text-gray-400 group-hover:text-brand transition-colors uppercase">
                                                    <span>CLICK TO VIEW DETAILS</span>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                );
                            })}
                        </div>
                        )}
                    </div>
                    <VirtualCard 
                        isOpen={!!activeService} 
                        onClose={() => setActiveService(null)}
                        title={activeService?.title}
                        desc={activeService?.desc || "Contact us for a bespoke solution regarding this service."}
                        actionText="CONTACT US"
                        onAction={() => navigate('contact')}
                    />
                </section>
            );
        };

        const ProcessView = ({ navigate }) => {
            const config = useContext(ConfigContext);
            return (
                <section className="pt-32 pb-20 px-6 relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-20 animate-[fadeIn_0.8s_ease-out]">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
                                {config.text.process_h2_top} <span className="text-brand">{config.text.process_h2_bot}</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full" />
                        </div>
                        <div className="grid gap-6">
                            {config.processSteps.map((item, idx) => {
                                const Icon = ICON_MAP[item.icon] || Bot;
                                return (
                                    <div key={idx} className={`animate-[slideUp_0.6s_ease-out_${idx * 0.15}s_both]`}>
                                        <SpotlightCard>
                                            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start p-6 sm:p-8 bg-transparent relative overflow-hidden">
                                                <div className="absolute -right-10 -bottom-10 text-brand/5 group-hover:text-brand/10 transition-colors transform rotate-12"><Icon size={200} strokeWidth={0.5} /></div>
                                                <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start w-full">
                                                    <div className="p-4 bg-brand/10 border border-brand/20 rounded-2xl text-brand shadow-inner shrink-0 group-hover:bg-brand group-hover:text-light transition-all"><Icon size={24} /></div>
                                                    <div>
                                                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3">
                                                            <h3 className="text-xl sm:text-2xl font-bold font-display text-navy group-hover:text-brand transition-colors">{item.title}</h3>
                                                            <span className="text-xs sm:text-sm font-sans py-1 px-3 border border-black/10 text-gray-600 rounded-full bg-black/5 uppercase tracking-widest">{item.subtitle}</span>
                                                        </div>
                                                        <p className="text-gray-600 leading-relaxed max-w-2xl font-light text-base sm:text-lg">{item.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-16 text-center animate-[fadeIn_1s_ease-out_0.5s_both]">
                            <button onClick={() => navigate('contact')} className="w-full sm:w-auto bg-brand text-light px-12 py-5 rounded-full font-display text-base font-bold tracking-wider hover:-translate-y-1 transition-transform shadow-[0_10px_30px_-10px_rgba(232,98,87,0.5)]">
                                {config.text.process_btn}
                            </button>
                        </div>
                    </div>
                </section>
            );
        };

        const getButtonText = (item) => {
            if (!item) return "USE IT NOW";
            const direct = item.buttonText || item['buttonText '] || item.button_text || item.btn || item.button || item.actionText || item.action;
            if (direct && typeof direct === 'string' && direct.trim() !== "") return direct.trim();
            for (const key of Object.keys(item)) {
                const cleanKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
                if (['buttontext', 'button', 'btn', 'actiontext', 'action'].includes(cleanKey)) {
                    const v = item[key];
                    if (v && typeof v === 'string' && v.trim() !== "") return v.trim();
                }
            }
            return "USE IT NOW";
        };

        const ProductsView = () => {
            const config = useContext(ConfigContext);
            const [products, setProducts] = useState(config.products_fallback || []);
            const [activeProduct, setActiveProduct] = useState(null);
            const [searchQuery, setSearchQuery] = useState('');
            const [isLoading, setIsLoading] = useState(!!(config.remote?.productsUrl && config.remote.productsUrl.trim() !== ""));

            useEffect(() => {
                if (config.remote?.productsUrl && config.remote.productsUrl.trim() !== "") {
                    setIsLoading(true);
                    fetch(config.remote.productsUrl)
                        .then(res => res.json())
                        .then(data => {
                            const cleanData = Array.isArray(data) ? data : (data.data || []);
                            if (cleanData.length > 0) setProducts(cleanData);
                            else setProducts(config.products_fallback || []);
                        })
                        .catch(err => { setProducts(config.products_fallback || []); })
                        .finally(() => setIsLoading(false));
                } else {
                    setProducts(config.products_fallback || []);
                    setIsLoading(false);
                }
            }, [config.remote, config.products_fallback]);

            const filteredProducts = products.filter(prod => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase().trim();
                return (prod.title || '').toLowerCase().includes(q) || (prod.desc || '').toLowerCase().includes(q);
            });

            return (
                <section className="pt-32 pb-20 px-6 min-h-[70vh] relative z-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-16 text-center animate-[fadeIn_0.8s_ease-out]">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
                                {config.text.products_h2_top || "OUR"} <span className="text-brand">{config.text.products_h2_bot || "PRODUCTS"}</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full mb-6" />
                            <p className="text-gray-600 max-w-2xl mx-auto font-light mb-10 text-base sm:text-lg md:text-xl">{config.text.products_desc}</p>

                            <div className="max-w-md mx-auto relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Search size={18} />
                                </div>
                                <input 
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search products, tools, and extensions..." 
                                    className="w-full pl-11 pr-10 py-3.5 bg-black/5 border border-black/10 rounded-full text-navy placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-brand/50 focus:bg-white/50 transition-all shadow-inner font-sans"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-navy transition-colors">
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="text-center py-16 bg-black/5 rounded-3xl border border-black/10 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
                                <div className="w-10 h-10 border-4 border-black/10 border-t-brand rounded-full animate-spin mx-auto mb-4" />
                                <h3 className="font-display text-xl font-bold text-navy mb-1 tracking-widest">SYNCING DATA</h3>
                                <p className="text-gray-500 text-sm font-light">Retrieving latest records...</p>
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="text-center py-16 bg-black/5 rounded-3xl border border-black/10 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
                                <AlertCircle className="w-10 h-10 text-brand mx-auto mb-3" />
                                <h3 className="font-display text-xl font-bold text-navy mb-1">NO PRODUCTS FOUND</h3>
                                <p className="text-gray-500 text-sm font-light">We couldn't find any tools matching "{searchQuery}".</p>
                            </div>
                        ) : (
                            <div className="glass-box rounded-3xl overflow-hidden border border-black/10 bg-black/[0.02] shadow-lg animate-[fadeIn_0.5s_ease-out]">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <tbody className="divide-y divide-black/5">
                                            {filteredProducts.map((prod, idx) => (
                                                <tr key={idx} onClick={() => setActiveProduct(prod)} className="group hover:bg-brand/[0.04] transition-colors cursor-pointer">
                                                    <td className="py-4 px-4 sm:py-6 sm:px-6 md:px-8 font-display font-bold text-base sm:text-lg text-navy group-hover:text-brand transition-colors align-middle">
                                                        {prod.title}
                                                    </td>
                                                    <td className="py-4 px-4 sm:py-6 sm:px-6 md:px-8 text-right align-middle whitespace-nowrap">
                                                        <span className="inline-flex items-center justify-center px-4 sm:px-6 py-2 rounded-full bg-black/5 text-navy group-hover:bg-brand group-hover:text-light transition-all text-xs font-bold uppercase tracking-widest shadow-sm">
                                                            <span>VIEW</span>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                    <VirtualCard 
                        isOpen={!!activeProduct} 
                        onClose={() => setActiveProduct(null)}
                        title={activeProduct?.title}
                        desc={activeProduct?.desc || "A premium digital architecture solution by nodedCode Studio."}
                        actionText={getButtonText(activeProduct)}
                        onAction={() => { if(activeProduct?.link && activeProduct.link !== "#") window.open(activeProduct.link, '_blank', 'noopener,noreferrer'); }}
                    />
                </section>
            );
        };

        const ReadView = () => {
            const config = useContext(ConfigContext);
            const fallbackData = config.read_fallback || config.case_studies_fallback || [];
            const [caseStudies, setCaseStudies] = useState(fallbackData);
            const [searchQuery, setSearchQuery] = useState('');
            const targetUrl = config.remote?.readUrl || config.remote?.caseStudiesUrl;
            const [isLoading, setIsLoading] = useState(!!(targetUrl && targetUrl.trim() !== ""));

            useEffect(() => {
                if (targetUrl && targetUrl.trim() !== "") {
                    setIsLoading(true);
                    fetch(targetUrl)
                        .then(res => res.json())
                        .then(data => {
                            const cleanData = Array.isArray(data) ? data : (data.data || []);
                            if (cleanData.length > 0) setCaseStudies(cleanData);
                            else setCaseStudies(fallbackData);
                        })
                        .catch(err => { setCaseStudies(fallbackData); })
                        .finally(() => setIsLoading(false));
                } else {
                    setCaseStudies(fallbackData);
                    setIsLoading(false);
                }
            }, [config.remote, fallbackData, targetUrl]);

            const filteredStudies = caseStudies.filter(item => {
                if (!searchQuery.trim()) return true;
                const q = searchQuery.toLowerCase().trim();
                return (item.title || '').toLowerCase().includes(q) || 
                       (item.author || item.name || '').toLowerCase().includes(q) || 
                       (item.desc || '').toLowerCase().includes(q);
            });

            return (
                <section className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 min-h-[70vh] relative z-10 animate-[fadeIn_0.8s_ease-out]">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-16 text-center">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">{config.text.read_h2 || config.text.case_studies_h2 || "READ"}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full mb-6" />
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light mb-10">{config.text.read_desc || config.text.case_studies_desc || "Explore our articles, engineering case studies, and insights."}</p>

                            <div className="max-w-md mx-auto relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Search size={18} />
                                </div>
                                <input 
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search articles, authors, or topics..." 
                                    className="w-full pl-11 pr-10 py-3.5 bg-black/5 border border-black/10 rounded-full text-navy placeholder-gray-400 text-sm sm:text-base focus:outline-none focus:border-brand/50 focus:bg-white/50 transition-all shadow-inner font-sans"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-navy transition-colors">
                                        <X size={16} />
                                    </button>
                                )}
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="text-center py-16 bg-black/5 rounded-3xl border border-black/10 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
                                <div className="w-10 h-10 border-4 border-black/10 border-t-brand rounded-full animate-spin mx-auto mb-4" />
                                <h3 className="font-display text-xl font-bold text-navy mb-1 tracking-widest">SYNCING DATA</h3>
                                <p className="text-gray-500 text-sm font-light">Retrieving latest records...</p>
                            </div>
                        ) : filteredStudies.length === 0 ? (
                            <div className="text-center py-16 bg-black/5 rounded-3xl border border-black/10 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
                                <AlertCircle className="w-10 h-10 text-brand mx-auto mb-3" />
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-1">NO ARTICLES FOUND</h3>
                                <p className="text-gray-500 text-sm sm:text-base font-light">We couldn't find any articles matching "{searchQuery}".</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {filteredStudies.map((item, idx) => {
                                    const authorName = item.author || item.name || "nodedCode Team";
                                    const targetUrl = item.link || item.blog || "#";
                                    return (
                                    <div key={idx} className={`animate-[slideUp_0.5s_ease-out_${(idx%3) * 0.1}s_both] h-full flex cursor-pointer`} onClick={() => { if(targetUrl !== "#") window.open(targetUrl, '_blank', 'noopener,noreferrer'); }}>
                                        <SpotlightCard className="w-full h-full flex flex-col">
                                            <div className="flex flex-col justify-between h-full bg-transparent p-6 sm:p-8">
                                                <div>
                                                    <h3 className="text-xl sm:text-2xl font-bold font-display text-navy group-hover:text-brand transition-colors mb-3 leading-snug">{item.title}</h3>
                                                    <div className="text-sm font-mono text-gray-500 mb-6 flex flex-wrap items-center gap-2">
                                                        <span>By <strong className="text-navy font-semibold">{authorName}</strong></span>
                                                        <span className="text-gray-400">{item.date || "2026"}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-auto pt-6 border-t border-black/5 flex justify-center">
                                                    <span className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-black/5 text-navy group-hover:bg-brand group-hover:text-light transition-all text-xs sm:text-sm font-bold uppercase tracking-widest shadow-sm">
                                                        Read
                                                    </span>
                                                </div>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </section>
            );
        };

        const ContactView = () => {
            const config = useContext(ConfigContext);
            return (
                <section className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 animate-[fadeIn_0.8s_ease-out] relative z-10">
                    <div className="container mx-auto max-w-4xl text-center">
                        <SpotlightCard className="inline-block w-full" borderOpacity={0.1}>
                            <div className="p-6 sm:p-12 md:p-24 relative overflow-hidden group bg-transparent">
                                <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand/10 blur-[120px] group-hover:bg-brand/20 transition-colors duration-1000 pointer-events-none" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-navy">
                                        {config.text.contact_h2_top}<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand to-red-400">{config.text.contact_h2_bot}</span>
                                    </h2>
                                    <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full mb-8" />
                                    <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">{config.text.contact_desc}</p>
                                    <a href={`mailto:${config.brand.email}`} className="inline-flex items-center justify-center w-full md:w-auto bg-brand text-light px-8 md:px-12 py-5 md:py-6 rounded-full font-display font-bold text-base md:text-lg hover:-translate-y-1 transition-transform shadow-[0_10px_30px_-10px_rgba(232,98,87,0.5)] break-all border border-brand/50">
                                        {config.brand.email}
                                    </a>
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </section>
            );
        };

        const CareerView = () => {
            const config = useContext(ConfigContext);
            const [jobs, setJobs] = useState(config.careers_fallback || []);
            const [isLoading, setIsLoading] = useState(!!(config.remote?.careersUrl && config.remote.careersUrl.trim() !== ""));

            useEffect(() => {
                if (config.remote?.careersUrl && config.remote.careersUrl.trim() !== "") {
                    setIsLoading(true);
                    fetch(config.remote.careersUrl)
                        .then(res => res.json())
                        .then(data => {
                            const cleanData = Array.isArray(data) ? data : (data.data || []);
                            if (cleanData.length > 0) setJobs(cleanData);
                            else setJobs(config.careers_fallback || []);
                        })
                        .catch(err => { setJobs(config.careers_fallback || []); })
                        .finally(() => setIsLoading(false));
                } else {
                    setJobs(config.careers_fallback || []);
                    setIsLoading(false);
                }
            }, [config.remote, config.careers_fallback]);

            if (isLoading) {
                return (
                    <section className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col justify-center relative z-10">
                        <div className="text-center py-16 bg-black/5 rounded-3xl border border-black/10 max-w-xl mx-auto animate-[fadeIn_0.3s_ease-out]">
                            <div className="w-10 h-10 border-4 border-black/10 border-t-brand rounded-full animate-spin mx-auto mb-4" />
                            <h3 className="font-display text-xl font-bold text-navy mb-1 tracking-widest">SYNCING DATA</h3>
                            <p className="text-gray-500 text-sm font-light">Retrieving latest records...</p>
                        </div>
                    </section>
                );
            }

            if (jobs.length === 0 || jobs.every(j => (j.status || '').toLowerCase() === 'inactive' || (j.status || '').toLowerCase() === 'expired')) {
                return (
                    <section className="pt-32 pb-20 px-6 animate-[fadeIn_0.5s_ease-out] min-h-[60vh] flex flex-col justify-center relative z-10">
                        <div className="container mx-auto max-w-3xl text-center">
                            <div className="inline-flex items-center justify-center p-8 bg-black/5 rounded-3xl mb-8 border border-black/10 shadow-xl"><Lock className="w-12 h-12 text-brand" /></div>
                            <h2 className="font-display text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight">{config.text.career_h2}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full mb-6" />
                            <div className="p-10 border border-black/10 rounded-3xl bg-black/5 font-sans text-sm relative overflow-hidden backdrop-blur-md">
                                <p className="text-gray-600 mt-2 leading-relaxed font-light">{config.text.career_desc}</p>
                            </div>
                        </div>
                    </section>
                );
            }

            return (
                <section className="pt-32 pb-20 px-6 min-h-[70vh] relative z-10">
                    <div className="container mx-auto max-w-5xl">
                        <div className="mb-16 text-center animate-[fadeIn_0.8s_ease-out]">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">OPEN POSITIONS</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full mb-6" />
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light">Join the collective. Check the requirements and step forward.</p>
                        </div>
                        <div className="space-y-6">
                            {jobs.map((job, idx) => {
                                const s = (job.status || '').toLowerCase();
                                const statusColor = s === 'active' ? 'border-green-500/30 text-green-600 bg-green-500/10' :
                                    s === 'expired' ? 'border-red-500/30 text-red-600 bg-red-500/10' :
                                        'border-yellow-500/30 text-yellow-600 bg-yellow-500/10';

                                return (
                                    <div key={idx} className={`animate-[slideUp_0.5s_ease-out_${idx * 0.1}s_both]`}>
                                        <SpotlightCard className="w-full">
                                            <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-transparent">
                                                <div>
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-navy">{job.title || job.job_title}</h3>
                                                        <span className={`text-xs sm:text-sm font-sans font-medium py-1 px-3 border rounded-full ${statusColor}`}>
                                                            {(job.status || 'UNKNOWN').toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <p className="text-gray-600 max-w-2xl font-light text-base sm:text-lg">{job.desc || job.description}</p>
                                                </div>
                                                <a href={job.link || job.pdf_link || "#"} target="_blank" rel="noopener noreferrer"
                                                    className="shrink-0 flex items-center gap-2 bg-brand/10 hover:bg-brand text-brand hover:text-light px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-widest transition-all border border-brand/20 hover:scale-105">
                                                    GO AHEAD <ExternalLink size={16} />
                                                </a>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            );
        };

        const VerifyView = () => {
            const config = useContext(ConfigContext);
            const [query, setQuery] = useState('');
            const [status, setStatus] = useState('idle');
            const [result, setResult] = useState(null);
            const [db, setDb] = useState(config.verification_fallback);
            
            /** State locks for network synchronization */
            const [isFetchingDb, setIsFetchingDb] = useState(!!config.remote?.verificationUrl);
            const [hasCheckedUrl, setHasCheckedUrl] = useState(false);

            useEffect(() => {
                if (config.remote?.verificationUrl) {
                    fetch(config.remote.verificationUrl)
                        .then(res => res.json())
                        .then(data => { setDb(Array.isArray(data) ? data : (data.data || [])); })
                        .catch(() => { /* Silent fallback on network failure */ })
                        .finally(() => setIsFetchingDb(false));
                } else {
                    setIsFetchingDb(false);
                }
            }, [config.remote]);

            const executeVerify = (searchQuery, dataToSearch = db, instant = false) => {
                if (!searchQuery) return;
                setStatus('checking');
                const runCheck = () => {
                    const q = searchQuery.toLowerCase().trim();
                    const match = dataToSearch.find(r => (r.id && r.id.toLowerCase().trim() === q) || (r.email && r.email.toLowerCase().trim() === q));
                    if (match) { setStatus('valid'); setResult(match); } else { setStatus('invalid'); setResult(null); }
                };
                if (instant) runCheck();
                else setTimeout(runCheck, 500);
            };

            useEffect(() => {
                const params = new URLSearchParams(window.location.search);
                const verifyParam = params.get('verify');
                
                if (verifyParam && !isFetchingDb && !hasCheckedUrl) { 
                    setQuery(verifyParam); 
                    executeVerify(verifyParam, db, true); 
                    setHasCheckedUrl(true);
                }
            }, [isFetchingDb, db, hasCheckedUrl]);

            return (
                <section className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 animate-[fadeIn_0.5s_ease-out] min-h-[70vh] relative z-10">
                    <div className="container mx-auto max-w-xl">
                        <div className="text-center mb-12">
                            <Fingerprint className="w-16 h-16 text-brand mx-auto mb-6 animate-pulse" />
                            <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-navy mb-6">{config.text.verify_h2}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mx-auto rounded-full mb-6" />
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light">{config.text.verify_desc}</p>
                        </div>
                        <SpotlightCard className="rounded-3xl">
                            <div className="p-6 sm:p-8 md:p-12 bg-transparent relative overflow-hidden backdrop-blur-md">
                                <form onSubmit={(e) => { e.preventDefault(); executeVerify(query); }} className="relative z-10">
                                    <div className="flex flex-col sm:flex-row relative group gap-3 sm:gap-0">
                                        <div className="relative w-full">
                                            <input type="text" placeholder="Enter ID or Hash" value={query} onChange={(e) => { setQuery(e.target.value); setStatus('idle'); }} className="w-full bg-black/5 border border-black/10 rounded-2xl py-4 sm:py-6 pl-12 pr-4 sm:px-14 text-navy font-sans text-base sm:text-lg focus:outline-none focus:border-brand/50 transition-all placeholder:text-gray-400 shadow-inner" />
                                            <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 sm:w-6 h-5 sm:h-6 group-focus-within:text-brand transition-colors" />
                                        </div>
                                        <button type="submit" className="w-full sm:w-auto sm:absolute sm:right-3 sm:top-3 sm:bottom-3 py-4 sm:py-0 bg-brand text-light px-8 rounded-xl font-bold text-xs sm:text-sm tracking-widest hover:scale-105 transition-transform shadow-[0_4px_15px_rgba(232,98,87,0.3)]">VERIFY</button>
                                    </div>
                                </form>
                                <div className="min-h-[160px] flex items-center justify-center relative z-10 mt-6">
                                    {status === 'idle' && <div className="text-center text-gray-500 text-sm font-sans mt-4"><p>Waiting for Input...</p></div>}
                                    {status === 'checking' && <div className="text-center w-full"><p className="text-brand font-sans text-sm mb-4 animate-pulse">Searching Ledger...</p><div className="h-1 w-2/3 mx-auto bg-black/10 rounded-full overflow-hidden"><div className="h-full bg-brand animate-[progress_1s_ease-in-out_infinite]" /></div></div>}

                                    {status === 'valid' && result && (
                                        <div className="w-full mt-6 p-8 bg-green-500/10 border border-green-500/30 rounded-2xl text-center animate-[slideUp_0.4s_ease-out] relative overflow-hidden">
                                            <div className="absolute inset-0 bg-green-500/5 animate-pulse rounded-2xl" />
                                            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4 relative z-10" />
                                            <h3 className="text-xl font-bold text-navy mb-6 relative z-10 tracking-widest font-display">AUTHENTICITY: ORIGINAL</h3>
                                            <div className="text-center space-y-4 font-sans text-sm relative z-10 border-t border-black/10 pt-6">
                                                <div className="mb-4">
                                                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-semibold">Issued To</div>
                                                    <div className="text-navy font-bold text-xl font-display">{result.issued_to || result.issuedTo || result.name || 'N/A'}</div>
                                                </div>
                                                <div>
                                                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-2 font-semibold">Status</div>
                                                    <div className={`font-bold text-xl font-display ${['inactive', 'expired', 'suspended'].some(s => (result.status || '').toLowerCase().includes(s)) ? 'text-red-500' : 'text-green-600'}`}>
                                                        {(result.status || 'ACTIVE').toUpperCase()}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {status === 'invalid' && <div className="w-full mt-6 p-8 bg-red-500/10 border border-red-500/30 rounded-2xl text-center animate-[shake_0.4s_ease-in-out]"><AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" /><h3 className="text-xl font-bold text-navy mb-3 tracking-widest font-display">NO MATCH FOUND</h3><p className="text-gray-500 font-sans text-sm font-light">The query <span className="text-navy font-medium">"{query}"</span> was not found in our registry.</p></div>}
                                </div>
                            </div>
                        </SpotlightCard>
                    </div>
                </section>
            );
        };

        const LegalView = ({ title, content }) => (
            <section className="pt-32 pb-20 px-6 animate-[fadeIn_0.5s_ease-out] min-h-[70vh]">
                <div className="container mx-auto max-w-4xl">
                    <SpotlightCard>
                        <div className="p-8 md:p-14">
                            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy mb-6 tracking-tight">{title}</h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-brand to-transparent mb-8 rounded-full" />
                            <div className="text-gray-600 leading-relaxed whitespace-pre-wrap font-light text-base sm:text-lg md:text-xl">
                                {content}
                            </div>
                        </div>
                    </SpotlightCard>
                </div>
            </section>
        );

        /** Main Bootloader & View Router */
        const App = () => {
            const [activeView, setActiveView] = useState('home');
            const [isMenuOpen, setIsMenuOpen] = useState(false);
            const [config, setConfig] = useState(DEFAULT_CONFIG);
            const [isScrolled, setIsScrolled] = useState(false);

            useEffect(() => {
                fetch(`./config.json?t=${Date.now()}`)
                    .then(res => res.json())
                    .then(data => { setConfig(prev => ({ ...prev, ...data, brand: { ...prev.brand, ...data.brand }, text: { ...prev.text, ...data.text }, remote: { ...prev.remote, ...data.remote } })); })
                    .catch(() => { /* Silent fallback to local configuration */ });

                const handleHashChange = () => {
                    const hash = window.location.hash.replace('#', '');
                    if (hash && ['home', 'services', 'process', 'products', 'read', 'articles', 'case-studies', 'contact', 'careers', 'verify', 'terms', 'privacy', 'refund', 'about'].includes(hash)) {
                        setActiveView(hash);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (!hash) {
                        setActiveView('home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                };

                window.addEventListener('hashchange', handleHashChange);
                handleHashChange();

                if (new URLSearchParams(window.location.search).get('verify')) { setActiveView('verify'); }

                document.title = config.brand.name;
                if (config.brand.faviconUrl) {
                    const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
                    link.type = 'image/x-icon'; link.rel = 'icon'; link.href = config.brand.faviconUrl;
                    document.getElementsByTagName('head')[0].appendChild(link);
                }

                const handleScroll = () => setIsScrolled(window.scrollY > 20);
                window.addEventListener('scroll', handleScroll);
                return () => { 
                    window.removeEventListener('scroll', handleScroll);
                    window.removeEventListener('hashchange', handleHashChange);
                };
            }, []);

            const handleNav = (viewId) => { setIsMenuOpen(false); window.location.hash = viewId; };

            return (
                <ConfigContext.Provider value={config}>
                    <div className="relative min-h-screen flex flex-col selection:bg-brand/30 selection:text-brand">
                        <CustomCursor />
                        <PremiumBackground />
                        
                        <nav className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-6 transition-all duration-500 ${isScrolled ? 'py-4 bg-light/85 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_30px_rgba(0,0,0,0.05)]' : 'py-6 bg-transparent'}`}>
                            <div className="container mx-auto flex justify-between items-center relative">
                                <a href="#home" onClick={() => handleNav('home')} className="flex items-center gap-3 group relative z-50 no-underline">
                                    {config.brand.logoUrl ? (
                                        <img src={config.brand.logoUrl} alt={config.brand.name} className="h-8 w-auto object-contain transition-transform group-hover:scale-105" onError={(e) => { e.target.style.display = 'none'; }} />
                                    ) : null}
                                    {(!config.brand.logoUrl || config.brand.logoUrl === "") && <BrandLogo />}
                                </a>

                                <DesktopMenu config={config} activeView={activeView} handleNav={handleNav} />

                                <button aria-label="Toggle Menu" className="lg:hidden text-navy p-2 relative z-50 hover:bg-black/10 rounded-full transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
                            </div>
                        </nav>

                        {isMenuOpen && (
                            <div className="fixed inset-0 bg-light/95 backdrop-blur-2xl z-40 flex items-start justify-center animate-[fadeIn_0.3s_ease-out] p-4 sm:p-6 overflow-y-auto">
                                <div className="flex flex-col gap-4 sm:gap-5 text-center w-full max-w-sm pt-28 pb-16">
                                    {config.nav.map(item => (
                                        <a key={item.id} href={`#${item.id}`} onClick={() => handleNav(item.id)} className={`block text-center font-display text-2xl sm:text-3xl font-bold transition-all hover:scale-105 p-3 sm:p-4 rounded-3xl ${activeView === item.id ? 'bg-brand text-light shadow-[0_10px_30px_-10px_rgba(232,98,87,0.4)]' : 'bg-black/5 text-navy hover:bg-black/10'}`}>{item.label}</a>
                                    ))}
                                    <div className="w-12 h-1 bg-black/10 mx-auto my-6 rounded-full" />
                                    <div className="flex flex-wrap justify-center gap-4">
                                        {config.footerLinks.map(item => {
                                            const isLegal = ['about', 'terms', 'privacy', 'refund'].includes(item.id);
                                            return <a key={item.id} href={isLegal ? `/${item.id}.html` : `#${item.id}`} onClick={(e) => { if(!isLegal) handleNav(item.id); }} className="text-xs text-gray-500 uppercase tracking-widest font-bold hover:text-navy transition-colors block">{item.label}</a>;
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        <main className="pt-24 flex-grow flex flex-col relative z-10">
                            {activeView === 'home' && <HomeView navigate={handleNav} />}
                            {activeView === 'services' && <ExpertiseView navigate={handleNav} />}
                            {activeView === 'process' && <ProcessView navigate={handleNav} />}
                            {activeView === 'products' && <ProductsView />}
                            {activeView === 'read' && <ReadView />}
                            {(activeView === 'case-studies' || activeView === 'articles') && <ReadView />}
                            {activeView === 'contact' && <ContactView />}
                            {activeView === 'careers' && <CareerView />}
                            {activeView === 'verify' && <VerifyView />}
                            {activeView === 'terms' && <LegalView title={config.text.terms_title} content={config.text.terms_content} />}
                            {activeView === 'privacy' && <LegalView title={config.text.privacy_title} content={config.text.privacy_content} />}
                            {activeView === 'refund' && <LegalView title={config.text.refund_title} content={config.text.refund_content} />}
                            {activeView === 'about' && <LegalView title={config.text.about_title} content={config.text.about_content} />}
                        </main>
                        
                        <footer className="py-12 px-4 sm:px-6 border-t border-black/10 mt-auto relative z-10 bg-light/50">
                            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
                                <div>
                                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-base sm:text-lg text-center sm:text-left sm:whitespace-nowrap">
                                        <BrandLogo />
                                        <span className="hidden sm:inline text-gray-300 mx-2">|</span>
                                        <span className="text-xs text-gray-500 font-mono">Registered BBID: {config.brand.bbid || 'AA008810168T'}</span>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-500">
                                    {config.footerLinks.map(item => {
                                        const isLegal = ['about', 'terms', 'privacy', 'refund'].includes(item.id);
                                        return <a key={item.id} href={isLegal ? `/${item.id}.html` : `#${item.id}`} onClick={(e) => { if(!isLegal) handleNav(item.id); }} className="hover:text-brand transition-colors uppercase tracking-widest block">{item.label}</a>;
                                    })}
                                </div>
                                <div className="flex gap-6 text-gray-500">
                                    {config.socials.map((social, idx) => {
                                        const Icon = ICON_MAP[social.icon] || Globe;
                                        return <a key={idx} href={social.link} aria-label={social.icon} target="_blank" rel="noopener noreferrer" className="hover:text-navy hover:scale-110 transition-all"><Icon size={20} /></a>
                                    })}
                                </div>
                            </div>
                        </footer>
                    </div>
                </ConfigContext.Provider>
            );
        };

export default App;
