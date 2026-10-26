
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className={`course-card-icon ${course.color || ""}`}>
        {course.icon}
      </div>

      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <Link to="/login" className="course-link">
        Explore programme <ArrowRight size={16} />
      </Link>
    </article>
  );
}
