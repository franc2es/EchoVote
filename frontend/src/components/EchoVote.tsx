import React, { useState } from 'react';
import '../styles/EchoVote.css';

interface EchoVoteProps {
  value_vec: number[];
  onOpenQuestionnaire: () => void;
}

const EchoVote: React.FC<EchoVoteProps> = ({ value_vec, onOpenQuestionnaire }) => {
  const [activeEchoTab, setActiveEchoTab] = useState('YourEcho');
  const hasValueVec = value_vec.length > 0;

  return (
    <div className="echo-vote">
      <div className="echo-vote-header">
        <div className="echo-vote-title">
          <h2 className="fancy-title">EchoVote</h2>
        </div>
        <div className="echo-vote-tabs">
          <div 
            className={`echo-vote-tab ${activeEchoTab === 'YourEcho' ? 'active' : ''}`}
            onClick={() => setActiveEchoTab('YourEcho')}
          >
            YourEcho
          </div>
          <div 
            className={`echo-vote-tab ${activeEchoTab === 'AI Prototypes' ? 'active' : ''}`}
            onClick={() => setActiveEchoTab('AI Prototypes')}
          >
            Prototypes
          </div>
        </div>
      </div>
      <div className="echo-vote-content">
        {activeEchoTab === 'YourEcho' ? (
          !hasValueVec ? (
            <div className="values-test-prompt">
              <p>Complete Values Test to discover your AI voter profile</p>
              <button 
                className="values-test-button"
                onClick={onOpenQuestionnaire}
              >
                Take Values Test
              </button>
            </div>
          ) : (
            <div className="your-echo-content">
              <div className="echo-stat-item">
                <div className="echo-stat-label">
                  <span>Geek</span>
                  <span>86%</span>
                </div>
                <div className="echo-stat-bar-container">
                  <div className="echo-stat-bar" data-percentage="86"></div>
                </div>
              </div>

              <div className="echo-stat-item">
                <div className="echo-stat-label">
                  <span>Decentralization Believer</span>
                  <span>74%</span>
                </div>
                <div className="echo-stat-bar-container">
                  <div className="echo-stat-bar" data-percentage="74"></div>
                </div>
              </div>

              <div className="echo-stat-item">
                <div className="echo-stat-label">
                  <span>Conservative</span>
                  <span>58%</span>
                </div>
                <div className="echo-stat-bar-container">
                  <div className="echo-stat-bar" data-percentage="58"></div>
                </div>
              </div>

              <div className="echo-stat-item">
                <div className="echo-stat-label">
                  <span>Trader</span>
                  <span>11%</span>
                </div>
                <div className="echo-stat-bar-container">
                  <div className="echo-stat-bar" data-percentage="11"></div>
                </div>
              </div>

              <div className="echo-stat-item">
                <div className="echo-stat-label">
                  <span>Radical</span>
                  <span>3%</span>
                </div>
                <div className="echo-stat-bar-container">
                  <div className="echo-stat-bar" data-percentage="3"></div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="ai-prototypes-content">
            {/* AI Prototypes content */}
          </div>
        )}
      </div>
    </div>
  );
};

export default EchoVote; 