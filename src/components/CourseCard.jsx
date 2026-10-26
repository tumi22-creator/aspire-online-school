
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({
  level,
  title,
  description,
  icon: Icon,
  color = "blue",
}) {
  return (
    <article className="course-card">
      <div className={`course-card-icon ${color}`}>
        {Icon && <Icon size={28} />}
      </div>

      <span className="course-level">{level}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <Link to="/login" className="course-link">
        Explore programme <ArrowRight size={16} />
      </Link>
    </article>
  );
}
