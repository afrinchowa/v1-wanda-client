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
 

  return (
    <div className="card card-side bg-base-100 shadow-sm p-4">
      <figure>
        <img src={photoURL} alt="Blog" className="w-96 h-96 object-cover" />
      </figure>
      <div className="flex justify-between items-center w-full p-4">
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
          <p>{content}</p>
          <p>{location}</p>
          <p>{dateOfTravel}</p>
          <p>{category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn bg-lime-300">View</button>
            <Link to={`/updateBlog/${_id}`}>
              <button className="btn bg-orange-300">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
