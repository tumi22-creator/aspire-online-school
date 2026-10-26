
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  TrendingUp,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const lessons = [
  { subject: "Mathematics", title: "Introduction to algebra", progress: 72, color: "blue" },
  { subject: "English", title: "Reading and comprehension", progress: 48, color: "gold" },
  { subject: "Natural Sciences", title: "Understanding ecosystems", progress: 85, color: "green" },
];

export default function StudentDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-shell">
      <aside className={`dashboard-sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <Link to="/" className="brand dashboard-brand">
          <span className="brand-icon"><GraduationCap size={25} /></span>
          <span><strong>Aspire</strong><small>LEARNER PORTAL</small></span>
        </Link>

        <p className="sidebar-label">WORKSPACE</p>
        <a href="#overview" className="sidebar-link sidebar-active" onClick={() => setMenuOpen(false)}>
          <LayoutDashboard size={18} /> Overview
        </a>
        <a href="#courses" className="sidebar-link" onClick={() => setMenuOpen(false)}>
          <BookOpen size={18} /> My courses
        </a>
        <a href="#schedule" className="sidebar-link" onClick={() => setMenuOpen(false)}>
          <CalendarDays size={18} /> My schedule
        </a>
        <a href="#reports" className="sidebar-link" onClick={() => setMenuOpen(false)}>
          <TrendingUp size={18} /> Progress reports
        </a>

        <div className="sidebar-bottom">
          <a href="#profile" className="sidebar-link"><Settings size={18} /> Settings</a>
          <button className="sidebar-link sidebar-logout" onClick={() => navigate("/login")}>
            <LogOut size={18} /> Exit demonstration
          </button>
        </div>
      </aside>

      {menuOpen && (
        <button
          className="sidebar-overlay"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="dashboard-main" id="overview">
        <header className="dashboard-topbar">
          <button
            className="dashboard-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <Menu />
          </button>

          <div className="breadcrumb">Learner portal <span>/</span> Overview</div>

          <div className="dashboard-user">
            <div className="avatar"><UserRound size={20} /></div>
            <div><strong>Demo Learner</strong><small>Student account</small></div>
          </div>
        </header>

        <div className="dashboard-content">
          <div className="dashboard-welcome">
            <div>
              <span className="eyebrow">YOUR LEARNING SPACE</span>
              <h1>Welcome back, Learner!</h1>
              <p>Keep moving forward. Every lesson brings you closer to your goals.</p>
            </div>
            <div className="welcome-cap"><GraduationCap size={42} /></div>
          </div>

          <div className="dashboard-stats">
            <article className="stat-card">
              <span className="stat-icon stat-blue"><BookOpen /></span>
              <span className="stat-label">Enrolled courses</span>
              <strong>3</strong>
              <small>Sample course data</small>
            </article>
            <article className="stat-card">
              <span className="stat-icon stat-green"><CheckCircle2 /></span>
              <span className="stat-label">Completed lessons</span>
              <strong>12</strong>
              <small>Illustrative progress</small>
            </article>
            <article className="stat-card">
              <span className="stat-icon stat-gold"><Clock3 /></span>
              <span className="stat-label">Learning hours</span>
              <strong>18.5</strong>
              <small>Example activity summary</small>
            </article>
          </div>

          <section className="dashboard-section" id="courses">
            <div className="dashboard-section-heading">
              <div><h2>Continue learning</h2><p>Pick up where you left off.</p></div>
              <span className="demo-tag">DEMO DATA</span>
            </div>

            <div className="dashboard-course-list">
              {lessons.map((lesson) => (
                <article className="dashboard-course" key={lesson.subject}>
                  <div className={`dashboard-course-icon ${lesson.color}`}>
                    <BookOpen size={22} />
                  </div>
                  <div className="dashboard-course-info">
                    <span>{lesson.subject}</span>
                    <h3>{lesson.title}</h3>
                    <div className="progress-track">
                      <span style={{ width: `${lesson.progress}%` }} />
                    </div>
                    <small>{lesson.progress}% completed</small>
                  </div>
                  <button
                    className="course-continue"
                    onClick={() => alert("Demo only. Course content will be connected to the backend later.")}
                  >
                    Continue <span>→</span>
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="dashboard-section" id="schedule">
            <div className="dashboard-section-heading">
              <div><h2>Learning reminders</h2><p>Example tasks for your next study session.</p></div>
            </div>
            <div className="reminder-card">
              <CalendarDays size={22} />
              <div><strong>Plan your next study session</strong><p>Choose a subject and set aside time to learn.</p></div>
            </div>
          </section>

          <section className="dashboard-section" id="reports">
            <div className="dashboard-section-heading">
              <div><h2>Progress reports</h2><p>Your academic progress will appear here.</p></div>
            </div>
            <div className="reminder-card">
              <TrendingUp size={22} />
              <div><strong>Progress tracking preview</strong><p>Real results and report cards will be provided by the school backend.</p></div>
            </div>
          </section>

          <footer className="dashboard-footer">
            <Link to="/"><ArrowLeft size={15} /> Return to public website</Link>
            <span>Illustrative interface · Not connected to student records</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
