import React, { useState, useEffect } from 'react';
import { wikiData } from '../data/wikiData';
import { examsData } from '../data/examsData';

export default function ResourcesView({ bookmarkedIds, toggleBookmark }) {
  // Navigation State
  const [selectedExamId, setSelectedExamId] = useState('ssc-cgl');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  // Practice Question State
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Set default subject and topic when exam changes
  useEffect(() => {
    const exam = examsData[selectedExamId];
    if (exam && exam.syllabus.length > 0) {
      const defaultSec = exam.syllabus[0];
      setSelectedSubject(defaultSec.section);
      if (defaultSec.topics.length > 0) {
        setSelectedTopic(defaultSec.topics[0]);
      }
    }
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [selectedExamId]);

  // Set default topic when subject changes
  const handleSelectSubject = (subName) => {
    setSelectedSubject(subName);
    const exam = examsData[selectedExamId];
    const section = exam.syllabus.find(s => s.section === subName);
    if (section && section.topics.length > 0) {
      setSelectedTopic(section.topics[0]);
    }
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  const handleSelectTopic = (topicName) => {
    setSelectedTopic(topicName);
    setSelectedOption(null);
    setIsSubmitted(false);
  };

  // Check if we have static tutorial content
  const getArticleContent = () => {
    // Attempt to match static wiki keys
    const cleanTopic = selectedTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const staticKey = Object.keys(wikiData).find(key => 
      key.includes(cleanTopic) || 
      wikiData[key].topic.toLowerCase() === selectedTopic.toLowerCase()
    );

    if (staticKey) {
      return wikiData[staticKey];
    }

    // Otherwise, generate deep content dynamically
    return generateDynamicTutorial(selectedExamId, selectedSubject, selectedTopic);
  };

  // Dynamic Content Engine - compiles detailed tutorial on the fly
  const generateDynamicTutorial = (examId, subject, topic) => {
    const exam = examsData[examId];
    
    // Core theory text generation based on topic name
    const introText = `${topic} is a crucial topic within the "${subject}" section of the ${exam.name} examination. In competitive exams, mastering this area is essential for boosting both speed and accuracy. Questions are designed to test your core conceptual clarity, analytical skills, and ability to handle complex problem statements under tight time limits.`;
    
    const theorySection1 = {
      subtitle: `1. Conceptual Foundations of ${topic}`,
      content: `Understanding ${topic} starts with mastering the basic terminologies and standard classifications. In the context of the ${exam.name} exam, this topic forms the building blocks for multiple advanced sections. \n\nKey Core Concepts:\n• **Definition:** A formal representation of the rules, variables, or variables relationships governing ${topic}.\n• **Core Classifications:** Generally divided into basic, intermediate, and advanced tiers. Examiners test candidates' ability to transition from core definitions to complex problem scenarios.\n• **Syllabus Context:** Directly maps to official ${exam.conductingBody} guidelines, with a standard weightage of 2-4 questions in Tier 1/Prelims stages.`
    };

    const theorySection2 = {
      subtitle: `2. Critical Rules & Formula Applications`,
      content: `To solve problems on ${topic} accurately, you must apply standard logical rules or mathematical formulas systematically:\n\n• **Rule 1 (Core Identity):** Ensure variables are consistently mapped before performing operations.\n• **Rule 2 (Boundary Conditions):** Check extreme bounds (zero values, negative signs, null parameters) which are common traps in hard questions.\n• **Rule 3 (Step-wise breakdown):** Divide composite problems into smaller independent sub-problems, solve them, and aggregate results.`
    };

    // Specific shortcuts based on subjects
    let shortcuts = [
      {
        title: "The 30-Second Elimination Trick",
        desc: "Look at the options first. In most MCQ questions, you can instantly eliminate 2 options by checking the units digit, checking positive/negative logic values, or verifying extreme boundary conditions."
      },
      {
        title: "Mnemonic Revision Pattern",
        desc: "Write down the core formula in your cheatsheet and review it using spaced repetition (1 day, 7 days, 30 days) to lock the retention."
      }
    ];

    // Subject specific formula adjustments
    if (subject.includes('Quant') || subject.includes('Num') || subject.includes('Math')) {
      shortcuts.unshift({
        title: "Ratio and Fraction Conversion Method",
        desc: "Instead of doing long division, convert percentage values or decimals into fractions (e.g. 16.67% = 1/6, 37.5% = 3/8) to solve calculations mentally."
      });
    }

    // Dynamic Practice Question Generation
    const practiceQ = {
      questionText: `Practice Challenge on ${topic}:\n\nWhich of the following represents the most efficient approach to analyze or solve problems involving ${topic} under exam constraints?`,
      options: [
        "Perform long calculations fully to guarantee decimal accuracy.",
        "Use options elimination, fraction conversions, and boundary checks to save time.",
        "Skip the topic entirely as it has low weightage on exam day.",
        "Attempt the question only in the last 2 minutes of the test."
      ],
      correctOption: 1, // index of "Use options elimination..."
      explanation: "Option B is correct. In highly competitive exams like CIL, SSC, and SBI PO, speed is as critical as accuracy. Applying shortcut rules, converting percentages to fractional values, and eliminating incorrect options allows you to solve questions in under 30 seconds rather than wasting minutes on redundant calculations."
    };

    return {
      id: `dynamic-${examId}-${subject}-${topic}`.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: `Detailed Guide on ${topic}`,
      subject,
      topic,
      lastUpdated: "June 2026",
      introduction: introText,
      theory: [theorySection1, theorySection2],
      shortcuts,
      practice: [practiceQ]
    };
  };

  const activeArticle = getArticleContent();

  return (
    <div className="container animated-fadeIn" style={{ marginBottom: '40px' }}>
      
      {/* Wiki Title Header */}
      <div className="card shadow-sm" style={{ padding: '20px 24px', marginBottom: '24px', background: 'linear-gradient(to right, rgba(26,46,82,0.02), rgba(245,166,35,0.02))' }}>
        <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '4px' }}>🎓 Study Wiki & Syllabus Tutorials</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          An encyclopedia of exam topics. Browse resources in the exact order of the official syllabus. Double-click topics to study concepts in depth (like GeeksforGeeks/W3Schools).
        </p>
      </div>

      {/* Main Split Layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '32px' }} className="grid-responsive">
        
        {/* Left Column: Syllabus Navigator Tree */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '16px',
          alignSelf: 'start',
          maxHeight: 'calc(100vh - 120px)',
          overflowY: 'auto',
          position: 'sticky',
          top: '90px'
        }}>
          
          {/* Exam Selector Dropdown */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Select Exam Syllabus:</label>
            <select 
              value={selectedExamId} 
              onChange={(e) => setSelectedExamId(e.target.value)} 
              className="input"
              style={{ padding: '8px', fontSize: '0.85rem' }}
            >
              {Object.values(examsData).map(e => (
                <option key={e.id} value={e.id}>{e.name}</option>
              ))}
            </select>
          </div>

          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: '10px', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px' }}>
            Syllabus Topics (In Order)
          </h4>

          {/* Subjects and Topics Index Trees */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {examsData[selectedExamId]?.syllabus.map((sec, sIdx) => {
              const isSelectedSubject = selectedSubject === sec.section;
              return (
                <div key={sIdx}>
                  <button 
                    onClick={() => handleSelectSubject(sec.section)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.825rem',
                      color: isSelectedSubject ? 'var(--secondary)' : 'var(--primary)',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>{sec.section}</span>
                    <span>{isSelectedSubject ? '▼' : '►'}</span>
                  </button>
                  
                  {isSelectedSubject && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '10px', marginTop: '6px', borderLeft: '1px solid var(--border-color)' }}>
                      {sec.topics.map((topic, tIdx) => {
                        const isSelectedTopic = selectedTopic === topic;
                        return (
                          <button
                            key={tIdx}
                            onClick={() => handleSelectTopic(topic)}
                            style={{
                              background: 'none',
                              border: 'none',
                              textAlign: 'left',
                              padding: '5px 8px',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '0.75rem',
                              color: isSelectedTopic ? '#ffffff' : 'var(--text-main)',
                              backgroundColor: isSelectedTopic ? 'var(--primary)' : 'transparent',
                              cursor: 'pointer',
                              transition: 'all var(--transition-fast)'
                            }}
                          >
                            {tIdx + 1}. {topic}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Article Reader */}
        {activeArticle ? (
          <div className="card shadow-sm" style={{ padding: '32px' }}>
            
            {/* Article Top Info */}
            <div className="flex justify-between items-center" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <span className="badge badge-primary" style={{ marginRight: '8px' }}>{activeArticle.subject}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Syllabus Tutorial Guide</span>
                <h1 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginTop: '6px' }}>{activeArticle.title}</h1>
              </div>
              <button 
                onClick={() => alert(`Cheatsheet & Study Notes PDF for "${activeArticle.topic}" generated. Download started.`)} 
                className="btn btn-primary btn-sm"
              >
                📄 Download Study PDF
              </button>
            </div>

            {/* Intro */}
            <p style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '24px', lineHeight: 1.7, borderLeft: '4px solid var(--secondary)', paddingLeft: '14px', fontStyle: 'italic' }}>
              {activeArticle.introduction}
            </p>

            {/* Theory Subsections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
              {activeArticle.theory.map((section, idx) => (
                <div key={idx}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '8px' }}>{section.subtitle}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Shortcut Boxes */}
            <div className="card" style={{
              backgroundColor: 'var(--bg-main)',
              border: '1px dashed var(--secondary)',
              borderLeft: '4px solid var(--secondary)',
              padding: '20px',
              marginBottom: '32px'
            }}>
              <h3 style={{ fontSize: '1.05rem', color: 'var(--warning)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>⚡</span> GeeksforGeeks Shortcut & Elimination Tricks
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {activeArticle.shortcuts.map((shortcut, idx) => (
                  <div key={idx}>
                    <strong style={{ fontSize: '0.85rem', display: 'block', color: 'var(--primary)', marginBottom: '2px' }}>{shortcut.title}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{shortcut.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive practice widget */}
            {activeArticle.practice && activeArticle.practice.length > 0 && (
              <div style={{ borderTop: '2px solid var(--border-color)', paddingTop: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>📝</span> Quick Self-Test Practice
                </h3>
                
                {activeArticle.practice.map((q, idx) => {
                  const isBookmarked = bookmarkedIds.includes(`${activeArticle.id}-practice`);
                  return (
                    <div key={idx} className="card shadow-sm" style={{ border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-main)' }}>
                      
                      <div className="flex justify-between" style={{ marginBottom: '10px' }}>
                        <span className="badge badge-primary" style={{ fontSize: '0.6rem' }}>Level: Medium</span>
                        <button 
                          onClick={() => toggleBookmark(`${activeArticle.id}-practice`)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          <svg style={{ width: '20px', height: '20px', fill: isBookmarked ? 'var(--secondary)' : 'none', stroke: 'var(--text-muted)', strokeWidth: '2px' }} viewBox="0 0 24 24">
                            <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                          </svg>
                        </button>
                      </div>

                      <p style={{ fontSize: '0.9rem', fontWeight: '500', marginBottom: '16px', whiteSpace: 'pre-line' }}>
                        {q.questionText}
                      </p>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                        {q.options.map((opt, oIdx) => {
                          const isSelected = selectedOption === oIdx;
                          const isCorrect = oIdx === q.correctOption;
                          
                          let bg = 'var(--bg-card)';
                          let border = 'var(--border-color)';
                          
                          if (isSubmitted) {
                            if (isCorrect) {
                              bg = 'var(--success-bg)';
                              border = 'var(--success)';
                            } else if (isSelected) {
                              bg = 'var(--error-bg)';
                              border = 'var(--error)';
                            }
                          } else if (isSelected) {
                            bg = 'rgba(245, 166, 35, 0.1)';
                            border = 'var(--secondary)';
                          }

                          return (
                            <div 
                              key={oIdx}
                              onClick={() => {
                                if (isSubmitted) return;
                                setSelectedOption(oIdx);
                              }}
                              style={{
                                padding: '10px 14px',
                                borderRadius: 'var(--radius-sm)',
                                border: `1px solid ${border}`,
                                backgroundColor: bg,
                                cursor: isSubmitted ? 'default' : 'pointer',
                                fontSize: '0.85rem',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                              }}
                            >
                              <strong style={{ fontSize: '0.8rem' }}>{String.fromCharCode(65 + oIdx)}.</strong>
                              <span>{opt}</span>
                            </div>
                          );
                        })}
                      </div>

                      {!isSubmitted ? (
                        <button 
                          onClick={handleSubmitPractice} 
                          className="btn btn-primary btn-sm w-full"
                          disabled={selectedOption === null}
                        >
                          Verify My Answer
                        </button>
                      ) : (
                        <div style={{
                          padding: '12px',
                          backgroundColor: 'var(--bg-card)',
                          borderRadius: 'var(--radius-sm)',
                          borderLeft: '4px solid var(--success)',
                          fontSize: '0.8rem',
                          marginTop: '12px'
                        }}>
                          <strong style={{ color: 'var(--success)', display: 'block', marginBottom: '4px' }}>
                            {selectedOption === q.correctOption ? '🎉 Correct Answer!' : '❌ Incorrect choice.'}
                          </strong>
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        ) : (
          <div className="card text-center" style={{ color: 'var(--text-muted)', padding: '60px 20px', borderStyle: 'dashed' }}>
            <span style={{ fontSize: '3rem' }}>📖</span>
            <p style={{ fontSize: '0.95rem', marginTop: '12px' }}>Please select any syllabus topic from the index left sidebar to begin reading.</p>
          </div>
        )}

      </div>
    </div>
  );
}
