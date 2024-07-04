import { useState } from "react";
import Card from "./Card";

export default function Cards({ courses, category }) {
  let allCourses = [];
  const [likedCourses, setLikedCourses] = useState([]);

  // To convert the API data into a single array from multiple objects
  function getCourses() {
    if (category === "All") {
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="w-full flex flex-wrap justify-center mb-6 gap-4 transition-all duration-500 ease-in-out">
      {
        getCourses().map((course) => {
          return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
        })
      }
    </div>
  );
}