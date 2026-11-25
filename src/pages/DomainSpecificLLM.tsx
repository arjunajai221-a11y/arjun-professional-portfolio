import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'

interface DomainSpecificLLMProps {
  onBack: () => void
}

function DomainSpecificLLM({ onBack }: DomainSpecificLLMProps) {
  return (
    <main className="case-study">
      <nav className="case-nav">
        <button className="project-view-link" onClick={onBack}>
          <ArrowLeft size={16} /> BACK TO PROJECTS
        </button>
        <span>PROJECT / 05</span>
      </nav>

      <section className="case-hero">
        <p className="section-number">GENERATIVE AI / LLM FINE-TUNING</p>
        <h1>Domain-Specific<br /><span>LLM Fine-Tuning.</span></h1>
        <p>
          A parameter-efficient fine-tuning project that adapts a small
          instruction-tuned language model for customer support tasks
          using LoRA and evaluates its performance against the base model.
        </p>
        <div className="project-tags">
          {['Python', 'PyTorch', 'Transformers', 'PEFT / LoRA', 'MLflow', 'Streamlit'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="case-overview">
        <div>
          <p className="section-number">01 / OVERVIEW</p>
          <h2>Fine-tuning a language model for a specific domain.</h2>
        </div>
        <div>
          <p>
            This project fine-tunes Qwen2.5-0.5B-Instruct using the Bitext
            customer support dataset. Parameter-Efficient Fine-Tuning
            (PEFT) with LoRA is used to adapt the model while updating
            only a small fraction of its parameters.
          </p>
          <p>
            The workflow includes dataset preparation, model training,
            experiment tracking, held-out evaluation and an interactive
            Streamlit inference interface.
          </p>
        </div>
      </section>

      <section className="case-gallery">
        <p className="section-number">02 / APPLICATION PREVIEW</p>
        <h2>Inside the application.</h2>
        <div className="case-chart-grid">
          <figure>
            <img
              src="/images/llm/streamlit_app.png"
              alt="Domain-specific LLM Streamlit application"
              className="case-chart-image"
            />
            <figcaption>Customer support LLM interface</figcaption>
          </figure>
          <figure>
            <img
              src="/images/llm/chat_response.png"
              alt="Fine-tuned model password reset response"
              className="case-chart-image"
            />
            <figcaption>Example password reset response</figcaption>
          </figure>
          <figure>
            <img
              src="/images/llm/billing_response.png"
              alt="Fine-tuned model billing support response"
              className="case-chart-image"
            />
            <figcaption>Example billing support response</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-features">
        <p className="section-number">03 / KEY FEATURES</p>
        <h2>What the system delivers.</h2>
        <div className="case-info-grid">
          <article>
            <span>01</span>
            <h3>LoRA Fine-Tuning</h3>
            <p>Parameter-efficient adaptation using Hugging Face PEFT and LoRA.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Experiment Tracking</h3>
            <p>Training experiments and evaluation metrics tracked using MLflow.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Model Comparison</h3>
            <p>Base and fine-tuned model performance compared on held-out test data.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Interactive Inference</h3>
            <p>A Streamlit interface for testing customer support prompts and responses.</p>
          </article>
        </div>
      </section>

      <section className="case-process">
        <p className="section-number">04 / WORKFLOW</p>
        <h2>From dataset to fine-tuned model.</h2>
        <div className="case-info-grid">
          <article>
            <span>01</span>
            <h3>Data Preparation</h3>
            <p>Cleaned and prepared the Bitext customer support dataset for training and evaluation.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Model Configuration</h3>
            <p>Loaded Qwen2.5-0.5B-Instruct and configured LoRA adapters for efficient training.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Training</h3>
            <p>Fine-tuned the model using 5,000 training examples for one epoch.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Evaluation</h3>
            <p>Compared base and fine-tuned test loss using 500 held-out examples.</p>
          </article>
        </div>
      </section>

      <section className="case-results">
        <p className="section-number">05 / EVALUATION RESULTS</p>
        <h2>Measuring the improvement.</h2>
        <div className="case-info-grid">
          <article>
            <span>BASE MODEL</span>
            <h3>1.5858</h3>
            <p>Test loss before fine-tuning.</p>
          </article>
          <article>
            <span>FINE-TUNED MODEL</span>
            <h3>0.8971</h3>
            <p>Test loss after LoRA fine-tuning.</p>
          </article>
          <article>
            <span>LOSS REDUCTION</span>
            <h3>43.43%</h3>
            <p>Reduction in held-out test loss.</p>
          </article>
          <article>
            <span>TRAINABLE PARAMETERS</span>
            <h3>0.2184%</h3>
            <p>Fraction of model parameters updated.</p>
          </article>
        </div>
        <p>
          These results indicate an improvement in test loss on the
          evaluation dataset. Loss reduction alone does not establish
          factual accuracy, response quality or production readiness.
        </p>
      </section>

      <footer className="case-footer">
        <div>
          <p className="section-number">EXPLORE THE CODE</p>
          <h2>View the project on GitHub.</h2>
        </div>
        <div className="case-footer-actions">
          <a
            href="https://github.com/arjunajai221-a11y/Domain-Specific-LLM-Fine-Tuning"
            target="_blank"
            rel="noreferrer"
            className="project-view-link"
          >
            <Code2 size={16} /> GITHUB REPOSITORY <ArrowUpRight size={16} />
          </a>
          <button className="project-view-link" onClick={onBack}>
            <ArrowLeft size={16} /> BACK TO PROJECTS
          </button>
        </div>
      </footer>
    </main>
  )
}

export default DomainSpecificLLM
