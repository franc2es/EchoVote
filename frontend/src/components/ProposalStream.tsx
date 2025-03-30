import React from 'react';
import '../styles/ProposalStream.css';
import EchoVote from './EchoVote';

interface ProposalItemProps {
  title: string;
  tag: string;
  content: string;
  hasValueVec: boolean;
  decisionType?: 'FOR' | 'AGAINST' | 'ABSTAIN';
}

interface ProposalStreamProps {
  value_vec: number[];
  onOpenQuestionnaire: () => void;
}

const AssessmentPrompt: React.FC<{ 
  hasValueVec: boolean; 
  decisionType?: 'FOR' | 'AGAINST' | 'ABSTAIN';
  onOpenQuestionnaire: () => void;
}> = ({ hasValueVec, decisionType = 'FOR', onOpenQuestionnaire }) => {
  if (hasValueVec) {
    return (
      <div className={`proposal-decision ${decisionType.toLowerCase()}`}>
        <div className="decision-container">
          <span className="proposal-decision-label">EchoVote Decision: </span>
          <span className={`proposal-decision-value ${decisionType.toLowerCase()}`}>{decisionType}</span>
        </div>
      </div>
    );
  }

  return (
    <button 
      className="assessment-prompt"
      onClick={onOpenQuestionnaire}
    >
      <span>complete Values Test to have your AI voter</span>
      <span className="prompt-icon">📑</span>
    </button>
  );
};

const ProposalItem: React.FC<ProposalItemProps & { onOpenQuestionnaire: () => void }> = ({ 
  title, 
  tag, 
  content, 
  hasValueVec, 
  decisionType,
  onOpenQuestionnaire 
}) => (
  <div className="proposal-item">
    <div className="proposal-title">
      {title}
      <span className="proposal-tag">{tag}</span>
    </div>
    <div className="proposal-content">
      {content}
    </div>
    <AssessmentPrompt 
      hasValueVec={hasValueVec} 
      decisionType={decisionType} 
      onOpenQuestionnaire={onOpenQuestionnaire}
    />
  </div>
);

const ProposalStream: React.FC<ProposalStreamProps> = ({ value_vec, onOpenQuestionnaire }) => {
  const proposals = [
    {
      title: "Proposal 1",
      tag: "AAVE",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text long text",
      decisionType: 'FOR' as const
    },
    {
      title: "Proposal 2",
      tag: "ECHO",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      decisionType: 'AGAINST' as const
    },
    {
      title: "Proposal 3",
      tag: "Pending",
      content: "Ut enim ad minim veniam, quis nostrud exercitation.",
      decisionType: 'ABSTAIN' as const
    }
  ];

  const hasValueVec = value_vec.length > 0;

  return (
    <div className="proposal-container">
      <div className="proposal-stream">
        <div className="proposal-header">
          <h2 className="fancy-title">Proposal Stream</h2>
        </div>
        <div className="proposal-list">
          {proposals.map((proposal, index) => (
            <ProposalItem
              key={index}
              title={proposal.title}
              tag={proposal.tag}
              content={proposal.content}
              hasValueVec={hasValueVec}
              decisionType={proposal.decisionType}
              onOpenQuestionnaire={onOpenQuestionnaire}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProposalStream; 