'use client'

import { useEffect, useState } from 'react'

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Play,
  ShieldCheck,
  Sparkles,
  Terminal,
  Youtube,
  GraduationCap,
  Network,
  ServerCog,
  Bot,
  CloudCog,
  type LucideIcon,
} from 'lucide-react'

const links = {
  github: 'https://github.com/shramikawale',
  linkedin: 'https://www.linkedin.com/in/shramik-awale/',
  medium: 'https://shramikawale.medium.com',
  youtube: 'https://www.youtube.com/channel/UCTmZA3ZlxWh8dG149swJiVA/videos',
  email:
    'mailto:shramikawale@gmail.com?subject=DevSecOps%20%2F%20Platform%20Engineering%20Inquiry',
}

const certs = [
  [
    'AWS',
    'AWS Partner: Agentic AI Essentials',
    'https://www.credly.com/badges/4fe1c7e6-42e6-4abc-9c67-25cf4707bf79/linked_in_profile',
    'aws',
  ],
  [
    'Anthropic',
    'AI / Claude Credential',
    'https://verify.skilljar.com/c/f4n4yh7enthw',
    'anthropic',
  ],
  [
    'Anthropic',
    'AI / Claude Credential',
    'https://verify.skilljar.com/c/45ttox8tbohu',
    'anthropic',
  ],
  [
    'Anthropic',
    'AI / Claude Credential',
    'https://verify.skilljar.com/c/as8pnyma3ewf',
    'anthropic',
  ],
  [
    'LinkedIn',
    'AWS Solutions Architect — Cloud Services',
    'https://www.linkedin.com/learning/certificates/2458a2fddd60adec86d9377bf4de747530111d282a94ac67432edbdf3b1ff5d5',
    'linkedin',
  ],
  [
    'LinkedIn',
    'AWS Solutions Architect — Cloud Services',
    'https://www.linkedin.com/learning/certificates/372506c1a665e7fc110fbfec4363241d744bb5c5e7a956cfec9d52d40a492fdf',
    'linkedin',
  ],
  [
    'LinkedIn',
    'DevSecOps / DevOps Learning',
    'https://www.linkedin.com/learning/certificates/46f73f426706fa33d5cedb40bd2d21e48057929dbb765dc2ba7ee19b757f3333',
    'linkedin',
  ],
  [
    'Udemy',
    'Mobile Cybersecurity Awareness',
    'https://www.udemy.com/certificate/UC-ZQFY41JI/',
    'udemy',
  ],
]

const capabilities = [
  [
    '01',
    'Cloud Architecture',
    'AWS · Azure · GCP',
    'Secure foundations, networking, IAM, reliability, cost and multi-account/multi-subscription architecture.',
  ],
  [
    '02',
    'Kubernetes Platforms',
    'EKS · AKS · GKE · Rancher',
    'Production clusters, GitOps, platform standards, workload lifecycle, observability and operational guardrails.',
  ],
  [
    '03',
    'DevSecOps & Supply Chain',
    'Security by design',
    'CI/CD security, SAST, SCA, secrets, containers, IaC scanning, policy-as-code and secure delivery.',
  ],
  [
    '04',
    'Platform Engineering',
    'Terraform · Bicep · Automation',
    'Reusable infrastructure, paved roads, self-service workflows and developer experience.',
  ],
  [
    '05',
    'AI Infrastructure',
    'LLM · Agents · Cloud',
    'Cloud-native foundations for AI workloads, automation, observability and AI-enabled engineering.',
  ],
  [
    '06',
    'Reliability & FinOps',
    'Operate · Optimize · Scale',
    'Monitoring, DR, performance, capacity and cost optimization tied to measurable outcomes.',
  ],
]

const work = [
  {
    no: '01',
    eyebrow: 'CLOUD MIGRATION',
    title: 'Cross-cloud database migration',
    body: 'A critical RDS-to-Cloud SQL migration using AWS DMS, engineered around continuity, validation and controlled cutover.',
    tags: ['AWS DMS', 'RDS', 'GCP Cloud SQL', '~99% availability'],
  },
  {
    no: '02',
    eyebrow: 'KUBERNETES / GITOPS',
    title: 'Enterprise Kubernetes platform',
    body: 'A production operating model around Kubernetes, Terraform, Argo CD, observability and security guardrails.',
    tags: ['EKS / AKS / GKE', 'Terraform', 'Argo CD', 'Prometheus'],
  },
  {
    no: '03',
    eyebrow: 'DEVSECOPS',
    title: 'Secure software delivery',
    body: 'Security controls embedded from source through dependency, image, IaC and deployment stages.',
    tags: ['Snyk', 'Trivy', 'SonarQube', 'Checkov', 'Gitleaks'],
  },
  {
    no: '04',
    eyebrow: 'AI PLATFORM',
    title: 'AI-ready engineering foundation',
    body: 'A reference platform connecting cloud foundations, Kubernetes, automation, observability and AI/agent workflows.',
    tags: ['Kubernetes', 'Python', 'LLM', 'Agent workflows'],
  },
]

/*
 * Explicit tuple typing fixes the TypeScript error:
 *
 * Type 'string | ForwardRefExoticComponent<...>'
 * is not assignable to type 'Key'
 *
 * The fourth value is now explicitly known to be a LucideIcon.
 */
const training: [string, string, string, LucideIcon][] = [
  [
    '01',
    'Multi-Cloud Engineering',
    'AWS · Azure · GCP',
    CloudCog,
  ],
  [
    '02',
    'AI / ML Ops',
    'AI platforms · LLMOps · automation',
    Bot,
  ],
  [
    '03',
    'DevSecOps',
    'Secure CI/CD · supply chain · IaC security',
    ShieldCheck,
  ],
  [
    '04',
    'Platform Engineering',
    'Kubernetes · GitOps · self-service platforms',
    ServerCog,
  ],
  [
    '05',
    'SRE & Observability',
    'Reliability · SLOs · monitoring · incident readiness',
    Sparkles,
  ],
  [
    '06',
    'Network Engineering',
    'Cloud networking · DNS · load balancing · Zero Trust',
    Network,
  ],
  [
    '07',
    'Systems & Linux',
    'Linux · containers · automation · troubleshooting',
    Terminal,
  ],
  [
    '08',
    'Kubernetes & GitOps',
    'EKS · AKS · GKE · Argo CD',
    GraduationCap,
  ],
]

const stack = [
  'AWS',
  'Azure',
  'GCP',
  'Kubernetes',
  'Terraform',
  'Bicep',
  'Argo CD',
  'GitHub Actions',
  'Jenkins',
  'Python',
  'IAM / RBAC / SSO',
  'KMS / Key Vault',
  'Prometheus',
  'Grafana',
  'Azure Monitor',
  'FinOps',
]

function DeliveryArchitecture() {
  const stages = [
    {
      key: '01',
      title: 'Business',
      sub: 'Outcome & constraints',
      icon: <Sparkles size={18} />,
    },
    {
      key: '02',
      title: 'Cloud Foundation',
      sub: 'AWS · Azure · GCP',
      icon: <CloudCog size={18} />,
    },
    {
      key: '03',
      title: 'Platform',
      sub: 'Kubernetes · IaC · GitOps',
      icon: <ServerCog size={18} />,
    },
    {
      key: '04',
      title: 'Secure Delivery',
      sub: 'CI/CD · Policy · Supply chain',
      icon: <ShieldCheck size={18} />,
    },
    {
      key: '05',
      title: 'Operate',
      sub: 'SRE · Observability · FinOps',
      icon: <Network size={18} />,
    },
    {
      key: '06',
      title: 'AI Enablement',
      sub: 'LLM · Agents · Automation',
      icon: <Bot size={18} />,
    },
  ]

  return (
    <div className="delivery-architecture">
      <div className="architecture-topline">
        <span>REFERENCE DELIVERY ARCHITECTURE</span>
        <span className="architecture-live">
          <i /> LIVE SYSTEM FLOW
        </span>
      </div>

      <div className="architecture-canvas">
        <div className="architecture-beam beam-a" />
        <div className="architecture-beam beam-b" />
        <div className="architecture-beam beam-c" />

        <div className="architecture-track">
          {stages.map((stage, i) => (
            <div
              className={`architecture-stage stage-${i}`}
              key={stage.key}
            >
              <span className="stage-key">{stage.key}</span>

              <div className="stage-icon">{stage.icon}</div>

              <b>{stage.title}</b>

              <small>{stage.sub}</small>

              {i < stages.length - 1 && (
                <span className="stage-arrow">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="architecture-platform">
          <div>
            <span>SECURITY</span>
            <b>IAM · RBAC · KMS · Secrets · Policy</b>
          </div>

          <div>
            <span>DATA / TELEMETRY</span>
            <b>Metrics · Logs · Traces · Cost</b>
          </div>

          <div>
            <span>ENGINEERING LOOP</span>
            <b>Measure → Learn → Automate → Improve</b>
          </div>
        </div>
      </div>
    </div>
  )
}

const deliveryProof = [
  {
    metric: '~99%',
    label: 'availability',
    title: 'Critical database migration',
    body: 'A production RDS → Cloud SQL migration was engineered around controlled cutover, validation and continuity.',
  },
  {
    metric: '3',
    label: 'clouds',
    title: 'Multi-cloud architecture',
    body: 'AWS, Azure and GCP patterns brought together through infrastructure-as-code, Kubernetes and standardized delivery.',
  },
  {
    metric: '200+',
    label: 'engineers',
    title: 'Technical enablement',
    body: 'Hands-on knowledge sharing across DevSecOps, cloud, Kubernetes and modern engineering practices.',
  },
  {
    metric: '10+',
    label: 'years',
    title: 'Production engineering',
    body: 'A decade-plus of infrastructure, delivery, security, reliability and platform engineering experience.',
  },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        }),
      { threshold: 0.12 },
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el)
    })

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <main className="site-shell">
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#top" className="brand">
          <span>SA</span>
          <i>/</i> PLATFORM ENGINEERING
        </a>

        <nav>
          <a href="#expertise">Expertise</a>
          <a href="#architecture">Architecture</a>
          <a href="#work">Proof</a>
          <a href="#credentials">Credentials</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href={links.email}>
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
      </header>

      <section id="top" className="hero section-pad">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="hero-grid" />

        <div className="hero-copy reveal">
          <div className="status">
            <span />
            AVAILABLE FOR GLOBAL OPPORTUNITIES
          </div>

          <p className="kicker">
            DEVSECOPS · PLATFORM ENGINEERING · CLOUD ARCHITECTURE
          </p>

          <h1>
            Build platforms.
            <br />
            <span>Secure delivery.</span>
            <br />
            Ship what matters.
          </h1>

          <p className="hero-lead">
            I&apos;m <strong>Shramik Awale</strong> — a DevSecOps and Platform
            Engineering leader building secure, scalable cloud platforms
            across AWS, Azure and GCP, with Kubernetes, infrastructure
            automation and AI infrastructure at the core.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={links.email}>
              Start a conversation <ArrowUpRight size={17} />
            </a>

            <a className="button button-ghost" href="#work">
              Explore selected work <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <b>10+</b>
              <span>years experience</span>
            </div>

            <div>
              <b>200+</b>
              <span>engineers trained</span>
            </div>

            <div>
              <b>3× AWS</b>
              <span>2× Anthropic AI</span>
            </div>
          </div>
        </div>

        <div className="hero-portrait reveal">
          <div className="portrait-frame">
            <img src="/profile.png" alt="Shramik Awale" />
          </div>

          <div className="portrait-label">
            <span>SHRAMIK AWALE</span>
            <b>DEVSECOPS · PLATFORM</b>
          </div>
        </div>

        <div className="system-visual" aria-hidden="true">
          <div className="system-ring ring-one" />
          <div className="system-ring ring-two" />
          <div className="system-ring ring-three" />

          <div className="system-core">
            <Terminal size={26} />
            <span>PLATFORM</span>
            <b>ENGINE</b>
          </div>

          {['AWS', 'K8S', 'TF', 'SEC', 'AI', 'OBS'].map((x, i) => (
            <div key={x} className={`node node-${i}`}>
              <span>{x}</span>
            </div>
          ))}

          <div className="scan-line" />
        </div>

        <a className="scroll-cue" href="#expertise">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={16} />
        </a>
      </section>

      <section className="marquee">
        <div className="marquee-track">
          AWS <i>✦</i> AZURE <i>✦</i> GCP <i>✦</i> KUBERNETES <i>✦</i>{' '}
          TERRAFORM <i>✦</i> DEVSECOPS <i>✦</i> AI INFRASTRUCTURE <i>✦</i>{' '}
          AWS <i>✦</i> AZURE <i>✦</i> GCP <i>✦</i> KUBERNETES <i>✦</i>{' '}
          TERRAFORM <i>✦</i> DEVSECOPS <i>✦</i> AI INFRASTRUCTURE <i>✦</i>
        </div>
      </section>

      <section id="expertise" className="section-pad section-dark">
        <div className="section-heading reveal">
          <div>
            <p className="kicker">01 / CAPABILITIES</p>
            <h2>
              Architecture first.
              <br />
              <em>Tools second.</em>
            </h2>
          </div>

          <p>
            I design the engineering system around the outcome — then select
            the technology that makes it repeatable.
          </p>
        </div>

        <div className="cap-grid">
          {capabilities.map(([n, title, meta, text]) => (
            <article className="cap-card reveal" key={n}>
              <span className="cap-no">{n}</span>
              <ShieldCheck size={20} />
              <p>{meta}</p>
              <h3>{title}</h3>
              <span>{text}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="section-pad architecture-section">
        <div className="section-heading reveal">
          <div>
            <p className="kicker">02 / ARCHITECTURE SYSTEM</p>
            <h2>
              Connect the stack.
              <br />
              <em>Deliver the outcome.</em>
            </h2>
          </div>

          <p>
            A reference architecture showing how business intent becomes a
            secure, observable and continuously improving production platform.
          </p>
        </div>

        <div className="reveal">
          <DeliveryArchitecture />
        </div>
      </section>

      <section id="work" className="section-pad work-section">
        <div className="section-heading reveal">
          <div>
            <p className="kicker">03 / SELECTED WORK</p>
            <h2>
              Real engineering.
              <br />
              <em>Production thinking.</em>
            </h2>
          </div>

          <p>
            Selected examples are intentionally anonymized where client
            confidentiality applies.
          </p>
        </div>

        <div className="work-list">
          {work.map((p) => (
            <article className="work-card reveal" key={p.no}>
              <div className="work-index">
                {p.no}
                <span> / 04</span>
              </div>

              <div className="work-main">
                <p className="kicker">{p.eyebrow}</p>
                <h3>{p.title}</h3>
                <p>{p.body}</p>

                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <ArrowUpRight className="work-arrow" size={24} />
            </article>
          ))}
        </div>

        <div className="proof-heading reveal">
          <p className="kicker">DELIVERY EVIDENCE</p>
          <h3>Short proof. Clear business relevance.</h3>
          <p>
            Public-safe evidence is separated from confidential client detail.
            Metrics are shown only where they reflect the experience described.
          </p>
        </div>

        <div className="proof-grid">
          {deliveryProof.map((p) => (
            <article className="proof-card reveal" key={p.title}>
              <div className="proof-metric">
                <b>{p.metric}</b>
                <span>{p.label}</span>
              </div>

              <div>
                <p className="kicker">{p.title}</p>
                <h4>{p.body}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad profile-section" id="profile">
        <div className="profile-card reveal">
          <div className="profile-copy">
            <p className="kicker">03 / ENGINEERING PROFILE</p>

            <h2>
              From infrastructure execution to{' '}
              <em>platform architecture.</em>
            </h2>

            <p>
              My focus is the layer between software delivery and production
              reality: cloud foundations, Kubernetes, security, automation,
              observability and the platform capabilities engineers need to
              move faster without losing control.
            </p>

            <div className="checks">
              {[
                'Multi-cloud architecture across AWS, Azure and GCP',
                'Kubernetes platforms and GitOps operating models',
                'Security embedded into CI/CD and supply chains',
                'Automation, reliability, observability and FinOps',
                'AI/LLM infrastructure and modern platform engineering',
              ].map((x) => (
                <span key={x}>
                  <Check size={15} />
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div className="stack-panel">
            <p>CORE STACK</p>

            <div>
              {stack.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="section-pad training-section">
        <div className="section-heading reveal">
          <div>
            <p className="kicker">04 / TRAINING & ENABLEMENT</p>

            <h2>
              Build capability.
              <br />
              <em>Not dependency.</em>
            </h2>
          </div>

          <p>
            Practical technical training for engineers, teams and
            organizations — from cloud foundations through production-grade
            platforms, security and AI operations.
          </p>
        </div>

        <div className="training-grid">
          {training.map(([n, title, meta, Icon]) => (
            <article className="training-card reveal" key={n}>
              <span className="training-no">{n}</span>
              <Icon size={21} />
              <p>{meta}</p>
              <h3>{title}</h3>
              <span>
                Hands-on workshops · architecture patterns · production
                scenarios
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="credentials" className="section-pad credentials">
        <div className="section-heading reveal">
          <div>
            <p className="kicker">05 / CREDENTIALS & COMMUNITY</p>

            <h2>
              Proof, learning
              <br />
              <em>& knowledge sharing.</em>
            </h2>
          </div>

          <p>
            Verified credentials and public technical work — all linked back
            to the original source.
          </p>
        </div>

        <div className="credential-grid">
          {certs.map(([provider, label, url, logo]) => (
            <a
              className="credential"
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              <span className={`cert-logo cert-${logo}`}>
                {provider === 'LinkedIn'
                  ? 'in'
                  : provider.slice(0, 2).toUpperCase()}
              </span>

              <div>
                <b>{label}</b>
                <small>{provider} · Open verification ↗</small>
              </div>

              <ExternalLink size={16} />
            </a>
          ))}
        </div>

        <div className="community-grid">
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github />
            <div>
              <b>GitHub</b>
              <span>Open-source projects & infrastructure work</span>
            </div>
            <ArrowUpRight />
          </a>

          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            <div>
              <b>LinkedIn</b>
              <span>Architecture, DevSecOps & engineering insights</span>
            </div>
            <ArrowUpRight />
          </a>

          <a href={links.medium} target="_blank" rel="noreferrer">
            <Sparkles />
            <div>
              <b>Medium</b>
              <span>Technical writing & cloud-native articles</span>
            </div>
            <ArrowUpRight />
          </a>

          <a href={links.youtube} target="_blank" rel="noreferrer">
            <Youtube />
            <div>
              <b>Nepali DevOps</b>
              <span>DevOps, cloud & community learning</span>
            </div>
            <Play size={15} />
          </a>
        </div>
      </section>

      <section id="contact" className="contact section-pad">
        <div className="contact-glow" />

        <div className="contact-inner reveal">
          <p className="kicker">06 / CONTACT</p>

          <h2>
            Have a platform problem
            <br />
            <em>worth solving?</em>
          </h2>

          <p>
            Send a short project brief or enquiry. Tell me what you are
            building, the current challenge, your preferred cloud/stack,
            timeline and what outcome you want to achieve. I can respond with
            a practical next step, discovery discussion or training approach.
          </p>

          <div className="contact-actions">
            <a
              className="email-link"
              href="mailto:shramikawale@gmail.com?subject=Project%20Inquiry%20-%20DevSecOps%20%2F%20Platform%20Engineering&body=Hi%20Shramik%2C%0A%0AI'd%20like%20to%20discuss%20a%20project.%0A%0AProject%20%2F%20Company%3A%0AChallenge%3A%0ACloud%20%2F%20Technology%20Stack%3A%0AExpected%20Outcome%3A%0ATimeline%3A%0A%0AThanks%2C"
            >
              <Mail size={20} />
              <span>Project enquiry</span>
              <ArrowUpRight size={20} />
            </a>

            <a
              className="email-link secondary"
              href="mailto:shramikawale@gmail.com?subject=Training%20Inquiry%20-%20DevSecOps%20%2F%20Platform%20Engineering&body=Hi%20Shramik%2C%0A%0AI'd%20like%20to%20discuss%20technical%20training.%0A%0ATeam%20size%3A%0ATraining%20topics%3A%0ASkill%20level%3A%0APreferred%20dates%3A%0A%0AThanks%2C"
            >
              <GraduationCap size={20} />
              <span>Training enquiry</span>
              <ArrowUpRight size={20} />
            </a>
          </div>

          <a
            className="plain-email"
            href="mailto:shramikawale@gmail.com"
          >
            shramikawale@gmail.com
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Shramik Awale</span>
        <span>
          DevSecOps · Platform Engineering · Cloud Architecture
        </span>
        <span>Built with Next.js</span>
      </footer>
    </main>
  )
}
