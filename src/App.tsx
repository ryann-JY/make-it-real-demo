import { Route, Routes } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import CollectionPage from "./pages/CollectionPages";
import CreatorPage from "./pages/CreatorPage";
import { MaterialDetailPage, ProductIdeaPage, ProjectDetailPage, SkillDetailPage } from "./pages/DetailPages";
import HomePage from "./pages/HomePage";
import {
  AcademyPage,
  CampaignsPage,
  FollowingPage,
  NotFoundPage,
  SavedPage,
  SearchPage,
} from "./pages/UtilityPages";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ideas" element={<CollectionPage kind="ideas" />} />
        <Route path="/skills" element={<CollectionPage kind="skills" />} />
        <Route path="/materials" element={<CollectionPage kind="materials" />} />
        <Route path="/projects" element={<CollectionPage kind="projects" />} />
        <Route path="/creators" element={<CollectionPage kind="creators" />} />
        <Route path="/idea/:id" element={<ProductIdeaPage />} />
        <Route path="/skill/:id" element={<SkillDetailPage />} />
        <Route path="/material/:id" element={<MaterialDetailPage />} />
        <Route path="/project/:id" element={<ProjectDetailPage />} />
        <Route path="/creator/:id" element={<CreatorPage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/following" element={<FollowingPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  );
}
