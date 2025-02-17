export function WeldingElectrodeCalculator() {
  return (
    <div className="content-card">
      <h2 className="title">Welding Electrode Calculator</h2>
      <p className="description">
        The Welding Electrode Calculator is a powerful tool designed for welders, 
        engineers, and project managers to accurately estimate the quantity of 
        welding electrodes required for pressure vessel fabrication. By considering 
        factors such as weld length, electrode size, welding process, and efficiency 
        rates, this tool helps optimize material usage, reduce waste, and improve 
        cost estimation.
      </p>
  
      <h3 className="sub-title">Key Features:</h3>
      <ul className="feature-list">
        <li>
          <span className="medium">Weld Length-Based Calculation:</span> Estimates 
          the number of electrodes required based on the total length of welds.
        </li>
        <li>
          <span className="medium">Electrode Diameter & Type Selection:</span> 
          Supports different electrode sizes (e.g., 2.5mm, 3.2mm, 4.0mm) and 
          electrode types (e.g., E6010, E7018, stainless steel, Inconel).
        </li>
        <li>
          <span className="medium">Welding Process Consideration:</span> Adjusts 
          calculations for SMAW (Stick Welding), GTAW (TIG), GMAW (MIG), and SAW 
          (Submerged Arc Welding).
        </li>
        <li>
          <span className="medium">Deposition Efficiency Factor:</span> Accounts for 
          electrode melting efficiency, reducing overestimation or underestimation 
          of material requirements.
        </li>
        <li>
          <span className="medium">Electrode Burn Rate Calculation:</span> Determines 
          the electrode consumption rate per unit weld length.
        </li>
        <li>
          <span className="medium">Wastage & Overhead Considerations:</span> Includes 
          allowances for stub loss, improper welding, and rework factors.
        </li>
        <li>
          <span className="medium">Cost Estimation:</span> Provides a breakdown of 
          the total electrode cost based on market rates and project scope.
        </li>
        <li>
          <span className="medium">Real-Time Adjustments:</span> Allows users to 
          update parameters and recalculate based on different welding conditions.
        </li>
        <li>
          <span className="medium">Industry Standards Compliance:</span> Aligns with 
          ASME, AWS, and ISO welding standards for accurate planning.
        </li>
        <li>
          <span className="medium">Report Generation:</span> Exports a detailed 
          summary of electrode requirements, costs, and efficiency recommendations.
        </li>
      </ul>
  
      <p className="note">
        Optimize your welding project with precise electrode estimation, reducing 
        material waste and improving efficiency in pressure vessel fabrication.
      </p>
    </div>
  );
  
  }