import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";
import MenuDashboard from "./pages/MenuDashboard";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import HomeNotLoggedIn from "./pages/HomeNotLoggedIn";
import Messaggi from "./pages/Messaggi";
import SettingsAccount from "./pages/SettingsAccount";
import Group from "./pages/Group";
import Impostazioni from "./pages/Impostazioni";
import SettingsSecurity from "./pages/SettingsSecurity";
import Dashboard from "./pages/Dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/menu-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/home-logged-in":
        title = "";
        metaDescription = "";
        break;
      case "/home-not-logged-in":
        title = "";
        metaDescription = "";
        break;
      case "/messaggi":
        title = "";
        metaDescription = "";
        break;
      case "/settings-account":
        title = "";
        metaDescription = "";
        break;
      case "/group-31":
        title = "";
        metaDescription = "";
        break;
      case "/impostazioni":
        title = "";
        metaDescription = "";
        break;
      case "/settings-security":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeLogin />} />
      <Route path="/menu-dashboard" element={<MenuDashboard />} />
      <Route path="/home-logged-in" element={<HomeLoggedIn />} />
      <Route path="/home-not-logged-in" element={<HomeNotLoggedIn />} />
      <Route path="/messaggi" element={<Messaggi />} />
      <Route path="/settings-account" element={<SettingsAccount />} />
      <Route path="/group-31" element={<Group />} />
      <Route path="/impostazioni" element={<Impostazioni />} />
      <Route path="/settings-security" element={<SettingsSecurity />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;
