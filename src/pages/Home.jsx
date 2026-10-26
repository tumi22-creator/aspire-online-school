
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Laptop,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <Sparkles size={15} />
                YOUR FUTURE STARTS HERE
              </span>

              <h1>
                Education that moves you <span>forward.</span>
              </h1>

              <p className="hero-description">
                Discover a flexible learning experience designed to help
                learners grow in knowledge, confidence and ambition.
              </p>

              <div className="hero-actions">
                <Button to="/login">
                  Access learner portal <ArrowRight size={18} />
                </Button>
                <Button to="/#programmes" variant="outline">
                  Explore programmes
                </Button>
              </div>

              <div className="hero-points">
                <span><CheckCircle2 size={17} /> Flexible learning</span>
                <span><CheckCircle2 size={17} /> Learner-focused</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-decoration decoration-one" />
              <div className="hero-decoration decoration-two" />

              <div className="learning-card">
                <div className="learning-card-top">
                  <div className="learning-logo">
                    <GraduationCap size={25} />
                  </div>
                  <div>
                    <strong>Your learning journey</strong>
                    <p>A space to grow and achieve</p>
                  </div>
                </div>

                <div className="learning-illustration">
                  <div className="illustration-orbit orbit-one" />
                  <div className="illustration-orbit orbit-two" />
                  <div className="book-stack">
                    <div className="book book-back" />
                    <div className="book book-middle" />
                    <div className="book book-front">
                      <BookOpen size={42} />
                    </div>
                  </div>
                  <div className="floating-icon float-laptop">
                    <Laptop size={23} />
                  </div>
                  <div className="floating-icon float-cap">
                    <GraduationCap size={24} />
                  </div>
                  <div className="floating-icon float-check">
                    <CheckCircle2 size={22} />
                  </div>
                </div>

                <div className="learning-card-bottom">
                  <div>
                    <span className="muted-label">YOUR NEXT CHAPTER</span>
                    <strong>Start with Aspire</strong>
                  </div>
                  <span className="round-arrow"><ArrowRight size={19} /></span>
                </div>
              </div>

              <div className="floating-note note-top">
                <span className="note-icon"><BookOpen size={19} /></span>
                <span><strong>Keep learning</strong><small>One step at a time</small></span>
              </div>

              <div className="floating-note note-bottom">
                <span className="note-icon note-gold"><Sparkles size={19} /></span>
                <span><strong>Your future</strong><small>Starts with a goal</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div><BookOpen /><span><strong>Learning resources</strong><small>Access learning materials</small></span></div>
            <div><Clock3 /><span><strong>Flexible approach</strong><small>Designed around learning</small></span></div>
            <div><Users /><span><strong>Connected community</strong><small>Support for learners and families</small></span></div>
            <div><ShieldCheck /><span><strong>Student-focused</strong><small>A platform built for learning</small></span></div>
          </div>
        </section>

        <section className="section programmes" id="programmes">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">EXPLORE YOUR OPTIONS</span>
                <h2>A learning path for every ambition.</h2>
                <p>
                  Explore the possibilities and discover a path that fits
                  your educational goals.
                </p>
              </div>
              <Button to="/login" variant="text">
                Learner portal <ArrowRight size={17} />
              </Button>
            </div>

            <div className="course-grid">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>

        <section className="section why-section" id="why-aspire">
          <div className="container why-grid">
            <div className="why-copy">
              <span className="eyebrow">THE ASPIRE APPROACH</span>
              <h2>More than lessons. A foundation for the future.</h2>
              <p>
                Learning should give students the tools to think critically,
                explore their interests and work towards their goals.
              </p>

              <div className="benefit">
                <span className="benefit-icon"><Laptop /></span>
                <div>
                  <h3>A connected learning experience</h3>
                  <p>Bring learning resources and progress into one place.</p>
                </div>
              </div>

              <div className="benefit">
                <span className="benefit-icon"><Users /></span>
                <div>
                  <h3>Support for every journey</h3>
                  <p>Design a learning experience that considers learners and families.</p>
                </div>
              </div>

              <div className="benefit">
                <span className="benefit-icon"><GraduationCap /></span>
                <div>
                  <h3>Focused on achievement</h3>
                  <p>Help learners keep track of their educational journey.</p>
                </div>
              </div>
            </div>

            <div className="why-visual">
              <div className="why-big-icon"><GraduationCap size={78} /></div>
              <span className="why-orbit orbit-a" />
              <span className="why-orbit orbit-b" />
              <div className="why-caption">
                <Sparkles size={19} />
                <span><strong>Dream. Learn. Achieve.</strong><small>Make room for what comes next.</small></span>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-content">
            <div>
              <span className="eyebrow eyebrow-light">YOUR NEXT STEP</span>
              <h2>Ready to begin your learning journey?</h2>
              <p>Take the next step and explore the Aspire learning experience.</p>
            </div>
            <Button to="/login" variant="light">
              Enter the portal <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <a className="brand footer-brand" href="/">
            <span className="brand-icon"><GraduationCap size={24} /></span>
            <span><strong>Aspire</strong><small>ONLINE SCHOOL</small></span>
          </a>
          <p>Supporting every step of the learning journey.</p>
          <span>© {new Date().getFullYear()} Aspire Online School</span>
        </div>
      </footer>
    </>
  );
}
