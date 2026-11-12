import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowDownRight, ArrowUpRight, Code2,
  Mail, Database, BrainCircuit, ChartNoAxesCombined
} from 'lucide-react'
import './App.css'
import CustomerChurn from './pages/CustomerChurn'
import EcommerceCaseStudy from './pages/EcommerceCaseStudy'
import ExpenseCaseStudy from './pages/ExpenseCaseStudy'

const projects = [
  {
    number: '01',
    title: 'Customer Churn Prediction',
    category: 'DATA SCIENCE',
    description: 'A machine learning-based churn prediction system with EDA, model comparison, visualizations and an interactive prediction dashboard.',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    icon: BrainCircuit,
    status: 'GITHUB',
    url: 'https://github.com/arjunajai221-a11y/Customer_Churn_Prediction'
  },
  {
    number: '02',
    title: 'Ecommerce Intelligence System',
    category: 'DATA ANALYTICS',
    description: 'An interactive e-commerce analytics dashboard built to explore transactions, revenue trends and customer behaviour.',
    stack: ['Python', 'SQL', 'Pandas', 'Plotly', 'Streamlit'],
    icon: ChartNoAxesCombined,
    status: 'GITHUB',
    url: 'https://github.com/arjunajai221-a11y/Ecommerce_Intelligence_System'
  },
  {
    number: '03',
    title: 'Smart Expense Manager',
    category: 'PYTHON DEVELOPMENT',
    description: 'A Python-based personal expense management system.',
    stack: ['Python'],
    icon: Database,
    status: 'GITHUB',
    url: 'https://github.com/arjunajai221-a11y/Smart-Expense-Manager'
  },
  {
    number: '04',
    title: 'Quiz App',
    category: 'WEB DEVELOPMENT',
    description: 'A simple interactive quiz application built using HTML, CSS and JavaScript.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    icon: Code2,
    status: 'GITHUB',
    url: 'https://github.com/arjunajai221-a11y/quiz-app-arjun-2026'
  }
]

const skills = [
  'PYTHON', 'PANDAS', 'NUMPY', 'SQL',
  'DATA ANALYTICS', 'DATA SCIENCE',
  'SCIKIT-LEARN', 'STREAMLIT',
  'MATPLOTLIB', 'POWER BI'
]

function App() {
  const [showChurn, setShowChurn] = useState(false)
  const [showEcommerce, setShowEcommerce] = useState(false)
  const [showExpense, setShowExpense] = useState(false)
  if (showChurn) return <CustomerChurn onBack={() => setShowChurn(false)} />
  if (showEcommerce) return <EcommerceCaseStudy onBack={() => setShowEcommerce(false)} />
  if (showExpense) return <ExpenseCaseStudy onBack={() => setShowExpense(false)} />
  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="brand" aria-label="Back to home">
  <svg className="brand-signature" viewBox="0 0 240 160" fill="none">
    <path className="signature-path"
      d="M25 132 L70 15 L80 130 L12 78 L225 78 M102 132 L148 15 Q145 72 180 132"
    />
  </svg>
</a>
        <div className="nav-links">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
        <a className="nav-cta" href="#contact">LET'S TALK <ArrowUpRight size={15} /></a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-grid"></div>
        <div className="hero-content">
          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="availability-dot"></span>
            OPEN TO OPPORTUNITIES
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            HELLO, I'M ARJUN AJAI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            DATA<br />
            <span>MINDED.</span>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p>
              COMPUTER SCIENCE GRADUATE<br />
              DATA ANALYTICS · DATA SCIENCE · PYTHON
            </p>
            <a href="#projects" className="explore-link">
              EXPLORE MY WORK <ArrowDownRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="hero-decoration signature-decoration" aria-hidden="true">
          <svg className="signature-logo" viewBox="0 0 240 160" fill="none">
  <path className="signature-path"
    d="M25 132 L70 15 L80 130 L12 78 L225 78 M102 132 L148 15 Q145 72 180 132"
  />
</svg>
          <div className="signature-name">ARJUN AJAI</div>
        </div>

        <div className="hero-side-note">PORTFOLIO / 2026</div>
        <div className="hero-index">01 — 04</div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>
          <span className="section-caption">A LITTLE ABOUT ME</span>
        </div>
        <div className="about-layout">
          <h2>
            Curious about<br />
            <span>what data</span><br />
            can reveal.
          </h2>
          <div className="about-copy">
            <p>
              I'm Arjun Ajai, a Computer Science graduate from Kerala, India,
              with a background in Data Science with AI.
            </p>
            <p>
              I enjoy working with Python, exploring datasets, discovering
              patterns and turning information into meaningful insights.
              I'm continuously learning and building practical projects.
            </p>
            <a href="#contact" className="text-link">
              LET'S CONNECT <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <div className="about-meta">
          <div><span>BASED IN</span><strong>KERALA, INDIA</strong></div>
          <div><span>FOCUS</span><strong>DATA & TECHNOLOGY</strong></div>
          <div><span>APPROACH</span><strong>LEARN · BUILD · IMPROVE</strong></div>
        </div>
      </section>

      <section className="education section">
        <div className="section-heading">
          <span className="section-number">02 / EDUCATION</span>
          <span className="section-caption">MY LEARNING JOURNEY</span>
        </div>
        <div className="education-row">
          <span className="education-year">01</span>
          <div>
            <h3>B.Sc Computer Science</h3>
            <p>Kerala University</p>
          </div>
          <span className="education-status">COMPLETED</span>
        </div>
        <div className="education-row">
          <span className="education-year">02</span>
          <div>
            <h3>Diploma in Data Science with AI</h3>
            <p>6-month professional course</p>
          </div>
          <span className="education-status">DIPLOMA</span>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <span className="section-number">03 / SELECTED WORK</span>
          <span className="section-caption">BUILDING WITH PURPOSE</span>
        </div>
        <div className="projects-intro">
          <h2>Ideas into<br /><span>working projects.</span></h2>
          <p>
            Practical explorations in data analytics, data science
            and Python development.
          </p>
        </div>
        <div className="project-grid">
          {projects.filter(project => project.number === '01' || project.number === '02').map((project, index) => {
            const Icon = project.icon
            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="project-top">
                  <span>{project.number} / {project.category}</span>
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-visual">
                  {project.number === '01' ? (
                    <img
                      src="/images/churn/model_comparison.png"
                      alt="Customer Churn Prediction model comparison chart"
                      className="project-screenshot"
                    />
                  ) : project.number === '02' ? (
                    <img
                      src="/images/ecommerce/dashboard_overview.png"
                      alt="Ecommerce Intelligence dashboard"
                      className="project-screenshot"
                    />
                  ) : (
                    <Icon size={54} strokeWidth={1} />
                  )}
                  <span className="visual-number">{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.stack.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                {project.number === '01' ? (
  <button className="project-view-link" onClick={() => setShowChurn(true)}>
    VIEW PROJECT <ArrowUpRight size={16} />
  </button>
) : project.number === '02' ? (
  <button className="project-view-link" onClick={() => setShowEcommerce(true)}>
    VIEW PROJECT <ArrowUpRight size={16} />
  </button>
) : project.number === '03' ? (
  <button className="project-view-link" onClick={() => setShowExpense(true)}>
    VIEW PROJECT <ArrowUpRight size={16} />
  </button>
) : (
  <a className="project-view-link" href={project.url} target="_blank" rel="noreferrer">
    VIEW PROJECT <ArrowUpRight size={16} />
  </a>
)}
              </motion.article>
            )
          })}
        </div>
        <p className="project-note">
          PROJECTS WILL BE UPDATED WITH VERIFIED CODE, RESULTS AND LIVE DEMOS.
        </p>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <span className="section-number">04 / TOOLKIT</span>
          <span className="section-caption">TECHNOLOGIES & KNOWLEDGE</span>
        </div>
        <h2>Tools of my<br /><span>trade.</span></h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
              <ArrowUpRight size={17} />
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-heading">
          <span className="section-number">05 / CONTACT</span>
          <span className="section-caption">HAVE AN OPPORTUNITY?</span>
        </div>
        <p className="contact-kicker">LET'S START A CONVERSATION</p>
        <h2>Let's make<br /><span>something matter.</span></h2>
        <a className="contact-link" href="https://github.com/arjunajai221-a11y" target="_blank" rel="noreferrer">
          FIND ME ON GITHUB <ArrowUpRight />
        </a>
        <div className="contact-socials">
          <a href="https://github.com/arjunajai221-a11y" target="_blank" rel="noreferrer">
            <Code2 size={17} /> GITHUB
          </a>
          <a href="#contact">
            <Code2 size={17} /> LINKEDIN
          </a>
          <a href="mailto:">
            <Mail size={17} /> EMAIL
          </a>
        </div>
      </section>

      <footer>
        <a href="#home" className="brand" aria-label="Back to home">
  <svg className="brand-signature" viewBox="0 0 240 160" fill="none">
    <path className="signature-path"
      d="M25 132 L70 15 L80 130 L12 78 L225 78 M102 132 L148 15 Q145 72 180 132"
    />
  </svg>
</a>
        <p>DESIGNED & BUILT BY ARJUN AJAI · 2026</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}

export default App


















