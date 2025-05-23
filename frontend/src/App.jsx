import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './index.css';
import 'leaflet/dist/leaflet.css';
import Header from "./UI/headerFolder/header";
import Footer from "./UI/footer";

import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ShelterDetailPage from "./pages/shelterDetailsPage";
import TipsPage from "./pages/tipspage";
import LoginPage from "./pages/loginPage";
import DashboardPage from "./pages/dashboardPage";
import NotFoundPage from "./pages/notFoundPage";



const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shelter/:id" element={<ShelterDetailPage />} />
            <Route path="/tips" element={<TipsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="admin/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

// Docs:
// https://www.xweather.com/docs/weather-api/endpoints/tropicalcyclones
// https://docs.nationalflooddata.com/dataservice/v3/index.html
// https://www.weather.gov/documentation/services-web-api
// https://data.brla.gov/Business-and-Financial/Pet-Preparedness/3t7g-ia4h/about_data
// https://getbootstrap.com/docs/5.3/components/modal/#fullscreen-modal