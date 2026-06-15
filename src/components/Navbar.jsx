import React, { useState, useEffect } from 'react';
import { examsData } from '../data/examsData';

export default function Navbar({ currentView, navigate, notifications, clearUnreadNotifications }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('qbank', { search: searchQuery });
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="card-glass" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderBottom: '1px solid var(--border-color)',
      padding: '12px 0',
      marginBottom: '24px'
    }}>
      <div className="container flex items-center justify-between" style={{ position: 'relative' }}>
        {/* Brand Logo */}
        <div 
          onClick={() => navigate('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
        >
          <svg style={{ width: '28px', height: '28px', fill: 'var(--secondary)' }} viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 3.99L18.8 19H5.2L12 5.99z"/>
            <path d="M11 11h2v4h-2zm0 5h2v2h-2z" />
          </svg>
          <span style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 800, 
            fontSize: '1.4rem', 
            color: 'var(--primary)',
            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            ExamVault 2026
          </span>
        </div>

        {/* Desktop Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center" style={{ 
          position: 'relative', 
          maxWidth: '300px', 
          width: '100%',
          display: 'none' // will show on larger desktops
        }}>
          <input 
            type="text"
            className="input"
            placeholder="Search questions, topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingRight: '40px', paddingLeft: '14px', height: '38px', fontSize: '0.875rem' }}
          />
          <button type="submit" style={{
            position: 'absolute',
            right: '12px',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>
            <svg style={{ width: '18px', height: '18px', fill: 'var(--text-muted)' }} viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </form>

        {/* Desktop Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* View Selection Buttons */}
          <div className="desktop-links" style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => navigate('home')} 
              className={`btn btn-sm ${currentView.page === 'home' ? 'btn-primary' : 'btn-outline'}`}
            >
              Home
            </button>
            
            {/* Quick Exam Hub Dropdown */}
            <div style={{ position: 'relative' }} className="exam-dropdown-container">
              <select 
                value={currentView.page === 'exam' ? currentView.examId : ''}
                onChange={(e) => {
                  if (e.target.value) navigate('exam', { examId: e.target.value });
                }}
                className="input"
                style={{ 
                  height: '34px', 
                  padding: '0 24px 0 8px', 
                  fontSize: '0.85rem', 
                  width: '130px', 
                  borderColor: currentView.page === 'exam' ? 'var(--secondary)' : 'var(--border-color)',
                  backgroundColor: 'transparent',
                  fontWeight: currentView.page === 'exam' ? '600' : '400',
                  color: 'inherit'
                }}
              >
                <option value="">Choose Exam...</option>
                {Object.values(examsData).map(exam => (
                  <option key={exam.id} value={exam.id}>{exam.name}</option>
                ))}
              </select>
            </div>

            <button 
              onClick={() => navigate('qbank')} 
              className={`btn btn-sm ${currentView.page === 'qbank' ? 'btn-primary' : 'btn-outline'}`}
            >
              Question Bank
            </button>

            <button 
              onClick={() => navigate('wiki')} 
              className={`btn btn-sm ${currentView.page === 'wiki' ? 'btn-primary' : 'btn-outline'}`}
            >
              Study Wiki
            </button>

            <button 
              onClick={() => navigate('mock')} 
              className={`btn btn-sm ${currentView.page === 'mock' ? 'btn-primary' : 'btn-outline'}`}
            >
              Mock Tests
            </button>

            <button 
              onClick={() => navigate('alerts')} 
              className={`btn btn-sm ${currentView.page === 'alerts' ? 'btn-primary' : 'btn-outline'}`}
            >
              Latest Alerts
            </button>

            <button 
              onClick={() => navigate('dashboard')} 
              className={`btn btn-sm ${currentView.page === 'dashboard' ? 'btn-primary' : 'btn-outline'}`}
            >
              My Dashboard
            </button>

            <button 
              onClick={() => navigate('admin')} 
              className={`btn btn-sm ${currentView.page === 'admin' ? 'btn-primary' : 'btn-outline'}`}
              style={{ borderStyle: 'dashed', borderColor: 'var(--secondary)' }}
            >
              Admin Panel
            </button>
          </div>

          {/* Icons Bar: Notifications & Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Notifications Dropdown Trigger */}
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  if (!showNotifications && unreadCount > 0) {
                    clearUnreadNotifications();
                  }
                }} 
                className="btn btn-outline" 
                style={{ padding: '8px', borderRadius: '50%', width: '38px', height: '38px', position: 'relative' }}
              >
                <svg style={{ width: '20px', height: '20px', fill: 'var(--text-main)' }} viewBox="0 0 24 24">
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                </svg>
                {unreadCount > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-2px',
                    right: '-2px',
                    backgroundColor: 'var(--error)',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--bg-card)'
                  }}>
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown Panel */}
              {showNotifications && (
                <div className="card shadow-lg card-glass" style={{
                  position: 'absolute',
                  right: 0,
                  top: '46px',
                  width: '320px',
                  maxHeight: '400px',
                  overflowY: 'auto',
                  zIndex: 200,
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  animation: 'fadeIn 0.2s ease-out'
                }}>
                  <div className="flex items-center justify-between" style={{ marginBottom: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Recent Notifications</span>
                    <button 
                      onClick={() => setShowNotifications(false)} 
                      style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', color: 'var(--secondary)' }}
                    >
                      Close
                    </button>
                  </div>
                  {notifications.length === 0 ? (
                    <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '12px 0' }}>No announcements</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {notifications.map((notif, idx) => (
                        <div key={idx} style={{
                          padding: '8px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: notif.type === 'Result Out' ? 'var(--success-bg)' : notif.type === 'New' ? 'var(--warning-bg)' : 'rgba(0,0,0,0.02)',
                          borderLeft: `3px solid ${notif.type === 'Result Out' ? 'var(--success)' : notif.type === 'New' ? 'var(--warning)' : 'var(--primary)'}`
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
                            <span className="badge badge-primary" style={{ fontSize: '0.55rem', padding: '2px 6px' }}>{notif.type}</span>
                            <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{notif.date || 'Recent'}</span>
                          </div>
                          <p style={{ fontSize: '0.8rem', fontWeight: '500', marginTop: '4px', color: 'var(--text-main)' }}>{notif.title}</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{notif.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Dark / Light Toggle */}
            <button 
              onClick={toggleTheme} 
              className="btn btn-outline" 
              style={{ padding: '8px', borderRadius: '50%', width: '38px', height: '38px' }}
            >
              {theme === 'light' ? (
                <svg style={{ width: '20px', height: '20px', fill: 'var(--text-main)' }} viewBox="0 0 24 24">
                  <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.52 6H18v3.52L20.48 12 18 14.48zM12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
              ) : (
                <svg style={{ width: '20px', height: '20px', fill: '#f5a623' }} viewBox="0 0 24 24">
                  <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM4 10.5H1v2h3v-2zm9-8h-2v3h2v-3zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.75l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM20 10.5h3v2h-3v-2zm-8-7c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-4.76.04l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42zM11 20h2v3h-2v-3z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
