import React, { useEffect, useState } from "react"; // Moved React import to start
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Spinner from "./components/Loading";
import Cards from "./components/Cards";
import { toast } from "react-toastify";

export default function App() {
  const [courses, setCourses] = useState([]); // Initialize with empty array
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [error, setError] = useState(false); // Added error state

  async function fetchData() {
    setLoading(true);

    try {
      const res = await fetch(apiUrl);
      if (res.status === 404) { // Check for 404 error
        setError(true); // Set error state to true
        setLoading(false);
        return;
      }
      const output = await res.json();
      setCourses(output.data); // Given key value is 'data' in API which has other keys like 'title', 'image', 'desc'
      toast.success("Data fetched");
    } catch (error) {
      toast.error("Something went wrong!");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-[#5c6078]">
      <h1 className="w-full text-white text-[2rem] p-3 font-bold text-center bg-[#182344]">Top Courses</h1>

      <Filter filterData={filterData} category={category} setCategory={setCategory} />

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (
            <Spinner />
          ) : error ? (
            <div className="text-white text-center">404 - No data found</div> // Show error message
          ) : (
            <Cards courses={courses} category={category} />
          )
        }
      </div>
    </div>
  );
}