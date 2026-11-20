
import { ArrowLeft, ArrowUpRight, Code2 } from 'lucide-react'

interface EnterpriseAIProps {
  onBack: () => void
}

function EnterpriseAI({ onBack }: EnterpriseAIProps) {
  return (
    <main className="case-study">
      <nav className="case-nav">
        <button className="project-view-link" onClick={onBack}>
          <ArrowLeft size={16} /> BACK TO PROJECTS
        </button>
        <span>PROJECT / 03</span>
      </nav>

      <section className="case-hero">
        <p className="section-number">GENERATIVE AI / RAG APPLICATION</p>
        <h1>Enterprise AI<br /><span>Knowledge Assistant.</span></h1>
        <p>
          An intelligent document question-answering system that uses
          Retrieval-Augmented Generation to provide contextual answers
          with relevant source references.
        </p>
        <div className="project-tags">
          {['Python', 'LangChain', 'FAISS', 'Hugging Face', 'Groq', 'Streamlit', 'FastAPI'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="case-overview">
        <div>
          <p className="section-number">01 / OVERVIEW</p>
          <h2>Turning documents<br />into knowledge.</h2>
        </div>
        <div>
          <p>
            Enterprise AI Knowledge Assistant allows users to upload PDF
            and TXT documents and ask questions through a conversational
            interface. The application retrieves relevant document
            content and uses an LLM to generate context-aware answers.
          </p>
          <p>
            Source references are displayed alongside generated answers
            to help users trace the information back to their documents.
          </p>
        </div>
      </section>

      <section className="case-gallery">
        <p className="section-number">02 / APPLICATION PREVIEW</p>
        <h2>Inside the application.</h2>

        <div className="case-chart-grid">
          <figure>
            <img
              src="/images/ai/enterprise-ai.png"
              alt="Enterprise AI Knowledge Assistant application"
              className="case-chart-image"
            />
            <figcaption>Document knowledge assistant interface</figcaption>
          </figure>

          <figure>
            <img
              src="/images/ai/enterprise-ai-chat.png"
              alt="AI assistant answering a document question with sources"
              className="case-chart-image"
            />
            <figcaption>Contextual answer with source references</figcaption>
          </figure>
        </div>
      </section>

      <section className="case-data">
        <p className="section-number">03 / KEY FEATURES</p>
        <h2>Built for document intelligence.</h2>

        <div className="case-info-grid">
          <article>
            <h3>Document Processing</h3>
            <p>Upload and process PDF and TXT documents for retrieval.</p>
          </article>
          <article>
            <h3>Semantic Search</h3>
            <p>Find relevant document content using Hugging Face embeddings and FAISS.</p>
          </article>
          <article>
            <h3>AI Responses</h3>
            <p>Generate context-aware answers using the Groq LLM API.</p>
          </article>
          <article>
            <h3>Source References</h3>
            <p>Display relevant document sources alongside generated answers.</p>
          </article>
          <article>
            <h3>Duplicate Detection</h3>
            <p>Help prevent duplicate document processing.</p>
          </article>
          <article>
            <h3>API Integration</h3>
            <p>Provide backend functionality through FastAPI.</p>
          </article>
        </div>
      </section>

      <section className="case-process">
        <p className="section-number">04 / RAG WORKFLOW</p>
        <h2>How it works.</h2>

        <div className="case-info-grid">
          {[
            ['01', 'Document Upload', 'Users upload PDF or TXT files.'],
            ['02', 'Text Processing', 'Document text is extracted and split into chunks.'],
            ['03', 'Embeddings', 'Hugging Face converts text chunks into vector embeddings.'],
            ['04', 'FAISS Retrieval', 'Relevant chunks are retrieved through semantic similarity search.'],
            ['05', 'LLM Generation', 'Groq generates an answer using retrieved context.'],
            ['06', 'Answer & Sources', 'The interface displays the response and relevant sources.']
          ].map(([number, title, description]) => (
            <article key={number}>
              <span className="section-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-data">
        <p className="section-number">05 / TESTING</p>
        <h2>Observed test results.</h2>

        <div className="case-info-grid">
          {[
            ['20', 'Questions tested'],
            ['20', 'Responses generated'],
            ['0', 'Errors'],
            ['20', 'Responses with sources']
          ].map(([value, label]) => (
            <article key={label}>
              <h3>{value}</h3>
              <p>{label}</p>
            </article>
          ))}
        </div>

        <p>
          Average response latency: 1.73 seconds.
          Maximum observed response latency: 6.98 seconds.
          These results measure response generation and source availability,
          not independent factual accuracy.
        </p>
      </section>

      <section className="case-footer">
        <p className="section-number">06 / SOURCE CODE</p>
        <h2>Explore the project.</h2>
        <p>
          View the source code, implementation and project documentation
          on GitHub.
        </p>
        <a
          className="contact-link"
          href="https://github.com/arjunajai221-a11y/Enterprise_AI_Knowledge_Assistant"
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

export default EnterpriseAI
