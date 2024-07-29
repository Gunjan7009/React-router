import React, { useState } from "react";
import Data from "../DATA/course.json";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Group courses by category
  const groupedData = Data.reduce((acc, course) => {
    (acc[course.category] = acc[course.category] || []).push(course);
    return acc;
  }, {});

  // Get all unique categories
  const categories = ["All", ...new Set(Data.map((course) => course.category))];

  return (
    <div className="course-container">
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {Object.entries(groupedData).map(
        ([category, courses]) =>
          (selectedCategory === "All" || selectedCategory === category) && (
            <div key={category} className="category-group">
              <h2 className="category-title">{category}</h2>
              <div className="courses">
                {courses.map((course) => (
                  <div className="course-card" key={course.course_id}>
                    <h2>{course.course_name}</h2>
                    <p>{course.description}</p>
                    <p>
                      <b>Authored by:</b> {course.authored_by}
                    </p>
                    <p>
                      <b>Price: </b>₹ {course.price}
                    </p>
                    <Link to={`/course/${course.course_id}`}>Go to Course</Link>
                  </div>
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CourseCard;
