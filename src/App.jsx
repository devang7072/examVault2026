import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ExamHubView from './components/ExamHubView';
import QuestionBankView from './components/QuestionBankView';
import MockTestView from './components/MockTestView';
import DashboardView from './components/DashboardView';
import AdminView from './components/AdminView';
import NotificationsView from './components/NotificationsView';
import ResourcesView from './components/ResourcesView';

export default function App() {
  // Global Persisted States
  const [bookmarks, setBookmarks] = useState(() => 
    JSON.parse(localStorage.getItem('bookmarks') || '[]')
  );
  
  const [streak, setStreak] = useState(() => 
    parseInt(localStorage.getItem('streak') || '3') // starts at 3 days to feel alive
  );

  const [mockHistory, setMockHistory] = useState(() => 
    JSON.parse(localStorage.getItem('mockHistory') || '[]')
  );

  const [customQuestions, setCustomQuestions] = useState(() => 
    JSON.parse(localStorage.getItem('customQuestions') || '[]')
  );

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    if (saved) return JSON.parse(saved);
    return [
      { type: 'New', title: 'SSC CGL 2026 Notification Released!', text: 'Official SSC vacancy count stands at 12,256 posts. Online registration is open from 21 May to 22 June 2026.', date: '21 May 2026', read: false },
      { type: 'Result Out', title: 'RBI Assistant 2026 Phase 2 Mains Result Out!', text: 'Final merit lists compiled per regional office. Language Proficiency Tests (LPT) scheduled for next week.', date: '7 June 2026', read: false },
      { type: 'New', title: 'Coal India MT Systems (Ad. 03/2026) Online Applications Open!', text: 'Applications for Grade E-1 management trainees will be accepted from 12 May to 11 June 2026.', date: '12 May 2026', read: true }
    ];
  });

  // Routing State
  const [currentView, setCurrentView] = useState({ page: 'home', examId: null });
  const [searchParams, setSearchParams] = useState(null);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('streak', streak.toString());
  }, [streak]);

  useEffect(() => {
    localStorage.setItem('mockHistory', JSON.stringify(mockHistory));
  }, [mockHistory]);

  useEffect(() => {
    localStorage.setItem('customQuestions', JSON.stringify(customQuestions));
  }, [customQuestions]);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  // URL Hash-Based Routing Listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/exam/')) {
        const examId = hash.replace('#/exam/', '');
        setCurrentView({ page: 'exam', examId });
      } else if (hash === '#/qbank') {
        setCurrentView({ page: 'qbank' });
      } else if (hash === '#/mock') {
        setCurrentView({ page: 'mock' });
      } else if (hash === '#/dashboard') {
        setCurrentView({ page: 'dashboard' });
      } else if (hash === '#/admin') {
        setCurrentView({ page: 'admin' });
      } else if (hash === '#/alerts') {
        setCurrentView({ page: 'alerts' });
      } else if (hash === '#/wiki') {
        setCurrentView({ page: 'wiki' });
      } else {
        setCurrentView({ page: 'home', examId: null });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Trigger on first mount
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (page, params = {}) => {
    let hash = '#/home';
    if (page === 'exam') hash = `#/exam/${params.examId}`;
    else if (page === 'qbank') hash = '#/qbank';
    else if (page === 'mock') hash = '#/mock';
    else if (page === 'dashboard') hash = '#/dashboard';
    else if (page === 'admin') hash = '#/admin';
    else if (page === 'alerts') hash = '#/alerts';
    else if (page === 'wiki') hash = '#/wiki';

    setSearchParams(params);
    window.location.hash = hash;
  };

  // Helper State Mutators
  const toggleBookmark = (qId) => {
    setBookmarks(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const incrementStreak = () => {
    setStreak(prev => prev + 1);
  };

  const addMockTestResult = (result) => {
    setMockHistory(prev => [result, ...prev]);
  };

  const addCustomQuestion = (newQ) => {
    setCustomQuestions(prev => [newQ, ...prev]);
  };

  const addNotification = (newNotif) => {
    setNotifications(prev => [newNotif, ...prev]);
  };

  const clearUnreadNotifications = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navigation Shell */}
      <Navbar 
        currentView={currentView} 
        navigate={navigate} 
        notifications={notifications}
        clearUnreadNotifications={clearUnreadNotifications}
      />

      {/* Main Routed Content Area */}
      <main style={{ flex: 1, paddingBottom: '40px' }}>
        {currentView.page === 'home' && (
          <HomeView 
            navigate={navigate} 
            notifications={notifications}
            streak={streak}
            incrementStreak={incrementStreak}
            addQuizScore={(scoreObj) => {
              // Save mini quiz results to mock history to reflect in charts
              addMockTestResult({
                examName: "Daily Mini Quiz",
                totalQuestions: scoreObj.total,
                attemptedCount: scoreObj.total,
                correctCount: scoreObj.score,
                incorrectCount: scoreObj.total - scoreObj.score,
                score: scoreObj.score,
                maxScore: scoreObj.total,
                accuracy: (scoreObj.score / scoreObj.total) * 100,
                percentile: "92.4",
                sections: [
                  { name: "Mini Quiz Mixed", totalQs: scoreObj.total, attempted: scoreObj.total, correct: scoreObj.score, incorrect: scoreObj.total - scoreObj.score, score: scoreObj.score, maxScore: scoreObj.total, accuracy: (scoreObj.score / scoreObj.total) * 100 }
                ]
              });
            }}
          />
        )}

        {currentView.page === 'exam' && (
          <ExamHubView 
            examId={currentView.examId} 
            navigate={navigate} 
          />
        )}

        {currentView.page === 'qbank' && (
          <QuestionBankView 
            searchParams={searchParams}
            bookmarkedIds={bookmarks}
            toggleBookmark={toggleBookmark}
            customQuestions={customQuestions}
          />
        )}

        {currentView.page === 'mock' && (
          <MockTestView 
            navigate={navigate}
            addMockTestResult={addMockTestResult}
          />
        )}

        {currentView.page === 'dashboard' && (
          <DashboardView 
            navigate={navigate}
            bookmarkedIds={bookmarks}
            toggleBookmark={toggleBookmark}
            streak={streak}
            mockHistory={mockHistory}
          />
        )}

        {currentView.page === 'admin' && (
          <AdminView 
            addNotification={addNotification}
            addCustomQuestion={addCustomQuestion}
          />
        )}

        {currentView.page === 'alerts' && (
          <NotificationsView 
            notifications={notifications}
            clearNotifications={clearUnreadNotifications}
          />
        )}

        {currentView.page === 'wiki' && (
          <ResourcesView 
            bookmarkedIds={bookmarks}
            toggleBookmark={toggleBookmark}
          />
        )}
      </main>

      {/* Footnote details */}
      <footer style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border-color)',
        padding: '24px 0',
        textAlign: 'center',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        marginTop: 'auto'
      }}>
        <div className="container">
          <p>© 2026 ExamVault Government Preparation Platform. Built for Indian Recruitment Examinations.</p>
          <p style={{ fontSize: '0.75rem', marginTop: '6px', opacity: 0.8 }}>
            Exams Covered: Staff Selection Commission (SSC CGL) · Coal India MT (Systems) · SBI PO · IBPS PO · IBPS SO IT · RBI Assistant · SBI Clerk · NABARD Grade A
          </p>
        </div>
      </footer>

    </div>
  );
}
