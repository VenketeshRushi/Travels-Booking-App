"use client";
import { useState } from "react";

export default function Search() {
  const initState = {
    source: "",
    destination: "",
    date: "",
  };
  const [searchInfo, setSearchInfo] = useState(initState);

  function handlechange(event) {
    setSearchInfo({ ...searchInfo, [event.target.name]: event.target.value });
  }

  function handleclicked() {
    console.log(searchInfo);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(searchInfo);
    }
  };

  return (
    <div className="bg-hero-pattern bg-repeat-round bg-cover border-4 w-full h-[26rem] flex items-center justify-center pt-8">
      <div className="flex flex-row divide-x-2 flex-wrap">
        <input
          className="placeholder-gray-700 capitalize focus:placeholder-gray-500 placeholder:pl-3 h-[46px] w-[244px] font-semibold pl-3 text-slate-800  "
          placeholder="Enter your source"
          type="text"
          name="source"
          onChange={handlechange}
        />

        <input
          className="placeholder-gray-700 capitalize focus:placeholder-gray-500 placeholder:pl-3 h-[46px] w-[244px] font-semibold pl-3 text-slate-800"
          placeholder="Enter your destination"
          type="text"
          name="destination"
          onChange={handlechange}
        />

        <input
          className="h-[46px] w-[244px]  pl-3 pr-3"
          type="date"
          name="date"
          onChange={handlechange}
        />

        <button
          onClick={handleclicked}
          onKeyDown={handleKeyDown}
          className="h-[46px] w-[144px] bg-red-500 text-white font-bold"
        >
          Search
        </button>
      </div>
    </div>
  );
}
