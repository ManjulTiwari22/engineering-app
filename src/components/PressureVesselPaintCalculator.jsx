export function PressureVesselPaintCalculator() {
  return (
    <div className="content-card">
      <h2 className="title">Pressure Vessel Paint Calculator</h2>
      <p className="description">
        The Pressure Vessel Paint Calculator helps engineers, project managers, 
        and manufacturers accurately estimate the amount of paint required for 
        coating pressure vessels. This tool considers vessel surface area, paint 
        coverage rate, number of coats, and wastage factors to provide a precise 
        estimate, ensuring cost-effective and efficient material usage.
      </p>
  
      <h3 className="sub-title">Key Features:</h3>
      <ul className="feature-list">
        <li>
          <span className="medium">Surface Area Calculation:</span> Automatically 
          computes the total surface area of cylindrical, spherical, and custom-shaped 
          pressure vessels.
        </li>
        <li>
          <span className="medium">Customizable Inputs:</span> Allows users to specify 
          vessel dimensions, paint type, coating thickness, and application method.
        </li>
        <li>
          <span className="medium">Multi-Coat Estimation:</span> Supports single and 
          multiple coat applications with adjustable thickness for primer, base, and 
          final coats.
        </li>
        <li>
          <span className="medium">Paint Coverage Efficiency:</span> Takes into account 
          paint spreading rate (m² per liter) based on manufacturer specifications.
        </li>
        <li>
          <span className="medium">Wastage Factor Inclusion:</span> Accounts for losses 
          due to overspray, surface absorption, and application inefficiencies.
        </li>
        <li>
          <span className="medium">Cost Estimation:</span> Provides a budget estimate 
          by calculating the total paint quantity required and its associated cost.
        </li>
        <li>
          <span className="medium">Environmental Compliance:</span> Supports 
          eco-friendly coatings and regulatory requirements for emissions and 
          hazardous materials.
        </li>
        <li>
          <span className="medium">Report Generation:</span> Generates detailed reports 
          with paint requirements, estimated costs, and coating specifications.
        </li>
      </ul>
  
      <p className="note">
        Optimize your painting process with accurate material estimation, reducing 
        waste and ensuring high-quality coating for pressure vessels.
      </p>
    </div>
  );
  
  }