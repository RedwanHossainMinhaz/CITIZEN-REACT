import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const UsersIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const BuildingIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a3fd4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

function useCountUp(target, duration = 1600, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatCard({ icon, label, value, rawValue, badge, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(rawValue, 1600, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Format the count with commas
  const formatted = count.toLocaleString();

  return (
    <div className="stat-card" ref={ref} style={{ animationDelay: `${delay}ms` }}>
      <div className="stat-card__header">
        <div className="stat-card__icon">{icon}</div>
        <span className="stat-card__label">{label}</span>
      </div>
      <div className="stat-card__value">
        {formatted}{value.includes('+') ? '+' : ''}
      </div>
      <div className="stat-card__badge">
        <TrendUpIcon />
        <span>{badge}</span>
      </div>
    </div>
  );
}

const statsData = [
  {
    icon: <UsersIcon />,
    label: 'Registered Citizens',
    value: '124,000',
    rawValue: 124000,
    badge: '↑12% this month',
    delay: 0,
  },
  {
    icon: <CheckIcon />,
    label: 'Issues Resolved',
    value: '8,452',
    rawValue: 8452,
    badge: '↑5% this month',
    delay: 80,
  },
  {
    icon: <BuildingIcon />,
    label: 'Partner Agencies',
    value: '45',
    rawValue: 45,
    badge: 'Across 8 divisions',
    delay: 160,
  },
];

export default function Stats() {
  return (
    <section className="stats">
      {statsData.map((s, i) => (
        <StatCard key={s.label} {...s} />
      ))}
    </section>
  );
}
