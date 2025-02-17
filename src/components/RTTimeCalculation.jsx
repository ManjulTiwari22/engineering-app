import React from "react";

export function RTTimeCalculation() {
    return (
        <div className="content-card">
          <h2 className="title">Radiographic Testing Time Estimator</h2>
          <p className="description">
            The Radiographic Testing (RT) Time Estimator is a valuable tool designed 
            to help engineers, quality control inspectors, and project managers 
            estimate the time required for radiographic testing in pressure vessels. 
            By considering factors such as weld length, material thickness, exposure 
            time, and film development, this tool helps streamline planning, minimize 
            downtime, and ensure compliance with industry standards.
          </p>
      
          <h3 className="sub-title">Key Features:</h3>
          <ul className="feature-list">
            <li>
              <span className="medium">Weld Length-Based Time Estimation:</span> 
              Calculates the total RT time based on the length and number of weld seams.
            </li>
            <li>
              <span className="medium">Material Thickness Consideration:</span> 
              Adjusts exposure time according to the thickness of the pressure vessel material.
            </li>
            <li>
              <span className="medium">Source Type & Energy Level Input:</span> 
              Supports different radiographic sources (X-ray, gamma-ray) and their 
              respective exposure times.
            </li>
            <li>
              <span className="medium">Film Development & Processing Time:</span> 
              Includes the time required for film exposure, processing, and evaluation.
            </li>
            <li>
              <span className="medium">Multi-Shot & Single-Shot Estimation:</span> 
              Provides accurate results for both single and multiple exposure methods.
            </li>
            <li>
              <span className="medium">Automatic Safety Zone Calculation:</span> 
              Determines the necessary exclusion zone based on radiation intensity.
            </li>
            <li>
              <span className="medium">Environmental & Safety Factors:</span> 
              Considers external factors such as weather conditions and safety regulations 
              that may affect testing time.
            </li>
            <li>
              <span className="medium">Real-Time Adjustments:</span> 
              Allows users to modify parameters such as film type, focal distance, 
              and shielding conditions for precise estimation.
            </li>
            <li>
              <span className="medium">Industry Compliance:</span> 
              Aligns with ASME, API, and ISO standards for radiographic testing of pressure vessels.
            </li>
            <li>
              <span className="medium">Detailed Report Generation:</span> 
              Generates a comprehensive report with estimated testing duration, safety 
              measures, and recommended optimizations.
            </li>
          </ul>
      
          <p className="note">
            Optimize your radiographic testing schedule with precise time estimation, 
            ensuring efficient quality control and regulatory compliance.
          </p>
        </div>
      );
      
}

export default RTTimeCalculation;
