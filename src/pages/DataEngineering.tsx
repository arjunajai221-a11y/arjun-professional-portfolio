import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'

interface DataEngineeringProps {
  onBack: () => void
}

function DataEngineering({ onBack }: DataEngineeringProps) {
  return (
    <main className="case-study">
      <nav className="case-nav">
        <button className="project-view-link" onClick={onBack}>
          <ArrowLeft size={16} /> BACK TO PROJECTS
        </button>
        <span>PROJECT / 04</span>
      </nav>

      <section className="case-hero">
        <p className="section-number">DATA ENGINEERING / ETL PIPELINE</p>
        <h1>Scalable Data<br /><span>Engineering Pipeline.</span></h1>
        <p>
          An end-to-end data engineering pipeline that processes over
          one million retail transactions using PySpark, validates data
          quality, loads a MySQL data warehouse and orchestrates ETL
          workflows with Apache Airflow and Docker.
        </p>
        <div className="project-tags">
          {['Python', 'Pandas', 'PySpark', 'MySQL', 'Apache Airflow', 'Docker', 'SQL', 'Parquet'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="case-overview">
        <div>
          <p className="section-number">01 / OVERVIEW</p>
          <h2>From raw data<br />to data warehouse.</h2>
        </div>
        <div>
          <p>
            This project implements a complete ETL pipeline using the
            UCI Online Retail II dataset, combining two Excel sheets
            containing 1,067,371 retail transaction records.
          </p>
          <p>
            Python handles ingestion, PySpark performs transformations,
            data quality checks validate records, and MySQL stores the
            processed transactions. Apache Airflow orchestrates the
            workflow through Docker.
          </p>
        </div>
      </section>

      <section className="case-gallery">
        <p className="section-number">02 / PIPELINE ARCHITECTURE</p>
        <h2>System architecture.</h2>
        <figure>
          <img
            src="/images/data-engineering/pipeline_architecture.png"
            alt="Scalable Data Engineering Pipeline architecture"
            className="case-chart-image"
          />
          <figcaption>
            End-to-end ETL architecture: ingestion, transformation,
            validation, MySQL warehouse and Airflow orchestration
          </figcaption>
        </figure>
      </section>

      <section className="case-data">
        <p className="section-number">03 / DATA PROCESSING</p>
        <h2>Processing at scale.</h2>
        <div className="case-info-grid">
          <article>
            <h3>1,067,371</h3>
            <p>Total retail transaction records processed</p>
          </article>
          <article>
            <h3>2</h3>
            <p>Excel sheets combined into one dataset</p>
          </article>
          <article>
            <h3>5,132</h3>
            <p>Distinct products identified</p>
          </article>
          <article>
            <h3>12,133</h3>
            <p>Duplicate records identified during validation</p>
          </article>
        </div>
      </section>

      <section className="case-process">
        <p className="section-number">04 / ETL WORKFLOW</p>
        <h2>How it works.</h2>
        <div className="case-info-grid">
          {[
            ['01', 'Data Ingestion', 'Python reads and combines both Online Retail II Excel sheets.'],
            ['02', 'Transformation', 'PySpark cleans and transforms records, derives revenue and date fields, and writes Parquet output.'],
            ['03', 'Data Validation', 'Checks missing values, duplicates, invalid prices and transaction quantities.'],
            ['04', 'Warehouse Loading', 'Processed transaction data is loaded into the MySQL data warehouse.'],
            ['05', 'Orchestration', 'Apache Airflow manages the ETL workflow through four dependent tasks.'],
            ['06', 'Containerization', 'Docker Compose runs the Airflow services and pipeline environment.']
          ].map(([number, title, description]) => (
            <article key={number}>
              <span className="section-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-gallery">
        <p className="section-number">05 / PIPELINE EXECUTION</p>
        <h2>Successful orchestration.</h2>
        <figure>
          <img
            src="/images/data-engineering/airflow_pipeline_execution.png"
            alt="Apache Airflow DAG showing successful execution of all four ETL tasks"
            className="case-chart-image"
          />
          <figcaption>
            Apache Airflow DAG execution with all four pipeline tasks successful
          </figcaption>
        </figure>
      </section>

      <section className="case-gallery">
        <p className="section-number">06 / DATA WAREHOUSE</p>
        <h2>Verified in MySQL.</h2>
        <figure>
          <img
            src="/images/data-engineering/mysql_data_verification.png"
            alt="MySQL Workbench showing verified retail transaction records"
            className="case-chart-image"
          />
          <figcaption>
            MySQL Workbench verification of 1,067,371 loaded records
          </figcaption>
        </figure>
      </section>

      <section className="case-data">
        <p className="section-number">07 / ANALYTICS RESULTS</p>
        <h2>Insights from retail data.</h2>
        <div className="case-info-grid">
          <article>
            <h3>19.28M</h3>
            <p>Total revenue (dataset currency units)</p>
          </article>
          <article>
            <h3>5,132</h3>
            <p>Products analyzed</p>
          </article>
          <article>
            <h3>10.6M</h3>
            <p>Total units sold</p>
          </article>
          <article>
            <h3>1.42M</h3>
            <p>Highest monthly revenue — November 2010</p>
          </article>
        </div>
        <p>
          SQL analytics explored yearly and monthly revenue, customer
          segmentation, product performance and country-wise sales.
        </p>
      </section>

      <section className="case-footer">
        <p className="section-number">08 / SOURCE CODE</p>
        <h2>Explore the project.</h2>
        <p>
          Explore the complete source code, ETL implementation,
          SQL analytics, Airflow orchestration and documentation on GitHub.
        </p>
        <a
          className="contact-link"
          href="https://github.com/arjunajai221-a11y/Scalable_Data_Engineering_Pipeline"
          target="_blank"
          rel="noreferrer"
        >
          <Code2 size={17} /> VIEW ON GITHUB <ArrowUpRight size={17} />
        </a>
        <button className="project-view-link" onClick={onBack}>
          <ArrowLeft size={16} /> BACK TO PORTFOLIO
        </button>
      </section>
    </main>
  )
}

export default DataEngineering
