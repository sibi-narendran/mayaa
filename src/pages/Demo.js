import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Demo.css';
import { motion } from 'framer-motion';

function AIEmployeeForm() {
  const [role, setRole] = useState('');
  const [tone, setTone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [productDetails, setProductDetails] = useState('');
  const [customRole, setCustomRole] = useState('');
  const [customTone, setCustomTone] = useState('');

  const navigate = useNavigate(); // Initialize navigate

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to store in localStorage
    const roleToUse = role === 'other' ? customRole : role;
    const toneToUse = tone === 'other' ? customTone : tone;
    const formData = {
      role: roleToUse,
      tone: toneToUse,
      companyName,
      industry,
      targetAudience,
      productDetails,
    };

    // Store the form data in localStorage
    localStorage.setItem('aiEmployeeFormData', JSON.stringify(formData));

    // Redirect to the console page after form submission
    navigate('/console');
      // Reload the redirected page
  window.location.reload();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="ai-employee-form-section"
    >
      <h2 className="section-heading">Create and Test Your AI Now</h2>
      <form onSubmit={handleFormSubmit} className="ai-employee-form">
        <div className="form-group">
          <div className="input-container">
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="" disabled>Select a role</option>
              <option value="sell">To Sell </option>
              <option value="appointments">Book and manage appointments</option>
              <option value="info">Provide information or remind</option>
              <option value="other">Something else (Please describe)</option>
            </select>
            <label htmlFor="role" className="input-label">1. The AI's role is to:</label>
          </div>
          {role === 'other' && (
            <div className="input-container dynamic-input-container">
              <input
                type="text"
                id="customRole"
                placeholder="Please describe the role"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
                maxLength={100}
                required
              />
              <label htmlFor="customRole" className="input-label">1a. Custom Role</label>
            </div>
          )}
        </div>

        <div className="form-group">
          <div className="input-container">
            <select id="tone" value={tone} onChange={(e) => setTone(e.target.value)} required>
              <option value="" disabled>Select a tone</option>
              <option value="friendly">Friendly </option>
              <option value="professional">Professional</option>
              <option value="other">Other (Please describe)</option>
            </select>
            <label htmlFor="tone" className="input-label">2. Tone of your AI: </label>
          </div>
          {tone === 'other' && (
            <div className="input-container dynamic-input-container">
              <input
                type="text"
                id="customTone"
                placeholder="Please describe the tone"
                value={customTone}
                onChange={(e) => setCustomTone(e.target.value)}
                maxLength={100}
                required
              />
              <label htmlFor="customTone" className="input-label">2a. Custom Tone</label>
            </div>
          )}
        </div>

        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              maxLength={50}
              required
            />
            <label htmlFor="companyName" className="input-label">3. Company Name</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="industry"
              placeholder="Industry/Field"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              maxLength={50}
              required
            />
            <label htmlFor="industry" className="input-label">4. Industry/Field</label>
          </div>
          <div className="input-container">
            <input
              type="text"
              id="targetAudience"
              placeholder="Target audience"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              maxLength={100}
              required
            />
            <label htmlFor="targetAudience" className="input-label">5. who the AI have to speak with?</label>
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            <textarea
              id="productDetails"
              placeholder="Describe the product or service, key features, and any special instructions including language preferences"
              value={productDetails}
              onChange={(e) => setProductDetails(e.target.value)}
              maxLength={500}
              required
            />
            <label htmlFor="productDetails" className="input-label">6. What information the AI need to know?</label>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className="test-now-button"
        >
          Test Now
        </motion.button>
      </form>
    </motion.section>
  );
}

export default AIEmployeeForm;
