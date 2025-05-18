import { Button } from "@/components/ui/button";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradientto-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-4">
          Find the Best Courses for You
        </h1>
        <p className="text-gray-200 dark:text-gray-400 mb-8">
          Discover, Learn, and Upskill with our wide range of courses
        </p>
        <form
          action=""
          className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6"
        >
          <input
            type="text"
            placeholder="Search for courses, topics, or instructors"
            className="w-full flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-900 dark:text-gray-200 bg-transparent placeholder:text-gray-500"
          />
          <Button className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-r-full hover:bg-blue-700 dark:hover:bg-blue-800 h-full">
            Search
          </Button>
        </form>
        <Button className="bg-white dark:bg-gray-800 text-blue-600 rounded-full hover:bg-gray-200">
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
