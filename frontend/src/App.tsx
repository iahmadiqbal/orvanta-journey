import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import ScrollToHash from "./components/ScrollToHash";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Investments from "./pages/Investments";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import ProtectedRoute from "./components/ProtectedRoute";

// Main Service Pages
import Immigration from "./pages/services/Immigration";
import Business from "./pages/services/Business";
import ITServices from "./pages/services/ITServices";
import Legal from "./pages/services/Legal";

// Immigration Services (legacy routes - keep for backward compatibility)
import VisaServices from "./pages/services/immigration/VisaServices";
import PRServices from "./pages/services/immigration/PRServices";
import WorkPermits from "./pages/services/immigration/WorkPermits";
import StudyAbroad from "./pages/services/immigration/StudyAbroad";

// Investment Services (legacy routes)
import RealEstate from "./pages/services/investments/RealEstate";
import Stocks from "./pages/services/investments/Stocks";
import TaxPlanning from "./pages/services/investments/TaxPlanning";
import NRIInvestments from "./pages/services/investments/NRIInvestments";
import BusinessInvestments from "./pages/services/investments/BusinessInvestments";

// Consultation Services (legacy routes)
import GlobalMarket from "./pages/services/consultation/GlobalMarket";
import ExpansionOptimization from "./pages/services/consultation/ExpansionOptimization";
import StrategicGrowth from "./pages/services/consultation/StrategicGrowth";

// Legal Services (legacy routes)
import LegalDocumentation from "./pages/services/legal/LegalDocumentation";
import RiskManagement from "./pages/services/legal/RiskManagement";
import DisputePrevention from "./pages/services/legal/DisputePrevention";

// Locations
import Locations from "./pages/Locations";
import UK from "./pages/locations/UK";
import India from "./pages/locations/India";
import HongKong from "./pages/locations/HongKong";
import Canada from "./pages/locations/Canada";
import Belize from "./pages/locations/Belize";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTopOnRouteChange />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/investments" element={<Investments />} />

        {/* Main Service Pages */}
        <Route path="/services/immigration" element={<Immigration />} />
        <Route path="/services/business" element={<Business />} />
        <Route path="/services/it-services" element={<ITServices />} />
        <Route path="/services/legal" element={<Legal />} />

        {/* Immigration Services (legacy routes) */}
        <Route path="/services/immigration/visa" element={<VisaServices />} />
        <Route path="/services/immigration/pr" element={<PRServices />} />
        <Route
          path="/services/immigration/work-permits"
          element={<WorkPermits />}
        />
        <Route
          path="/services/immigration/study-abroad"
          element={<StudyAbroad />}
        />

        {/* Investment Services (legacy routes) */}
        <Route
          path="/services/investments/real-estate"
          element={<RealEstate />}
        />
        <Route path="/services/investments/stocks" element={<Stocks />} />
        <Route
          path="/services/investments/tax-planning"
          element={<TaxPlanning />}
        />
        <Route path="/services/investments/nri" element={<NRIInvestments />} />
        <Route
          path="/services/investments/business"
          element={<BusinessInvestments />}
        />

        {/* Consultation Services (legacy routes) */}
        <Route
          path="/services/consultation/global-market"
          element={<GlobalMarket />}
        />
        <Route
          path="/services/consultation/expansion"
          element={<ExpansionOptimization />}
        />
        <Route
          path="/services/consultation/strategic-growth"
          element={<StrategicGrowth />}
        />

        {/* Legal Services (legacy routes) */}
        <Route
          path="/services/legal/documentation"
          element={<LegalDocumentation />}
        />
        <Route
          path="/services/legal/risk-management"
          element={<RiskManagement />}
        />
        <Route
          path="/services/legal/dispute-prevention"
          element={<DisputePrevention />}
        />

        {/* Locations */}
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/uk" element={<UK />} />
        <Route path="/locations/india" element={<India />} />
        <Route path="/locations/hong-kong" element={<HongKong />} />
        <Route path="/locations/canada" element={<Canada />} />
        <Route path="/locations/belize" element={<Belize />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-in/*" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
