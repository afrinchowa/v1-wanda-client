import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import SectionTitle from "../../../components/SectionTitle";

const BlogCards = () => {
  const loadedBlogs = useLoaderData() || [];
  const [blogs, setBlogs] = useState(
    Array.isArray(loadedBlogs) ? loadedBlogs : []
  );

  return (
    <div className="m-20">
      <SectionTitle
        heading={"Blog Section"}
        subHeading={"Let's make the imaginarie more enhanced"}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.length > 0 ? (
          blogs.map((blog) =>
            blog._id ? (
              <BlogCard
                key={blog._id}
                blog={blog}
                blogs={blogs}
                setBlogs={setBlogs}
              />
            ) : null
          )
        ) : (
          <p>No blogs available</p>
        )}
      </div>
    </div>
  );
};

export default BlogCards;
