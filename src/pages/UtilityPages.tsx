import { ArrowRight, Bookmark, Search, Users } from "lucide-react";
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CreatorCard, MaterialCard, ProductCard, ProjectCard, SkillCard } from "../components/Cards";
import { PageHeader, Section } from "../components/Section";
import { academy, campaigns, creators, materials, productIdeas, projects, skills } from "../data/content";

export function CampaignsPage() {
  return (
    <div className="page-container">
      <PageHeader eyebrow="Community programs" title="Make together. Get noticed." description="Challenges and creative prompts that turn community participation into real projects and new opportunities." />
      <div className="campaign-grid">
        {campaigns.map((campaign) => (
          <article className="campaign-card" key={campaign.title}>
            <img src={campaign.image} alt="" />
            <div>
              <p className="eyebrow">{campaign.date}</p>
              <h2>{campaign.title}</h2>
              <p>{campaign.description}</p>
              <strong>{campaign.reward}</strong>
              <button className="text-link" onClick={() => window.alert(`Challenge brief opened: ${campaign.title}`)}>View challenge <ArrowRight size={16} /></button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function AcademyPage() {
  return (
    <div className="page-container">
      <PageHeader eyebrow="Academy" title="Learn the part that makes the print work." description="Short, practical guides for product decisions, materials, setup, and repeatable production." />
      <div className="academy-feature">
        <img src={academy[0].image} alt="" />
        <div>
          <p className="eyebrow">Featured path · 24 min</p>
          <h2>Start a product line with your E1</h2>
          <p>Choose a focused product, validate the material, make the first sellable version, and build a repeatable process.</p>
          <button className="button button-light" onClick={() => window.alert("Learning path saved to your community workspace.")}>Start learning <ArrowRight size={17} /></button>
        </div>
      </div>
      <div className="academy-grid">
        {academy.map((item) => (
          <article key={item.title}>
            <img src={item.image} alt="" />
            <div><small>{item.level} · {item.time}</small><h3>{item.title}</h3><button className="text-link" onClick={() => window.alert(`Guide opened: ${item.title}`)}>Open guide <ArrowRight size={15} /></button></div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function SavedPage() {
  return (
    <div className="page-container">
      <PageHeader eyebrow="Your community" title="Saved for later" description="A lightweight collection of ideas, Skills, materials, and projects you may want to revisit." />
      <Section title="Product ideas"><div className="product-grid">{productIdeas.slice(0, 2).map((item) => <ProductCard key={item.id} item={item} />)}</div></Section>
      <Section title="Projects"><div className="masonry-grid detail-projects">{projects.slice(3, 7).map((item) => <ProjectCard key={item.id} item={item} />)}</div></Section>
    </div>
  );
}

export function FollowingPage() {
  return (
    <div className="page-container">
      <PageHeader eyebrow="Your community" title="From makers you follow" description="Recent projects and ideas from creators whose work you want to keep up with." />
      <div className="following-people">
        {creators.slice(0, 3).map((creator) => <Link to={`/creator/${creator.id}`} key={creator.id}><img src={creator.avatar} alt="" /><span>{creator.name}</span></Link>)}
      </div>
      <div className="masonry-grid">{projects.slice(0, 8).map((item) => <ProjectCard key={item.id} item={item} />)}</div>
    </div>
  );
}

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("q") ?? "";
  const matches = useMemo(() => {
    const needle = query.toLowerCase();
    return {
      ideas: productIdeas.filter((item) => JSON.stringify(item).toLowerCase().includes(needle)),
      skills: skills.filter((item) => JSON.stringify(item).toLowerCase().includes(needle)),
      materials: materials.filter((item) => JSON.stringify(item).toLowerCase().includes(needle)),
      projects: projects.filter((item) => JSON.stringify(item).toLowerCase().includes(needle)),
      creators: creators.filter((item) => JSON.stringify(item).toLowerCase().includes(needle)),
    };
  }, [query]);
  const count = Object.values(matches).reduce((sum, group) => sum + group.length, 0);

  return (
    <div className="page-container">
      <PageHeader eyebrow="Search results" title={`Results for “${query}”`} description={`${count} results across product ideas, Skills, materials, projects, and creators.`} />
      {count === 0 ? (
        <div className="empty-search"><Search size={36} /><h2>No exact match yet</h2><p>Try a broader product, material, occasion, or style.</p><Link className="button button-dark" to="/ideas">Browse product ideas</Link></div>
      ) : (
        <>
          {matches.ideas.length > 0 && <Section title="Product ideas"><div className="product-grid">{matches.ideas.map((item) => <ProductCard key={item.id} item={item} />)}</div></Section>}
          {matches.skills.length > 0 && <Section title="Skills"><div className="skill-grid">{matches.skills.map((item) => <SkillCard key={item.id} item={item} />)}</div></Section>}
          {matches.materials.length > 0 && <Section title="Materials & IDF"><div className="material-grid">{matches.materials.map((item) => <MaterialCard key={item.id} item={item} />)}</div></Section>}
          {matches.projects.length > 0 && <Section title="Projects"><div className="masonry-grid detail-projects">{matches.projects.map((item) => <ProjectCard key={item.id} item={item} />)}</div></Section>}
          {matches.creators.length > 0 && <Section title="Creators"><div className="creator-grid">{matches.creators.map((item) => <CreatorCard key={item.id} item={item} />)}</div></Section>}
        </>
      )}
    </div>
  );
}

export function NotFoundPage() {
  return (
    <div className="empty-search page-container"><Bookmark size={36} /><h1>This page hasn’t been made real yet.</h1><p>Return home to discover something worth making.</p><Link to="/" className="button button-dark">Back home</Link></div>
  );
}
