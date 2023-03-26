import React from "react";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-red-300">
      <DocumentMagnifyingGlassIcon className="h-24 w-24 md:h-64 md:w-64 text-indigo-600/20 " />
      <h1 className="hidden md:inline text-3xl mt-2 text-black font-bold mb-5 text-center">
        welcome to the amazon w s
      </h1>
    </div>
  );
};

export default Sidebar;
