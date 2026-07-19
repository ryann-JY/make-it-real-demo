import { ExternalLink, MapPin, Share2 } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MaterialCard, ProjectCard, SkillCard } from "../components/Cards";
import { FilterBar } from "../components/Section";
import { creators, findById, materials, projects, skills } from "../data/content";

export default function CreatorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const creator = findById(creators, id) ?? creators[0];
  const [followed, setFollowed] = useState(false);
  const [shared, setShared] = useState(false);
  const [tab, setTab] = useState("Projects");

  const creatorProjects = creator.projects.map((projectId) => findById(projects, projectId)).filter(Boolean);
  const creatorSkills = creator.skills.map((skillId) => findById(skills, skillId)).filter(Boolean);
  const creatorMaterials = creator.materials.map((materialId) => findById(materials, materialId)).filter(Boolean);

  return (
    <div className="creator-profile page-container">
      <section className="creator-profile-cover">
        <img src={creator.cover} alt="" />
      </section>
      <section className="creator-profile-header">
        <img className="creator-profile-avatar" src={creator.avatar} alt={creator.name} />
        <div className="creator-profile-main">
          <div>
            <span className="creator-verified">{creator.verified}</span>
            <h1>{creator.name}</h1>
            <p className="creator-handle">{creator.handle}</p>
          </div>
          <div className="creator-profile-actions">
            <button className="icon-button" aria-label={shared ? "Profile link copied" : "Share profile"} onClick={() => { navigator.clipboard?.writeText(window.location.href); setShared(true); }}><Share2 size={19} /></button>
            <button className={`button ${followed ? "button-secondary" : "button-dark"}`} onClick={() => setFollowed((value) => !value)}>
              {followed ? "Following" : "Follow"}
            </button>
          </div>
        </div>
        <p className="creator-bio">{creator.bio}</p>
        <div className="creator-info-row">
          <span><MapPin size={16} /> {creator.location}</span>
          <button onClick={() => window.alert(`External store handoff: ${creator.store}`)}><ExternalLink size={15} /> {creator.store}</button>
        </div>
        <div className="tag-row creator-tags">{creator.roles.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <p className="creator-rights"><strong>Ownership & reuse:</strong> {creator.rights}</p>
        <div className="profile-stats">
          <span><strong>{creator.verifiedPrints}</strong><small>Verified prints</small></span>
          <span><strong>{creator.reuseCount}</strong><small>Workflow reuses</small></span>
          <span><strong>{creatorSkills.length}</strong><small>Workflows shared</small></span>
          <span><strong>{creatorMaterials.length}</strong><small>Substrates tested</small></span>
        </div>
      </section>

      <FilterBar items={["Projects", "Skills", "Substrates tested", "Collections"]} active={tab} onChange={setTab} />
      <div className="profile-tab-content">
        {tab === "Projects" && <div className="masonry-grid">{creatorProjects.map((item) => item && <ProjectCard key={item.id} item={item} />)}</div>}
        {tab === "Skills" && <div className="skill-grid">{creatorSkills.length ? creatorSkills.map((item) => item && <SkillCard key={item.id} item={item} />) : <EmptyProfile text="This maker hasn’t published a Skill yet." />}</div>}
        {tab === "Substrates tested" && <div className="material-grid">{creatorMaterials.map((item) => item && <MaterialCard key={item.id} item={item} />)}</div>}
        {tab === "Collections" && <EmptyProfile text="Saved product collections will appear here." action={() => navigate("/ideas")} />}
      </div>
    </div>
  );
}

function EmptyProfile({ text, action }: { text: string; action?: () => void }) {
  return (
    <div className="empty-state">
      <h3>{text}</h3>
      {action && <button className="button button-secondary" onClick={action}>Explore ideas</button>}
    </div>
  );
}
