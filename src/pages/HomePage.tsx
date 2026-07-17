import {
  ArrowRight,
  Boxes,
  ChevronRight,
  Search,
  Sparkles,
  Users,
  WandSparkles,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreatorCard, MaterialCard, ProductCard, ProjectCard, SkillCard } from "../components/Cards";
import { Section } from "../components/Section";
import { creators, materials, productIdeas, projects, skills } from "../data/content";

const prompts = [
  "Personalized products I can test under $20",
  "A meaningful housewarming gift",
  "How do I print on clear acrylic?",
  "Batch-friendly products for a weekend market",
];

export default function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query || "personalized products")}`);
  };

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><WandSparkles size={15} /> Verified on E1 · Ready to personalize</p>
          <h1>Find a proven print. Make it uniquely yours.</h1>
          <form className="idea-search" onSubmit={submit}>
            <Sparkles size={22} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What do you want to make?"
            />
            <button type="submit">Find proven ideas <ArrowRight size={17} /></button>
          </form>
          <div className="prompt-row">
            {prompts.map((prompt) => (
              <button key={prompt} onClick={() => setQuery(prompt)}>{prompt}</button>
            ))}
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-card hero-card-main">
            <img src={productIdeas[0].image} alt="" />
            <span className="floating-label">A proven print, ready to personalize</span>
          </div>
          <div className="hero-card hero-card-small top">
            <img src={productIdeas[2].image} alt="" />
          </div>
          <div className="hero-card hero-card-small bottom">
            <img src={productIdeas[3].image} alt="" />
          </div>
          <div className="hero-proof">
            <span><strong>2.1K</strong> verified prints</span>
            <span className="proof-avatars">
              {creators.slice(0, 3).map((creator) => <img key={creator.id} src={creator.avatar} alt="" />)}
            </span>
          </div>
        </div>
      </section>

      <section className="intent-strip">
        <button onClick={() => navigate("/ideas")}>
          <span className="intent-icon sell"><Sparkles size={23} /></span>
          <span><strong>Explore Product Ideas</strong><small>Sellable directions and personalizable inspiration</small></span>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => navigate("/skills")}>
          <span className="intent-icon fun"><WandSparkles size={23} /></span>
          <span><strong>Explore Skills</strong><small>Reusable workflows for your own version</small></span>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => navigate("/materials")}>
          <span className="intent-icon material"><Boxes size={23} /></span>
          <span><strong>Explore Materials</strong><small>Tested preparation, fixtures, and print settings</small></span>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => navigate("/creators")}>
          <span className="intent-icon easy"><Users size={23} /></span>
          <span><strong>Explore Creators</strong><small>Styles, expertise, and verified work</small></span>
          <ChevronRight size={18} />
        </button>
      </section>

      <Section
        title="Product Opportunities"
        description="Sellable directions and personalizable ideas, supported by real E1 prints."
        link="/ideas"
      >
        <div className="product-grid">
          {productIdeas.map((item, index) => <ProductCard key={item.id} item={item} featured={index === 0} />)}
        </div>
      </Section>

      <Section
        title="Skills"
        description="Reusable creative workflows that turn a proven idea into your own version."
        link="/skills"
      >
        <div className="skill-grid">
          {skills.map((item) => <SkillCard key={item.id} item={item} />)}
        </div>
      </Section>

      <section className="editorial-banner">
        <div>
          <p className="eyebrow">Community challenge · Now open</p>
          <h2>Local Icons Challenge</h2>
          <p>Turn a landmark, food, symbol, or local story into something people can make—then print and share the verified result.</p>
          <button className="button button-light" onClick={() => navigate("/campaigns")}>
            View challenge <ArrowRight size={17} />
          </button>
        </div>
        <img src={productIdeas[1].image} alt="" />
      </section>

      <Section
        title="Materials"
        description="Tested substrates, preparation, fixtures, and print settings for reliable E1 results."
        link="/materials"
      >
        <div className="material-grid">
          {materials.slice(0, 8).map((item) => <MaterialCard key={item.id} item={item} />)}
        </div>
      </Section>

      <Section
        title="Community Projects"
        description="Browse what E1 owners have actually made, tested, and shared."
        link="/projects"
      >
        <div className="masonry-grid home-masonry">
          {projects.slice(0, 24).map((item) => <ProjectCard key={item.id} item={item} />)}
        </div>
      </Section>

      <Section
        title="Trusted Contributors"
        description="Follow creators whose verified work, creative methods, and material knowledge you can trust."
        link="/creators"
      >
        <div className="creator-grid">
          {creators.map((item) => <CreatorCard key={item.id} item={item} />)}
        </div>
      </Section>

      <section className="home-search-footer">
        <Search size={30} />
        <h2>Still looking for the right idea?</h2>
        <p>Search the full Make It Real community by product, occasion, material, style, or creator.</p>
        <button className="button button-dark" onClick={() => document.querySelector<HTMLInputElement>(".global-search input")?.focus()}>
          Search the community
        </button>
      </section>
    </div>
  );
}
