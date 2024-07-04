import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Card({ course, likedCourses, setLikedCourses }) {

  function handleLike() {
    
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
      toast.warning("Like removed");
    } else {
      // Not liked before
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="flex flex-col my-2 gap-4 w-full md:w-[30%] rounded-md overflow-hidden bg-[#182344] transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="relative">
        <img src={course.image.url} alt={course.title} className="transition-opacity duration-500 ease-in-out" />

        <div className="absolute rounded-full w-[40px] h-[40px] flex right-2 bottom-3 justify-center items-center bg-white">
          <button onClick={handleLike}>
            {
              likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
            }
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4 text-white">
        <p className="font-bold">{course.title}</p>
        <p className="opacity-90 text-[0.9rem]">
          {
            course.description.length > 100 ? course.description.substring(0, 100) + "..." : course.description
          }
        </p>
      </div>
    </div>
  );
}
