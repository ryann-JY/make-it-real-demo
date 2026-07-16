import { ArrowUpDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CreatorCard, MaterialCard, ProductCard, ProjectCard, SkillCard } from "../components/Cards";
import { FilterBar, PageHeader } from "../components/Section";
import { Creator, Material, ProductIdea, Project, Skill, creators, materials, productIdeas, projects, skills } from "../data/content";

type Kind = "ideas" | "skills" | "materials" | "projects" | "creators";

const config: Record<Kind, { eyebrow: string; title: string; description: string; filters: string[] }> = {
  ideas: {
    eyebrow: "Product ideas",
    title: "What will you make next?",
    description: "Browse complete product directions connected to real workflows, materials, and community proof.",
    filters: ["For you", "Worth testing", "Personalizable", "Gifts & life", "Easy", "Verified evidence"],
  },
  skills: {
    eyebrow: "Creative workflows",
    title: "A better starting point for your next design.",
    description: "Use repeatable creative patterns to generate a product-ready direction, then continue in Studio.",
    filters: ["Featured", "Personalized", "Commercial use", "Verified", "Photo input", "Text & logo"],
  },
  materials: {
    eyebrow: "Materials",
    title: "Know the material before you print.",
    description: "Dimensions, preparation, fixtures, sourcing, tested processes, and everything makers have built with it.",
    filters: ["All materials", "Acrylic", "Ceramic", "Flat", "Rotary", "Easy", "Verified workflow"],
  },
  projects: {
    eyebrow: "Community projects",
    title: "See what E1 owners made real.",
    description: "A visual feed of real prints, creative experiments, and production-ready ideas from the community.",
    filters: ["For you", "Verified only", "AI concepts", "Reusable", "No Skill used", "Most made"],
  },
  creators: {
    eyebrow: "Creator discovery",
    title: "Follow makers who know their craft.",
    description: "Find creators by product specialty, visual style, material experience, and real-print track record.",
    filters: ["Recommended", "Official creators", "Verified sellers", "Material experts", "Workflow creators"],
  },
};

export default function CollectionPage({ kind }: { kind: Kind }) {
  const data = config[kind];
  const [params] = useSearchParams();
  const initialMode = params.get("mode");
  const publishType = params.get("publish");
  const initialFilter =
    initialMode === "sell" ? "Worth testing" :
    initialMode === "personalize" ? "Personalizable" :
    initialMode === "gift" ? "Gifts & life" :
    data.filters[0];
  const [active, setActive] = useState(initialFilter);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"Recommended" | "Most proven">("Recommended");
  const [draftStarted, setDraftStarted] = useState(false);

  const items = useMemo(() => {
    const source: Array<ProductIdea | Skill | Material | Project | Creator> =
      kind === "ideas" ? productIdeas :
      kind === "skills" ? skills :
      kind === "materials" ? materials :
      kind === "projects" ? projects :
      creators;
    const needle = query.toLowerCase();
    const filtered = source.filter((item) => {
      const queryMatch = !needle || JSON.stringify(item).toLowerCase().includes(needle);
      if (!queryMatch) return false;
      if (kind === "ideas") {
        const idea = item as ProductIdea;
        if (active === "Worth testing") return idea.modes.includes("sell");
        if (active === "Personalizable") return idea.modes.includes("personalize");
        if (active === "Gifts & life") return idea.modes.includes("gift");
        if (active === "Easy") return idea.difficulty === "Easy";
        if (active === "Verified evidence") return idea.projectIds.some((id) => projects.find((project) => project.id === id)?.badge === "Verified Print");
      }
      if (kind === "skills") {
        const skill = item as Skill;
        if (active === "Personalized") return skill.editableFields.length >= 4;
        if (active === "Commercial use") return skill.badges.includes("Commercial Use");
        if (active === "Verified") return skill.badges.includes("Verified Print");
        if (active === "Photo input") return skill.inputs.some((input) => input.toLowerCase().includes("photo") || input.toLowerCase().includes("artwork"));
        if (active === "Text & logo") return skill.inputs.some((input) => /logo|name|text/i.test(input));
      }
      if (kind === "materials") {
        const material = item as Material;
        if (active === "Acrylic") return /acrylic/i.test(material.material);
        if (active === "Ceramic") return /ceramic/i.test(material.material);
        if (active === "Flat") return !/rotary|cylinder/i.test(`${material.fixture} ${material.shape}`);
        if (active === "Rotary") return /rotary|cylinder/i.test(`${material.fixture} ${material.shape}`);
        if (active === "Easy") return material.difficulty === "Easy";
        if (active === "Verified workflow") return material.projectIds.some((id) => projects.find((project) => project.id === id)?.badge === "Verified Print");
      }
      if (kind === "projects") {
        const project = item as Project;
        if (active === "Verified only") return project.badge === "Verified Print";
        if (active === "AI concepts") return project.badge === "AI Concept";
        if (active === "Reusable") return project.reusable;
        if (active === "No Skill used") return !project.skillId;
      }
      if (kind === "creators") {
        const creator = item as Creator;
        if (active === "Official creators") return creator.roles.includes("Official Creator");
        if (active === "Verified sellers") return creator.roles.includes("Verified Seller");
        if (active === "Material experts") return creator.roles.includes("Material Expert");
        if (active === "Workflow creators") return creator.roles.includes("Workflow Creator");
      }
      return true;
    });
    return [...filtered].sort((a, b) => {
      if (sort === "Recommended") return 0;
      const score = (value: ProductIdea | Skill | Material | Project | Creator) =>
        "verifiedPrints" in value ? value.verifiedPrints :
        "prints" in value ? (typeof value.prints === "number" ? value.prints : Number.parseFloat(value.prints) || 0) :
        "reviews" in value ? value.reviews :
        "projectIds" in value ? value.projectIds.length : 0;
      return score(b) - score(a);
    });
  }, [active, kind, query, sort]);

  return (
    <div className="page-container">
      <PageHeader
        eyebrow={data.eyebrow}
        title={data.title}
        description={data.description}
        actions={
          <button className="button button-secondary" onClick={() => setSort((value) => value === "Recommended" ? "Most proven" : "Recommended")}>
            <ArrowUpDown size={16} /> {sort}
          </button>
        }
      />
      {publishType && (
        <section className="contribution-notice">
          <div>
            <p className="eyebrow">Contribution draft</p>
            <h2>{publishType === "project" ? "Share evidence from a real print or AI concept" : publishType === "skill" ? "Document a reusable creative workflow" : "Document a material-specific IDF"}</h2>
            <p>
              {publishType === "project"
                ? "A Verified Print requires a finished photo and an E1 completion record. AI work must remain clearly labeled."
                : publishType === "skill"
                ? "Define the required inputs, transformation steps, editable output, applicable materials, and reuse rights."
                : "Include physical properties, preparation, positioning, print settings, aftercare, test results, and known failures."}
            </p>
          </div>
          <button className={`button ${draftStarted ? "button-secondary" : "button-dark"}`} onClick={() => setDraftStarted(true)}>
            {draftStarted ? "Draft created · continue later" : "Start contribution draft"}
          </button>
        </section>
      )}
      <div className="collection-tools">
        <FilterBar items={data.filters} active={active} onChange={setActive} />
        <label className="collection-search">
          <Search size={17} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this collection" />
        </label>
      </div>

      <div className="results-meta">
        <span>{items.length} curated results</span>
        <span>Showing: <strong>{active}</strong></span>
      </div>

      {kind === "ideas" && <div className="product-grid collection-grid">{(items as ProductIdea[]).map((item) => <ProductCard key={item.id} item={item} />)}</div>}
      {kind === "skills" && <div className="skill-grid collection-grid">{(items as Skill[]).map((item) => <SkillCard key={item.id} item={item} />)}</div>}
      {kind === "materials" && <div className="material-grid collection-grid">{(items as Material[]).map((item) => <MaterialCard key={item.id} item={item} />)}</div>}
      {kind === "projects" && <div className="masonry-grid collection-grid">{(items as Project[]).map((item) => <ProjectCard key={item.id} item={item} />)}</div>}
      {kind === "creators" && <div className="creator-grid collection-grid">{(items as Creator[]).map((item) => <CreatorCard key={item.id} item={item} />)}</div>}
    </div>
  );
}
