// BMICalculator.js
import React, { useState } from 'react';
import './BMIstyle.css';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState('');

  const handleHeightChange = (e) => {
    const inputValue = e.target.value;
    if (!/^\d*\.?\d*$/.test(inputValue)) {
      alert('Please enter a valid numerical value for height.');
      return;
    }
    setHeight(inputValue);
  };

  const handleWeightChange = (e) => {
    const inputValue = e.target.value;
    if (!/^\d*\.?\d*$/.test(inputValue)) {
      alert('Please enter a valid numerical value for weight.');
      return;
    }
    setWeight(inputValue);
  };

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (!isNaN(heightInMeters) && !isNaN(weightInKg) && heightInMeters > 0 && weightInKg > 0) {
      const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
      setBMI(calculatedBMI.toFixed(2));

      if (calculatedBMI < 18.5) {
        setMessage('Underweight');
      } else if (calculatedBMI >= 18.5 && calculatedBMI < 25) {
        setMessage('Normal Weight');
      } else if (calculatedBMI >= 25 && calculatedBMI < 30) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    } else {
      alert('Please enter valid height and weight.');
    }
  };

  return (
    <div className="bmi-container">
      <h1>BMI Calculator</h1>
      <div className="input">
        Height (cm): <input type="text" value={height} onChange={handleHeightChange} placeholder="Enter Height" />
      </div>
      <div className="input">
        Weight (kg): <input type="text" value={weight} onChange={handleWeightChange} placeholder="Enter Weight" />
      </div>
      <div className="input">
        <button onClick={calculateBMI}>Calculate BMI</button>
      </div>

      {bmi && (
        <div id="results">
          <br />
          <h2>Results</h2>
          <div className="result">
            BMI: <span>{bmi}</span>
          </div>
          <div className="result">
            Category: <span>{message}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
