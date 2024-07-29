import React from "react";
import courses from "../DATA/course.json";

const SQL = () => {
  const sqlCourses = courses.filter((course) => course.category === "SQL");

  return (
    <div className="container">
      <h1>SQL Courses</h1>
      <div className="card-container">
        {sqlCourses.map((course) => (
          <div key={course.course_id} className="card">
            <a href={course.thumbnail_url} target="_self">
              {course.course_name}
            </a>
            <p>{course.description}</p>
            <p>
              <b>Author:</b> {course.authored_by}
            </p>
            <p>
              <b>Price: </b>
              {course.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SQL;
