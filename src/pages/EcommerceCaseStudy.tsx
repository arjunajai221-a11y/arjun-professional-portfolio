import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'

type Props = {
  onBack: () => void
}

const charts = [
  {
    file: 'dashboard_overview.png',
    name: 'Dashboard Overview',
    detail: 'A complete overview of key business performance metrics.'
  },
  {
    file: 'business_insights.png',
    name: 'Business Insights',
    detail: 'Visual insights into sales performance and business trends.'
  },
  {
    file: 'country_product_analysis.png',
    name: 'Country & Product Analysis',
    detail: 'Explore country-wise sales and product performance.'
  },
  {
    file: 'customer_analysis.png',
    name: 'Customer Analysis',
    detail: 'Understand customer behaviour and RFM segmentation.'
  }
]

function EcommerceCaseStudy({ onBack }: Props) {
  return (
    <main className="case-study">
      <nav className="case-nav">
        <button onClick={onBack} className="case-back">
          <ArrowLeft size={17} /> BACK TO PORTFOLIO
        </button>
        <span>PROJECT 02 / 04</span>
      </nav>

      <section className="case-hero">
        <span>DATA ANALYTICS / BUSINESS INTELLIGENCE</span>
        <h1>E-Commerce<br /><span>Intelligence System.</span></h1>
        <p>
          Transforming retail transaction data into meaningful business
          insights through Python, SQL, data analysis and interactive
          visualizations.
        </p>
        <div className="case-action-row">
          <a
            className="case-github"
            href="https://ecommerceintelligencesystem-jzpnxyid7emnxxmauxhbvz.streamlit.app/"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} /> LIVE DASHBOARD <ArrowUpRight size={16} />
          </a>
          <a
            className="case-github"
            href="https://github.com/arjunajai221-a11y/Ecommerce_Intelligence_System"
            target="_blank"
            rel="noreferrer"
          >
            VIEW SOURCE CODE <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <section className="case-overview">
        <div className="case-section-heading">
          <span>01 / PROJECT OVERVIEW</span>
          <h2>Understanding<br />the bigger picture.</h2>
        </div>
        <p>
          An interactive E-Commerce Business Intelligence dashboard built
          to analyze retail sales, customer behaviour, product performance
          and business trends. The project uses data cleaning, exploratory
          data analysis, SQL querying and RFM customer segmentation to
          uncover actionable insights.
        </p>

        <div className="ecommerce-metrics">
          <div>
            <strong>524,878</strong>
            <span>SALES TRANSACTIONS PROCESSED</span>
          </div>
          <div>
            <strong>£10.64M</strong>
            <span>TOTAL REVENUE ANALYZED</span>
          </div>
          <div>
            <strong>RFM</strong>
            <span>CUSTOMER SEGMENTATION</span>
          </div>
        </div>

        <div className="case-section-heading ecommerce-subheading">
          <span>TECHNOLOGY STACK</span>
        </div>
        <div className="ecommerce-tech">
          {[
            'Python', 'Pandas', 'NumPy', 'SQL', 'SQLite',
            'Plotly', 'Matplotlib', 'Seaborn', 'Streamlit',
            'Jupyter Notebook'
          ].map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="case-gallery">
        <div className="case-section-heading">
          <span>03 / DASHBOARD PREVIEW</span>
          <h2>Explore the insights.</h2>
          <p>Actual dashboard screenshots from the project.</p>
        </div>
        <div className="case-chart-grid">
          {charts.map((chart, index) => (
            <article className="case-chart" key={chart.file}>
              <div className="case-chart-image">
                <img
                  src={`/images/ecommerce/${chart.file}`}
                  alt={chart.name}
                  loading="lazy"
                />
              </div>
              <div className="case-chart-caption">
                <span>0{index + 1}</span>
                <div>
                  <h3>{chart.name}</h3>
                  <p>{chart.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="case-process">
        <span>04 / KEY FEATURES</span>
        <h2>What it<br />can explore.</h2>
        <div className="case-steps">
          {[
            'Business overview: revenue, orders, customers and products',
            'Monthly revenue and country-wise sales analysis',
            'Top 10 products ranked by revenue',
            'Top customers based on revenue',
            'RFM customer segmentation',
            'Interactive date-range and country filters',
            'Download filtered sales data as CSV',
            'Business metrics and insights'
          ].map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="case-footer">
        <p>EXPLORE THE PROJECT</p>
        <h2>From transactions<br /><span>to decisions.</span></h2>
        <a
          className="case-github"
          href="https://ecommerceintelligencesystem-jzpnxyid7emnxxmauxhbvz.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          <ExternalLink size={17} /> OPEN LIVE DASHBOARD
          <ArrowUpRight size={16} />
        </a>
        <button onClick={onBack} className="case-back">
          <ArrowLeft size={17} /> BACK TO ALL PROJECTS
        </button>
      </section>
    </main>
  )
}

export default EcommerceCaseStudy
