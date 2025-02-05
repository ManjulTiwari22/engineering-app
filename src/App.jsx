import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./LoginPage";
import { ShellDishendCalculator } from "./components/ShellDishendCalculator";
import { PressureVesselPaintCalculator } from "./components/PressureVesselPaintCalculator";
import { WeldingElectrodeCalculator } from "./components/WeldingElectrodeCalculator";
import { CrownPetalPlateCalculation } from "./components/CrownPetalPlateCalculation";

function PressureVesselTimeEstimation() {
  return (
    <div className="content-card">
      <h2 className="title">Pressure Vessel Time Estimation</h2>
      <p className="description">
        A Pressure Vessel Time Estimation Calculator is a valuable tool for
        estimating the total time required for designing, fabricating, and
        delivering pressure vessels. This calculator helps project managers,
        engineers, and manufacturers plan efficiently by providing a breakdown
        of time requirements for each phase of production.
      </p>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("Pressure Vessel Time Estimation");
  let link = "https://thicknesscalculation.web.app/";
  let image = "crownpetal-removebg-preview.png";

  useEffect(() => {
    if (isAuthenticated) {
      const logoutTimer = setTimeout(() => {
        setIsAuthenticated(false);
        console.log("Auto-logged out after 30 minutes.");
      }, 30 * 60 * 1000);
      return () => clearTimeout(logoutTimer);
    }
  }, [isAuthenticated]);

  const handleLogin = () => {
    console.log("Login Successful, updating state...");
    setIsAuthenticated(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Pressure Vessel Time Estimation":
        link = "https://pvtimeestimation.web.app/";
        image = "pvt-removebg-preview.png";
        return <PressureVesselTimeEstimation />;
      case "Shell & Dishend Thickness Calculator":
        link = "https://thicknesscalculation.web.app/";
        image = "shellthicknees-removebg-preview.png";
        return <ShellDishendCalculator />;
      case "Pressure Vessel Paint Calculator":
        link = "https://pvpaint-74ceb.web.app/";
        image = "paint.png";
        return <PressureVesselPaintCalculator />;
      case "Welding Electrode Calculator":
        link = "https://weldingcalculator-d445d.web.app/";
        image = "electrode-removebg-preview.png";
        return <WeldingElectrodeCalculator />;
      case "Crown & Petal Plate Calculation":
        link = "https://cp-dishend-plt-calculation.web.app/";
        image = "crownpetal-removebg-preview.png";
        return <CrownPetalPlateCalculation />;
      default:
        return <PressureVesselTimeEstimation />;
    }
  };

  return (
    <div className="container">
      {!isAuthenticated ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div className="dashboard">
          <header className="dashboard-header">
            <h1>Engineering App Dashboard</h1>
          </header>
          <div className="layout">
            <aside className="sidebar">
              <nav className="nav-menu">
                {["Pressure Vessel Time Estimation", "Shell & Dishend Thickness Calculator", "Pressure Vessel Paint Calculator", "Welding Electrode Calculator", "Crown & Petal Plate Calculation"].map((item) => (
                  <button key={item} className={`nav-item ${item === activeTab ? "active" : ""}`} onClick={() => setActiveTab(item)}>
                    {item}
                  </button>
                ))}
              </nav>
            </aside>
            <main className="main-content">{renderContent()}</main>
            <aside className="right-panel">
              <div className="image-container">
                <img src={`/${image}`} alt="Calculation" className="vessel-image" />
              </div>
              <a href={link} target="_blank" rel="noreferrer">
                <button className="calculate-button">Calculate</button>
              </a>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
