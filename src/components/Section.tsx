import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Section({
  eyebrow,
  title,
  description,
  link,
  linkLabel = "View all",
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  link?: string;
  linkLabel?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`content-section ${className}`}>
      <div className="section-heading">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        {link && (
          <Link to={link} className="text-link">
            {linkLabel} <ArrowRight size={16} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <header className="page-header">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {actions && <div className="page-header-actions">{actions}</div>}
    </header>
  );
}

export function FilterBar({ items, active, onChange }: { items: string[]; active: string; onChange: (item: string) => void }) {
  return (
    <div className="filter-bar">
      {items.map((item) => (
        <button key={item} className={active === item ? "active" : ""} onClick={() => onChange(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}
