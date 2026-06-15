import React, { useState, useEffect } from 'react';
import { examsData } from '../data/examsData';
import { currentAffairsData } from '../data/currentAffairsData';
import { questionsData } from '../data/questionsData';

export default function HomeView({ navigate, notifications, streak, incrementStreak, addQuizScore }) {
  const [timeLefts, setTimeLefts] = useState({});
  const [activeTab, setActiveTab] = useState('notifications'); // 'notifications' | 'current-affairs'
  const [isBilingual, setIsBilingual] = useState(false);

  // Daily Mini Quiz State
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);

  // Generate 10-question Mini Quiz (combines Static Question bank and Current Affairs Quiz)
  const startQuiz = () => {
    // Pick 6 static questions + 4 Current Affairs questions
    const staticSample = [...questionsData].sort(() => 0.5 - Math.random()).slice(0, 6);
    const caSample = currentAffairsData.quiz.map((q, idx) => ({
      id: `ca-q-${idx}`,
      exams: ["all"],
      section: "Current Affairs",
      topic: "June 2026 CA",
      difficulty: "Medium",
      questionType: "MCQ",
      questionText: q.question,
      options: q.options,
      correctOption: q.correct,
      explanation: q.explanation,
      hindiQuestionText: q.question, // Fallback for CA
      hindiOptions: q.options
    }));
    const combined = [...staticSample, ...caSample].sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuizQuestions(combined);
    setQuizStarted(true);
    setCurrentQuizIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
  };

  const handleOptionSelect = (optIdx) => {
    if (isSubmitted) return;
    setSelectedOption(optIdx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || isSubmitted) return;
    setIsSubmitted(true);
    const currentQ = quizQuestions[currentQuizIndex];
    if (selectedOption === currentQ.correctOption) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuizIndex < 9) {
      setCurrentQuizIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      // Quiz complete
      addQuizScore({
        date: new Date().toLocaleDateString(),
        score: score + (selectedOption === quizQuestions[currentQuizIndex].correctOption ? 1 : 0),
        total: 10
      });
      incrementStreak();
      setQuizStarted(false);
      alert(`Quiz Completed! You scored ${score + (selectedOption === quizQuestions[currentQuizIndex].correctOption ? 1 : 0)} out of 10. Consecutive prep streak increased!`);
    }
  };

  // Timers countdown effect
  useEffect(() => {
    const calculateAllTimers = () => {
      const updated = {};
      Object.values(examsData).forEach(exam => {
        const diff = +new Date(exam.countdownTarget) - +new Date();
        if (diff <= 0) {
          updated[exam.id] = { days: 0, hours: 0, mins: 0, secs: 0 };
        } else {
          updated[exam.id] = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            mins: Math.floor((diff / 1000 / 60) % 60),
            secs: Math.floor((diff / 1000) % 60)
          };
        }
      });
      setTimeLefts(updated);
    };

    calculateAllTimers();
    const interval = setInterval(calculateAllTimers, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container animated-fadeIn">
      {/* Hero Welcome banner */}
      <div className="card card-glass text-center" style={{
        padding: '40px 24px',
        marginBottom: '32px',
        background: 'linear-gradient(135deg, rgba(26, 46, 82, 0.05) 0%, rgba(245, 166, 35, 0.05) 100%)',
        border: '1px solid var(--border-color)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--primary)' }}>
          Welcome back, Aspirant!
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 20px' }}>
          Your active study streak is <strong style={{ color: 'var(--secondary)' }}>🔥 {streak} Days</strong>. Keep practicing to unlock your dream government job in 2026.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={() => navigate('qbank')} className="btn btn-primary">Practice Questions</button>
          <button onClick={() => navigate('mock')} className="btn btn-secondary">Attempt Full Mock</button>
        </div>
      </div>

      {/* Grid of countdowns & daily actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', marginBottom: '40px' }} className="grid-responsive">
        
        {/* Left Side: Exam Timers & Core grids */}
        <div>
          <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg style={{ width: '24px', height: '24px', fill: 'var(--secondary)' }} viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.3L11 13V7h1.5v5.25l4.05 2.45-.76 1.3z" />
            </svg>
            Exam Countdowns
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '32px' }} className="grid-2">
            {Object.values(examsData).map(exam => {
              const timer = timeLefts[exam.id] || { days: 0, hours: 0, mins: 0, secs: 0 };
              return (
                <div key={exam.id} className="card" onClick={() => navigate('exam', { examId: exam.id })} style={{ cursor: 'pointer' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.15rem' }}>{exam.name}</h3>
                    <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>{exam.vacancies} Vacancies</span>
                  </div>
                  
                  {/* Timer display */}
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <div style={{ textAlign: 'center', flex: 1, background: 'var(--bg-main)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{timer.days}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Days</span>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1, background: 'var(--bg-main)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{timer.hours}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Hrs</span>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1, background: 'var(--bg-main)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{timer.mins}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Mins</span>
                    </div>
                    <div style={{ textAlign: 'center', flex: 1, background: 'var(--bg-main)', padding: '6px', borderRadius: 'var(--radius-sm)' }}>
                      <span style={{ display: 'block', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--secondary)' }}>{timer.secs}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Secs</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Today's study recommendations */}
          <div className="card shadow-sm" style={{ marginBottom: '32px' }}>
            <h3 style={{ marginBottom: '12px', color: 'var(--primary)' }}>💡 What to Study Today</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Based on upcoming exam dates and weightage, we suggest focusing on these high-overlap subjects today:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ border: '1px solid var(--border-color)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: 'var(--secondary)', width: '8px', height: '8px', borderRadius: '50%' }}></span>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Syllogism (All Exams)</span>
              </div>
              <div style={{ border: '1px solid var(--border-color)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: 'var(--success)', width: '8px', height: '8px', borderRadius: '50%' }}></span>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>SQL & Joins (IT/CS CIL)</span>
              </div>
              <div style={{ border: '1px solid var(--border-color)', padding: '8px 12px', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ backgroundColor: 'var(--primary)', width: '8px', height: '8px', borderRadius: '50%' }}></span>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>RBI Monetary Policy (Banking)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Panels: Interactive Daily Quiz & Updates Tabs */}
        <div>
          {/* Daily Quiz Card */}
          <div className="card shadow-lg pulse-border" style={{ 
            marginBottom: '32px', 
            background: quizStarted ? 'var(--bg-card)' : 'linear-gradient(to bottom, var(--primary), var(--primary-light))', 
            color: quizStarted ? 'var(--text-main)' : '#ffffff' 
          }}>
            {!quizStarted ? (
              <div style={{ textAlign: 'center', padding: '12px 0' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '8px' }}>📝</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Daily Mini Quiz</h3>
                <p style={{ fontSize: '0.85rem', opacity: 0.85, marginBottom: '20px' }}>
                  Boost your accuracy! 10 quick mixed questions with instant explanations.
                </p>
                <button onClick={startQuiz} className="btn btn-secondary w-full">Start Today's Quiz</button>
              </div>
            ) : (
              <div>
                {/* Quiz Active Header */}
                <div className="flex items-center justify-between" style={{ marginBottom: '14px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Question {currentQuizIndex + 1} of 10</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button 
                      onClick={() => setIsBilingual(!isBilingual)} 
                      className="btn btn-outline btn-sm"
                      style={{ padding: '2px 8px', fontSize: '0.7rem' }}
                    >
                      {isBilingual ? 'English' : 'हिंदी'}
                    </button>
                    <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 'bold' }}>Score: {score}</span>
                  </div>
                </div>

                {/* Question Area */}
                <div>
                  <span className="badge badge-primary" style={{ marginBottom: '8px', fontSize: '0.6rem' }}>
                    {quizQuestions[currentQuizIndex]?.section} - {quizQuestions[currentQuizIndex]?.topic}
                  </span>
                  <p style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '16px', whiteSpace: 'pre-line' }}>
                    {isBilingual ? quizQuestions[currentQuizIndex]?.hindiQuestionText : quizQuestions[currentQuizIndex]?.questionText}
                  </p>

                  {/* Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                    {(isBilingual ? quizQuestions[currentQuizIndex]?.hindiOptions : quizQuestions[currentQuizIndex]?.options).map((opt, oIdx) => {
                      const isCorrect = oIdx === quizQuestions[currentQuizIndex].correctOption;
                      const isSelected = oIdx === selectedOption;
                      
                      let optionBg = 'var(--bg-main)';
                      let optionBorder = 'var(--border-color)';
                      if (isSubmitted) {
                        if (isCorrect) {
                          optionBg = 'var(--success-bg)';
                          optionBorder = 'var(--success)';
                        } else if (isSelected) {
                          optionBg = 'var(--error-bg)';
                          optionBorder = 'var(--error)';
                        }
                      } else if (isSelected) {
                        optionBg = 'rgba(245, 166, 35, 0.15)';
                        optionBorder = 'var(--secondary)';
                      }

                      return (
                        <div 
                          key={oIdx}
                          onClick={() => handleOptionSelect(oIdx)}
                          style={{
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-sm)',
                            border: `1px solid ${optionBorder}`,
                            backgroundColor: optionBg,
                            cursor: isSubmitted ? 'default' : 'pointer',
                            fontSize: '0.85rem',
                            display: 'flex',
                            gap: '10px',
                            transition: 'all var(--transition-fast)'
                          }}
                        >
                          <span style={{ fontWeight: 'bold' }}>{String.fromCharCode(65 + oIdx)}.</span>
                          <span>{opt}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanations reveals */}
                  {isSubmitted && (
                    <div style={{
                      backgroundColor: 'rgba(0,0,0,0.02)',
                      borderLeft: '3px solid var(--secondary)',
                      padding: '10px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.8rem',
                      marginBottom: '16px',
                      color: 'var(--text-muted)'
                    }}>
                      <strong>Explanation:</strong> {isBilingual ? quizQuestions[currentQuizIndex]?.hindiExplanation || quizQuestions[currentQuizIndex]?.explanation : quizQuestions[currentQuizIndex]?.explanation}
                    </div>
                  )}

                  {/* Actions */}
                  {!isSubmitted ? (
                    <button 
                      onClick={handleSubmitAnswer} 
                      className="btn btn-primary w-full"
                      disabled={selectedOption === null}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button onClick={handleNextQuestion} className="btn btn-secondary w-full">
                      {currentQuizIndex < 9 ? 'Next Question' : 'View Results'}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Announcement Updates Tabs */}
          <div className="card shadow-sm" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '14px' }}>
              <button 
                onClick={() => setActiveTab('notifications')} 
                style={{
                  flex: 1,
                  padding: '8px 0',
                  border: 'none',
                  background: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  borderBottom: activeTab === 'notifications' ? '2px solid var(--secondary)' : 'none',
                  color: activeTab === 'notifications' ? 'var(--text-main)' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                Announcements
              </button>
              <button 
                onClick={() => setActiveTab('current-affairs')} 
                style={{
                  flex: 1,
                  padding: '8px 0',
                  border: 'none',
                  background: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  borderBottom: activeTab === 'current-affairs' ? '2px solid var(--secondary)' : 'none',
                  color: activeTab === 'current-affairs' ? 'var(--text-main)' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                Current Affairs
              </button>
            </div>

            {activeTab === 'notifications' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {notifications.slice(0, 4).map((notif, idx) => (
                  <div key={idx} style={{ paddingBottom: '12px', borderBottom: idx < 3 ? '1px dashed var(--border-color)' : 'none' }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                      <span className={`badge ${
                        notif.type === 'Result Out' ? 'badge-easy' : notif.type === 'New' ? 'badge-hard' : 'badge-medium'
                      }`} style={{ fontSize: '0.55rem' }}>{notif.type}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{notif.date}</span>
                    </div>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: '600' }}>{notif.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{notif.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {currentAffairsData.capsules.map((ca) => (
                  <div key={ca.id} style={{ paddingBottom: '12px', borderBottom: '1px dashed var(--border-color)' }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '4px' }}>
                      <span className="badge badge-primary" style={{ fontSize: '0.55rem' }}>{ca.category}</span>
                      <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{ca.date}</span>
                    </div>
                    <h4 style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--primary)' }}>{ca.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                      {ca.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
