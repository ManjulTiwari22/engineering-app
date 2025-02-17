import React from "react";

export function PVCostEstimation() {
  return (
    <div className="content-card">
      <h2 className="title">Budgetary Pressure Vessel Cost Calculator</h2>
      <p className="description">
        The Budgetary Pressure Vessel Cost Calculator is an essential tool for 
        engineers, manufacturers, and project managers to estimate the cost of 
        fabricating a pressure vessel. It considers material selection, vessel 
        dimensions, labor, welding, inspection, and other associated costs, 
        helping users plan budgets effectively and optimize resources.
      </p>
  
      <h3 className="sub-title">Key Features:</h3>
      <ul className="feature-list">
        <li>
          <span className="medium">Material Cost Estimation:</span> Calculates the 
          cost of raw materials based on vessel type, thickness, and market rates.
        </li>
        <li>
          <span className="medium">Fabrication & Welding Costs:</span> Estimates 
          labor and welding expenses depending on design complexity and weld length.
        </li>
        <li>
          <span className="medium">Design & Engineering Fees:</span> Accounts for 
          design, drafting, and engineering consultation costs.
        </li>
        <li>
          <span className="medium">Surface Treatment & Coating Costs:</span> Includes 
          options for painting, galvanizing, and other surface treatments.
        </li>
        <li>
          <span className="medium">Inspection & Testing Costs:</span> Calculates 
          expenses for NDT (Non-Destructive Testing), hydrostatic testing, and 
          regulatory inspections.
        </li>
        <li>
          <span className="medium">Shipping & Logistics:</span> Estimates costs 
          for transportation based on vessel size, weight, and destination.
        </li>
        <li>
          <span className="medium">Customization & Additional Components:</span> 
          Factors in additional costs for nozzles, flanges, manways, and special 
          coatings or linings.
        </li>
        <li>
          <span className="medium">Cost Optimization Suggestions:</span> Provides 
          insights on material alternatives and design optimizations to reduce 
          overall costs.
        </li>
        <li>
          <span className="medium">Real-Time Market Adjustments:</span> Allows users 
          to input current market rates for more accurate estimates.
        </li>
        <li>
          <span className="medium">Report Generation & Export:</span> Generates 
          detailed cost breakdowns and comparison reports in PDF or Excel format.
        </li>
      </ul>
  
      <p className="note">
        Plan your pressure vessel project with confidence using accurate cost 
        estimation, minimizing budget overruns and optimizing resource allocation.
      </p>
    </div>
  );
  
}

export default PVCostEstimation;
