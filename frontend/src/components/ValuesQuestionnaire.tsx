import React, { useState } from 'react';
import '../styles/ValuesQuestionnaire.css';

interface ValuesQuestionnaireProps {
  onClose: () => void;
}

const ValuesQuestionnaire: React.FC<ValuesQuestionnaireProps> = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 400); // Match the longest animation duration
  };

  return (
    <div className={`questionnaire-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`questionnaire-modal ${isClosing ? 'closing' : ''}`}>
        <div className="questionnaire-header">
          <h2 className="fancy-title">Values Test</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="questionnaire-content">
          <p>Please answer the following questions to help us understand your values and preferences.</p>
          {/* Add your questionnaire questions here */}
        </div>
      </div>
    </div>
  );
};

export default ValuesQuestionnaire; 