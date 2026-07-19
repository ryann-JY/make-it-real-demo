import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  ExternalLink,
  Heart,
  Layers3,
  MessageCircle,
  PackageCheck,
  Printer,
  ShieldCheck,
  Share2,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MaterialCard, ProductCard, ProjectCard, SkillCard, StatusPill } from "../components/Cards";
import { Section } from "../components/Section";
import {
  findById,
  materials,
  productIdeas,
  projects,
  skills,
  creators,
} from "../data/content";
import { useStudioPrompt } from "../components/AppShell";

export function ProductIdeaPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = findById(productIdeas, id) ?? productIdeas[0];
  const relatedSkills = item.skillIds.map((skillId) => findById(skills, skillId)).filter(Boolean);
  const relatedMaterials = item.materialIds.map((materialId) => findById(materials, materialId)).filter(Boolean);
  const related = item.projectIds.map((projectId) => findById(projects, projectId)).filter(Boolean);
  const relatedCreators = creators.filter((creator) => related.some((project) => project?.creatorId === creator.id));

  return (
    <div className="product-idea-page page-container">
      <button className="back-link" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back to ideas</button>
      <section className="product-idea-hero">
        <div className="product-idea-copy">
          <p className="eyebrow">Idea · curated collection</p>
          <h1>{item.title}</h1>
          <p className="product-idea-lead">{item.description}</p>
          <div className="product-idea-tags">
            {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="product-idea-proof">
            <span><Printer size={19} /><strong>{related.length}</strong><small>projects</small></span>
            <span><Sparkles size={19} /><strong>{relatedSkills.length}</strong><small>creative workflows</small></span>
            <span><Boxes size={19} /><strong>{relatedMaterials.length}</strong><small>substrates</small></span>
            <span><Users size={19} /><strong>{relatedCreators.length}</strong><small>contributors</small></span>
          </div>
          <button className="button button-dark" onClick={() => document.querySelector(".product-idea-evidence")?.scrollIntoView({ behavior: "smooth" })}>
            Explore ways to make it <ArrowRight size={17} />
          </button>
        </div>
        <div className="product-idea-cover">
          <img src={item.image} alt={item.title} />
          <div>
            <small>Inside this Idea</small>
            <strong>Projects for inspiration, Skills for creative direction, and Substrates for printing.</strong>
          </div>
        </div>
      </section>

      <section className="opportunity-summary">
        <article>
          <ShoppingBag size={22} />
          <p className="eyebrow">Typical products</p>
          <div className="idea-overview-list">
            {item.typicalProducts.map((product) => <span key={product}>{product}</span>)}
          </div>
        </article>
        <article>
          <Layers3 size={22} />
          <p className="eyebrow">Ways to personalize</p>
          <div className="idea-overview-list">
            {item.personalizationIdeas.map((option) => <span key={option}>{option}</span>)}
          </div>
        </article>
        <article>
          <Users size={22} />
          <p className="eyebrow">Best for</p>
          <div className="idea-overview-list">
            {item.bestFor.map((use) => <span key={use}>{use}</span>)}
          </div>
        </article>
      </section>

      <Section
        className="product-idea-evidence"
        eyebrow="Projects in this Idea"
        title="See how makers have explored this theme"
        description="Browse finished prints and early explorations, then open a Project to understand its workflow, Substrate, and verification status."
      >
        <div className="masonry-grid detail-projects">
          {related.map((project) => project && <ProjectCard key={project.id} item={project} />)}
        </div>
        <div className="idea-contributors">
          <span className="eyebrow">Creators in this collection</span>
          {relatedCreators.map((creator) => (
            <Link key={creator.id} to={`/creator/${creator.id}`}>
              <img src={creator.avatar} alt="" />
              <span><strong>{creator.name}</strong><small>{creator.verified}</small></span>
              <ChevronRight size={15} />
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Ways to make it"
        title="Choose a Skill or Substrate to go deeper"
        description="An Idea is a starting point, not a single recipe. Open a Skill for the creative workflow or a Substrate for sourcing and print preparation."
      >
        <div className="idea-path-columns">
          <article>
            <header><Sparkles size={21} /><span><strong>Creative workflows</strong><small>Shape the design and personalization logic</small></span></header>
            <div className="idea-path-list">
              {relatedSkills.map((skill) => skill && <Link key={skill.id} to={`/skill/${skill.id}`}>
                <img src={skill.image} alt="" />
                <span><small>Skill</small><strong>{skill.title}</strong><em>{skill.output}</em></span>
                <ChevronRight size={17} />
              </Link>)}
            </div>
          </article>
          <article>
            <header><Boxes size={21} /><span><strong>Substrates</strong><small>Understand how each format prints successfully</small></span></header>
            <div className="idea-path-list">
              {relatedMaterials.map((material) => material && <Link key={material.id} to={`/material/${material.id}`}>
                <img src={material.image} alt="" />
                <span><small>{material.material}</small><strong>{material.title}</strong><em>{material.difficulty} · {material.fixture}</em></span>
                <ChevronRight size={17} />
              </Link>)}
            </div>
          </article>
        </div>
      </Section>

      <Section title="Explore related Ideas" link="/ideas">
        <div className="product-grid">
          {productIdeas.filter((other) => other.id !== item.id).slice(0, 3).map((other) => <ProductCard key={other.id} item={other} />)}
        </div>
      </Section>
    </div>
  );
}

export function SkillDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const openStudio = useStudioPrompt();
  const item = findById(skills, id) ?? skills[0];
  const relatedProjects = item.projectIds.map((projectId) => findById(projects, projectId)).filter(Boolean);
  const verifiedProjects = relatedProjects.filter((project) => project?.badge === "Verified Print");
  const relatedMaterials = item.materialIds.map((materialId) => findById(materials, materialId)).filter(Boolean);

  return (
    <div className="detail-page page-container">
      <button className="back-link" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back to Skills</button>
      <section className="skill-detail-hero">
        <div className="skill-detail-image">
          <img src={item.image} alt={`${item.title} output family`} />
        </div>
        <div className="detail-summary">
          <div className="image-status-row">{item.badges.map((badge) => <StatusPill key={badge} label={badge} />)}</div>
          <p className="eyebrow">Editable creative workflow</p>
          <h1>{item.title}</h1>
          <p className="detail-lead">{item.tagline}</p>
          <div className="skill-big-stats">
            <span><strong>{item.uses}</strong><small>runs</small></span>
            <span><strong>{verifiedProjects.length}</strong><small>verified examples</small></span>
            <span><strong>{item.credits}</strong><small>AI credits</small></span>
          </div>
          <button className="button button-primary button-large" onClick={openStudio}>
            <Sparkles size={19} /> Try this Skill in Studio
          </button>
        </div>
      </section>

      <section className="skill-how">
        <div>
          <p className="eyebrow">How it works</p>
          <h2>Clear inputs, repeatable steps, editable output.</h2>
        </div>
        <div className="step-grid">
          {item.steps.map((step, index) => (
            <article key={step}><span>{index + 1}</span><strong>{step}</strong><p>{index === item.steps.length - 1 ? item.output : item.inputs[index] ?? item.inputs[0]}</p></article>
          ))}
        </div>
      </section>

      <Section title="What you provide and what stays editable" description={item.license}>
        <div className="workflow-definition">
          <article><p className="eyebrow">Required inputs</p>{item.inputs.map((input) => <span key={input}><Check size={14} /> {input}</span>)}</article>
          <article><p className="eyebrow">Editable fields</p>{item.editableFields.map((field) => <span key={field}><Check size={14} /> {field}</span>)}</article>
          <article><p className="eyebrow">Workflow output</p><strong>{item.output}</strong></article>
        </div>
      </Section>
      <Section title="Products this workflow can support">
        <div className="chip-showcase">{item.products.map((product) => <span key={product}>{product}<ArrowRight size={15} /></span>)}</div>
      </Section>
      <Section title="Real projects using this Skill">
        <div className="masonry-grid detail-projects">{relatedProjects.map((project) => project && <ProjectCard key={project.id} item={project} />)}</div>
      </Section>
      <Section title="Recommended substrates">
        <div className="material-grid">{relatedMaterials.map((material) => material && <MaterialCard key={material.id} item={material} />)}</div>
      </Section>
    </div>
  );
}

export function MaterialDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = findById(materials, id) ?? materials[0];
  const related = item.projectIds.map((projectId) => findById(projects, projectId)).filter(Boolean);

  return (
    <div className="detail-page page-container">
      <button className="back-link" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back to Substrates</button>
      <section className="material-detail-hero">
        <div className="material-detail-image"><img src={item.image} alt={item.title} /></div>
        <div className="detail-summary">
          <p className="eyebrow">{item.material}</p>
          <h1>{item.title}</h1>
          <div className="large-rating"><Star size={18} fill="currentColor" /> {item.rating} <small>{item.reviews} maker reviews</small></div>
          <div className="spec-table">
            <span><small>Dimensions</small><strong>{item.size}</strong></span>
            <span><small>Thickness</small><strong>{item.thickness}</strong></span>
            <span><small>Print area</small><strong>{item.printArea}</strong></span>
            <span><small>Surface</small><strong>{item.surface}</strong></span>
            <span><small>Shape</small><strong>{item.shape}</strong></span>
            <span><small>Difficulty</small><strong>{item.difficulty}</strong></span>
            <span><small>Tested device</small><strong>{item.device}</strong></span>
            <span><small>Reference unit cost</small><strong>{item.unitCost}</strong></span>
          </div>
          <button className="button button-primary" onClick={() => window.alert("Supplier comparison is available in the production version. This Demo keeps sourcing read-only.")}><ExternalLink size={18} /> View supplier options</button>
          <p className="handoff-note">Supplier availability and pricing vary by region.</p>
        </div>
      </section>

      <section className="process-panel">
        <div className="process-heading"><p className="eyebrow">Substrate print process</p><h2>How this exact substrate is prepared, positioned, printed, and finished.</h2></div>
        <div className="process-steps">
          <article><span>Before printing</span><strong>{item.prep}</strong></article>
          <article><span>Positioning & fixture</span><strong>{item.fixture}</strong></article>
          <article><span>Print setup</span><strong>{item.printSetup}</strong></article>
          <article><span>After printing</span><strong>{item.aftercare}</strong></article>
        </div>
      </section>

      <section className="material-evidence">
        <article>
          <p className="eyebrow">What has been tested</p>
          {item.tests.map((test) => <span key={test}><Check size={15} /> {test}</span>)}
        </article>
        <article className="failure-list">
          <p className="eyebrow">Known failure modes</p>
          {item.failures.map((failure) => <span key={failure}>× {failure}</span>)}
        </article>
      </section>

      <Section title={`What makers created with this ${item.title}`}>
        <div className="masonry-grid detail-projects">{related.map((project) => project && <ProjectCard key={project.id} item={project} />)}</div>
      </Section>
      <Section title="Similar substrates" link="/materials">
        <div className="material-grid">{materials.filter((other) => other.id !== item.id).slice(0, 3).map((other) => <MaterialCard key={other.id} item={other} />)}</div>
      </Section>
    </div>
  );
}

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const openStudio = useStudioPrompt();
  const item = findById(projects, id) ?? projects[0];
  const creator = findById(creators, item.creatorId)!;
  const skill = findById(skills, item.skillId);
  const material = findById(materials, item.materialId)!;
  const relatedIdeas = item.ideaIds.map((ideaId) => findById(productIdeas, ideaId)).filter(Boolean);
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  return (
    <div className="detail-page page-container">
      <button className="back-link" onClick={() => navigate(-1)}><ArrowLeft size={16} /> Back to Projects</button>
      <section className="project-detail-layout">
        <div className="project-detail-image"><img src={item.image} alt={item.title} /></div>
        <div className="project-detail-info">
          {item.badge === "Verified Print" && <StatusPill label="Verified Print" />}
          <h1>{item.title}</h1>
          <Link to={`/creator/${creator.id}`} className="project-author">
            <img src={creator.avatar} alt="" /><span><strong>{creator.name}</strong><small>{creator.verified}</small></span><ChevronRight size={16} />
          </Link>
          <p className="detail-lead">{item.story}</p>
          <div className="social-actions">
            <button className={liked ? "active" : ""} onClick={() => setLiked((value) => !value)}><Heart size={19} fill={liked ? "currentColor" : "none"} /> {item.likes + (liked ? 1 : 0)}</button>
            <button onClick={() => document.querySelector(".comment-panel")?.scrollIntoView({ behavior: "smooth" })}><MessageCircle size={19} /> 12</button>
            <button onClick={() => { navigator.clipboard?.writeText(window.location.href); setShared(true); }}><Share2 size={19} /> {shared ? "Link copied" : "Share"}</button>
          </div>
          <div className="made-with">
            <p className="eyebrow">Evidence & relationships</p>
            {relatedIdeas[0] ? (
              <Link to={`/idea/${relatedIdeas[0].id}`}><ShoppingBag size={19} /><span><small>Idea</small><strong>{relatedIdeas[0].title}</strong></span><ChevronRight size={16} /></Link>
            ) : (
              <div className="relationship-empty"><ShoppingBag size={19} /><span><small>Idea</small><strong>Independent project · not grouped into an Idea</strong></span></div>
            )}
            {skill ? (
              <Link to={`/skill/${skill.id}`}><Sparkles size={19} /><span><small>Skill</small><strong>{skill.title}</strong></span><ChevronRight size={16} /></Link>
            ) : (
              <div className="relationship-empty"><Sparkles size={19} /><span><small>Skill</small><strong>Original creation · no reusable Skill linked</strong></span></div>
            )}
            <Link to={`/material/${material.id}`}><Boxes size={19} /><span><small>Substrate</small><strong>{material.title}</strong></span><ChevronRight size={16} /></Link>
            <div><Printer size={19} /><span><small>{item.badge === "Verified Print" ? "Device completion record" : "Print status"}</small><strong>{item.completionRecord ?? "No completed device record yet"}</strong></span></div>
            <div><PackageCheck size={19} /><span><small>Actual setup</small><strong>{item.device} · {item.time} · {item.ink} ink · {item.parameters}</strong></span></div>
            <div><ShieldCheck size={19} /><span><small>Reuse rights</small><strong>{item.license}</strong></span></div>
          </div>
          <button className="button button-primary button-large" onClick={openStudio}>
            <WandSparkles size={19} /> {item.reusable ? "Use this workflow in Studio" : "Create your own version in Studio"}
          </button>
        </div>
      </section>
      <section className="comment-panel">
        <div><p className="eyebrow">Maker notes</p><h2>What I learned from the print</h2></div>
        <p>
          The first test was slightly too glossy at the edge, so I reduced varnish and added a short alignment guide.
          The final version printed consistently across a small batch and the color stayed strong on the finished surface.
        </p>
      </section>
      <Section title="More projects to explore">
        <div className="masonry-grid detail-projects">{projects.filter((other) => other.id !== item.id).slice(0, 4).map((other) => <ProjectCard key={other.id} item={other} />)}</div>
      </Section>
    </div>
  );
}
