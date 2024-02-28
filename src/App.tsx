import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SettingsSecurity from "./pages/SettingsSecurity";
import Impostazioni from "./pages/Impostazioni";
import Group from "./pages/Group";
import SettingsAccount from "./pages/SettingsAccount";
import Messaggi from "./pages/Messaggi";
import HomeLoggedIn from "./pages/HomeLoggedIn";
import HomeLogin from "./pages/HomeLogin";
import MenuDashboard from "./pages/MenuDashboard";
import HomeNotLoggedIn from "./pages/HomeNotLoggedIn";

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
      case "/settings-security":
        title = "";
        metaDescription = "";
        break;
      case "/impostazioni":
        title = "";
        metaDescription = "";
        break;
      case "/group-31":
        title = "";
        metaDescription = "";
        break;
      case "/settings-account":
        title = "";
        metaDescription = "";
        break;
      case "/messaggi":
        title = "";
        metaDescription = "";
        break;
      case "/home-logged-in":
        title = "";
        metaDescription = "";
        break;
      case "/home-login":
        title = "";
        metaDescription = "";
        break;
      case "/menu-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/home-not-logged-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/settings-security" element={<SettingsSecurity />} />
      <Route path="/impostazioni" element={<Impostazioni />} />
      <Route path="/group-31" element={<Group />} />
      <Route path="/settings-account" element={<SettingsAccount />} />
      <Route path="/messaggi" element={<Messaggi />} />
      <Route path="/home-logged-in" element={<HomeLoggedIn />} />
      <Route path="/home-login" element={<HomeLogin />} />
      <Route path="/menu-dashboard" element={<MenuDashboard />} />
      <Route path="/home-not-logged-in" element={<HomeNotLoggedIn />} />
    </Routes>
  );
}
export default App;
