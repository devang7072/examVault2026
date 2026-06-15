import React, { useState } from 'react';
import { examsData } from '../data/examsData';

export default function AdminView({ addNotification, addCustomQuestion }) {
  // Notification Form State
  const [notifType, setNotifType] = useState('New');
  const [notifTitle, setNotifTitle] = useState('');
  const [notifText, setNotifText] = useState('');

  // Question Form State
  const [qExam, setQExam] = useState('ssc-cgl');
  const [qSection, setQSection] = useState('Reasoning');
  const [qTopic, setQTopic] = useState('');
  const [qDiff, setQDiff] = useState('Medium');
  const [qText, setQText] = useState('');
  const [qOptions, setQOptions] = useState(['', '', '', '']);
  const [qCorrect, setQCorrect] = useState(0);
  const [qExplain, setQExplain] = useState('');
  const [qShortcut, setQShortcut] = useState('');

  const [activeTab, setActiveTab] = useState('question'); // 'question' | 'notification' | 'metrics'

  const handlePublishNotification = (e) => {
    e.preventDefault();
    if (!notifTitle.trim() || !notifText.trim()) {
      alert('Please fill out all fields');
      return;
    }
    
    addNotification({
      type: notifType,
      title: notifTitle,
      text: notifText,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      read: false
    });

    setNotifTitle('');
    setNotifText('');
    alert('Announcement published successfully! Broadcasted to Home page banner and navbar.');
  };

  const handleOptionChange = (idx, val) => {
    const updated = [...qOptions];
    updated[idx] = val;
    setQOptions(updated);
  };

  const handleCreateQuestion = (e) => {
    e.preventDefault();
    if (!qText.trim() || !qTopic.trim() || qOptions.some(o => !o.trim()) || !qExplain.trim()) {
      alert('Please fill out all fields including all 4 options');
      return;
    }

    const newQ = {
      id: `custom-q-${Date.now()}`,
      exams: [qExam],
      section: qSection,
      topic: qTopic,
      difficulty: qDiff,
      questionType: "MCQ",
      questionText: qText,
      options: [...qOptions],
      correctOption: parseInt(qCorrect),
      explanation: qExplain,
      shortcut: qShortcut,
      timesAsked: 0,
      tags: [qTopic.toLowerCase().replace(/\s+/g, '-')]
    };

    addCustomQuestion(newQ);

    // Reset Form
    setQTopic('');
    setQText('');
    setQOptions(['', '', '', '']);
    setQExplain('');
    setQShortcut('');
    alert('Question added successfully to the Question Bank database!');
  };

  return (
    <div className="container animated-fadeIn" style={{ marginBottom: '40px' }}>
      
      <div className="card shadow-sm" style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '16px' }}>⚙️ Content Management System (CMS) Admin</h2>
        
        {/* Tab switcher */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => setActiveTab('question')} className={`btn ${activeTab === 'question' ? 'btn-primary' : 'btn-outline'}`}>
            📝 Question Creator
          </button>
          <button onClick={() => setActiveTab('notification')} className={`btn ${activeTab === 'notification' ? 'btn-primary' : 'btn-outline'}`}>
            🔔 Notification Publisher
          </button>
          <button onClick={() => setActiveTab('metrics')} className={`btn ${activeTab === 'metrics' ? 'btn-primary' : 'btn-outline'}`}>
            📊 Content Audit Metrics
          </button>
        </div>
      </div>

      {/* 1. Interactive Question Creator */}
      {activeTab === 'question' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="grid-responsive">
          
          {/* Editor Form */}
          <div className="card shadow-sm">
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>Add New Question</h3>
            <form onSubmit={handleCreateQuestion} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }} className="grid-3">
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Target Exam:</label>
                  <select value={qExam} onChange={(e) => setQExam(e.target.value)} className="input" style={{ padding: '8px' }}>
                    {Object.values(examsData).map(e => (
                      <option key={e.id} value={e.id}>{e.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Section Category:</label>
                  <select value={qSection} onChange={(e) => setQSection(e.target.value)} className="input" style={{ padding: '8px' }}>
                    <option value="Reasoning">Reasoning</option>
                    <option value="Quantitative Aptitude">Quantitative Aptitude</option>
                    <option value="General Awareness">General Awareness</option>
                    <option value="English">English</option>
                    <option value="Professional IT">Professional IT</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Difficulty:</label>
                  <select value={qDiff} onChange={(e) => setQDiff(e.target.value)} className="input" style={{ padding: '8px' }}>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Topic / Tag:</label>
                <input 
                  type="text" 
                  placeholder="e.g. Syllogism, SQL Joins, Percentage" 
                  value={qTopic} 
                  onChange={(e) => setQTopic(e.target.value)} 
                  className="input"
                  style={{ padding: '10px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Question Stem (Supports formatting):</label>
                <textarea 
                  rows="3" 
                  placeholder="Type the question text. Use code block formatting for code questions."
                  value={qText} 
                  onChange={(e) => setQText(e.target.value)} 
                  className="input"
                  style={{ resize: 'vertical', padding: '10px' }}
                />
              </div>

              {/* 4 options inputs */}
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>MCQ Options & Select Correct:</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {qOptions.map((opt, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <input 
                        type="radio" 
                        name="correct-option" 
                        checked={qCorrect === idx}
                        onChange={() => setQCorrect(idx)}
                        style={{ cursor: 'pointer' }}
                      />
                      <span style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>{String.fromCharCode(65 + idx)}:</span>
                      <input 
                        type="text" 
                        placeholder={`Option ${String.fromCharCode(65 + idx)}`} 
                        value={opt} 
                        onChange={(e) => handleOptionChange(idx, e.target.value)}
                        className="input"
                        style={{ padding: '8px' }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Detailed Explanation:</label>
                <textarea 
                  rows="2" 
                  placeholder="Step-by-step mathematical or logical validation..."
                  value={qExplain} 
                  onChange={(e) => setQExplain(e.target.value)} 
                  className="input"
                  style={{ resize: 'vertical', padding: '10px' }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Shortcut / Strategy Tip (Optional):</label>
                <input 
                  type="text" 
                  placeholder="Formulas, mnemonic rules, or quick elimination checks..." 
                  value={qShortcut} 
                  onChange={(e) => setQShortcut(e.target.value)} 
                  className="input"
                  style={{ padding: '10px' }}
                />
              </div>

              <button type="submit" className="btn btn-secondary w-full" style={{ marginTop: '10px' }}>
                Create & Publish Question
              </button>
            </form>
          </div>

          {/* Real-time Live LaTeX-style Rendering Preview */}
          <div>
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>✨ Real-Time Preview</h3>
            
            <div className="card shadow-sm" style={{ borderLeft: '5px solid var(--primary)', backgroundColor: 'var(--bg-card)' }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                <span className={`badge ${
                  qDiff === 'Easy' ? 'badge-easy' : qDiff === 'Hard' ? 'badge-hard' : 'badge-medium'
                }`}>{qDiff}</span>
                <span className="badge badge-primary">{qSection}</span>
                {qTopic && <span className="badge badge-primary" style={{ textTransform: 'none' }}>#{qTopic}</span>}
              </div>

              <p style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '16px', whiteSpace: 'pre-line' }}>
                {qText || 'Your question stem will appear here. Start typing in the form to see output.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {qOptions.map((opt, idx) => (
                  <div key={idx} style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: `1px solid ${qCorrect === idx && opt ? 'var(--success)' : 'var(--border-color)'}`,
                    backgroundColor: qCorrect === idx && opt ? 'var(--success-bg)' : 'transparent',
                    fontSize: '0.85rem',
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <strong style={{ color: qCorrect === idx && opt ? 'var(--success)' : 'inherit' }}>
                      {String.fromCharCode(65 + idx)}.
                    </strong>
                    <span>{opt || `Option ${String.fromCharCode(65 + idx)} text`}</span>
                  </div>
                ))}
              </div>

              {qExplain && (
                <div style={{
                  padding: '12px',
                  backgroundColor: 'var(--bg-main)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '4px solid var(--success)',
                  fontSize: '0.8rem'
                }}>
                  <h4 style={{ color: 'var(--success)', marginBottom: '4px', fontSize: '0.85rem' }}>✓ Solution Explanation:</h4>
                  <p style={{ whiteSpace: 'pre-line' }}>{qExplain}</p>
                  
                  {qShortcut && (
                    <div style={{
                      marginTop: '8px',
                      padding: '8px',
                      backgroundColor: 'rgba(245, 166, 35, 0.05)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px dashed var(--secondary)'
                    }}>
                      <strong style={{ color: 'var(--warning)', fontSize: '0.75rem', display: 'block' }}>⚡ Shortcut strategy:</strong>
                      <span style={{ fontSize: '0.75rem' }}>{qShortcut}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* 2. Real-time Notification Broadcaster */}
      {activeTab === 'notification' && (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card shadow-sm">
            <h3 style={{ marginBottom: '16px', color: 'var(--primary)' }}>Broadcaster Notification Banners</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
              Publish announcements that appear immediately on the homepage notification board and trigger unread badges for active users.
            </p>

            <form onSubmit={handlePublishNotification} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Notification Category Type:</label>
                <select value={notifType} onChange={(e) => setNotifType(e.target.value)} className="input">
                  <option value="New">New Vacancy Alert / Date Release (Amber)</option>
                  <option value="Result Out">Result Declarations / Cut-offs (Green)</option>
                  <option value="Alert">Exam Date Postponements / Corrections (Crimson)</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Announcements Title Headline:</label>
                <input 
                  type="text" 
                  placeholder="e.g. SSC CGL Tier 1 Admit Card Released!" 
                  value={notifTitle} 
                  onChange={(e) => setNotifTitle(e.target.value)} 
                  className="input"
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Announcement Text Description:</label>
                <textarea 
                  rows="3" 
                  placeholder="Detail dates, link endpoints, cut-offs or post numbers..."
                  value={notifText} 
                  onChange={(e) => setNotifText(e.target.value)} 
                  className="input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-primary w-full btn-lg" style={{ marginTop: '10px' }}>
                Publish Broadcast Banner
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Content Health Metrics */}
      {activeTab === 'metrics' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="grid-responsive">
          
          {/* Question Reports */}
          <div className="card shadow-sm">
            <h3 style={{ marginBottom: '12px', color: 'var(--primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
              ⚠️ Reported Incorrect Questions
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '10px', backgroundColor: 'var(--error-bg)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(192, 57, 43, 0.15)' }}>
                <strong style={{ fontSize: '0.85rem' }}>Question ID: q9 (Probability Balls)</strong>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  User Report: "Options don't match formula 34/55. Please audit the combination results."
                </p>
                <span className="badge badge-easy" style={{ fontSize: '0.55rem', marginTop: '6px' }}>Fixed in Database</span>
              </div>
              <div style={{ padding: '10px', backgroundColor: 'rgba(0,0,0,0.02)', borderRadius: 'var(--radius-sm)' }}>
                <strong style={{ fontSize: '0.85rem' }}>Question ID: q6 (SJF CPU Scheduling)</strong>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  User Report: "Explain the SRTF preemptive variant if possible to contrast with non-preemptive."
                </p>
                <span className="badge badge-medium" style={{ fontSize: '0.55rem', marginTop: '6px' }}>Pending Audit</span>
              </div>
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className="card shadow-sm">
            <h3 style={{ marginBottom: '12px', color: 'var(--primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '6px' }}>
              📈 Popular Topics & Gaps
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <div className="flex justify-between" style={{ paddingBottom: '6px', borderBottom: '1px dashed var(--border-color)' }}>
                <strong>Syllogism (Reasoning)</strong>
                <span>🔥 2,541 attempts this week</span>
              </div>
              <div className="flex justify-between" style={{ paddingBottom: '6px', borderBottom: '1px dashed var(--border-color)' }}>
                <strong>DBMS Joins (IT)</strong>
                <span>🔥 1,842 attempts this week</span>
              </div>
              <div className="flex justify-between" style={{ paddingBottom: '6px', borderBottom: '1px dashed var(--border-color)' }}>
                <strong>Economic Issues (ESI ARD)</strong>
                <span>🚨 Low volume: Need 500+ questions added</span>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
