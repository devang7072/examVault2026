import React, { useState } from 'react';
import { examsData } from '../data/examsData';

export default function ExamHubView({ examId, navigate }) {
  const exam = examsData[examId];
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [showStudyPlanModal, setShowStudyPlanModal] = useState(false);
  const [selectedPlanDays, setSelectedPlanDays] = useState(null);

  if (!exam) {
    return (
      <div className="container text-center" style={{ padding: '40px 0' }}>
        <h2>Exam not found</h2>
        <button onClick={() => navigate('home')} className="btn btn-primary" style={{ marginTop: '16px' }}>Back to Home</button>
      </div>
    );
  }

  const toggleAccordion = (idx) => {
    setActiveAccordion(prev => (prev === idx ? null : idx));
  };

  const handleSelectStudyPlan = (days) => {
    setSelectedPlanDays(days);
    setShowStudyPlanModal(true);
  };

  // Dynamic generate 30/60/90 day study plans based on the exam syllabus
  const generateStudyPlan = (days) => {
    const syllabusSections = exam.syllabus;
    const plan = [];
    
    if (days === 30) {
      plan.push({ phase: "Days 1–10: Core Concepts", desc: `Focus on fundamentals of ${syllabusSections[0]?.section || 'Reasoning'} and basic arithmetic formulas. Read Lucent GK daily.` });
      plan.push({ phase: "Days 11–20: Practice & Speed", desc: `Practice topic-wise questions from ${syllabusSections[1]?.section || 'Quant'} and attempt sectional mini-quizzes. Focus on bookmarked errors.` });
      plan.push({ phase: "Days 21–30: Mocks & Revision", desc: "Solve 1 full-length Mock Test every 2 days. Analyze weak areas under 60% accuracy and revise formulas." });
    } else if (days === 60) {
      plan.push({ phase: "Days 1–20: Subject Foundations", desc: `Cover entire topics of ${syllabusSections.map(s => s.section).join(', ')}. Dedicate 2 hours per subject daily.` });
      plan.push({ phase: "Days 21–40: Intermediate Sectional Tests", desc: "Start solving previous year papers (PYPs) from 2020-2024. Clear doubts in critical topics." });
      plan.push({ phase: "Days 41–60: Advanced Speed & Full Mocks", desc: "Attempt 20+ full mocks. Track sectional timing to ensure sections are completed before locking." });
    } else {
      // 90 days
      plan.push({ phase: "Days 1–30: Depth & Theory", desc: `Detailed coverage of ${syllabusSections[0]?.section || 'Reasoning'} and ${syllabusSections[1]?.section || 'Quant'}. Take handwritten formula notes.` });
      plan.push({ phase: "Days 31–60: Extensive Question Banks", desc: "Solve 200+ questions per topic. Focus on Hard difficulty questions to prepare for Mains/Tier 2." });
      plan.push({ phase: "Days 61–90: Elite Testing & Strategy", desc: "Solve daily current affairs quizzes, last 10 years PYPs, and alternate day full mocks. Fine-tune selection strategies." });
    }
    return plan;
  };

  return (
    <div className="container animated-fadeIn">
      {/* Header Cards */}
      <div className="card" style={{
        padding: '32px',
        marginBottom: '32px',
        background: 'linear-gradient(to right, var(--primary), var(--primary-light))',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span style={{ color: 'var(--secondary)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              {exam.conductingBody}
            </span>
            <h1 style={{ fontSize: '2.2rem', color: '#ffffff', margin: '4px 0 8px' }}>{exam.fullName}</h1>
            <p style={{ opacity: 0.9, fontSize: '0.95rem' }}>
              Official Website: <a href={exam.officialWebsite} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: 'var(--secondary)' }}>{exam.officialWebsite.replace('https://', '')}</a>
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--secondary)', display: 'block' }}>{exam.vacancies}</span>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8 }}>Total 2026 Vacancies</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }} className="grid-3">
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>Starting Pay Grade</span>
            <strong style={{ fontSize: '0.95rem' }}>{exam.payScale}</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>Selection Stages</span>
            <strong style={{ fontSize: '0.95rem' }}>{exam.selectionProcess.length} Stages</strong>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>Next Exam Date (Tier 1/Prelims)</span>
            <strong style={{ fontSize: '0.95rem', color: 'var(--secondary)' }}>
              {exam.importantDates.find(d => d.label.includes('Tier 1') || d.label.includes('Prelims') || d.label.includes('CBT'))?.value || 'Check Table'}
            </strong>
          </div>
        </div>
      </div>

      {/* Nav Gates CTAs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }} className="grid-3">
        <div className="card text-center" style={{ borderLeft: '4px solid var(--primary)', cursor: 'pointer' }} onClick={() => navigate('qbank', { examFilter: exam.id })}>
          <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '4px' }}>📚</span>
          <h3 style={{ fontSize: '1.05rem', color: 'var(--primary)' }}>Exam Question Bank</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Topic-wise practice questions with shortcuts</p>
        </div>
        <div className="card text-center" style={{ borderLeft: '4px solid var(--secondary)', cursor: 'pointer' }} onClick={() => navigate('mock', { examFilter: exam.id })} >
          <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '4px' }}>⏳</span>
          <h3 style={{ fontSize: '1.05rem', color: 'var(--primary)' }}>Mock Test Engine</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Full-length CBT mocks with sectional timers</p>
        </div>
        <div className="card text-center" style={{ borderLeft: '4px solid var(--success)', cursor: 'pointer' }} onClick={() => navigate('qbank', { examFilter: exam.id, studyMode: true })}>
          <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '4px' }}>📄</span>
          <h3 style={{ fontSize: '1.05rem', color: 'var(--primary)' }}>Previous Year Papers</h3>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Interactive digitised papers (2015 - 2025)</p>
        </div>
      </div>

      {/* Grid of details */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '32px', marginBottom: '48px' }} className="grid-responsive">
        
        {/* Left column: Patterns & Syllabus */}
        <div>
          {/* Important Dates */}
          <div className="card" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>📅 Key Exam Dates (2026 Schedule)</h3>
            <table className="w-full" style={{ borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <th style={{ padding: '10px 6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Event Stage</th>
                  <th style={{ padding: '10px 6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>Official Date</th>
                </tr>
              </thead>
              <tbody>
                {exam.importantDates.map((date, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.02)' }}>
                    <td style={{ padding: '12px 6px', fontSize: '0.9rem', fontWeight: '500' }}>{date.label}</td>
                    <td style={{ padding: '12px 6px', fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 'bold' }}>{date.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Exam Pattern Visuals */}
          <div className="card" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>⚡ Exam Patterns & Timing</h3>
            
            {Object.keys(exam.examPattern).map((key) => {
              const pattern = exam.examPattern[key];
              return (
                <div key={key} style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', backgroundColor: 'var(--bg-main)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', marginBottom: '10px' }}>
                    <strong style={{ fontSize: '0.9rem' }}>{pattern.title}</strong>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{pattern.duration}</span>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Marking structure: {pattern.marking}</p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {pattern.sections.map((sec, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center" style={{
                        padding: '10px 14px',
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.85rem'
                      }}>
                        <span style={{ fontWeight: '500' }}>{sec.name}</span>
                        <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                          <span>{sec.questions} Qs</span>
                          <span>{sec.marks} Marks</span>
                          <span style={{ color: 'var(--secondary)', fontWeight: '500' }}>{sec.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Syllabus accordion */}
          <div className="card">
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>📋 Comprehensive Syllabus Accordions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exam.syllabus.map((syl, idx) => {
                const isOpen = activeAccordion === idx;
                return (
                  <div key={idx}>
                    <div className="accordion-header" onClick={() => toggleAccordion(idx)}>
                      <span>{syl.section}</span>
                      <span>{isOpen ? '▲' : '▼'}</span>
                    </div>
                    {isOpen && (
                      <div className="accordion-content">
                        <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          {syl.topics.map((t, tIdx) => (
                            <li key={tIdx} style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right column: Eligibility & Study Plans */}
        <div>
          {/* Eligibility Card */}
          <div className="card shadow-sm" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>🎓 Eligibility Critera</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>Educational Qualification:</strong>
                <span style={{ color: 'var(--text-muted)' }}>{exam.eligibility.education}</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>Age Limit:</strong>
                <span style={{ color: 'var(--text-muted)' }}>{exam.eligibility.age}</span>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--primary)' }}>Nationality:</strong>
                <span style={{ color: 'var(--text-muted)' }}>{exam.eligibility.nationality}</span>
              </div>
            </div>
          </div>

          {/* Study Plan CTAs */}
          <div className="card shadow-sm" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '12px', color: 'var(--primary)' }}>🎯 Custom Study Guide Plans</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '16px' }}>
              Pick a tailored prep plan to cover your syllabus systematically.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button onClick={() => handleSelectStudyPlan(30)} className="btn btn-outline" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px' }}>
                <span>⚡ 30-Day Crash Course</span>
                <span style={{ color: 'var(--secondary)' }}>→</span>
              </button>
              <button onClick={() => handleSelectStudyPlan(60)} className="btn btn-outline" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px' }}>
                <span>📅 60-Day Mid Plan</span>
                <span style={{ color: 'var(--secondary)' }}>→</span>
              </button>
              <button onClick={() => handleSelectStudyPlan(90)} className="btn btn-outline" style={{ display: 'flex', justifyContent: 'space-between', padding: '12px' }}>
                <span>🎯 90-Day Full Prep</span>
                <span style={{ color: 'var(--secondary)' }}>→</span>
              </button>
            </div>
          </div>

          {/* Recommended Books */}
          <div className="card shadow-sm">
            <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>📚 Suggested Books</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.8rem' }}>
              {exam.recommendedBooks.map((book, idx) => (
                <div key={idx} style={{ paddingBottom: '8px', borderBottom: idx < exam.recommendedBooks.length - 1 ? '1px dashed var(--border-color)' : 'none' }}>
                  <strong style={{ display: 'block', color: 'var(--primary)' }}>{book.subject}</strong>
                  <span style={{ fontStyle: 'italic', color: 'var(--text-main)' }}>{book.title}</span>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Author: {book.author}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Study Plan Modal */}
      {showStudyPlanModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div className="card shadow-xl card-glass animated-fadeIn" style={{
            maxWidth: '500px',
            width: '90%',
            backgroundColor: 'var(--bg-card)',
            color: 'var(--text-main)',
            position: 'relative'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--primary)' }}>
              🎯 {selectedPlanDays}-Day Study Guide for {exam.name}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0' }}>
              {generateStudyPlan(selectedPlanDays).map((step, idx) => (
                <div key={idx} style={{ padding: '12px', backgroundColor: 'var(--bg-main)', borderRadius: 'var(--radius-sm)' }}>
                  <strong style={{ color: 'var(--secondary)', fontSize: '0.85rem', display: 'block', marginBottom: '4px' }}>
                    {step.phase}
                  </strong>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button className="btn btn-outline" onClick={() => setShowStudyPlanModal(false)}>Close</button>
              <button className="btn btn-primary" onClick={() => {
                setShowStudyPlanModal(false);
                alert(`Study plan loaded to your profile dashboard!`);
              }}>Activate Plan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
