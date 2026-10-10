"use client";

import { useState } from "react";
import {
  ArrowRight, ArrowUpRight, Cloud, Code2, Container, GitBranch,
  Github, Linkedin, Mail, Menu, Network, ShieldCheck, Terminal, Workflow, X, BriefcaseBusiness, GraduationCap, Cpu, Server, Sparkles
} from "lucide-react";

const github = "https://github.com/adepomola";
const linkedin = "https://linkedin.com/in/ayomide-adepomola-690189422";
const email = "adepomolaayomide6@gmail.com";

const skillGroups = [
  { icon: Cloud, title: "Cloud & Infrastructure", desc: "Building and configuring cloud foundations, networking, access controls, and compute resources.", tags: ["AWS", "EC2", "VPC", "IAM", "CloudWatch"] },
  { icon: Container, title: "Containers & Orchestration", desc: "Packaging applications and learning to operate repeatable container-based workloads.", tags: ["Docker", "Kubernetes", "k3d", "Nginx"] },
  { icon: Workflow, title: "CI/CD & Automation", desc: "Automating repeatable checks and deployment workflows to reduce manual effort.", tags: ["GitHub Actions", "Jenkins", "CI/CD"] },
  { icon: Network, title: "Infrastructure as Code", desc: "Defining infrastructure with version-controlled, reusable configuration.", tags: ["Terraform", "Ansible"] },
  { icon: Terminal, title: "Linux & Operations", desc: "Working with Linux environments, shell tools, troubleshooting, and service operations.", tags: ["Linux", "Ubuntu", "Bash", "Git"] },
  { icon: ShieldCheck, title: "Reliability & Security", desc: "Applying practical habits around health checks, least privilege, and operational visibility.", tags: ["Health checks", "IAM", "Monitoring", "Documentation"] }
];

const projects = [
  {
    number: "01", type: "CI/CD · CONTAINERS · CLOUD", title: "Automated Deployment Service",
    desc: "A deployment workflow connecting source changes to a containerised web service, with health checks to help confirm the application is responding.",
    points: ["GitHub Actions workflow", "Docker and Nginx deployment", "Application health-check workflow"],
    tags: ["GitHub Actions", "Docker", "AWS", "Nginx"], repo: `${github}/automated-deployment-service`
  },
  {
    number: "02", type: "INFRASTRUCTURE AS CODE", title: "Modular Terraform Infrastructure",
    desc: "Reusable infrastructure configuration for network and compute resources, with version-controlled validation and remote-state design.",
    points: ["Network and compute modules", "Terraform format and validation checks", "S3 remote state and state-locking design"],
    tags: ["Terraform", "AWS", "GitHub Actions"], repo: github
  },
  {
    number: "03", type: "KUBERNETES · CONTAINERS", title: "KubeCommerce",
    desc: "A hands-on Kubernetes project exploring containerised application deployment and local cluster operations using k3d and k3s.",
    points: ["Local Kubernetes environment", "Container deployment workflows", "Next steps include expanded observability and infrastructure as code"],
    tags: ["Kubernetes", "Docker", "k3d", "k3s"], repo: `${github}/kubecommerce`
  },
  {
    number: "04", type: "CONFIGURATION MANAGEMENT", title: "Ansible Automated Deployment",
    desc: "Automating server configuration and application deployment with Ansible, including connectivity checks against a cloud-hosted Ubuntu server.",
    points: ["Ansible inventory and playbooks", "Ubuntu server automation", "Connectivity verification with Ansible ping"],
    tags: ["Ansible", "Linux", "Ubuntu", "AWS EC2"], repo: `${github}/ansible-automated-deployment`
  },
  {
    number: "05", type: "AGRITECH · DELIVERY ENGINEERING", title: "DG-LETS Agri Market",
    desc: "Contributing to an agricultural marketplace project, with engineering work focused on delivery pipelines, deployment configuration, and infrastructure documentation.",
    points: ["Backend delivery workflow and CI checks", "Container and health-check configuration", "Terraform and production-readiness planning"],
    tags: ["CI/CD", "Docker", "Terraform", "NestJS", "PostgreSQL"], repo: "https://github.com/DG-LETS/dglets-agri-market"
  },
  {
    number: "06", type: "APPLICATION DELIVERY · COLLABORATION", title: "VeraMatch / MyAthena Engineering Work",
    desc: "Junior DevOps-oriented collaboration exploring application delivery and CI/CD planning, including Android build automation where platform credentials permit.",
    points: ["CI/CD workflow planning", "Build and deployment considerations", "Repository-based collaboration"],
    tags: ["CI/CD", "GitHub Actions", "Deployment planning"], repo: github
  },
  {
    number: "07", type: "CLOUD · OPERATIONS", title: "AWS Cloud Operations Labs",
    desc: "Practical cloud exercises covering core AWS resources, network configuration, server access, and operational visibility.",
    points: ["EC2 and VPC fundamentals", "IAM and security-group concepts", "CloudWatch and service-health planning"],
    tags: ["AWS", "EC2", "VPC", "IAM", "CloudWatch"], repo: github
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <a href="#home" className="brand" onClick={closeMenu}>AA<span>.</span> <span style={{color:"#91a0ba",fontWeight:500}}>cloud</span></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            {[["About","#about"],["Skills","#skills"],["Projects","#projects"],["Experience","#experience"],["Contact","#contact"]].map(([label, href]) =>
              <a key={label} href={href} onClick={closeMenu}>{label}</a>
            )}
            <a className="button button-secondary" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-grid">
              <div className="reveal">
                <div className="eyebrow"><span className="status-dot"/> DEVOPS & CLOUD ENGINEERING</div>
                <h1>Building reliable systems.<br/><span className="gradient-text">Automating what matters.</span></h1>
                <p className="hero-copy">
                  I&apos;m <strong>Ayomide Adepomola</strong>, a DevOps &amp; Cloud Engineer focused on cloud infrastructure,
                  CI/CD automation, containerisation, and repeatable deployments. I enjoy turning manual processes into
                  dependable workflows and learning through real-world engineering projects.
                </p>
                <div className="actions">
                  <a className="button button-primary" href="#projects">Explore my projects <ArrowRight size={17}/></a>
                  <a className="button button-secondary" href="#contact">Let&apos;s connect <ArrowUpRight size={16}/></a>
                </div>
                <div className="metrics">
                  <div className="metric"><strong>64</strong><span>Projects completed</span></div>
                  <div className="metric"><strong>15+</strong><span>AWS services explored</span></div>
                  <div className="metric"><strong>3</strong><span>Cloud platforms</span></div>
                  <div className="metric"><strong>10+</strong><span>Automation tools</span></div>
                </div>
              </div>

              <div className="profile-visual reveal delay-2">
                <img className="spiral-decoration" src="/spiral.svg" alt="" aria-hidden="true" />
                <div className="portrait-frame"><img src="/ayomide-adepomola.jpg" alt="Portrait of Ayomide Adepomola, DevOps and Cloud Engineer" /></div>
                <div className="profile-caption"><span className="status-dot"/><div><strong>Ayomide Adepomola</strong><small>DevOps &amp; Cloud Engineer</small></div></div>
                <div className="floating-chip chip-one"><Cloud size={16}/> Cloud infrastructure</div>
                <div className="floating-chip chip-two"><Workflow size={16}/> CI/CD automation</div>
                <div className="floating-chip chip-three"><Sparkles size={16}/> Cloud + AI mindset</div>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-marquee" aria-label="Technology stack">
          <div className="container tech-strip-heading">TECHNOLOGIES IN MY TOOLKIT</div>
          <div className="container tech-strip">
            <span className="tech-logo aws-mark"><Cloud size={18}/> AWS</span>
            <span className="tech-logo"><Container size={18}/> Docker</span>
            <span className="tech-logo"><Network size={18}/> Kubernetes</span>
            <span className="tech-logo"><Workflow size={18}/> Jenkins</span>
            <span className="tech-logo"><GitBranch size={18}/> GitHub Actions</span>
            <span className="tech-logo"><Server size={18}/> Terraform</span>
            <span className="tech-logo"><Terminal size={18}/> Ansible</span>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">01 / ABOUT</div><h2>Engineering with purpose.</h2></div>
            </div>
            <div className="about-grid">
              <div className="prose">
                <p>I&apos;m Ayomide Adepomola, a DevOps &amp; Cloud Engineer focused on cloud infrastructure, CI/CD automation, containerisation, and reliable application delivery. I enjoy turning manual processes into repeatable workflows and documenting what I build.</p>
                <p>My journey began in 2025 with foundational learning and mentorship at pistis Tech Hub. Since then, I&apos;ve continued learning through hands-on projects involving AWS, Terraform, Ansible, Docker, Kubernetes, and CI/CD pipelines.</p>
                <p>I value curiosity, collaboration, secure infrastructure, and steady improvement. I&apos;m interested in meaningful engineering opportunities where I can contribute, learn from experienced teams, and help deliver dependable systems.</p>
              </div>
              <aside className="callout">
                <h3><Code2 size={18} style={{display:"inline",verticalAlign:"middle",marginRight:8,color:"var(--blue)"}}/>What I care about</h3>
                <p>Reliable releases, automation over repetitive manual work, secure infrastructure, and continuously improving how applications are delivered and operated.</p>
                <div className="tags">{["Automation first","Infrastructure as Code","Continuous learning","Team collaboration"].map(t=><span className="tag" key={t}>{t}</span>)}</div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading"><div><div className="section-kicker">02 / TOOLKIT</div><h2>Tools I work with.</h2><p className="section-intro">A practical toolkit for cloud environments, delivery pipelines, container workflows, and infrastructure automation. Experience varies by tool and project.</p></div></div>
            <div className="skills-grid">
              {skillGroups.map(({icon:Icon,title,desc,tags})=><article className="skill-card" key={title}><Icon size={22}/><h3>{title}</h3><p>{desc}</p><div className="tags">{tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div><div className="section-kicker">03 / SELECTED WORK</div><h2>Built, tested, documented.</h2><p className="section-intro">Project summaries are a starting point. Open the repositories for source code, implementation details, and current status.</p></div>
              <a className="text-link" href={github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={16}/></a>
            </div>
            <div className="project-grid">
              {projects.map(p=><article className="project-card" key={p.number}>
                <div className="project-top"><span>{p.number} / {p.type}</span><GitBranch size={18}/></div>
                <h3>{p.title}</h3><p>{p.desc}</p>
                <ul>{p.points.map(point=><li key={point}>{point}</li>)}</ul>
                <div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div>
                <div className="project-links"><a className="text-link" href={p.repo} target="_blank" rel="noreferrer"><Github size={16}/> Explore on GitHub <ArrowUpRight size={14}/></a></div>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-heading"><div><div className="section-kicker">04 / EXPERIENCE & GROWTH</div><h2>Learning by building.</h2><p className="section-intro">Use this section to document verifiable responsibilities, contributions, training, and outcomes. Edit the details before publishing.</p></div></div>
            <div className="experience-list">
              <article className="experience-card">
                <div className="experience-date">2026<br/><span className="remote-badge">REMOTE</span></div>
                <div><h3>Assistant CTO — DG-LETS Agri &amp; Tech</h3><p>Remote technical planning and delivery for an agritech marketplace, with a focus on DevOps workflows, CI/CD, cloud infrastructure planning, containerisation, health checks, and production-readiness documentation.</p><div className="tags">{["Agritech", "CI/CD", "Docker", "Terraform", "Cloud operations"].map(t=><span className="tag" key={t}>{t}</span>)}</div></div>
              </article>
              <article className="experience-card">
                <div className="experience-date">2026<br/><span className="remote-badge">REMOTE</span></div>
                <div><h3>Junior DevOps Engineer — VeraMatch LLC</h3><p>Remote DevOps-oriented collaboration focused on application delivery, CI/CD planning, build automation, and deployment considerations for product engineering. Technical contributions and outcomes should be listed only where confirmed.</p><div className="tags">{["CI/CD", "Build automation", "Deployment planning"].map(t=><span className="tag" key={t}>{t}</span>)}</div></div>
              </article>
              <article className="experience-card">
                <div className="experience-date">2025<br/><span className="remote-badge">TRAINING</span></div>
                <div><h3>DevOps Learning &amp; Mentorship — Epistis Tech</h3><p>Started my DevOps journey by building foundational knowledge and practical skills. Learned through training and mentorship from Mr. Segun and the pistis team, then continued applying those lessons through personal cloud and automation projects.</p><div className="tags">{["Linux", "AWS fundamentals", "Docker", "Git", "Continuous learning"].map(t=><span className="tag" key={t}>{t}</span>)}</div></div>
              </article>
              <article className="experience-card">
                <div className="experience-date">PROJECT WORK<br/><span className="remote-badge">REMOTE / PERSONAL</span></div>
                <div><h3>Cloud, Infrastructure &amp; Kubernetes Projects</h3><p>Built and documented practical exercises involving Terraform modules, Ansible automation, Docker-based deployments, GitHub Actions, AWS resources, and the KubeCommerce local Kubernetes environment. Project status and implementation details are available through the linked public repositories where published.</p></div>
              </article>
            </div>
            <div className="callout" style={{marginTop:18}}>
              <h3><GraduationCap size={18} style={{display:"inline",verticalAlign:"middle",marginRight:8,color:"var(--blue)"}}/>Learning &amp; mentorship</h3>
              <p>2025 marked the start of my DevOps journey at Epistis Tech, with guidance from Mr. Segun. I continue to grow through hands-on practice, mentorship, project collaboration, and ongoing study of cloud-native engineering.</p>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <div className="section-kicker">05 / CONTACT</div>
                <h2>Let&apos;s build something dependable.</h2>
                <p>Have a junior DevOps opportunity, an infrastructure challenge, a project collaboration, or advice to share? I&apos;d be glad to connect.</p>
                <div className="contact-links">
                  <a className="button button-primary" href={`mailto:${email}?subject=${encodeURIComponent("DevOps & Cloud Engineering opportunity")}`}><Mail size={16}/> Email me</a>
                  <a className="button button-secondary" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
                  <a className="button button-secondary" href={github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
                </div>
              </div>
              <div className="eyebrow"><span className="status-dot"/> OPEN TO MEANINGFUL CONNECTIONS</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner"><span>© {new Date().getFullYear()} Ayomide Adepomola. Built with purpose.</span><span>DevOps · Cloud · Automation</span></div>
      </footer>
    </>
  );
}
