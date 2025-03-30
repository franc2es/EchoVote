import React from 'react';
import '../styles/ProposalStream.css';
import EchoVote from './EchoVote';

interface ProposalStreamProps {
  // Add any props if needed in the future
}

const ProposalStream: React.FC<ProposalStreamProps> = () => {
  return (
    <div className="proposal-container">
      <div className="proposal-stream">
        <div className="proposal-header">
          <h2 className="fancy-title">Proposal Stream</h2>
        </div>
        <div className="proposal-list">
          <div className="proposal-item">
            <div className="proposal-title">
              Proposal 1
              <span className="proposal-tag">AAVE</span>
            </div>
            <div className="proposal-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="proposal-decision for">
              <span className="proposal-decision-label">EchoVote Decision:</span>
              <span className="proposal-decision-value for">FOR</span>
            </div>
          </div>

          <div className="proposal-item">
            <div className="proposal-title">
              Proposal 2
              <span className="proposal-tag">ECHO</span>
            </div>
            <div className="proposal-content">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="proposal-decision against">
              <span className="proposal-decision-label">EchoVote Decision:</span>
              <span className="proposal-decision-value against">AGAINST</span>
            </div>
          </div>

          <div className="proposal-item">
            <div className="proposal-title">
              Proposal 3
              <span className="proposal-tag">Pending</span>
            </div>
            <div className="proposal-content">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </div>
            <div className="proposal-decision abstain">
              <span className="proposal-decision-label">EchoVote Decision:</span>
              <span className="proposal-decision-value abstain">ABSTAIN</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ProposalStream; 