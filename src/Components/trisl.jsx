import React, { useState } from "react";
import Data from "../DATA/course.json";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories for filtering
  const categories = ["All", ...new Set(Data.map((course) => course.category))];

  // Filter courses based on selected category
  const filteredCourses =
    selectedCategory === "All"
      ? Data
      : Data.filter((course) => course.category === selectedCategory);

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="category">Filter by category:</label>
        <select
          id="category"
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

      <div className="course-container">
        {filteredCourses.map((abc) => (
          <div className="course-card" key={abc.course_id}>
            <h2>{abc.course_name}</h2>
            <p>{abc.description}</p>
            <p>
              <b>Authored by:</b> {abc.authored_by}
            </p>
            <p>
              <b>Price: </b>₹ {abc.price}
            </p>
            <Link to={`/course/${abc.course_id}`}>View Course</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
