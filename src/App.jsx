import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules"; 
import AnalysisDetail from "./pages/AnalysisDetail"; 
import AiRecommendation from "./pages/Recommnedation"
import SavedRecommendations from "./pages/SaveRecommendation";
import ChatMateHub from "./pages/ChatMateHub";
import NewsletterHub from "./pages/NewsletterHub";
import NewModuleGenerator from "./pages/NewModuleGenerator";
import IndustryInsights from "./pages/IndustryInsights";
import StudentAnalytics from "./pages/StudentAnalytics";
import GovernanceWorkflow from "./pages/Governance";
import FeedbackPortal from "./pages/FeedbackPortal";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/modules" element={<Modules />} />
      <Route path="/analysis" element={<AnalysisDetail />} />
      <Route path="/recommendations" element={<AiRecommendation />} />
      <Route path="/saverecommendation" element={<SavedRecommendations />} />
      <Route path="/chatmate" element={<ChatMateHub />} />
      <Route path="/newsletter" element={<NewsletterHub />} />
      <Route path="/new-module" element={<NewModuleGenerator />} />
      <Route path="/insights" element={<IndustryInsights />} />
      <Route path="/analytics" element={<StudentAnalytics />} />
      <Route path="/governance" element={<GovernanceWorkflow/>} />
      <Route path="/feedback" element={<FeedbackPortal/>} />
    </Routes>
  );
}

export default App;