import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const inputFields = [
  { label: "Type", key: "type", type: "text", required: true },
  { label: "Asset Name", key: "assetName", type: "text", required: true },
  { label: "Asset ID", key: "assetId", type: "text", required: true },
  { label: "Asset Status", key: "assetStatus", type: "text", required: true },
  { label: "Description", key: "description", type: "textarea", required: true },
  { label: "Category", key: "category", type: "select", options: [1, 2, 3, 4] },
  { label: "Serial Number", key: "serialNumber", type: "number" },
  { label: "Manufacturer", key: "manufacturer", type: "text" },
  { label: "Company", key: "company", type: "text" },
  { label: "Impact", key: "impact", type: "select", options: ["Low", "Medium", "High"] },
  { label: "System Role", key: "systemRole", type: "text" },
  { label: "Urgency", key: "urgency", type: "select", options: ["Low", "Medium", "High"] },
  { label: "Region", key: "region", type: "text" },
];

const AssetForm = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };
  const onSubmitForm = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data Submitted:", formData);
    
    // Here you can send formData to an API or handle it as needed
  };
  
  const navigate = useNavigate()

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h3 className="text-center mb-4">Create New Asset</h3>
        <form onSubmit={onSubmitForm}>
          <div className="row">
            {inputFields.map((field, index) => (
              <div key={index} className={`col-md-${field.type === "textarea" ? "12" : "6"} mb-3`}>
                <label className="form-label">
                  {field.label} {field.required && <span className="text-danger">(Required)</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    required={field.required}
                    value={formData[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                ) : field.type === "select" ? (
                  <select
                    className="form-select"
                    value={formData[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  >
                    <option value="">Select {field.label.toLowerCase()}</option>
                    {field.options.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    className="form-control"
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    required={field.required}
                    value={formData[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-end mt-3">
            <button type="button" onClick={()=>{navigate('/home')}} className="btn btn-secondary me-2">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssetForm;
