import React, { useState, useEffect } from 'react';
import { questionsData } from '../data/questionsData';
import { examsData } from '../data/examsData';

export default function QuestionBankView({ searchParams, bookmarkedIds, toggleBookmark, customQuestions }) {
  const [examFilter, setExamFilter] = useState(searchParams?.examFilter || '');
  const [sectionFilter, setSectionFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState(searchParams?.search || '');
  
  const [studyMode, setStudyMode] = useState(searchParams?.studyMode || false);
  const [isBilingual, setIsBilingual] = useState(false);
  
  // Question States
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [answersState, setAnswersState] = useState({}); // { [qId]: { selected: optIdx, submitted: bool } }

  // Sync inputs from URL or routing search params
  useEffect(() => {
    if (searchParams?.examFilter) setExamFilter(searchParams.examFilter);
    if (searchParams?.search) setSearchQuery(searchParams.search);
    if (searchParams?.studyMode) setStudyMode(searchParams.studyMode);
  }, [searchParams]);

  // Combine static question bank and custom admin-created questions
  const allQuestions = [...questionsData, ...customQuestions];

  // Filtering Logic
  useEffect(() => {
    let list = [...allQuestions];

    if (examFilter) {
      list = list.filter(q => q.exams.includes(examFilter) || q.exams.includes("all"));
    }
    if (sectionFilter) {
      list = list.filter(q => q.section.toLowerCase() === sectionFilter.toLowerCase());
    }
    if (difficultyFilter) {
      list = list.filter(q => q.difficulty.toLowerCase() === difficultyFilter.toLowerCase());
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(question => 
        question.questionText.toLowerCase().includes(q) || 
        question.topic.toLowerCase().includes(q) ||
        (question.hindiQuestionText && question.hindiQuestionText.toLowerCase().includes(q))
      );
    }

    setFilteredQuestions(list);
  }, [examFilter, sectionFilter, difficultyFilter, searchQuery, customQuestions]);

  const handleSelectOption = (qId, optIdx) => {
    if (studyMode) return; // In study mode, clicking options has no locking effect
    const state = answersState[qId] || {};
    if (state.submitted) return; // Can't change after submitting in attempt mode
    
    setAnswersState(prev => ({
      ...prev,
      [qId]: { ...prev[qId], selected: optIdx }
    }));
  };

  const handleSubmitAnswer = (qId) => {
    setAnswersState(prev => ({
      ...prev,
      [qId]: { ...prev[qId], submitted: true }
    }));
  };

  const handleResetAnswer = (qId) => {
    setAnswersState(prev => ({
      ...prev,
      [qId]: { selected: null, submitted: false }
    }));
  };

  return (
    <div className="container animated-fadeIn" style={{ marginBottom: '40px' }}>
      
      {/* Search and Mode Controls */}
      <div className="card shadow-sm" style={{ padding: '20px', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--primary)' }}>📖 2026 Question Bank</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr) auto', gap: '12px', alignItems: 'center' }} className="grid-responsive">
          {/* Exam Filter */}
          <select value={examFilter} onChange={(e) => setExamFilter(e.target.value)} className="input">
            <option value="">All Exams</option>
            {Object.values(examsData).map(e => (
              <option key={e.id} value={e.id}>{e.name}</option>
            ))}
          </select>

          {/* Section Filter */}
          <select value={sectionFilter} onChange={(e) => setSectionFilter(e.target.value)} className="input">
            <option value="">All Sections</option>
            <option value="Reasoning">Reasoning</option>
            <option value="Quantitative Aptitude">Quantitative Aptitude</option>
            <option value="General Awareness">General Awareness</option>
            <option value="English">English</option>
            <option value="Professional IT">Professional IT</option>
          </select>

          {/* Difficulty Filter */}
          <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)} className="input">
            <option value="">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Text Search */}
          <input 
            type="text" 
            placeholder="Search within questions..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input"
          />

          {/* Bilingual & Mode Switchers */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              onClick={() => setStudyMode(!studyMode)} 
              className={`btn btn-sm ${studyMode ? 'btn-secondary' : 'btn-outline'}`}
              title="Study mode shows answer instantly; Attempt mode acts like exam test"
            >
              💡 {studyMode ? 'Study Mode' : 'Attempt Mode'}
            </button>
            <button 
              onClick={() => setIsBilingual(!isBilingual)} 
              className={`btn btn-sm ${isBilingual ? 'btn-primary' : 'btn-outline'}`}
            >
              🌐 {isBilingual ? 'English' : 'हिंदी'}
            </button>
          </div>
        </div>
      </div>

      {/* Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {filteredQuestions.length === 0 ? (
          <div className="card text-center" style={{ padding: '40px' }}>
            <h3>No questions match your filter options.</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Try resetting filters or searching another keyword.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isBookmarked = bookmarkedIds.includes(q.id);
            const state = answersState[q.id] || { selected: null, submitted: false };
            
            // In study mode, we reveal the answer automatically
            const reveal = studyMode || state.submitted;

            return (
              <div key={q.id} className="card shadow-sm" style={{ borderLeft: `5px solid var(--primary)` }}>
                {/* Question Info Header */}
                <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span className={`badge ${
                      q.difficulty === 'Easy' ? 'badge-easy' : q.difficulty === 'Hard' ? 'badge-hard' : 'badge-medium'
                    }`}>{q.difficulty}</span>
                    <span className="badge badge-primary">{q.section}</span>
                    <span className="badge badge-primary" style={{ textTransform: 'none' }}>#{q.topic}</span>
                    {q.appearedIn && q.appearedIn.map((app, aIdx) => (
                      <span key={aIdx} className="badge" style={{ backgroundColor: 'rgba(0,0,0,0.03)', color: 'var(--text-muted)', textTransform: 'none', fontSize: '0.65rem' }}>
                        Asked in: {app}
                      </span>
                    ))}
                  </div>

                  {/* Bookmark Button */}
                  <button 
                    onClick={() => toggleBookmark(q.id)} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                    title={isBookmarked ? "Remove Bookmark" : "Bookmark Question"}
                  >
                    <svg style={{ width: '22px', height: '22px', fill: isBookmarked ? 'var(--secondary)' : 'none', stroke: 'var(--text-muted)', strokeWidth: '2px' }} viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                    </svg>
                  </button>
                </div>

                {/* Question Text */}
                <p style={{ fontSize: '1.05rem', fontWeight: '500', marginBottom: '20px', whiteSpace: 'pre-line', color: 'var(--text-main)' }}>
                  {isBilingual && q.hindiQuestionText ? q.hindiQuestionText : q.questionText}
                </p>

                {/* Options List */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '20px' }}>
                  {(isBilingual && q.hindiOptions ? q.hindiOptions : q.options).map((option, oIdx) => {
                    const isSelected = state.selected === oIdx;
                    const isCorrect = oIdx === q.correctOption;
                    
                    let optionBg = 'var(--bg-card)';
                    let optionBorder = 'var(--border-color)';

                    if (reveal) {
                      if (isCorrect) {
                        optionBg = 'var(--success-bg)';
                        optionBorder = 'var(--success)';
                      } else if (isSelected) {
                        optionBg = 'var(--error-bg)';
                        optionBorder = 'var(--error)';
                      }
                    } else if (isSelected) {
                      optionBg = 'rgba(245, 166, 35, 0.1)';
                      optionBorder = 'var(--secondary)';
                    }

                    return (
                      <div 
                        key={oIdx}
                        onClick={() => handleSelectOption(q.id, oIdx)}
                        style={{
                          padding: '14px 18px',
                          borderRadius: 'var(--radius-md)',
                          border: `1px solid ${optionBorder}`,
                          backgroundColor: optionBg,
                          cursor: reveal ? 'default' : 'pointer',
                          display: 'flex',
                          gap: '12px',
                          alignItems: 'center',
                          transition: 'all var(--transition-fast)'
                        }}
                      >
                        {/* Radio circle visual */}
                        <div style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          border: `2px solid ${isSelected || (reveal && isCorrect) ? 'var(--secondary)' : 'var(--text-light)'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          {(isSelected || (reveal && isCorrect)) && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: isCorrect ? 'var(--success)' : 'var(--secondary)' }} />}
                        </div>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{option}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Bar: Action buttons and details */}
                <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {/* Attempt mode actions */}
                    {!studyMode && !state.submitted && (
                      <button 
                        onClick={() => handleSubmitAnswer(q.id)} 
                        className="btn btn-primary btn-sm"
                        disabled={state.selected === null}
                      >
                        Submit Answer
                      </button>
                    )}
                    {!studyMode && state.submitted && (
                      <button onClick={() => handleResetAnswer(q.id)} className="btn btn-outline btn-sm">
                        Retry Question
                      </button>
                    )}
                    <button 
                      onClick={() => alert("Question reported. Our subject experts will review the data details within 24 hours.")} 
                      className="btn btn-outline btn-sm" 
                      style={{ color: 'var(--error)' }}
                    >
                      Report Error
                    </button>
                  </div>
                  
                  {q.timesAsked && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      🔥 Topic asked <strong>{q.timesAsked} times</strong> in past exams
                    </span>
                  )}
                </div>

                {/* Collapsible Explanations Box */}
                {reveal && (
                  <div style={{
                    marginTop: '20px',
                    padding: '16px',
                    backgroundColor: 'var(--bg-main)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--success)',
                    animation: 'fadeIn 0.25s ease-out'
                  }}>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '6px', color: 'var(--success)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span>✓</span> Solution Explanation:
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-main)', whiteSpace: 'pre-line' }}>
                      {isBilingual && q.hindiExplanation ? q.hindiExplanation : q.explanation}
                    </p>
                    
                    {q.shortcut && (
                      <div style={{
                        marginTop: '12px',
                        padding: '10px',
                        backgroundColor: 'rgba(245, 166, 35, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px dashed var(--secondary)'
                      }}>
                        <strong style={{ color: 'var(--warning)', fontSize: '0.8rem', display: 'block', marginBottom: '2px' }}>
                          ⚡ Exam Shortcut Formula / Strategy:
                        </strong>
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-main)' }}>{q.shortcut}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
