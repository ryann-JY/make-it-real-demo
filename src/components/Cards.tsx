import {
  ArrowUpRight,
  Boxes,
  Bookmark,
  CheckCircle2,
  Clock3,
  Heart,
  Layers3,
  Printer,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Creator, Material, ProductIdea, Project, Skill, creators, projects } from "../data/content";

export function StatusPill({ label }: { label: string }) {
  const isVerified = label === "Verified Print";
  return (
    <span className={`status-pill ${isVerified ? "verified" : label === "AI Concept" ? "concept" : "commercial"}`}>
      {isVerified ? <CheckCircle2 size={13} /> : label === "AI Concept" ? <Sparkles size={13} /> : null}
      {label}
    </span>
  );
}

export function SaveButton({ light = false }: { light?: boolean }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      className={`save-button ${light ? "light" : ""} ${saved ? "saved" : ""}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        setSaved((value) => !value);
      }}
      aria-label={saved ? "Remove from saved" : "Save"}
    >
      <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
    </button>
  );
}

export function ProductCard({ item, featured = false }: { item: ProductIdea; featured?: boolean }) {
  const verifiedCount = item.projectIds.filter((projectId) => {
    return projects.find((project) => project.id === projectId)?.badge === "Verified Print";
  }).length;
  return (
    <Link to={`/idea/${item.id}`} className={`product-card ${featured ? "featured" : ""}`}>
      <div className="card-image-wrap">
        <img src={item.image} alt={item.title} />
        <div className="card-badges">
          <span className="asset-type-chip idea"><Sparkles size={12} /> Product idea</span>
          <span className="evidence-pill"><CheckCircle2 size={13} /> {verifiedCount} real examples</span>
        </div>
        <SaveButton light />
      </div>
      <div className="product-card-body">
        <p className="card-kicker">{item.kicker}</p>
        <h3>{item.title}</h3>
        <p className="card-audience">{item.audience}</p>
        <div className="mini-metrics">
          <span><Clock3 size={14} /> {item.time}</span>
          <span>{item.difficulty}</span>
          <span className="margin-text">{item.modes.includes("personalize") ? "Personalizable" : "Small-batch idea"}</span>
        </div>
        <div className="card-commerce">
          <span><small>Reference cost</small><strong>{item.cost}</strong></span>
          <span><small>Reference price</small><strong>{item.price}</strong></span>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </Link>
  );
}

export function SkillCard({ item }: { item: Skill }) {
  const verifiedCount = item.projectIds.filter((projectId) => projects.find((project) => project.id === projectId)?.badge === "Verified Print").length;
  return (
    <Link to={`/skill/${item.id}`} className="skill-card">
      <div className="skill-visual">
        <div className="skill-compare">
          <div>
            <img src={item.inputImage} alt={`${item.title} input`} />
            <span>Input</span>
          </div>
          <div>
            <img src={item.image} alt={`${item.title} result`} />
            <span>Result</span>
          </div>
        </div>
        <span className="asset-type-chip skill"><Workflow size={12} /> Skill workflow</span>
        <SaveButton light />
      </div>
      <div className="skill-card-body">
        <p className="card-kicker">Editable creative workflow</p>
        <h3>{item.title}</h3>
        <p>{item.tagline}</p>
        <div className="skill-stats">
          <span><Layers3 size={14} /> {item.uses} runs</span>
          <span><Printer size={14} /> {verifiedCount} verified examples</span>
        </div>
      </div>
    </Link>
  );
}

export function MaterialCard({ item }: { item: Material }) {
  return (
    <Link to={`/material/${item.id}`} className="material-card">
      <div className="material-image">
        <img src={item.image} alt={item.title} />
        <span className="asset-type-chip material"><Boxes size={12} /> Material + IDF</span>
        <SaveButton light />
      </div>
      <div className="material-card-body">
        <p className="card-kicker">{item.material}</p>
        <h3>{item.title}</h3>
        <p className="material-process-line"><strong>Print path</strong>{item.prep}</p>
        <div className="material-meta">
          <span>{item.size}</span>
          <span>{item.difficulty}</span>
        </div>
        <div className="rating"><Star size={14} fill="currentColor" /> {item.rating} <small>({item.reviews})</small></div>
      </div>
    </Link>
  );
}

export function ProjectCard({ item }: { item: Project }) {
  const creator = creators.find((person) => person.id === item.creatorId);
  return (
    <Link to={`/project/${item.id}`} className="project-card">
      <div className="project-image">
        <img src={item.image} alt={item.title} />
        <div className="project-overlay">
          <span className="project-status-stack">
            <span className="asset-type-chip project"><Printer size={12} /> Project</span>
            <StatusPill label={item.badge} />
          </span>
          <SaveButton light />
        </div>
      </div>
      <h3>{item.title}</h3>
      <div className="project-footer">
        <span className="creator-inline">
          <img src={creator?.avatar} alt="" />
          {creator?.name}
        </span>
        <span><Heart size={14} /> {item.likes}</span>
      </div>
    </Link>
  );
}

export function CreatorCard({ item }: { item: Creator }) {
  const [followed, setFollowed] = useState(false);
  return (
    <article className="creator-card">
      <Link to={`/creator/${item.id}`} className="creator-cover">
        <img src={item.cover} alt="" />
        <span className="asset-type-chip creator">Creator</span>
      </Link>
      <div className="creator-card-content">
        <Link to={`/creator/${item.id}`} className="creator-identity">
          <img src={item.avatar} alt={item.name} />
          <span>
            <strong>{item.name}</strong>
            <small>{item.verified}</small>
          </span>
        </Link>
        <p>{item.bio}</p>
        <div className="tag-row">
          {item.specialties.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <div className="creator-card-bottom">
          <span>{item.verifiedPrints} verified prints · {item.reuseCount} reuses</span>
          <button
            className={`button button-small ${followed ? "button-secondary" : "button-dark"}`}
            onClick={() => setFollowed((value) => !value)}
          >
            {followed ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </article>
  );
}
