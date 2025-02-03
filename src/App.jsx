import { useState } from "react";
import "./App.css";
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

      <h3 className="subtitle">Key Factors Considered:</h3>
      <div className="factors-list">
        {[
          {
            num: 1,
            title: "Design & Engineering",
            desc: "– Complexity of the vessel, regulatory approvals.",
          },
          {
            num: 2,
            title: "Material Procurement",
            desc: "– Availability, supplier lead times.",
          },
          {
            num: 3,
            title: "Fabrication & Welding",
            desc: "– Size, thickness, welding complexity.",
          },
          {
            num: 4,
            title: "Inspection & Testing",
            desc: "– Non-destructive testing, hydrostatic testing.",
          },
          {
            num: 5,
            title: "Surface Treatment",
            desc: "– Painting, coating, insulation.",
          },
          {
            num: 6,
            title: "Delivery & Installation",
            desc: "– Transportation distance, site preparation.",
          },
        ].map(({ num, title, desc }) => (
          <div key={num} className="factor-item">
            <span className="factor-number">{num}.</span>
            <span className="factor-title">{title}</span>
            <span className="factor-description">{desc}</span>
          </div>
        ))}
      </div>

      <p className="summary">
        By inputting project-specific parameters, the calculator provides an
        estimated timeline, helping teams optimize scheduling and resource
        allocation. It minimizes delays, enhances cost control, and ensures
        timely project completion. A well-designed calculator improves
        efficiency in pressure vessel manufacturing and delivery.
      </p>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("Pressure Vessel Time Estimation");
  let link = "https://thicknesscalculation.web.app/";
  let image = "crownpetal-removebg-preview.png";
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
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="logo">
            <div className="logo-square"></div>
            <h1>Engineering App</h1>
          </div>
          <nav className="nav-menu">
            {[
              "Pressure Vessel Time Estimation",
              "Shell & Dishend Thickness Calculator",
              "Pressure Vessel Paint Calculator",
              "Welding Electrode Calculator",
              "Crown & Petal Plate Calculation",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className={`nav-item ${item === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">{renderContent()}</main>

        {/* Right Panel */}
        <aside className="right-panel">
          <div className="image-container">
            <img
              src={`/${image}`}
              alt="Pressure Vessel"
              className="vessel-image"
            />
          </div>
          <a href={link} target="_blank" rel="noreferrer">
            <button className="calculate-button">Calculate</button>
          </a>
        </aside>
      </div>
    </div>
  );
}

export default App;
