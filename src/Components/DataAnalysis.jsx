import React from "react";
import courses from "../DATA/course.json";

const DataAnalysis = () => {
  const dataAnalysisCourses = courses.filter(
    (course) => course.category === "Data Analysis"
  );

  return (
    <div className="container">
      <h1>Data Analysis Courses</h1>
      <div className="card-container">
        {dataAnalysisCourses.map((course) => (
          <div key={course.course_id} className="card">
            <a href={course.thumbnail_url}>{course.course_name}</a>
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

export default DataAnalysis;
