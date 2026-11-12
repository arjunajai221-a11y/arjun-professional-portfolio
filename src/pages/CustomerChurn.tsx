import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'

const charts = [
  { name: 'Churn Distribution', file: 'churn_distribution.png', detail: 'Customer churn distribution in the dataset.' },
  { name: 'Model Comparison', file: 'model_comparison.png', detail: 'Comparison of classification model performance.' },
  { name: 'Confusion Matrix', file: 'confusion_matrix.png', detail: 'Evaluation of model predictions.' },
  { name: 'Correlation Heatmap', file: 'correlation_heatmap.png', detail: 'Relationships between numerical features.' },
  { name: 'Contract Analysis', file: 'contract_churn.png', detail: 'Churn patterns across contract types.' },
  { name: 'Internet Service Analysis', file: 'internet_service_churn.png', detail: 'Churn patterns by internet service.' },
  { name: 'Monthly Charges Analysis', file: 'monthly_charges_churn.png', detail: 'Monthly charges and customer churn.' },
  { name: 'Tenure Analysis', file: 'tenure_churn.png', detail: 'Customer tenure and churn patterns.' },
]

export default function CustomerChurn({ onBack }: { onBack: () => void }) {
  return (
    <main className="case-study">
      <nav className="case-nav">
        <button onClick={onBack} className="case-back">
          <ArrowLeft size={17} /> BACK TO PORTFOLIO
        </button>
        <span>PROJECT / 01</span>
      </nav>

      <section className="case-hero">
        <p className="case-kicker">DATA SCIENCE / MACHINE LEARNING</p>
        <h1>Customer<br /><span>Churn Prediction.</span></h1>
        <p className="case-intro">
          An end-to-end customer churn analysis and prediction project
          using Python, data analysis and machine learning.
        </p>
        <a
          className="case-github"
          href="https://github.com/arjunajai221-a11y/Customer_Churn_Prediction"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} /> VIEW SOURCE CODE <ArrowUpRight size={16} />
        </a>
      </section>

      <section className="case-overview">
        <div>
          <span>01 / OVERVIEW</span>
          <h2>Understanding<br />customer behaviour.</h2>
        </div>
        <p>
          This project explores customer churn using a Telco customer dataset.
          It includes exploratory data analysis, feature relationships,
          model comparison and an interactive prediction dashboard.
        </p>
      </section>

      <section className="case-data">
        <div className="case-section-heading">
          <span>02 / PROJECT DETAILS</span>
          <h2>Inside the project.</h2>
        </div>
        <div className="case-info-grid">
          <div><span>DATASET</span><strong>Telco Customer Churn</strong></div>
          <div><span>LANGUAGE</span><strong>Python</strong></div>
          <div><span>ANALYSIS</span><strong>Exploratory Data Analysis</strong></div>
          <div><span>ML LIBRARY</span><strong>Scikit-learn</strong></div>
          <div><span>INTERFACE</span><strong>Streamlit</strong></div>
          <div><span>VISUALIZATION</span><strong>Matplotlib</strong></div>
        </div>
      </section>

      <section className="case-gallery">
        <div className="case-section-heading">
          <span>03 / EXPLORATORY DATA ANALYSIS</span>
          <h2>Insights through data.</h2>
          <p>Visualizations generated as part of the project analysis.</p>
        </div>
        <div className="case-chart-grid">
          {charts.map((chart, index) => (
            <article className="case-chart" key={chart.file}>
              <div className="case-chart-image">
                <img
                  src={`/images/churn/${chart.file}`}
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
        <span>04 / WORKFLOW</span>
        <h2>From raw data<br />to prediction.</h2>
        <div className="case-steps">
          {['Dataset exploration', 'Data cleaning and preparation',
            'Exploratory data analysis', 'Model training and comparison',
            'Model evaluation', 'Interactive prediction dashboard'].map((step, index) => (
            <div key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="case-footer">
        <p>EXPLORE THE CODE</p>
        <h2>Interested in<br /><span>the implementation?</span></h2>
        <a
          href="https://github.com/arjunajai221-a11y/Customer_Churn_Prediction"
          target="_blank"
          rel="noreferrer"
          className="case-github"
        >
          <Code2 size={17} /> VIEW ON GITHUB <ArrowUpRight size={16} />
        </a>
        <button onClick={onBack} className="case-back">
          <ArrowLeft size={17} /> BACK TO ALL PROJECTS
        </button>
      </section>
    </main>
  )
}

