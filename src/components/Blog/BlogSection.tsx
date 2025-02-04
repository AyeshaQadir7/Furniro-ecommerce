"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Tag, User } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

// Fetch blog data from Sanity
async function fetchBlogData() {
  const query = `*[_type == "blog"] | order(publishedDate desc) {
    _id,
    title,
    description,
    publishedDate,
    category,
    admin,
    mainImage
  }`;
  return client.fetch(query);
}

function BlogSection() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const blogData = await fetchBlogData();
      setBlogs(blogData);
    }
    getData();
  }, []);

  const recentPosts = blogs.slice(0, 2);

  return (
    <div className="container mx-auto my-8 px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <section className="lg:col-span-2">
          <div className="grid gap-8">
            {/* Blog Post */}
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <Image
                  src={urlFor(blog.mainImage).url()}
                  width={800}
                  height={400}
                  alt={blog.title}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{blog.admin || "Admin"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>
                        {new Date(blog.publishedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag size={16} />
                      <span>{blog.category}</span>
                    </div>
                  </div>
                  <Link href={"/blog"}>
                    <button className=" py-2 text-black underline hover:text-gray-900">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Right Section */}
        <aside className="space-y-8">
          {/* Search Bar */}
          <div className="">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {Array.from(new Set(blogs.map((blog) => blog.category))).map(
                (category) => (
                  <li
                    key={category}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
            <ul className="space-y-6">
              {recentPosts.map((post) => (
                <li key={post._id} className="flex gap-4">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    width={100}
                    height={100}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="text-lg font-semibold">{post.title}</h4>
                    <p className="text-gray-600 text-sm">{post.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default BlogSection;
