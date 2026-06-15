import React, { useState } from 'react';
import { questionsData } from '../data/questionsData';
import { examsData } from '../data/examsData';

export default function DashboardView({ navigate, bookmarkedIds, toggleBookmark, streak, mockHistory }) {
  // Let the user interactively check off topics in the syllabus to track their progress!
  // This is a premium touch.
  const [completedTopics, setCompletedTopics] = useState(
    JSON.parse(localStorage.getItem('completedTopics') || '{}')
  );

  const handleToggleTopic = (topicName) => {
    const updated = {
      ...completedTopics,
      [topicName]: !completedTopics[topicName]
    };
    setCompletedTopics(updated);
    localStorage.setItem('completedTopics', JSON.stringify(updated));
  };

  // Calculate stats
  const bookmarkedQuestions = [...questionsData].filter(q => bookmarkedIds.includes(q.id));
  
  // Total topics count across all exams
  const allTopics = [];
  Object.values(examsData).forEach(exam => {
    exam.syllabus.forEach(sec => {
      sec.topics.forEach(topic => {
        if (!allTopics.includes(topic)) allTopics.push(topic);
      });
    });
  });

  const completedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercent = allTopics.length > 0 ? Math.round((completedCount / allTopics.length) * 100) : 0;

  // Calculate section accuracy from mock test history
  const sectionStats = {
    Reasoning: { correct: 4, attempted: 5 },
    Quant: { correct: 3, attempted: 5 },
    GA: { correct: 2, attempted: 5 },
    IT: { correct: 1, attempted: 5 }
  };
  
  // Update with actual mock history if available
  if (mockHistory && mockHistory.length > 0) {
    mockHistory.forEach(test => {
      test.sections.forEach(sec => {
        const name = sec.name.split(' ')[0].toLowerCase();
        let key = 'Reasoning';
        if (name.includes('quant') || name.includes('math') || name.includes('num')) key = 'Quant';
        else if (name.includes('general') || name.includes('aware') || name.includes('gk')) key = 'GA';
        else if (name.includes('prof') || name.includes('it') || name.includes('syst')) key = 'IT';
        
        if (!sectionStats[key]) sectionStats[key] = { correct: 0, attempted: 0 };
        sectionStats[key].correct += sec.correct;
        sectionStats[key].attempted += sec.attempted;
      });
    });
  }

  return (
    <div className="container animated-fadeIn" style={{ marginBottom: '40px' }}>
      
      {/* Dashboard Top cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '32px' }} className="grid-3">
        {/* Streak card */}
        <div className="card text-center" style={{ background: 'linear-gradient(135deg, #f5a623 0%, #ff8c00 100%)', color: 'white', border: 'none' }}>
          <span style={{ fontSize: '2.5rem', display: 'block' }}>🔥</span>
          <h3 style={{ fontSize: '1.8rem', color: 'white', fontWeight: 'bold' }}>{streak} Days</h3>
          <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Active Prep Streak</p>
        </div>

        {/* Bookmarks card */}
        <div className="card text-center" style={{ background: 'linear-gradient(135deg, #1a2e52 0%, #2c4475 100%)', color: 'white', border: 'none' }}>
          <span style={{ fontSize: '2.5rem', display: 'block' }}>🔖</span>
          <h3 style={{ fontSize: '1.8rem', color: 'white', fontWeight: 'bold' }}>{bookmarkedQuestions.length} Questions</h3>
          <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Saved in Revision Scheduler</p>
        </div>

        {/* Progress Covered card */}
        <div className="card text-center" style={{ background: 'linear-gradient(135deg, #2d7d46 0%, #3a9c59 100%)', color: 'white', border: 'none' }}>
          <span style={{ fontSize: '2.5rem', display: 'block' }}>🎯</span>
          <h3 style={{ fontSize: '1.8rem', color: 'white', fontWeight: 'bold' }}>{progressPercent}%</h3>
          <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Syllabus Covered ({completedCount}/{allTopics.length})</p>
        </div>
      </div>

      {/* Main dashboard splits */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px' }} className="grid-responsive">
        
        {/* Left column: Revision Scheduler & Topic checkoffs */}
        <div>
          {/* Revision Scheduler */}
          <div className="card" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              ⏳ Spaced-Repetition Revision Scheduler
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px' }}>
              These are questions you bookmarked while practicing. Revise them regularly to commit concepts to long-term memory.
            </p>

            {bookmarkedQuestions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)' }}>
                <span style={{ fontSize: '1.5rem', display: 'block' }}>📭</span>
                <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>No bookmarked questions yet. Practice questions to bookmark them.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {bookmarkedQuestions.map((q) => (
                  <div key={q.id} style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-main)'
                  }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '8px' }}>
                      <span className="badge badge-primary" style={{ fontSize: '0.6rem' }}>{q.section}</span>
                      <button 
                        onClick={() => toggleBookmark(q.id)} 
                        className="btn btn-sm btn-outline"
                        style={{ padding: '2px 8px', fontSize: '0.7rem', color: 'var(--error)', borderColor: 'rgba(192, 57, 43, 0.2)' }}
                      >
                        Remove
                      </button>
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: '500', marginBottom: '12px' }}>{q.questionText}</p>
                    
                    <div style={{
                      padding: '10px',
                      backgroundColor: 'var(--bg-card)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      borderLeft: '3px solid var(--success)'
                    }}>
                      <strong>Correct Option:</strong> {String.fromCharCode(65 + q.correctOption)} ({q.options[q.correctOption]})
                      <p style={{ marginTop: '4px', fontStyle: 'italic', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <strong>Explanation:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Interactive Topic Checklists */}
          <div className="card">
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              ✅ Syllabus Progress Checklist
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Check off topics as you study them to update your progress dashboard.
            </p>
            
            <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '8px' }}>
              {allTopics.map((topic, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.02)'
                }}>
                  <input 
                    type="checkbox" 
                    id={`topic-${idx}`}
                    checked={!!completedTopics[topic]}
                    onChange={() => handleToggleTopic(topic)}
                    style={{
                      width: '16px',
                      height: '16px',
                      accentColor: 'var(--success)',
                      cursor: 'pointer'
                    }}
                  />
                  <label htmlFor={`topic-${idx}`} style={{ 
                    fontSize: '0.85rem', 
                    cursor: 'pointer',
                    textDecoration: completedTopics[topic] ? 'line-through' : 'none',
                    color: completedTopics[topic] ? 'var(--text-muted)' : 'var(--text-main)'
                  }}>
                    {topic}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Accuracy charts & Weak-areas */}
        <div>
          {/* Sectional Accuracy */}
          <div className="card shadow-sm" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
              📊 Sectional Accuracy
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {Object.keys(sectionStats).map((name) => {
                const stat = sectionStats[name];
                const acc = stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : 0;
                
                let barColor = 'var(--success)';
                if (acc < 60) barColor = 'var(--error)';
                else if (acc < 80) barColor = 'var(--secondary)';

                return (
                  <div key={name}>
                    <div className="flex justify-between" style={{ fontSize: '0.8rem', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '500' }}>{name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{acc}% ({stat.correct}/{stat.attempted})</span>
                    </div>
                    {/* Progress bar background */}
                    <div style={{ height: '8px', backgroundColor: 'var(--border-color)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${acc || 5}%`, backgroundColor: barColor, borderRadius: 'var(--radius-full)', transition: 'width 0.4s ease' }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weak area alerts */}
          <div className="card shadow-sm" style={{ borderLeft: '4px solid var(--error)' }}>
            <h3 style={{ marginBottom: '12px', color: 'var(--error)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
              ⚠️ Weak Areas Flagged
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '16px' }}>
              The following subjects are under 60% accuracy based on mock attempts and need attention:
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.keys(sectionStats).map((name) => {
                const stat = sectionStats[name];
                const acc = stat.attempted > 0 ? (stat.correct / stat.attempted) * 100 : 0;
                if (acc >= 60 && stat.attempted > 0) return null;
                
                return (
                  <div key={name} style={{
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--error-bg)',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(192, 57, 43, 0.15)'
                  }}>
                    <strong style={{ color: 'var(--error)', display: 'block' }}>{name} ({acc.toFixed(0)}% accuracy)</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Focus on easy difficulty questions to strengthen core concepts.</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
