
import React from "react";
import courses from "../DATA/course.json";

const AllCourses = () => {
  return (
    <div className="container">
      <h1>All Courses</h1>
      <div className="card-container">
        {courses.map((course) => (
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
export default AllCourses;
