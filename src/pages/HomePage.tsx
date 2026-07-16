import {
  ArrowRight,
  Boxes,
  ChevronRight,
  Gift,
  Search,
  ShoppingBag,
  Sparkles,
  SlidersHorizontal,
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
          <p className="eyebrow"><WandSparkles size={15} /> Ideas, proven by real makers</p>
          <h1>Find your next product or project.</h1>
          <p className="hero-description">
            Decide what to make, shape it into your own version, and learn how to print it successfully on your eufyMake E1.
          </p>
          <form className="idea-search" onSubmit={submit}>
            <Sparkles size={22} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What do you want to make?"
            />
            <button type="submit">Explore ideas <ArrowRight size={17} /></button>
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
            <span className="floating-label">Pet gifts that feel personal</span>
          </div>
          <div className="hero-card hero-card-small top">
            <img src={productIdeas[2].image} alt="" />
          </div>
          <div className="hero-card hero-card-small bottom">
            <img src={productIdeas[3].image} alt="" />
          </div>
          <div className="hero-proof">
            <span><strong>2.1K</strong> real prints</span>
            <span className="proof-avatars">
              {creators.slice(0, 3).map((creator) => <img key={creator.id} src={creator.avatar} alt="" />)}
            </span>
          </div>
        </div>
      </section>

      <section className="intent-strip">
        <button onClick={() => navigate("/ideas?mode=sell")}>
          <span className="intent-icon sell"><ShoppingBag size={23} /></span>
          <span><strong>Find a product worth testing</strong><small>Opportunity clues, estimates, and real examples</small></span>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => navigate("/ideas?mode=personalize")}>
          <span className="intent-icon fun"><SlidersHorizontal size={23} /></span>
          <span><strong>Personalize a customer order</strong><small>Repeatable workflows with editable inputs</small></span>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => navigate("/ideas?mode=gift")}>
          <span className="intent-icon easy"><Gift size={23} /></span>
          <span><strong>Make for someone or a moment</strong><small>Personal gifts and everyday creative projects</small></span>
          <ChevronRight size={18} />
        </button>
        <button onClick={() => navigate("/materials")}>
          <span className="intent-icon material"><Boxes size={23} /></span>
          <span><strong>Explore how a material prints</strong><small>Preparation, fixtures, settings, and failures</small></span>
          <ChevronRight size={18} />
        </button>
      </section>

      <Section
        eyebrow="Product opportunities"
        title="Ideas worth a small real-world test"
        description="Explore who the product may serve, how it can differ, what it may cost, and which real prints support the direction."
        link="/ideas"
      >
        <div className="product-grid">
          {productIdeas.map((item, index) => <ProductCard key={item.id} item={item} featured={index === 0} />)}
        </div>
      </Section>

      <Section
        eyebrow="Creative workflows"
        title="Turn an input into your own solution"
        description="Each Skill explains its inputs, transformation steps, editable fields, output, and usage rights."
        link="/skills"
      >
        <div className="skill-grid">
          {skills.map((item) => <SkillCard key={item.id} item={item} />)}
        </div>
      </Section>

      <section className="editorial-banner">
        <div>
          <p className="eyebrow">Local product opportunity</p>
          <h2>Start with one place people recognize—not a generic souvenir range.</h2>
          <p>Review the evidence, test one landmark in a small batch, then decide whether the idea deserves a larger collection.</p>
          <button className="button button-light" onClick={() => navigate("/idea/city-magnet")}>
            Explore the collection <ArrowRight size={17} />
          </button>
        </div>
        <img src={productIdeas[1].image} alt="" />
      </section>

      <Section
        eyebrow="Materials"
        title="Start with what you want to print on"
        description="Physical properties, preparation, fixtures, print settings, aftercare, known failures, and verified results."
        link="/materials"
      >
        <div className="material-grid">
          {materials.slice(0, 4).map((item) => <MaterialCard key={item.id} item={item} />)}
        </div>
      </Section>

      <Section
        eyebrow="Community projects"
        title="Real prints, not just perfect renders"
        description="Browse what E1 owners have actually made, tested, and shared."
        link="/projects"
      >
        <div className="masonry-grid home-masonry">
          {projects.slice(0, 8).map((item) => <ProjectCard key={item.id} item={item} />)}
        </div>
      </Section>

      <Section
        eyebrow="Trusted contributors"
        title="Follow the people behind the proof"
        description="Evaluate creators by their verified prints, workflow contributions, material knowledge, rights, and point of view."
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
