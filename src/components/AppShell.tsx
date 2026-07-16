import {
  Bell,
  BookOpen,
  Bookmark,
  Boxes,
  ChevronRight,
  CircleUserRound,
  Compass,
  FolderHeart,
  Gem,
  Home,
  Images,
  Layers3,
  Menu,
  MonitorUp,
  Search,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const nav = [
  { to: "/", label: "Home", icon: Home },
  { to: "/ideas", label: "Product Ideas", icon: Sparkles },
  { to: "/skills", label: "Skills", icon: Layers3 },
  { to: "/materials", label: "Materials", icon: Boxes },
  { to: "/projects", label: "Projects", icon: Images },
  { to: "/creators", label: "Creators", icon: Users },
];

const supportNav = [
  { to: "/campaigns", label: "Campaigns", icon: Trophy },
  { to: "/academy", label: "Academy", icon: BookOpen },
];

const profileImage = `${import.meta.env.BASE_URL}images/creator-1.jpg`;

export function AppShell({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studioOpen, setStudioOpen] = useState(false);
  const [publishOpen, setPublishOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="app-shell">
      <header className="mobile-header">
        <button className="icon-button" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <NavLink to="/" className="brand brand-mobile">
          Make It Real <span>Beta</span>
        </NavLink>
        <button className="avatar-button" onClick={() => navigate("/creator/suz")}>
          <img src={profileImage} alt="" />
        </button>
      </header>

      <aside className={`sidebar ${mobileOpen ? "is-open" : ""}`}>
        <div className="sidebar-top">
          <NavLink to="/" className="brand" onClick={() => setMobileOpen(false)}>
            <span className="brand-mark">M</span>
            <span>Make It Real</span>
            <small>Beta</small>
          </NavLink>
          <button className="icon-button close-mobile" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-label">Discover</p>
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
              end={to === "/"}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
            </NavLink>
          ))}

          <p className="nav-label nav-label-spaced">Explore more</p>
          {supportNav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              <Icon size={18} strokeWidth={1.8} />
              <span>{label}</span>
            </NavLink>
          ))}

          <p className="nav-label nav-label-spaced">Your community</p>
          <NavLink to="/saved" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <Bookmark size={18} strokeWidth={1.8} />
            <span>Saved</span>
          </NavLink>
          <NavLink to="/following" className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <FolderHeart size={18} strokeWidth={1.8} />
            <span>Following</span>
          </NavLink>
        </nav>

        <div className="sidebar-bottom">
          <button className="studio-link" onClick={() => setStudioOpen(true)}>
            <span className="studio-icon"><MonitorUp size={19} /></span>
            <span>
              <strong>Open Studio</strong>
              <small>Design and print</small>
            </span>
            <ChevronRight size={16} />
          </button>
          <div className="profile-mini" onClick={() => navigate("/creator/suz")}>
            <img src={profileImage} alt="" />
            <span>
              <strong>Ryan’s Workshop</strong>
              <small>4,800 points</small>
            </span>
            <CircleUserRound size={18} />
          </div>
        </div>
      </aside>

      {mobileOpen && <button className="sidebar-scrim" onClick={() => setMobileOpen(false)} aria-label="Close menu" />}

      <main className="main-area">
        <header className="topbar">
          <form className="global-search" onSubmit={submitSearch}>
            <Search size={19} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, skills, materials, projects..."
            />
            <kbd>⌘ K</kbd>
          </form>
          <div className="top-actions">
            <button className="button button-secondary" onClick={() => setPublishOpen(true)}>
              <Gem size={17} /> Publish
            </button>
            <button className="icon-button notification-button" aria-label="Notifications" onClick={() => window.alert("You have 3 new saves and one material-test reply.")}>
              <Bell size={20} />
              <i />
            </button>
            <button className="avatar-button" onClick={() => navigate("/creator/suz")}>
              <img src={profileImage} alt="" />
            </button>
          </div>
        </header>
        <div key={location.pathname} className="page-enter">
          {children}
        </div>
      </main>

      {studioOpen && (
        <div className="modal-backdrop" onClick={() => setStudioOpen(false)}>
          <section className="studio-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setStudioOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <div className="studio-modal-art">
              <MonitorUp size={42} />
            </div>
            <p className="eyebrow">Continue in eufyMake Studio</p>
            <h2>Your design and print settings will travel with you.</h2>
            <p>
              Make It Real helps you discover and validate the idea. Studio is where you customize the design,
              connect your E1, and print.
            </p>
            <div className="modal-actions">
              <button className="button button-primary" onClick={() => setStudioOpen(false)}>
                Open eufyMake Studio <ChevronRight size={17} />
              </button>
              <button className="button button-ghost" onClick={() => setStudioOpen(false)}>
                Not now
              </button>
            </div>
          </section>
        </div>
      )}

      {publishOpen && (
        <div className="modal-backdrop" onClick={() => setPublishOpen(false)}>
          <section className="studio-modal publish-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setPublishOpen(false)} aria-label="Close">
              <X size={20} />
            </button>
            <p className="eyebrow">Contribute to Make It Real</p>
            <h2>What knowledge are you sharing?</h2>
            <p>Product Ideas are assembled from community evidence. Contributors publish the reusable assets and real prints behind them.</p>
            <div className="publish-options">
              <button onClick={() => { setPublishOpen(false); navigate("/projects?publish=project"); }}>
                <Images size={21} /><span><strong>Share a Project</strong><small>Upload a real result or clearly labeled AI concept.</small></span><ChevronRight size={17} />
              </button>
              <button onClick={() => { setPublishOpen(false); navigate("/skills?publish=skill"); }}>
                <Layers3 size={21} /><span><strong>Create a Skill</strong><small>Define inputs, workflow steps, editable output, and rights.</small></span><ChevronRight size={17} />
              </button>
              <button onClick={() => { setPublishOpen(false); navigate("/materials?publish=material"); }}>
                <Boxes size={21} /><span><strong>Submit a Material / IDF</strong><small>Document preparation, fixture, settings, testing, and failures.</small></span><ChevronRight size={17} />
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export function useStudioPrompt() {
  return () => {
    const button = document.querySelector<HTMLButtonElement>(".studio-link");
    button?.click();
  };
}
