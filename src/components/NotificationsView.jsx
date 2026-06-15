import React, { useState } from 'react';
import { examsData } from '../data/examsData';

export default function NotificationsView({ notifications, clearNotifications }) {
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNotif, setSelectedNotif] = useState(null);

  const filtered = notifications.filter(n => {
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          n.text.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filterType === 'All') return matchesSearch;
    if (filterType === 'Vacancy') return matchesSearch && (n.type === 'New' || n.title.toLowerCase().includes('vacancy') || n.title.toLowerCase().includes('notification'));
    if (filterType === 'Admit Card') return matchesSearch && (n.type === 'Admit Card' || n.title.toLowerCase().includes('admit') || n.title.toLowerCase().includes('hall ticket'));
    if (filterType === 'Result') return matchesSearch && (n.type === 'Result Out' || n.title.toLowerCase().includes('result') || n.title.toLowerCase().includes('cut-off'));
    return matchesSearch;
  });

  return (
    <div className="container animated-fadeIn" style={{ marginBottom: '40px' }}>
      
      {/* Page Header */}
      <div className="card shadow-sm" style={{ padding: '24px', marginBottom: '24px' }}>
        <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="badge badge-primary" style={{ marginBottom: '6px' }}>Real-time Broadcaster</span>
            <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)' }}>🔔 Latest Exam Notifications & Alerts</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Track official announcements, vacancy notices, admit cards, and results for government exams in 2026.
            </p>
          </div>
          <button 
            onClick={() => {
              clearNotifications();
              alert('All alerts marked as read.');
            }}
            className="btn btn-outline btn-sm"
          >
            Mark All as Read
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="card shadow-sm" style={{ padding: '16px', marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '16px' }} className="grid-responsive">
          <input 
            type="text" 
            placeholder="Search announcements (e.g. SSC, Admit Card, Results)..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input"
          />

          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)} 
            className="input"
            style={{ padding: '10px' }}
          >
            <option value="All">All Categories</option>
            <option value="Vacancy">New Vacancies</option>
            <option value="Admit Card">Admit Cards</option>
            <option value="Result">Results & Cut-offs</option>
          </select>
        </div>
      </div>

      {/* Grid: Notifications List & Detailed View */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '32px' }} className="grid-responsive">
        
        {/* Left: Filtered Notifications list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {filtered.length === 0 ? (
            <div className="card text-center" style={{ padding: '40px' }}>
              <h3>No alerts matching filters.</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Check back later or search another term.</p>
            </div>
          ) : (
            filtered.map((notif, idx) => {
              const isSelected = selectedNotif?.title === notif.title;
              return (
                <div 
                  key={idx} 
                  onClick={() => setSelectedNotif(notif)}
                  className="card"
                  style={{ 
                    cursor: 'pointer',
                    borderLeft: `5px solid ${notif.type === 'Result Out' ? 'var(--success)' : notif.type === 'New' ? 'var(--secondary)' : 'var(--primary)'}`,
                    backgroundColor: isSelected ? 'var(--bg-main)' : 'var(--bg-card)',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
                    <span className={`badge ${
                      notif.type === 'Result Out' ? 'badge-easy' : notif.type === 'New' ? 'badge-medium' : 'badge-primary'
                    }`} style={{ fontSize: '0.6rem' }}>
                      {notif.type === 'Result Out' ? 'Result' : notif.type === 'New' ? 'Vacancy' : notif.type}
                    </span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{notif.date}</span>
                  </div>

                  <h3 style={{ fontSize: '1rem', color: 'var(--primary)', marginBottom: '8px' }}>{notif.title}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {notif.text}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Right: Detailed notification viewer details */}
        <div>
          {selectedNotif ? (
            <div className="card shadow-md card-glass" style={{ position: 'sticky', top: '90px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '16px' }}>
                <span className="badge badge-primary">{selectedNotif.type}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{selectedNotif.date}</span>
              </div>

              <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '12px' }}>{selectedNotif.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', marginBottom: '24px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                {selectedNotif.text}
              </p>

              {/* Mock official buttons actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a 
                  href="https://ssc.gov.in" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary btn-sm"
                  style={{ display: 'block', textDecoration: 'none' }}
                >
                  🌐 Visit Official Portal
                </a>
                <button 
                  onClick={() => alert('Announcements PDF guide downloaded in background.')} 
                  className="btn btn-outline btn-sm"
                >
                  📄 Download Official Notification PDF
                </button>
              </div>

              {/* Important note */}
              <div style={{
                marginTop: '20px',
                padding: '10px',
                backgroundColor: 'rgba(0,0,0,0.02)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                borderLeft: '2px solid var(--secondary)'
              }}>
                <strong>Pro-Tip:</strong> Set up priority alerts in the User Dashboard to receive email/SMS notifications immediately on release.
              </div>
            </div>
          ) : (
            <div className="card text-center" style={{ color: 'var(--text-muted)', padding: '40px 20px', borderStyle: 'dashed' }}>
              <span style={{ fontSize: '2rem' }}>👉</span>
              <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>Select any notification card from the left to read full details and download attachments.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
