import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const BlogCard = ({ blog, blogs, setBlogs }) => {
  const {
    _id,
    title,
    content,
    location,
    dateOfTravel,
    category,
    details,
    photoURL,
  } = blog;
  const [showFullDetails, setShowFullDetails] = useState(false);

  // Delete from the database
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/blog/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Blog has been deleted.",
                icon: "success",
              });
              setBlogs(blogs.filter((blog) => blog._id !== _id));
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the blog. Please try again.",
              icon: "error",
            });
            console.error("Error deleting blog:", error);
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-sm p-4 flex flex-col md:flex-row">
      <figure className="flex-shrink-0">
        <img
          src={photoURL || "https://via.placeholder.com/300"}
          alt="Blog"
          className="w-96 h-96 object-cover"
        />
      </figure>
      <div className="flex flex-col justify-between w-full p-4">
        <div>
          <h2 className="card-title">{title}</h2>
          <p>
            {showFullDetails ? details : `${details.slice(0, 400)}...`}
            <button
              onClick={() => setShowFullDetails(!showFullDetails)}
              className="text-blue-500 ml-2"
            >
              {showFullDetails ? "See Less" : "See More"}
            </button>
          </p>
          <p>
            <strong>Content:</strong> {content}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Date of Travel:</strong> {dateOfTravel}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
        </div>
        <div className="card-actions mt-4">
          <div className="flex flex-col gap-3">
            <button className="btn bg-lime-300">View</button>
            <Link to={`/updateBlog/${_id}`}>
              <button className="btn bg-orange-300">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
