import React from "react";
import { useParams } from "react-router-dom";
import Data from "../DATA/course.json";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = Data.find((c) => c.course_id === parseInt(courseId));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h2>{course.course_name}</h2>
      <p>{course.description}</p>
      <p>
        <b>Authored by:</b> {course.authored_by}
      </p>
      <p>
        <b>Price: </b>₹ {course.price}
      </p>
      <a href={course.thumbnail_url}>View Course</a>
    </div>
  );
};

export default CourseDetail;
