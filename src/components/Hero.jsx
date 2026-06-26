import React from 'react';
import './Hero.css';

const ChatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a3fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__card">
        {/* Left: copy */}
        <div className="hero__left">
          <p className="hero__eyebrow">Civic Engagement Platform</p>
          <h1 className="hero__headline">Your Voice<br />Matters.</h1>
          <p className="hero__body">
            Empowering Bangladeshi citizens to actively participate in shaping their communities.
            Submit feedback, join discussions, and drive progress through transparent civic dialogue.
          </p>
          <div className="hero__buttons">
            <button className="hero__btn-primary">
              Submit Feedback
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button className="hero__btn-outline">Explore Discussions</button>
          </div>
        </div>

        {/* Right: floating cards */}
        <div className="hero__right">
          {/* Feedback count card */}
          <div className="hero__metric-card hero__metric-card--top">
            <span className="hero__metric-number">50k+</span>
            <span className="hero__metric-label">FEEDBACK RECEIVED</span>
          </div>

          {/* Active debates card */}
          <div className="hero__feature-card hero__feature-card--debates">
            <div className="hero__feature-icon">
              <ChatIcon />
            </div>
            <div>
              <p className="hero__feature-title">Active Debates</p>
              <p className="hero__feature-sub">Join ongoing civic conversations</p>
            </div>
          </div>

          {/* Verified action card */}
          <div className="hero__feature-card hero__feature-card--verified">
            <CheckCircleIcon />
            <span className="hero__feature-title">Verified Action</span>
          </div>
        </div>
      </div>
    </section>
  );
}
