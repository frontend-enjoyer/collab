import { Post } from "@/types/items";
import { GetStaticPropsContext } from "next";
import tempDB from "@/utils/db.json";
import Link from "next/link";

import Image from "next/image";
import { useState } from "react";

type Props = {
  posts: Post[] | null;
};

export default function Items({ posts }: Props) {
  const [itemElements, _] = useState(posts || []);

  const [filterType, setFilterType] = useState("all");

  if (!posts) {
    return <div>Items not found</div>;
  }

  const filterPosts = (type: string) => {
    if (type === "all") {
      return posts;
    }

    return posts.filter((post) => post.type === type);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <section
        id="search-section"
        className="bg-white shadow p-6 mb-6 rounded-lg"
      >
        <form id="job-search-form" className="flex items-center justify-center">
          <input
            type="text"
            id="search-input"
            placeholder="Search for jobs..."
            className="p-2 border border-gray-300 rounded-l-md flex-grow"
          />
          <button
            type="submit"
            className="p-2 bg-green-600 text-white rounded-r-md hover:bg-green-700 transition-colors"
          >
            Search
          </button>
        </form>
      </section>

      <section id="main-content" className="flex flex-col lg:flex-row gap-6">
        <aside
          id="filters-section"
          className="bg-white shadow p-6 rounded-lg w-full lg:w-1/3"
        >
          <h2 className="text-xl mb-4">Filters</h2>
          <div className="filter-group mb-6">
            <h3 className="text-lg mb-2">Type</h3>
            <label className="block">
              <input type="checkbox" value="Job" className="mr-2" /> Job
            </label>
            <label className="block">
              <input type="checkbox" value="Hackathon" className="mr-2" />{" "}
              Hackathon
            </label>
          </div>
          <div className="filter-group mb-6">
            <h3 className="text-lg mb-2">Directions</h3>
            <label className="block">
              <input type="checkbox" value="Backend" className="mr-2" /> Backend
            </label>
            <label className="block">
              <input type="checkbox" value="Frontend" className="mr-2" />{" "}
              Frontend
            </label>
            <label className="block">
              <input type="checkbox" value="ML" className="mr-2" /> ML
            </label>
            <label className="block">
              <input type="checkbox" value="UX/UI" className="mr-2" /> UX/UI
            </label>
            <label className="block">
              <input
                type="checkbox"
                value="Business analytics"
                className="mr-2"
              />{" "}
              Business analytics
            </label>
            <label className="block">
              <input type="checkbox" value="GameDev" className="mr-2" /> GameDev
            </label>
          </div>
          <div className="filter-group">
            <h3 className="text-lg mb-2">Stack</h3>
            <label className="block">
              <input type="checkbox" value="Python" className="mr-2" /> Python
            </label>
            <label className="block">
              <input type="checkbox" value="Java" className="mr-2" /> Java
            </label>
            <label className="block">
              <input type="checkbox" value="C++" className="mr-2" /> C++
            </label>
            <label className="block">
              <input type="checkbox" value="C" className="mr-2" /> C
            </label>
            <label className="block">
              <input type="checkbox" value="C#" className="mr-2" /> C#
            </label>
            <label className="block">
              <input type="checkbox" value="Go" className="mr-2" /> Go
            </label>
            <label className="block">
              <input type="checkbox" value="HTML/CSS" className="mr-2" />{" "}
              HTML/CSS
            </label>
            <label className="block">
              <input type="checkbox" value="Flutter" className="mr-2" /> Flutter
            </label>
            <label className="block">
              <input type="checkbox" value="Swift" className="mr-2" /> Swift
            </label>
            <label className="block">
              <input type="checkbox" value="Kotlin" className="mr-2" /> Kotlin
            </label>
          </div>
        </aside>

        <section
          id="jobs-section"
          className="bg-white shadow p-6 rounded-lg flex-grow"
        >
          <h2 className="text-xl mb-4">Job Listings</h2>
          <div id="jobs-list">
            {filterPosts(filterType).map((post) => (
              <div
                key={post.id}
                className="job-item p-4 border-b flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg mb-2">{post.name}</h3>
                  <p className="text-gray-600 mb-2">{post.type}</p>
                </div>
                <div>
                  <Link href={"/events/" + post.id}>
                    <button className="p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mr-4">
                      Apply
                    </button>
                  </Link>
                  <span className="favorite-icon text-2xl text-gray-400 hover:text-red-600 cursor-pointer">
                    &#9825;
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button
            id="view-more-btn"
            className="w-full mt-4 p-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            View More
          </button>
        </section>
      </section>
    </div>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const posts: Post[] | undefined = tempDB;
  if (!posts) {
    return { props: { posts: null } };
  }

  return { props: { posts } };
}
